import { Router } from 'express';
import { getAIProvider } from '../services/aiProvider';

export const aiRouter = Router();

aiRouter.post('/assignment', async (req, res) => {
  const { topic, gradeLevel, length } = req.body as {
    topic: string;
    gradeLevel?: string;
    length?: 'short' | 'medium' | 'long';
  };
  const ai = getAIProvider();
  const result = await ai.generateAssignment({ topic, gradeLevel, length });
  res.json(result);
});

aiRouter.post('/quiz', async (req, res) => {
  const { topic, numQuestions } = req.body as { topic: string; numQuestions?: number };
  const ai = getAIProvider();
  const result = await ai.generateQuiz({ topic, numQuestions: numQuestions ?? 5 });
  res.json(result);
});

aiRouter.post('/grade', async (req, res) => {
  const { prompt, rubric } = req.body as { prompt: string; rubric?: string };
  const ai = getAIProvider();
  const result = await ai.suggestGrading({ prompt, rubric });
  res.json(result);
});

aiRouter.post('/chat', async (req, res) => {
  const { message, context } = req.body as { message: string; context?: string };
  const ai = getAIProvider();
  const result = await ai.chat({ message, context });
  res.json(result);
});
