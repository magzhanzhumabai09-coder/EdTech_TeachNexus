'use client'

import { Bell, Search, Settings, User, LogOut } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [showNotifications, setShowNotifications] = useState(false)
  const [showProfile, setShowProfile] = useState(false)

  const notifications = [
    { id: 1, text: 'New assignment submission from John Doe', time: '5 min ago', unread: true },
    { id: 2, text: 'Exam results ready for review', time: '1 hour ago', unread: true },
    { id: 3, text: 'Parent meeting scheduled for tomorrow', time: '2 hours ago', unread: false },
  ]

  return (
    <header className="bg-white border-b border-beige-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Search Bar */}
        <div className="flex-1 max-w-2xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-navy-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search courses, students, assignments..."
              className="w-full pl-12 pr-4 py-2.5 rounded-xl border border-beige-300 focus:outline-none focus:ring-2 focus:ring-mint-400 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4 ml-6">
          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2.5 rounded-xl hover:bg-beige-100 transition-all duration-200 relative"
            >
              <Bell className="w-6 h-6 text-navy-600" />
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-mint-500 rounded-full border-2 border-white"></span>
            </button>

            {/* Notifications Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-beige-200 py-2 z-50">
                <div className="px-4 py-3 border-b border-beige-200">
                  <h3 className="font-semibold text-navy-900">Notifications</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map(notif => (
                    <div
                      key={notif.id}
                      className={`px-4 py-3 hover:bg-beige-50 cursor-pointer transition-colors ${
                        notif.unread ? 'bg-mint-50' : ''
                      }`}
                    >
                      <p className="text-sm text-navy-800">{notif.text}</p>
                      <p className="text-xs text-navy-500 mt-1">{notif.time}</p>
                    </div>
                  ))}
                </div>
                <div className="px-4 py-3 border-t border-beige-200">
                  <button className="text-sm text-mint-600 hover:text-mint-700 font-medium">
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Settings */}
          <button className="p-2.5 rounded-xl hover:bg-beige-100 transition-all duration-200">
            <Settings className="w-6 h-6 text-navy-600" />
          </button>

          {/* Profile */}
          <div className="relative">
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center gap-3 p-2 pr-4 rounded-xl hover:bg-beige-100 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-mint-500 to-skyblue-500 flex items-center justify-center text-white font-semibold">
                JD
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-navy-900">Prof. Jane Doe</p>
                <p className="text-xs text-navy-500">Computer Science</p>
              </div>
            </button>

            {/* Profile Dropdown */}
            {showProfile && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-beige-200 py-2 z-50">
                <button className="w-full px-4 py-3 text-left hover:bg-beige-50 transition-colors flex items-center gap-3">
                  <User className="w-5 h-5 text-navy-600" />
                  <span className="text-navy-800">My Profile</span>
                </button>
                <button className="w-full px-4 py-3 text-left hover:bg-beige-50 transition-colors flex items-center gap-3">
                  <Settings className="w-5 h-5 text-navy-600" />
                  <span className="text-navy-800">Settings</span>
                </button>
                <div className="border-t border-beige-200 my-2"></div>
                <button className="w-full px-4 py-3 text-left hover:bg-beige-50 transition-colors flex items-center gap-3 text-red-600">
                  <LogOut className="w-5 h-5" />
                  <span>Sign Out</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
