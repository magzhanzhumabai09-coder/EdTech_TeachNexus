export default function SettingsPage() {
  return (
    <div className="grid gap-6">
      <div className="card p-6">
        <h2 className="text-lg font-semibold">Settings & Integrations</h2>
        <div className="mt-4 grid gap-3">
          <div className="card p-4">
            <div className="font-medium">Google Calendar</div>
            <div className="text-xs text-[--color-muted]">Connect to sync class schedules.</div>
            <div className="mt-2 flex gap-2">
              <button className="btn btn-primary">Connect</button>
              <button className="btn btn-ghost">Configure</button>
            </div>
          </div>
          <div className="card p-4">
            <div className="font-medium">Microsoft Outlook</div>
            <div className="text-xs text-[--color-muted]">Sync events and reminders.</div>
            <div className="mt-2 flex gap-2">
              <button className="btn btn-primary">Connect</button>
              <button className="btn btn-ghost">Configure</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
