import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { z } from 'zod';

export const router = Router();

const users: Array<{ id: string; email: string; passwordHash: string; role: 'teacher' | 'admin' }> = [
  {
    id: 'u1',
    email: 'teacher@example.com',
    passwordHash: bcrypt.hashSync('password', 10),
    role: 'teacher',
  },
];

const Credentials = z.object({ email: z.string().email(), password: z.string().min(4) });

router.post('/login', (req, res) => {
  const parsed = Credentials.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: 'Invalid credentials' });
  const { email, password } = parsed.data;
  const user = users.find((u) => u.email === email);
  if (!user || !bcrypt.compareSync(password, user.passwordHash)) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }
  const token = jwt.sign(
    { sub: user.id, role: user.role, email: user.email },
    process.env.JWT_SECRET || 'dev-secret',
    { expiresIn: '12h' },
  );
  return res.json({ token, user: { id: user.id, email: user.email, role: user.role } });
});

router.get('/me', (req, res) => {
  const auth = req.headers.authorization?.split(' ')[1];
  if (!auth) return res.status(401).json({ error: 'Missing token' });
  try {
    const payload = jwt.verify(auth, process.env.JWT_SECRET || 'dev-secret');
    res.json({ user: payload });
  } catch (e) {
    res.status(401).json({ error: 'Invalid token' });
  }
});
