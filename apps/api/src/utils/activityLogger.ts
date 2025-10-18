import type { Request, Response, NextFunction } from 'express';
import { prisma } from '@technexus/db';

export async function activityLogger(req: Request, res: Response, next: NextFunction) {
  const start = Date.now();
  res.on('finish', async () => {
    try {
      const duration = Date.now() - start;
      const userId = (req as any).user?.id as string | undefined;
      await prisma.activityLog.create({
        data: {
          userId: userId || null,
          route: req.originalUrl,
          method: req.method,
          ip: req.ip,
          userAgent: req.headers['user-agent'] || null,
          status: res.statusCode,
          durationMs: duration,
          metadata:
            req.body && Object.keys(req.body).length
              ? JSON.stringify({ bodyKeys: Object.keys(req.body) })
              : undefined,
        },
      });
    } catch (err) {
      // avoid throwing from logger
    }
  });
  next();
}
