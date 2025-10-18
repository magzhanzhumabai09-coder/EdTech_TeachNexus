'use client'

import React from 'react'
import { Clock, CheckCircle, AlertCircle, Users, FileText } from 'lucide-react'
import { motion } from 'framer-motion'

const activities = [
  {
    id: 1,
    type: 'assignment',
    title: 'Math Assignment #5 submitted',
    description: 'Jessica Chen submitted her calculus homework',
    time: '5 minutes ago',
    icon: FileText,
    status: 'new'
  },
  {
    id: 2,
    type: 'grade',
    title: 'Physics Quiz graded',
    description: 'Completed grading for 28 students',
    time: '1 hour ago',
    icon: CheckCircle,
    status: 'completed'
  },
  {
    id: 3,
    type: 'reminder',
    title: 'Parent-teacher conference',
    description: 'Meeting with Alex Johnson\'s parents at 3 PM',
    time: '2 hours ago',
    icon: Users,
    status: 'upcoming'
  },
  {
    id: 4,
    type: 'deadline',
    title: 'Assignment deadline approaching',
    description: 'Chemistry lab report due in 2 days',
    time: '3 hours ago',
    icon: AlertCircle,
    status: 'warning'
  },
  {
    id: 5,
    type: 'completion',
    title: 'Lesson plan completed',
    description: 'Week 12 biology curriculum ready',
    time: '5 hours ago',
    icon: CheckCircle,
    status: 'completed'
  }
]

export default function RecentActivity() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'text-blue-600 bg-blue-100'
      case 'completed':
        return 'text-green-600 bg-green-100'
      case 'upcoming':
        return 'text-orange-600 bg-orange-100'
      case 'warning':
        return 'text-red-600 bg-red-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
        <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
          View All
        </button>
      </div>
      
      <div className="space-y-4">
        {activities.map((activity, index) => {
          const Icon = activity.icon
          return (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start space-x-4 p-3 rounded-2xl hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${getStatusColor(activity.status)}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-900 truncate">{activity.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                <div className="flex items-center mt-2 text-xs text-gray-500">
                  <Clock className="w-3 h-3 mr-1" />
                  {activity.time}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}