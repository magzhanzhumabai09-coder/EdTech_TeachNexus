import { Bars3Icon, BellIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

export function Header({ onToggleSidebar }: { onToggleSidebar: () => void }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button aria-label="Toggle sidebar" className="btn btn-ghost rounded-full" onClick={onToggleSidebar}>
            <Bars3Icon className="h-6 w-6" />
          </button>
          <Link to="/" className="font-semibold text-navy-700">TechNexus.Ai</Link>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn btn-ghost rounded-full" aria-label="Notifications">
            <BellIcon className="h-6 w-6" />
          </button>
          <img src="https://i.pravatar.cc/40" alt="avatar" className="h-9 w-9 rounded-full ring-2 ring-sky-200" />
        </div>
      </div>
    </header>
  )
}
