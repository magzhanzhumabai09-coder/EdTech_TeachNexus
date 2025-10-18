"use client";
import { useEffect, useState } from 'react';

type Class = { id: string; name: string; code: string; teacherId: string };

import { ActivityClient } from './activity-client';

export default function DashboardPage() {
  const [classes, setClasses] = useState<Class[]>([]);
  const [name, setName] = useState('Computer Science 101');
  const [code, setCode] = useState('CS101');

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/academic/classes`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((r) => r.json())
      .then((d) => setClasses(d.classes || []));
  }, []);

  async function createClass(e: React.FormEvent) {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/academic/classes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ name, code, teacherId: 'u1' }),
    });
    const data = await res.json();
    if (res.ok) setClasses((c) => [data.class, ...c]);
  }

  return (
    <main className="min-h-screen p-8 space-y-6">
      <h1 className="text-3xl font-bold">Teacher Dashboard</h1>
      <form onSubmit={createClass} className="glass rounded-xl p-4 flex gap-3 items-end">
        <div className="flex-1">
          <label className="text-sm">Class name</label>
          <input className="w-full p-2 rounded bg-white/60 dark:bg-white/10" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label className="text-sm">Code</label>
          <input className="w-40 p-2 rounded bg-white/60 dark:bg-white/10" value={code} onChange={(e) => setCode(e.target.value)} />
        </div>
        <button className="px-4 py-2 rounded bg-brand-600 text-white">Create</button>
      </form>

      <div className="grid md:grid-cols-2 gap-4">
        {classes.map((cl) => (
          <div key={cl.id} className="glass rounded-xl p-4">
            <div className="font-semibold">{cl.name}</div>
            <div className="text-sm text-gray-500">{cl.code}</div>
          </div>
        ))}
        <ActivityClient />
      </div>
    </main>
  );
}
