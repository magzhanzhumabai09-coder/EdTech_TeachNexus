"use client";
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);
  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const initial = localStorage.getItem('theme') || (mq.matches ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', initial === 'dark');
    setDark(initial === 'dark');
  }, []);
  if (!mounted) return null;
  return (
    <button
      className="px-3 py-1 rounded glass"
      onClick={() => {
        const next = !dark;
        setDark(next);
        localStorage.setItem('theme', next ? 'dark' : 'light');
        document.documentElement.classList.toggle('dark', next);
      }}
    >
      {dark ? '🌙' : '☀️'}
    </button>
  );
}
