"use client";

import { useState } from "react";

export default function AiToolsPage() {
  const [lesson, setLesson] = useState("");
  const [feedback, setFeedback] = useState("");
  const [analysis, setAnalysis] = useState("");
  const [rewrite, setRewrite] = useState("");

  const mock = async (setter: (s: string) => void, text: string) => {
    setter("Thinking...");
    await new Promise((r) => setTimeout(r, 700));
    setter(text);
  };

  return (
    <div className="grid gap-6">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="card p-4">
          <h3 className="font-semibold">Lesson Generator</h3>
          <textarea className="input min-h-28" placeholder="Topic, objectives, constraints..." />
          <button className="btn btn-primary mt-2" onClick={() => mock(setLesson, "Generated lesson outline with activities and timings.")}>Generate</button>
          {lesson && <p className="mt-2 text-sm text-[--color-muted]">{lesson}</p>}
        </div>
        <div className="card p-4">
          <h3 className="font-semibold">Feedback Assistant</h3>
          <textarea className="input min-h-28" placeholder="Student work or notes..." />
          <button className="btn btn-primary mt-2" onClick={() => mock(setFeedback, "Personalized feedback emphasizing strengths and next steps.")}>Suggest</button>
          {feedback && <p className="mt-2 text-sm text-[--color-muted]">{feedback}</p>}
        </div>
        <div className="card p-4">
          <h3 className="font-semibold">Performance Analyzer</h3>
          <textarea className="input min-h-28" placeholder="Paste anonymized student metrics..." />
          <button className="btn btn-primary mt-2" onClick={() => mock(setAnalysis, "Identified gaps in quadratic factorization and lab report structure.")}>Analyze</button>
          {analysis && <p className="mt-2 text-sm text-[--color-muted]">{analysis}</p>}
        </div>
        <div className="card p-4">
          <h3 className="font-semibold">Content Rewriter</h3>
          <textarea className="input min-h-28" placeholder="Paste notes to rephrase for students..." />
          <button className="btn btn-primary mt-2" onClick={() => mock(setRewrite, "Rewritten content with simpler language and examples.")}>Rewrite</button>
          {rewrite && <p className="mt-2 text-sm text-[--color-muted]">{rewrite}</p>}
        </div>
      </div>
    </div>
  );
}
