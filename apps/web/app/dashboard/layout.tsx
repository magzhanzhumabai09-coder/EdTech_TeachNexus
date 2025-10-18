"use client";
import { useEffect, useState } from 'react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [authed, setAuthed] = useState<boolean | null>(null);
  useEffect(() => {
    const token = localStorage.getItem('token');
    setAuthed(!!token);
    if (!token) window.location.href = '/(auth)/login';
  }, []);
  if (authed === null) return null;
  return <>{children}</>;
}
