import { Router } from 'express';
import { prisma } from '@technexus/db';
import bcrypt from 'bcryptjs';
import { signJWT } from '../utils/jwt';

export const authRouter = Router();

// Demo/dev login: if DEMO_MODE=true, allow demo creds without strict checks
authRouter.post('/login', async (req, res) => {
  const { email, password } = req.body as { email: string; password: string };
  const demoMode = process.env.DEMO_MODE === 'true';

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    if (demoMode) {
      const created = await prisma.user.create({
        data: {
          email,
          name: email.split('@')[0],
          role: 'TEACHER',
          passwordHash: password ? await bcrypt.hash(password, 10) : null,
        },
      });
      const token = signJWT({ id: created.id, email: created.email, role: created.role });
      return res.json({ token, user: created });
    }
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  if (user.passwordHash) {
    const ok = await bcrypt.compare(password || '', user.passwordHash);
    if (!ok && !demoMode) return res.status(401).json({ error: 'Invalid credentials' });
  } else if (!demoMode) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = signJWT({ id: user.id, email: user.email, role: user.role });
  return res.json({ token, user });
});
