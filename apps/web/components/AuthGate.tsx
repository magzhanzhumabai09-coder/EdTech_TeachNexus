"use client";
import { useSession, signIn, signOut } from 'next-auth/react';
import { ReactNode, useEffect } from 'react';

export function AuthGate({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession();

  useEffect(() => {
    const accessToken = (session as any)?.accessToken as string | undefined;
    if (accessToken) localStorage.setItem('token', accessToken);
  }, [session]);

  if (status === 'loading') return <div className="opacity-70">Loading...</div>;

  if (!session) {
    return (
      <div className="glass p-4 rounded-xl text-center">
        <p className="mb-3">Please sign in to continue.</p>
        <button className="px-3 py-2 rounded bg-brand-600 text-white" onClick={() => signIn()}>Sign In</button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between mb-4 items-center">
        <div className="text-sm opacity-80">Signed in as {session.user?.email}</div>
        <button className="px-3 py-2 rounded bg-gray-200 dark:bg-gray-700" onClick={() => signOut()}>Sign Out</button>
      </div>
      {children}
    </div>
  );
}
