"use client";

import { useMemo } from "react";
import { assignments, exams } from "@/lib/mock";

export default function AnalyticsPage() {
  const totals = useMemo(() => ({
    assignments: assignments.length,
    exams: exams.length,
    engagement: 0.72,
  }), []);

  return (
    <div className="grid gap-6">
      <div className="card p-6">
        <h2 className="text-lg font-semibold">Performance Overview</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card p-4">
            <div className="text-xs uppercase text-[--color-muted]">Assignments</div>
            <div className="text-2xl font-semibold">{totals.assignments}</div>
          </div>
          <div className="card p-4">
            <div className="text-xs uppercase text-[--color-muted]">Exams</div>
            <div className="text-2xl font-semibold">{totals.exams}</div>
          </div>
          <div className="card p-4">
            <div className="text-xs uppercase text-[--color-muted]">Engagement</div>
            <div className="text-2xl font-semibold">{Math.round(totals.engagement * 100)}%</div>
          </div>
        </div>
        <div className="mt-6">
          <div className="h-40 card p-4 gradient-surface">
            <div className="text-sm text-[--color-muted]">Chart placeholder</div>
          </div>
        </div>
      </div>
    </div>
  );
}
