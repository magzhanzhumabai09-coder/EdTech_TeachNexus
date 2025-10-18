import { prisma } from './index';
import bcrypt from 'bcryptjs';

async function main() {
  const demoPassword = await bcrypt.hash('demo1234', 10);

  const teacher = await prisma.user.upsert({
    where: { email: 'demo@school.edu' },
    update: {},
    create: {
      email: 'demo@school.edu',
      name: 'Demo Teacher',
      role: 'TEACHER',
      passwordHash: demoPassword,
    },
  });

  const course = await prisma.course.upsert({
    where: { id: 'seed-course-1' },
    update: {},
    create: {
      id: 'seed-course-1',
      title: 'Introduction to AI',
      description: 'Fundamentals of AI and ML',
      teacherId: teacher.id,
    },
  });

  await prisma.assignment.upsert({
    where: { id: 'seed-assignment-1' },
    update: {},
    create: {
      id: 'seed-assignment-1',
      courseId: course.id,
      title: 'Essay: History of AI',
      instructions: 'Write a 1000-word essay on the history and milestones of AI.',
    },
  });

  await prisma.exam.upsert({
    where: { id: 'seed-exam-1' },
    update: {},
    create: {
      id: 'seed-exam-1',
      courseId: course.id,
      title: 'Midterm Exam',
      date: new Date(Date.now() + 1000 * 60 * 60 * 24 * 14),
    },
  });

  await prisma.studySchedule.upsert({
    where: { id: 'seed-schedule-1' },
    update: {},
    create: {
      id: 'seed-schedule-1',
      courseId: course.id,
      topic: 'Supervised Learning',
      start: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2),
      end: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 60 * 90),
    },
  });

  console.log('Seed completed.');
}

main().finally(async () => {
  await prisma.$disconnect();
});
