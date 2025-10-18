import { useState } from 'react'

export default function Tools() {
  const [note, setNote] = useState('Photosynthesis notes: chloroplasts, light-dependent reactions...')
  const [rewritten, setRewritten] = useState('')

  function rewrite() {
    setRewritten(`Engaging version: ${note.replace('...', ' with real-life examples and visuals.')}`)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-navy-800">AI Tools</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="card space-y-3">
          <h2 className="font-semibold text-navy-800">Lesson Generator</h2>
          <p className="text-sm text-slate-700">Create lesson plans from topics.</p>
          <div className="flex gap-2">
            <input className="input flex-1" placeholder="Topic: e.g., Pythagorean theorem" />
            <button className="btn btn-primary">Generate</button>
          </div>
        </div>
        <div className="card space-y-3">
          <h2 className="font-semibold text-navy-800">Content Rewriter</h2>
          <textarea className="input w-full" rows={5} value={note} onChange={e => setNote(e.target.value)} />
          <button className="btn btn-primary" onClick={rewrite}>Rewrite</button>
          {!!rewritten && (
            <div className="p-3 rounded-xl bg-mint-50 border border-mint-100 text-mint-800 text-sm">
              {rewritten}
            </div>
          )}
        </div>
        <div className="card space-y-3">
          <h2 className="font-semibold text-navy-800">Feedback Assistant</h2>
          <div className="flex gap-2">
            <input className="input flex-1" placeholder="Student name" />
            <button className="btn btn-secondary">Suggest Feedback</button>
          </div>
        </div>
        <div className="card space-y-3">
          <h2 className="font-semibold text-navy-800">Performance Analyzer</h2>
          <p className="text-sm text-slate-700">Analyze grades and find learning gaps.</p>
          <button className="btn btn-secondary">Run Analysis</button>
        </div>
      </div>
    </div>
  )
}
