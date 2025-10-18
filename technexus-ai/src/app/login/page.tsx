"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const signIn = async () => {
    await new Promise((r) => setTimeout(r, 500));
    router.push("/");
  };

  return (
    <div className="grid place-items-center min-h-[60vh]">
      <div className="card p-6 w-full max-w-sm">
        <h2 className="text-lg font-semibold">Sign in</h2>
        <div className="mt-3 grid gap-3">
          <input className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className="input" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="btn btn-primary" onClick={signIn}>Continue</button>
        </div>
        <p className="mt-3 text-xs text-[--color-muted]">Demo only. No real auth.</p>
      </div>
    </div>
  );
}
