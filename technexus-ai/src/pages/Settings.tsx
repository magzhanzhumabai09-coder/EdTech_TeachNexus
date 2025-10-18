export default function Settings() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-navy-800">Settings</h1>
      <div className="card space-y-3">
        <div>
          <label className="block text-sm font-medium text-slate-700">Connect Google Calendar</label>
          <button className="btn btn-secondary mt-2">Connect</button>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Notifications</label>
          <div className="flex items-center gap-2 mt-2">
            <input type="checkbox" className="input" id="email" />
            <label htmlFor="email">Email alerts</label>
          </div>
        </div>
      </div>
    </div>
  )
}
