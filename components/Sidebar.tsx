'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  BookOpen,
  Calendar,
  FileText,
  GraduationCap,
  Bot,
  BarChart3,
  Users,
  Settings,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react'

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/' },
    { icon: BookOpen, label: 'Syllabus', href: '/syllabus' },
    { icon: Calendar, label: 'Schedule', href: '/schedule' },
    { icon: FileText, label: 'Assignments', href: '/assignments' },
    { icon: GraduationCap, label: 'Exams & Quizzes', href: '/exams' },
    { icon: Bot, label: 'AI Tools', href: '/ai-tools' },
    { icon: BarChart3, label: 'Analytics', href: '/analytics' },
    { icon: Users, label: 'Students', href: '/students' },
  ]

  return (
    <aside
      className={`bg-white border-r border-beige-200 transition-all duration-300 ${
        collapsed ? 'w-20' : 'w-72'
      } flex flex-col`}
    >
      {/* Logo */}
      <div className="p-6 border-b border-beige-200">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-mint-500 to-skyblue-500 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-navy-900">TechNexus</h1>
                <p className="text-xs text-navy-500">AI Teacher Platform</p>
              </div>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-lg hover:bg-beige-100 transition-colors"
          >
            {collapsed ? (
              <ChevronRight className="w-5 h-5 text-navy-600" />
            ) : (
              <ChevronLeft className="w-5 h-5 text-navy-600" />
            )}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={
                isActive
                  ? 'sidebar-item-active'
                  : 'sidebar-item'
              }
              title={collapsed ? item.label : ''}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {!collapsed && <span className="font-medium">{item.label}</span>}
            </Link>
          )
        })}
      </nav>

      {/* Settings */}
      <div className="p-4 border-t border-beige-200">
        <Link
          href="/settings"
          className="sidebar-item"
          title={collapsed ? 'Settings' : ''}
        >
          <Settings className="w-5 h-5 flex-shrink-0" />
          {!collapsed && <span className="font-medium">Settings</span>}
        </Link>
      </div>
    </aside>
  )
}
