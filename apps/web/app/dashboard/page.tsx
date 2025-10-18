"use client";
import { useEffect, useMemo, useState } from 'react';
import { AuthGate } from '../../components/AuthGate';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const API_URL = process.env.API_URL || 'http://localhost:4000';

export default function DashboardPage() {
  const [courses, setCourses] = useState<any[]>([]);
  const [activity, setActivity] = useState<any[]>([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;
    fetch(`${API_URL}/courses`, { headers: { Authorization: `Bearer ${token}` } })
      .then((r) => r.json())
      .then((d) => setCourses(d.courses || []));
    fetch(`${API_URL}/activity/recent`, { headers: { Authorization: `Bearer ${token}` } })
      .then((r) => r.json())
      .then((d) => setActivity(d.recent || []));
  }, []);

  const data = useMemo(() => {
    return courses.map((c) => ({ name: c.title, assignments: c.assignments.length, exams: c.exams.length }));
  }, [courses]);

  return (
    <AuthGate>
      <div className="grid gap-6">
      <div className="glass p-4 rounded-xl">
        <h2 className="font-semibold mb-2">Courses Overview</h2>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={data}>
            <XAxis dataKey="name" hide={data.length > 4} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="assignments" fill="#60a5fa" />
            <Bar dataKey="exams" fill="#34d399" />
          </BarChart>
        </ResponsiveContainer>
      </div>

        <AuthPanel />

        <div className="glass p-4 rounded-xl">
          <h2 className="font-semibold mb-2">Recent Activity</h2>
          <div className="max-h-64 overflow-auto text-sm">
            <table className="w-full">
              <thead>
                <tr className="text-left opacity-70">
                  <th>Time</th>
                  <th>Method</th>
                  <th>Route</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {activity.map((a: any) => (
                  <tr key={a.id} className="border-t border-white/10">
                    <td>{new Date(a.createdAt).toLocaleString()}</td>
                    <td>{a.method}</td>
                    <td className="truncate max-w-[240px]">{a.route}</td>
                    <td>{a.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AuthGate>
  );
}

function AuthPanel() {
  const [email, setEmail] = useState('demo@school.edu');
  const [password, setPassword] = useState('demo1234');
  const [user, setUser] = useState<any>(null);

  return (
    <div className="glass p-4 rounded-xl">
      <h2 className="font-semibold mb-2">Auth (Demo Mode)</h2>
      <div className="flex gap-2 mb-2">
        <input className="flex-1 p-2 rounded bg-white/60 dark:bg-black/40" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input className="flex-1 p-2 rounded bg-white/60 dark:bg-black/40" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
        <button
          className="px-3 py-2 rounded bg-brand-600 text-white"
          onClick={async () => {
            const res = await fetch(`${API_URL}/auth/login`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email, password }),
            });
            const data = await res.json();
            if (data.token) {
              localStorage.setItem('token', data.token);
              setUser(data.user);
            }
          }}
        >
          Login
        </button>
      </div>
      {user && (
        <div className="text-sm opacity-80">Logged in as {user.email}</div>
      )}
    </div>
  );
}
