"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState, useRef, useEffect } from "react";

const titleForPath = (pathname: string): string => {
  const map: Record<string, string> = {
    "/": "Dashboard",
    "/syllabus": "Syllabus",
    "/schedules": "Schedules",
    "/assignments": "Assignments",
    "/exams": "Exams & Quizzes",
    "/ai-tools": "AI Tools",
    "/analytics": "Analytics",
    "/settings": "Settings",
    "/login": "Login",
  };
  return map[pathname] ?? "TechNexus.Ai";
};

export default function Topbar() {
  const pathname = usePathname();
  const title = useMemo(() => titleForPath(pathname), [pathname]);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target as Node)) setOpen(false);
    }
    if (open) document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [open]);

  return (
    <header className="sticky top-0 z-20 border-b border-black/10 dark:border-white/10 bg-[--color-background]/80 backdrop-blur supports-[backdrop-filter]:bg-[--color-background]/60">
      <div className="flex items-center gap-3 px-4 py-3">
        <div className="md:hidden">
          <button className="btn btn-ghost px-3">☰</button>
        </div>
        <h1 className="text-base sm:text-lg font-semibold">{title}</h1>
        <div className="ml-auto flex items-center gap-2">
          <div className="hidden sm:block w-64">
            <input className="input" placeholder="Search..." />
          </div>
          <div className="relative" ref={menuRef}>
            <button className="btn btn-primary" onClick={() => setOpen((v) => !v)}>
              New
            </button>
            {open && (
              <div className="absolute right-0 mt-2 w-48 card p-2">
                <Link href="/syllabus" className="btn btn-ghost w-full justify-start" onClick={() => setOpen(false)}>
                  New syllabus
                </Link>
                <Link href="/assignments" className="btn btn-ghost w-full justify-start" onClick={() => setOpen(false)}>
                  New assignment
                </Link>
                <Link href="/exams" className="btn btn-ghost w-full justify-start" onClick={() => setOpen(false)}>
                  New quiz
                </Link>
              </div>
            )}
          </div>
          <Link href="/login" className="btn btn-ghost">Sign in</Link>
          <div className="w-8 h-8 rounded-full bg-[--color-tnx-mint] grid place-items-center text-[--color-tnx-navy] font-semibold">
            T
          </div>
        </div>
      </div>
    </header>
  );
}
