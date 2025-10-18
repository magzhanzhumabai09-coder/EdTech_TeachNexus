import { Router } from 'express';
import { z } from 'zod';
import { requireAuth } from '../middleware/auth.js';

export const router = Router();

// Demo in-memory storage until Prisma is wired
const db = {
  classes: [] as Array<{ id: string; name: string; code: string; teacherId: string }>,
  assignments: [] as Array<{ id: string; classId: string; title: string; dueDate: string }>,
  exams: [] as Array<{ id: string; classId: string; title: string; date: string }>,
};

router.get('/classes', requireAuth, (_req, res) => {
  res.json({ classes: db.classes });
});

router.post('/classes', requireAuth, (req, res) => {
  const schema = z.object({ name: z.string(), code: z.string(), teacherId: z.string().default('u1') });
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: 'Invalid payload' });
  const cls = { id: `c_${Date.now()}`, ...parsed.data };
  db.classes.push(cls);
  res.json({ class: cls });
});

router.get('/assignments', requireAuth, (_req, res) => {
  res.json({ assignments: db.assignments });
});

router.post('/assignments', requireAuth, (req, res) => {
  const schema = z.object({ classId: z.string(), title: z.string(), dueDate: z.string() });
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: 'Invalid payload' });
  const asg = { id: `a_${Date.now()}`, ...parsed.data };
  db.assignments.push(asg);
  res.json({ assignment: asg });
});

router.get('/exams', requireAuth, (_req, res) => {
  res.json({ exams: db.exams });
});

router.post('/exams', requireAuth, (req, res) => {
  const schema = z.object({ classId: z.string(), title: z.string(), date: z.string() });
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: 'Invalid payload' });
  const exam = { id: `e_${Date.now()}`, ...parsed.data };
  db.exams.push(exam);
  res.json({ exam });
});
