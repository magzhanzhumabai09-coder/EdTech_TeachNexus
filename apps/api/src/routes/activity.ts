import { Router } from 'express';
import { prisma } from '@technexus/db';

export const activityRouter = Router();

activityRouter.get('/recent', async (req, res) => {
  const userId = (req as any).user?.id as string;
  const recent = await prisma.activityLog.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
    take: 50,
  });
  res.json({ recent });
});
