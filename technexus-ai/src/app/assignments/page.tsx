"use client";

import { useState } from "react";
import { assignments, courses } from "@/lib/mock";

export default function AssignmentsPage() {
  const [items, setItems] = useState(assignments);
  const [feedback, setFeedback] = useState<string | null>(null);

  const gradeWithAI = async (id: string) => {
    setFeedback("Running AI grading and plagiarism checks...");
    await new Promise((r) => setTimeout(r, 800));
    setFeedback("Suggested grades ready. 2 potential plagiarism flags detected. Review recommended.");
  };

  return (
    <div className="grid gap-6">
      <div className="card p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Assignments</h2>
          <button className="btn btn-primary" onClick={() => setItems((prev) => [{ id: Date.now()+"", title: "New assignment", courseId: courses[0].id, dueDate: "2025-11-01", submissions: 0 }, ...prev])}>New assignment</button>
        </div>
        <div className="mt-4 grid gap-3">
          {items.map((a) => (
            <div key={a.id} className="card p-4 flex items-center justify-between">
              <div>
                <div className="font-medium">{a.title}</div>
                <div className="text-xs text-[--color-muted]">Due {a.dueDate} • {a.submissions} submissions</div>
              </div>
              <div className="flex gap-2">
                <button className="btn btn-ghost" onClick={() => gradeWithAI(a.id)}>AI grade</button>
                <button className="btn btn-ghost">Open</button>
              </div>
            </div>
          ))}
        </div>
        {feedback && <div className="mt-3 text-sm text-[--color-muted]">{feedback}</div>}
      </div>
    </div>
  );
}
