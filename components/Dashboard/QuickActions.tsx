'use client'

import React from 'react'
import { Plus, Upload, Calendar, Users, FileText, GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'

const quickActions = [
  {
    id: 1,
    title: 'Create Assignment',
    description: 'New homework or project',
    icon: Plus,
    color: 'from-blue-500 to-blue-600',
    action: 'assignment'
  },
  {
    id: 2,
    title: 'Schedule Class',
    description: 'Plan your next lesson',
    icon: Calendar,
    color: 'from-green-500 to-green-600',
    action: 'schedule'
  },
  {
    id: 3,
    title: 'Grade Submissions',
    description: '12 pending reviews',
    icon: FileText,
    color: 'from-orange-500 to-orange-600',
    action: 'grade'
  },
  {
    id: 4,
    title: 'Create Quiz',
    description: 'Quick assessment tool',
    icon: GraduationCap,
    color: 'from-purple-500 to-purple-600',
    action: 'quiz'
  }
]

export default function QuickActions() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {quickActions.map((action, index) => {
          const Icon = action.icon
          return (
            <motion.button
              key={action.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center space-x-4 p-4 rounded-2xl border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-200 text-left"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{action.title}</h3>
                <p className="text-sm text-gray-600">{action.description}</p>
              </div>
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}