# TechNexus.Ai — Teacher Digital Assistant Platform (Prototype)

A web-based digital assistant for teachers that unifies syllabus management, scheduling, assignments, exams, analytics, and AI-powered tools. Inspired by Google Classroom, Notion, and Canva for Education.

## Quick start

```bash
cd technexus-ai
npm install
npm run dev
# open the printed local URL (e.g., http://localhost:5173)
```

To build a static bundle:

```bash
npm run build && npm run preview
```

## Features in this prototype
- **Teacher Dashboard**: Overview cards, engagement trend chart, AI summary panel.
- **Syllabus Management**: Add topics, placeholder AI-suggest button.
- **Study Schedule**: Drag-and-drop session ordering, calendar sync and AI auto-schedule placeholders.
- **Assignments & Assessments**: List with create/import actions.
- **Exams & Quizzes**: Builder entry with preview/assign placeholders.
- **AI Tools**: Lesson generator, content rewriter, feedback assistant, performance analyzer (placeholders) with working UI.
- **Monitoring & Analytics**: Bar chart of engagement metrics; export/report placeholders.

## Design
- **Palette**: navy, beige, mint, sky.
- **UI**: rounded (`rounded-2xl`), soft gradients, shadowed cards, smooth transitions.
- **Layout**: Collapsible sidebar + sticky header, modular cards.

## Tech stack
- React + TypeScript + Vite
- Tailwind CSS v3 (+ forms, typography)
- React Router v7
- Recharts, @dnd-kit for charts and drag-and-drop
- Headless UI + Heroicons

## Notes
- All buttons perform a meaningful action (navigation or placeholder modal via `alert`).
- Replace placeholder alerts with real flows, and wire API calls for AI features.

## Next steps
- Hook real AI services for syllabus suggestions, lesson generator, feedback, grading, and analytics.
- Add authentication and role-based access (teachers, students, admins).
- Implement persistence for courses, assignments, and schedules.
- Add integrity checks for exams and richer grading workflows.
