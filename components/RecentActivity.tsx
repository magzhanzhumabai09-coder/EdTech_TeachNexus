'use client'

import { Activity, FileText, UserCheck, MessageSquare, Upload } from 'lucide-react'

export default function RecentActivity() {
  type ColorType = 'mint' | 'skyblue' | 'navy'

  const activities: Array<{
    id: number
    icon: any
    text: string
    course: string
    time: string
    color: ColorType
  }> = [
    {
      id: 1,
      icon: Upload,
      text: 'John Doe submitted Assignment 3',
      course: 'CS 201',
      time: '5 minutes ago',
      color: 'mint',
    },
    {
      id: 2,
      icon: UserCheck,
      text: '45 students marked present',
      course: 'CS 301',
      time: '1 hour ago',
      color: 'skyblue',
    },
    {
      id: 3,
      icon: MessageSquare,
      text: 'New comment on your feedback',
      course: 'CS 201',
      time: '2 hours ago',
      color: 'navy',
    },
    {
      id: 4,
      icon: FileText,
      text: 'Exam results published',
      course: 'CS 101',
      time: '3 hours ago',
      color: 'mint',
    },
    {
      id: 5,
      icon: Upload,
      text: 'Sarah Smith submitted Project Report',
      course: 'CS 401',
      time: '4 hours ago',
      color: 'skyblue',
    },
  ]

  const colorClasses: Record<ColorType, string> = {
    mint: 'bg-mint-100 text-mint-700',
    skyblue: 'bg-skyblue-100 text-skyblue-700',
    navy: 'bg-navy-100 text-navy-700',
  }

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-navy-900 flex items-center gap-2">
          <Activity className="w-6 h-6 text-skyblue-600" />
          Recent Activity
        </h2>
        <button className="text-sm text-mint-600 hover:text-mint-700 font-medium">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon
          return (
            <div
              key={activity.id}
              className="flex items-start gap-4 pb-4 border-b border-beige-200 last:border-0 last:pb-0 hover:bg-beige-50 p-2 rounded-lg transition-colors cursor-pointer"
            >
              <div className={`p-2 rounded-lg ${colorClasses[activity.color]}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-navy-900 font-medium mb-1">{activity.text}</p>
                <div className="flex items-center gap-3 text-sm text-navy-500">
                  <span>{activity.course}</span>
                  <span>•</span>
                  <span>{activity.time}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
