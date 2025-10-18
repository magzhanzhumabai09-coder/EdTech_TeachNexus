import { Router } from 'express';
import { z } from 'zod';
import { requireAuth } from '../middleware/auth.js';

export const router = Router();

// Helper to detect demo mode
const isDemoMode = () => !process.env.OPENAI_API_KEY && !process.env.HF_API_KEY;

router.post('/generate-assignment', requireAuth, async (req, res) => {
  const schema = z.object({ topic: z.string(), level: z.string().default('undergrad') });
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: 'Invalid payload' });
  const { topic, level } = parsed.data;

  if (isDemoMode()) {
    return res.json({
      mode: 'demo',
      assignment: {
        title: `${topic} — ${level} Assignment`,
        description: `Create a structured report on ${topic}. Include introduction, core concepts, and applications.`,
        questions: [
          `Explain key principles of ${topic}.`,
          `Provide a real-world case study applying ${topic}.`,
          `Design a short quiz to assess understanding of ${topic}.`,
        ],
      },
    });
  }

  // Example OpenAI call (not executed in demo)
  try {
    const prompt = `Create an academic assignment on ${topic} for ${level} students with title, description, and 3 questions.`;
    const { OpenAI } = await import('openai');
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a helpful education content generator.' },
        { role: 'user', content: prompt },
      ],
      temperature: 0.7,
    });
    const text = completion.choices[0]?.message?.content || '';
    return res.json({ mode: 'live', raw: text });
  } catch (e) {
    return res.status(500).json({ error: 'AI provider error', details: `${e}` });
  }
});

router.post('/generate-quiz', requireAuth, async (req, res) => {
  const schema = z.object({ topic: z.string(), numQuestions: z.number().int().min(1).max(10).default(5) });
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: 'Invalid payload' });
  const { topic, numQuestions } = parsed.data;

  if (isDemoMode()) {
    return res.json({
      mode: 'demo',
      quiz: Array.from({ length: numQuestions }).map((_, i) => ({
        question: `Q${i + 1}. What is a key concept in ${topic}?`,
        options: ['Concept A', 'Concept B', 'Concept C', 'Concept D'],
        answerIndex: i % 4,
      })),
    });
  }

  try {
    const { OpenAI } = await import('openai');
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'Generate JSON quiz with options and answers.' },
        { role: 'user', content: `Generate ${numQuestions} MCQs on ${topic} as JSON array.` },
      ],
      temperature: 0.4,
      response_format: { type: 'json_object' } as any,
    });
    const text = completion.choices[0]?.message?.content || '{}';
    return res.json({ mode: 'live', raw: text });
  } catch (e) {
    return res.status(500).json({ error: 'AI provider error', details: `${e}` });
  }
});

router.post('/grade-suggestions', requireAuth, async (req, res) => {
  const schema = z.object({ rubric: z.string(), answer: z.string() });
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: 'Invalid payload' });
  const { rubric, answer } = parsed.data;

  if (isDemoMode()) {
    return res.json({
      mode: 'demo',
      feedback: `Based on rubric: ${rubric.substring(0, 60)}..., the answer shows strengths in clarity but needs deeper analysis. Suggested grade: B+.`,
    });
  }

  try {
    const { OpenAI } = await import('openai');
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'Provide concise grading suggestions.' },
        { role: 'user', content: `Rubric: ${rubric}\nAnswer: ${answer}` },
      ],
      temperature: 0.2,
    });
    const text = completion.choices[0]?.message?.content || '';
    return res.json({ mode: 'live', raw: text });
  } catch (e) {
    return res.status(500).json({ error: 'AI provider error', details: `${e}` });
  }
});
