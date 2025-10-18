export default function Exams() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-navy-800">Exams & Quizzes</h1>
        <div className="flex gap-2">
          <button className="btn btn-secondary">Question Bank</button>
          <button className="btn btn-primary">New Exam</button>
        </div>
      </div>

      <div className="card space-y-3">
        <p className="text-slate-700">Build customizable exams with timing and analytics. Integrity checks simulate browser activity monitoring.</p>
        <div className="flex gap-2">
          <button className="btn btn-secondary">Preview</button>
          <button className="btn btn-primary">Assign</button>
        </div>
      </div>
    </div>
  )
}
