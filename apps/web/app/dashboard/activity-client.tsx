"use client";
import { useEffect, useRef } from 'react';

export function ActivityClient() {
  const ref = useRef<HTMLUListElement>(null);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;
    const url = `${process.env.NEXT_PUBLIC_API_URL}/activity/stream`;
    const ev = new EventSource(`${url}?token=${token}`); // Simple demo; in prod, use header via proxy
    ev.onmessage = (msg) => {
      const li = document.createElement('li');
      li.className = 'text-xs text-gray-500';
      li.textContent = msg.data;
      ref.current?.prepend(li);
    };
    return () => ev.close();
  }, []);
  return (
    <div className="glass rounded-xl p-4">
      <div className="font-semibold mb-2">Live Activity</div>
      <ul ref={ref} className="space-y-1" />
    </div>
  );
}
