'use client'

import { Settings, User, Bell, Lock, Palette, Globe, Mail } from 'lucide-react'

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
          <Settings className="w-8 h-8 text-mint-600" />
          Settings
        </h1>
        <p className="text-navy-600 mt-2">Manage your account and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Settings Navigation */}
        <div className="card">
          <nav className="space-y-2">
            {[
              { icon: User, label: 'Profile', active: true },
              { icon: Bell, label: 'Notifications', active: false },
              { icon: Lock, label: 'Security', active: false },
              { icon: Palette, label: 'Appearance', active: false },
              { icon: Globe, label: 'Language', active: false },
              { icon: Mail, label: 'Email Preferences', active: false },
            ].map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.label}
                  className={item.active ? 'sidebar-item-active w-full' : 'sidebar-item w-full'}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              )
            })}
          </nav>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Settings */}
          <div className="card">
            <h2 className="text-xl font-bold text-navy-900 mb-6">Profile Information</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-mint-500 to-skyblue-500 rounded-full flex items-center justify-center text-white font-bold text-3xl">
                  JD
                </div>
                <div>
                  <button className="btn-secondary mb-2">Change Photo</button>
                  <p className="text-sm text-navy-500">JPG, PNG or GIF. Max size 2MB</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">First Name</label>
                  <input type="text" defaultValue="Jane" className="input-field" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">Last Name</label>
                  <input type="text" defaultValue="Doe" className="input-field" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-navy-700 mb-2">Email</label>
                <input type="email" defaultValue="jane.doe@university.edu" className="input-field" />
              </div>

              <div>
                <label className="block text-sm font-medium text-navy-700 mb-2">Department</label>
                <input type="text" defaultValue="Computer Science" className="input-field" />
              </div>

              <div>
                <label className="block text-sm font-medium text-navy-700 mb-2">Bio</label>
                <textarea
                  className="input-field h-24"
                  defaultValue="Professor of Computer Science with 10 years of teaching experience."
                />
              </div>

              <div className="pt-4">
                <button className="btn-primary">Save Changes</button>
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="card">
            <h2 className="text-xl font-bold text-navy-900 mb-6">Notification Preferences</h2>
            <div className="space-y-4">
              {[
                { label: 'Email notifications for new assignments', checked: true },
                { label: 'Push notifications for student submissions', checked: true },
                { label: 'Weekly performance summary emails', checked: false },
                { label: 'Notify when student is at risk', checked: true },
                { label: 'Calendar reminders', checked: true },
              ].map((item, index) => (
                <label key={index} className="flex items-center gap-3 p-3 hover:bg-beige-50 rounded-lg cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked={item.checked}
                    className="w-5 h-5 text-mint-600 rounded"
                  />
                  <span className="text-navy-700">{item.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
