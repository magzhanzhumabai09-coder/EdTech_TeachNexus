"use client";
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('teacher@example.com');
  const [password, setPassword] = useState('password');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error || 'Login failed');
      return;
    }
    localStorage.setItem('token', data.token);
    window.location.href = '/dashboard';
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <form onSubmit={onSubmit} className="glass rounded-xl p-8 w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold">Sign in</h1>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <input className="w-full p-3 rounded bg-white/60 dark:bg-white/10" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input className="w-full p-3 rounded bg-white/60 dark:bg-white/10" value={password} type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button className="w-full p-3 rounded bg-brand-600 text-white hover:bg-brand-700">Sign in</button>
      </form>
    </main>
  );
}
