import Link from "next/link";

export default function Home() {
  return (
    <div className="grid gap-6">
      <div className="card card-hover p-6 gradient-surface">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-[--color-tnx-navy]">Welcome back, Teacher</h1>
            <p className="text-sm text-[--color-muted] mt-1">Here’s a quick snapshot of your classes.</p>
          </div>
          <div className="flex gap-2">
            <Link href="/ai-tools" className="btn btn-primary">Use AI Tools</Link>
            <Link href="/schedules" className="btn btn-ghost">Open Calendar</Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="card card-hover p-4">
          <div className="text-xs uppercase tracking-wide text-[--color-muted]">Upcoming exams</div>
          <div className="mt-2 text-2xl font-semibold">2 this week</div>
          <Link href="/exams" className="mt-3 inline-block text-sm hover:underline">Manage exams →</Link>
        </div>

        <div className="card card-hover p-4">
          <div className="text-xs uppercase tracking-wide text-[--color-muted]">Assignments pending</div>
          <div className="mt-2 text-2xl font-semibold">18 to grade</div>
          <Link href="/assignments" className="mt-3 inline-block text-sm hover:underline">Go to assignments →</Link>
        </div>

        <div className="card card-hover p-4">
          <div className="text-xs uppercase tracking-wide text-[--color-muted]">Attendance</div>
          <div className="mt-2 text-2xl font-semibold">94% avg</div>
          <Link href="/analytics" className="mt-3 inline-block text-sm hover:underline">View analytics →</Link>
        </div>

        <div className="card card-hover p-4">
          <div className="text-xs uppercase tracking-wide text-[--color-muted]">Engagement</div>
          <div className="mt-2 text-2xl font-semibold">+12% this week</div>
          <Link href="/analytics" className="mt-3 inline-block text-sm hover:underline">See insights →</Link>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="card p-6 xl:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">AI Summary</h2>
            <button className="btn btn-ghost">Regenerate</button>
          </div>
          <p className="mt-3 text-sm leading-6 text-[--color-muted]">
            Students show improved retention on algebraic concepts. Consider a mixed-form quiz on Friday and a
            collaborative activity next week to reinforce problem-solving.
          </p>
        </div>

        <div className="card p-6">
          <h2 className="text-lg font-semibold">Quick Actions</h2>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <Link href="/syllabus" className="btn btn-ghost">New syllabus</Link>
            <Link href="/assignments/new" className="btn btn-ghost">New assignment</Link>
            <Link href="/exams/new" className="btn btn-ghost">New quiz</Link>
            <Link href="/schedules" className="btn btn-ghost">Plan lessons</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
