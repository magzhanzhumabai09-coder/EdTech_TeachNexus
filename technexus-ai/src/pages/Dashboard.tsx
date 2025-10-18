import { AcademicCapIcon, CalendarDaysIcon, CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const progressData = [
  { week: 'W1', avg: 68 },
  { week: 'W2', avg: 72 },
  { week: 'W3', avg: 74 },
  { week: 'W4', avg: 77 },
  { week: 'W5', avg: 81 },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-navy-800">Teacher Dashboard</h1>
          <p className="text-slate-600">Overview of classes, schedules, and engagement insights.</p>
        </div>
        <div className="flex gap-2">
          <button className="btn btn-secondary">Create Assignment</button>
          <button className="btn btn-primary">New Lesson</button>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="card">
          <div className="flex items-center gap-3">
            <AcademicCapIcon className="h-6 w-6 text-navy-600" />
            <div>
              <p className="text-sm text-slate-600">Active Courses</p>
              <p className="text-2xl font-semibold text-navy-800">6</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex items-center gap-3">
            <CalendarDaysIcon className="h-6 w-6 text-navy-600" />
            <div>
              <p className="text-sm text-slate-600">Upcoming Sessions</p>
              <p className="text-2xl font-semibold text-navy-800">4</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex items-center gap-3">
            <CheckCircleIcon className="h-6 w-6 text-mint-700" />
            <div>
              <p className="text-sm text-slate-600">Assignments to Grade</p>
              <p className="text-2xl font-semibold text-navy-800">12</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex items-center gap-3">
            <ExclamationTriangleIcon className="h-6 w-6 text-sky-700" />
            <div>
              <p className="text-sm text-slate-600">Pending Alerts</p>
              <p className="text-2xl font-semibold text-navy-800">3</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="card lg:col-span-2">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-navy-800">Engagement Trend</h2>
            <span className="badge">Last 5 weeks</span>
          </div>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={progressData}>
              <defs>
                <linearGradient id="avgGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#489eee" stopOpacity={0.35}/>
                  <stop offset="95%" stopColor="#489eee" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Area type="monotone" dataKey="avg" stroke="#489eee" fillOpacity={1} fill="url(#avgGradient)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="card space-y-3">
          <h2 className="font-semibold text-navy-800">AI Summary</h2>
          <ul className="text-sm text-slate-700 list-disc pl-5 space-y-2">
            <li>Grade 9 shows improved quiz performance (+7% WoW).</li>
            <li>Two students flagged for low participation; consider targeted feedback.</li>
            <li>Upcoming exam overlaps with a holiday; rescheduling suggested.</li>
          </ul>
          <button className="btn btn-secondary w-full">Regenerate Summary</button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="card">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-navy-800">Upcoming Exams</h2>
            <button className="btn btn-ghost">View all</button>
          </div>
          <ul className="space-y-3">
            <li className="flex items-center justify-between">
              <span>Algebra Midterm</span><span className="badge">Oct 26</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Biology Quiz</span><span className="badge">Oct 28</span>
            </li>
            <li className="flex items-center justify-between">
              <span>World History</span><span className="badge">Oct 31</span>
            </li>
          </ul>
        </div>
        <div className="card">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-navy-800">Assignment Status</h2>
            <button className="btn btn-ghost">View all</button>
          </div>
          <ul className="space-y-3">
            <li className="flex items-center justify-between">
              <span>Essay: Climate Change</span><span className="badge">24 submitted</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Geometry Worksheet</span><span className="badge">10 pending</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Physics Lab</span><span className="badge">Grading</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
