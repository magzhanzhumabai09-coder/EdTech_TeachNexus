import { useState } from 'react'

export default function Assignments() {
  const [assignments, setAssignments] = useState([
    { id: 1, title: 'Essay: Climate Change', status: 'Grading' },
    { id: 2, title: 'Geometry Worksheet', status: 'Pending' },
  ])

  function createAssignment() {
    setAssignments(prev => [...prev, { id: Date.now(), title: 'New Assignment', status: 'Draft' }])
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-navy-800">Assignments</h1>
        <div className="flex gap-2">
          <button className="btn btn-secondary">Import</button>
          <button className="btn btn-primary" onClick={createAssignment}>Create</button>
        </div>
      </div>

      <div className="card">
        <ul className="divide-y divide-slate-200">
          {assignments.map(a => (
            <li key={a.id} className="py-3 flex items-center justify-between">
              <span>{a.title}</span>
              <span className="badge">{a.status}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
