"use client";
import { useState } from 'react';

const API_URL = process.env.API_URL || 'http://localhost:4000';

export default function AIPage() {
  const [topic, setTopic] = useState('Linear Algebra');
  const [assignment, setAssignment] = useState<any>(null);
  const [quiz, setQuiz] = useState<any>(null);
  const [chatMessage, setChatMessage] = useState('How do I teach eigenvalues?');
  const [chatReply, setChatReply] = useState('');

  const call = async (path: string, body: any) => {
    const token = localStorage.getItem('token');
    const res = await fetch(`${API_URL}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: token ? `Bearer ${token}` : '' },
      body: JSON.stringify(body),
    });
    return res.json();
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="glass p-4 rounded-xl">
        <h2 className="font-semibold mb-2">Assignment Generator</h2>
        <input className="w-full p-2 rounded bg-white/60 dark:bg-black/40 mb-2" value={topic} onChange={(e) => setTopic(e.target.value)} />
        <button className="px-3 py-2 rounded bg-brand-600 text-white" onClick={async () => setAssignment(await call('/ai/assignment', { topic }))}>Generate</button>
        {assignment && (
          <div className="mt-3"><h3 className="font-semibold">{assignment.title}</h3><p className="opacity-80 whitespace-pre-wrap">{assignment.instructions}</p></div>
        )}
      </div>

      <div className="glass p-4 rounded-xl">
        <h2 className="font-semibold mb-2">Quiz Creator</h2>
        <button className="px-3 py-2 rounded bg-brand-600 text-white" onClick={async () => setQuiz(await call('/ai/quiz', { topic, numQuestions: 5 }))}>Generate 5 Questions</button>
        {quiz && (
          <ol className="mt-3 list-decimal ml-5 space-y-2">
            {quiz.questions.map((q: any, idx: number) => (
              <li key={idx}>
                <div className="font-medium">{q.q}</div>
                <ul className="list-disc ml-5">
                  {q.a.map((opt: string, i: number) => (
                    <li key={i} className={i === q.correctIndex ? 'text-green-600' : ''}>{opt}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        )}
      </div>

      <div className="glass p-4 rounded-xl md:col-span-2">
        <h2 className="font-semibold mb-2">Chat Teaching Assistant</h2>
        <div className="flex gap-2">
          <input className="flex-1 p-2 rounded bg-white/60 dark:bg-black/40" value={chatMessage} onChange={(e) => setChatMessage(e.target.value)} />
          <button className="px-3 py-2 rounded bg-brand-600 text-white" onClick={async () => setChatReply((await call('/ai/chat', { message: chatMessage })).reply)}>Send</button>
        </div>
        {chatReply && <p className="mt-3 opacity-90">{chatReply}</p>}
      </div>
    </div>
  );
}
