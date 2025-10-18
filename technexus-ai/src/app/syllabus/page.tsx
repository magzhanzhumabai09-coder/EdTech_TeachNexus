"use client";

import { useState } from "react";
import { courses } from "@/lib/mock";

export default function SyllabusPage() {
  const [open, setOpen] = useState(false);
  const [prompt, setPrompt] = useState("Algebra I semester plan focusing on problem-solving and assessments.");
  const [output, setOutput] = useState<string | null>(null);

  const generate = async () => {
    setOutput("Generating with AI...");
    // Placeholder for real AI call
    await new Promise((r) => setTimeout(r, 600));
    setOutput(
      "Week 1: Fundamentals and diagnostic. Week 2: Linear equations. Week 3: Quadratics. Week 4: Factoring..."
    );
  };

  return (
    <div className="grid gap-6">
      <div className="card p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Syllabus</h2>
          <button className="btn btn-primary" onClick={() => setOpen(true)}>AI Generator</button>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {courses.map((c) => (
            <div key={c.id} className="card p-4">
              <div className="text-sm font-medium">{c.name}</div>
              <div className="text-xs text-[--color-muted]">{c.code} • {c.students} students</div>
              <div className="mt-3 flex gap-2">
                <button className="btn btn-ghost">Edit</button>
                <button className="btn btn-ghost">Share</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4" onClick={() => setOpen(false)}>
          <div className="card w-full max-w-2xl p-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">AI-assisted syllabus generator</h3>
              <button className="btn btn-ghost" onClick={() => setOpen(false)}>Close</button>
            </div>
            <textarea className="input min-h-32" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
            <div className="mt-2 flex items-center gap-2">
              <button className="btn btn-primary" onClick={generate}>Generate</button>
              <button className="btn btn-ghost" onClick={() => setOutput(null)}>Clear</button>
            </div>
            {output && <pre className="mt-3 text-sm whitespace-pre-wrap">{output}</pre>}
          </div>
        </div>
      )}
    </div>
  );
}
