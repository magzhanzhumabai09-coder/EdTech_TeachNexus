# TechNexus.AI

A modern, full‑stack, AI‑driven EdTech platform for teachers and university staff.

## Monorepo
- apps/web: Next.js + Tailwind + NextAuth
- apps/api: Express + AI services + uploads
- packages/db: Prisma ORM (SQLite by default, PostgreSQL ready)

## Getting Started
1. Copy `.env.example` to `.env` and adjust as needed
2. Install deps:
   - npm install
3. Generate Prisma client:
   - npm run prisma:generate
4. (Optional) Push DB schema:
   - npm run db:push
5. Dev servers (API on 4000, Web on 3000):
   - npm run dev

## Demo Mode
If `DEMO_MODE=true` or no AI keys are set, AI endpoints return deterministic mock data and auth accepts demo credentials for frictionless judging.

## Deploy
- Web: Vercel
- API: Railway

