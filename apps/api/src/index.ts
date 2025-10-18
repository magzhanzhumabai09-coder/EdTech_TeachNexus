import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { json, urlencoded } from 'express';
import { router as authRouter } from './routes/auth.js';
import { router as aiRouter } from './routes/ai.js';
import { router as uploadRouter } from './routes/upload.js';
import { router as academicRouter } from './routes/academic.js';
import { activityLogger } from './middleware/activity.js';
import { router as activityRouter } from './routes/activity.js';

const app = express();
app.use(helmet());
app.use(cors({ origin: '*', credentials: true }));
app.use(morgan('dev'));
app.use(urlencoded({ extended: true }));
app.use(json({ limit: '2mb' }));
app.use(activityLogger);
app.use('/uploads', express.static('uploads'));

app.get('/', (_req, res) => res.json({ name: 'TechNexus.AI API', status: 'ok' }));
app.use('/auth', authRouter);
app.use('/ai', aiRouter);
app.use('/upload', uploadRouter);
app.use('/academic', academicRouter);
app.use('/activity', activityRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
