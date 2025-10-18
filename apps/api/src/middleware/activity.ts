import type { Request, Response, NextFunction } from 'express';

export const activityLogger = (req: Request, _res: Response, next: NextFunction) => {
  // In a later step, persist this to Prisma Logs
  (req as any).activity = {
    method: req.method,
    path: req.path,
    ip: req.ip,
    userAgent: req.headers['user-agent'],
    at: new Date().toISOString(),
  };
  next();
};
