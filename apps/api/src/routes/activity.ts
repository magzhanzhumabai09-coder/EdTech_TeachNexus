import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';

export const router = Router();

// Simple in-memory event stream for demo
const listeners = new Set<(event: any) => void>();

router.get('/stream', (req, res) => {
  // Accept token via query for EventSource (since browsers disallow custom headers)
  const token = (req.query.token as string | undefined)?.split(' ')[0];
  if (!token) return res.status(401).end();
  try {
    // lightweight verification
    requireAuth({ ...req, headers: { ...req.headers, authorization: `Bearer ${token}` } } as any, res as any, () => {});
  } catch {
    return res.status(401).end();
  }
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders?.();

  const push = (event: any) => {
    res.write(`data: ${JSON.stringify(event)}\n\n`);
  };
  listeners.add(push);

  req.on('close', () => {
    listeners.delete(push);
  });
});

router.post('/log', requireAuth, (req, res) => {
  const event = { ...((req as any).activity || {}), userId: (req as any).user?.sub };
  for (const l of listeners) l(event);
  res.json({ ok: true });
});
