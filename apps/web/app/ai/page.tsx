"use client";
import { useState } from 'react';

export default function AIPage() {
  const [topic, setTopic] = useState('Data Structures');
  const [assignment, setAssignment] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  async function generate() {
    setError(null);
    setAssignment(null);
    const token = localStorage.getItem('token');
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ai/generate-assignment`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ topic }),
    });
    const data = await res.json();
    if (!res.ok) return setError(data.error || 'Failed');
    setAssignment(data.assignment || data.raw);
  }

  return (
    <main className="min-h-screen p-8 space-y-6">
      <h1 className="text-3xl font-bold">AI Teaching Assistant</h1>
      <div className="glass rounded-xl p-4 flex gap-3 items-end">
        <div className="flex-1">
          <label className="text-sm">Topic</label>
          <input className="w-full p-2 rounded bg-white/60 dark:bg-white/10" value={topic} onChange={(e) => setTopic(e.target.value)} />
        </div>
        <button onClick={generate} className="px-4 py-2 rounded bg-brand-600 text-white">Generate</button>
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {assignment && (
        <div className="glass rounded-xl p-4">
          <pre className="whitespace-pre-wrap text-sm">{JSON.stringify(assignment, null, 2)}</pre>
        </div>
      )}
    </main>
  );
}
