import OpenAI from 'openai';

const useMock = process.env.DEMO_MODE === 'true' || (!process.env.OPENAI_API_KEY && !process.env.HUGGINGFACE_API_KEY);

export interface AIProvider {
  generateAssignment(args: { topic: string; gradeLevel?: string; length?: 'short' | 'medium' | 'long' }): Promise<{ title: string; instructions: string }>;
  generateQuiz(args: { topic: string; numQuestions: number }): Promise<{ questions: Array<{ q: string; a: string[]; correctIndex: number }> }>;
  suggestGrading(args: { prompt: string; rubric?: string }): Promise<{ feedback: string; scoreSuggestion: number }>;
  chat(args: { message: string; context?: string }): Promise<{ reply: string }>;
}

class MockAI implements AIProvider {
  async generateAssignment({ topic, gradeLevel, length }: { topic: string; gradeLevel?: string; length?: 'short' | 'medium' | 'long' }) {
    return {
      title: `${topic} Assignment (${gradeLevel ?? 'General'})`,
      instructions: `Write a ${length ?? 'medium'} essay about ${topic}. Include examples and references.`,
    };
  }
  async generateQuiz({ topic, numQuestions }: { topic: string; numQuestions: number }) {
    return {
      questions: Array.from({ length: numQuestions }).map((_, i) => ({
        q: `Q${i + 1}. Which statement about ${topic} is correct?`,
        a: [
          `${topic} is option A`,
          `${topic} is option B`,
          `${topic} is option C`,
          `${topic} is option D`,
        ],
        correctIndex: i % 4,
      })),
    };
  }
  async suggestGrading({ prompt }: { prompt: string; rubric?: string }) {
    const len = Math.min(100, Math.max(10, prompt.length % 100));
    return { feedback: `Constructive feedback for submission: ${prompt.slice(0, 60)}...`, scoreSuggestion: Math.round((len / 100) * 10) };
  }
  async chat({ message, context }: { message: string; context?: string }) {
    return { reply: `Demo Assistant: You said "${message}"${context ? ` (context: ${context})` : ''}.` };
  }
}

class OpenAIProvider implements AIProvider {
  private client: OpenAI;
  constructor() {
    this.client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }
  async generateAssignment({ topic, gradeLevel, length }: { topic: string; gradeLevel?: string; length?: 'short' | 'medium' | 'long' }) {
    const prompt = `Create an assignment about ${topic} for ${gradeLevel ?? 'general'} students. Length: ${length ?? 'medium'}. Return title and instructions.`;
    const completion = await this.client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
    });
    const text = completion.choices[0]?.message?.content ?? 'Assignment';
    return { title: `Assignment: ${topic}`, instructions: text };
  }
  async generateQuiz({ topic, numQuestions }: { topic: string; numQuestions: number }) {
    const prompt = `Generate ${numQuestions} multiple-choice questions about ${topic} with 4 options and indicate correct index.`;
    const completion = await this.client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
    });
    const text = completion.choices[0]?.message?.content ?? '';
    // In production parse JSON; for brevity produce mock-like shape
    return new MockAI().generateQuiz({ topic, numQuestions });
  }
  async suggestGrading({ prompt, rubric }: { prompt: string; rubric?: string }) {
    const completion = await this.client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a grading assistant.' },
        { role: 'user', content: `Submission: ${prompt}\nRubric: ${rubric ?? 'standard'}\nReturn feedback and score 0-10.` },
      ],
    });
    const text = completion.choices[0]?.message?.content ?? '';
    return { feedback: text || 'Feedback unavailable', scoreSuggestion: 7 };
  }
  async chat({ message, context }: { message: string; context?: string }) {
    const completion = await this.client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a helpful teaching assistant.' },
        { role: 'user', content: context ? `${context}\n\n${message}` : message },
      ],
    });
    const text = completion.choices[0]?.message?.content ?? '';
    return { reply: text };
  }
}

export function getAIProvider(): AIProvider {
  if (useMock) return new MockAI();
  if (process.env.OPENAI_API_KEY) return new OpenAIProvider();
  return new MockAI();
}
