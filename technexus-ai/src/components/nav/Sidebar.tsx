"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Dashboard" },
  { href: "/syllabus", label: "Syllabus" },
  { href: "/schedules", label: "Schedules" },
  { href: "/assignments", label: "Assignments" },
  { href: "/exams", label: "Exams" },
  { href: "/ai-tools", label: "AI Tools" },
  { href: "/analytics", label: "Analytics" },
  { href: "/settings", label: "Settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col gap-2 border-r border-black/10 dark:border-white/10 p-4 bg-[--color-tnx-beige]">
      <div className="px-2 py-3">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl gradient-brand" />
          <div>
            <div className="text-sm font-semibold">TechNexus.Ai</div>
            <div className="text-[10px] text-[--color-muted]">Teacher Platform</div>
          </div>
        </Link>
      </div>
      <nav className="mt-2 grid gap-1">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`btn justify-start ${active ? "bg-black/5 dark:bg-white/10" : "btn-ghost"}`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
