import { Router } from 'express';
import { prisma } from '@technexus/db';

export const courseRouter = Router();

courseRouter.get('/', async (req, res) => {
  const userId = (req as any).user?.id as string;
  const courses = await prisma.course.findMany({
    where: { teacherId: userId },
    include: {
      assignments: true,
      exams: true,
      schedules: true,
      enrollments: true,
    },
  });
  res.json({ courses });
});

courseRouter.post('/', async (req, res) => {
  const userId = (req as any).user?.id as string;
  const { title, description } = req.body as { title: string; description?: string };
  const course = await prisma.course.create({ data: { title, description, teacherId: userId } });
  res.json({ course });
});

courseRouter.post('/:courseId/assignments', async (req, res) => {
  const { courseId } = req.params as { courseId: string };
  const { title, instructions, dueDate } = req.body as {
    title: string;
    instructions?: string;
    dueDate?: string;
  };
  const assignment = await prisma.assignment.create({
    data: {
      courseId,
      title,
      instructions,
      dueDate: dueDate ? new Date(dueDate) : null,
    },
  });
  res.json({ assignment });
});

courseRouter.post('/:courseId/exams', async (req, res) => {
  const { courseId } = req.params as { courseId: string };
  const { title, date } = req.body as { title: string; date: string };
  const exam = await prisma.exam.create({ data: { courseId, title, date: new Date(date) } });
  res.json({ exam });
});

courseRouter.post('/:courseId/schedules', async (req, res) => {
  const { courseId } = req.params as { courseId: string };
  const { topic, start, end } = req.body as { topic: string; start: string; end: string };
  const schedule = await prisma.studySchedule.create({
    data: { courseId, topic, start: new Date(start), end: new Date(end) },
  });
  res.json({ schedule });
});
