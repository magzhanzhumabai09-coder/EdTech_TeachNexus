import { NavLink } from 'react-router-dom'
import { AcademicCapIcon, CalendarDaysIcon, ClipboardDocumentListIcon, Cog6ToothIcon, CommandLineIcon, HomeIcon, PresentationChartLineIcon, Squares2X2Icon } from '@heroicons/react/24/outline'

export function Sidebar({ collapsed }: { collapsed: boolean }) {
  const nav = [
    { to: '/', label: 'Dashboard', icon: HomeIcon },
    { to: '/syllabus', label: 'Syllabus', icon: AcademicCapIcon },
    { to: '/schedule', label: 'Schedule', icon: CalendarDaysIcon },
    { to: '/assignments', label: 'Assignments', icon: ClipboardDocumentListIcon },
    { to: '/exams', label: 'Exams', icon: Squares2X2Icon },
    { to: '/tools', label: 'AI Tools', icon: CommandLineIcon },
    { to: '/analytics', label: 'Analytics', icon: PresentationChartLineIcon },
    { to: '/settings', label: 'Settings', icon: Cog6ToothIcon },
  ]

  return (
    <aside className={`hidden sm:flex flex-col transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'} border-r border-slate-200 bg-white/70 backdrop-blur`}> 
      <div className="h-16" />
      <nav className="flex-1 p-3 space-y-1">
        {nav.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => `group flex items-center gap-3 rounded-xl px-3 py-2 font-medium hover:bg-sky-100 transition-colors ${isActive ? 'bg-sky-100 text-navy-700' : 'text-slate-700'}`}
            end={item.to === '/'}
          >
            <item.icon className="h-5 w-5" />
            <span className={`${collapsed ? 'sr-only' : ''}`}>{item.label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="p-3">
        <div className="card">
          <p className="text-sm text-slate-600">Upgrade to <span className="font-semibold">Pro</span> for advanced analytics.</p>
          <button className="btn btn-primary w-full mt-3">Upgrade</button>
        </div>
      </div>
    </aside>
  )
}
