import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

const data = [
  { name: 'Login', value: 85 },
  { name: 'Submissions', value: 62 },
  { name: 'Engagement', value: 74 },
  { name: 'Completion', value: 68 },
]

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-navy-800">Monitoring & Analytics</h1>
        <div className="flex gap-2">
          <button className="btn btn-secondary">Export</button>
          <button className="btn btn-primary">Generate Report</button>
        </div>
      </div>

      <div className="card">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-navy-800">Engagement Metrics</h2>
          <span className="badge">This month</span>
        </div>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Bar dataKey="value" fill="#33b592" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
