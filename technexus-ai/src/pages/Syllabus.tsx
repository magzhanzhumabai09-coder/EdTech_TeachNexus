import { useState } from 'react'

export default function Syllabus() {
  const [topics, setTopics] = useState<string[]>(['Intro to Algebra', 'Linear Equations', 'Quadratic Functions'])
  const [newTopic, setNewTopic] = useState('')

  function addTopic() {
    if (!newTopic.trim()) return
    setTopics(prev => [...prev, newTopic.trim()])
    setNewTopic('')
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-navy-800">Syllabus</h1>
        <div className="flex gap-2">
          <button className="btn btn-secondary">Share</button>
          <button className="btn btn-primary">New Version</button>
        </div>
      </div>

      <div className="card space-y-4">
        <div className="flex gap-2">
          <input value={newTopic} onChange={e => setNewTopic(e.target.value)} placeholder="Add topic..." className="input flex-1" />
          <button className="btn btn-primary" onClick={addTopic}>Add</button>
          <button className="btn btn-secondary" onClick={() => alert('AI suggests topics (placeholder)')}>AI Suggest</button>
        </div>
        <ul className="space-y-2">
          {topics.map((t, i) => (
            <li key={i} className="flex items-center justify-between">
              <span>{t}</span>
              <span className="text-xs text-slate-500">~ 45 mins</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
