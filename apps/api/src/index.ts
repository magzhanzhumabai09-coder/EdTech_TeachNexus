import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { prisma } from '@technexus/db';
import { authRouter } from './routes/auth';
import { courseRouter } from './routes/courses';
import { aiRouter } from './routes/ai';
import { activityRouter } from './routes/activity';
import { verifyJWT } from './utils/jwt';
import { activityLogger } from './utils/activityLogger';

const app = express();

app.use(helmet());
app.use(cors({ origin: '*', credentials: true }));
app.use(express.json({ limit: '2mb' }));

const limiter = rateLimit({ windowMs: 60_000, max: 120 });
app.use(limiter);

app.use(activityLogger);

app.use('/auth', authRouter);

app.use('/ai', verifyJWT, aiRouter);
app.use('/courses', verifyJWT, courseRouter);
app.use('/activity', verifyJWT, activityRouter);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadsDir = path.join(__dirname, '../uploads');
fs.mkdirSync(uploadsDir, { recursive: true });
const upload = multer({ dest: uploadsDir });

// Cast multer middleware to any to avoid type resolution conflicts across transitive @types
app.post('/upload', verifyJWT as any, (upload.single('file') as any), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  const userId = (req as any).user?.id as string | undefined;

  const asset = await prisma.fileAsset.create({
    data: {
      userId,
      courseId: req.body.courseId || null,
      filename: req.file.filename,
      originalName: req.file.originalname,
      mimeType: req.file.mimetype,
      size: req.file.size,
      path: req.file.path,
    },
  });

  res.json({ ok: true, file: asset });
});

app.get('/health', (_req, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
