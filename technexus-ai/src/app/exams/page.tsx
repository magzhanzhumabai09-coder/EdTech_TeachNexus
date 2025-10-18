"use client";

import { useState } from "react";
import { exams, courses } from "@/lib/mock";

export default function ExamsPage() {
  const [items, setItems] = useState(exams);

  const add = () => {
    setItems((prev) => [
      { id: Date.now()+"", title: "New quiz", courseId: courses[0].id, date: "2025-11-05" },
      ...prev,
    ]);
  };

  return (
    <div className="grid gap-6">
      <div className="card p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Exams & Quizzes</h2>
          <button className="btn btn-primary" onClick={add}>New quiz</button>
        </div>
        <div className="mt-4 grid gap-3">
          {items.map((e) => (
            <div key={e.id} className="card p-4 flex items-center justify-between">
              <div>
                <div className="font-medium">{e.title}</div>
                <div className="text-xs text-[--color-muted]">{e.date}</div>
              </div>
              <div className="flex gap-2">
                <button className="btn btn-ghost">Build</button>
                <button className="btn btn-ghost">Analytics</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
