"use client";
import { useState } from 'react';
import { AuthGate } from '../../components/AuthGate';

const API_URL = process.env.API_URL || 'http://localhost:4000';

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<any>(null);

  const onUpload = async () => {
    if (!file) return;
    const token = localStorage.getItem('token') || '';
    const form = new FormData();
    form.append('file', file);
    const res = await fetch(`${API_URL}/upload`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: form,
    });
    const json = await res.json();
    setResult(json);
  };

  return (
    <AuthGate>
      <div className="glass p-4 rounded-xl">
        <h2 className="font-semibold mb-2">Upload Academic File</h2>
        <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
        <button className="ml-3 px-3 py-2 rounded bg-brand-600 text-white" onClick={onUpload} disabled={!file}>
          Upload
        </button>
        {result && (
          <pre className="mt-3 text-xs bg-black/30 p-2 rounded whitespace-pre-wrap">{JSON.stringify(result, null, 2)}</pre>
        )}
      </div>
    </AuthGate>
  );
}
