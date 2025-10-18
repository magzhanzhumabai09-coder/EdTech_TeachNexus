'use client'

import React from 'react'
import { Users, FileText, Calendar, TrendingUp, Clock, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const stats = [
  {
    id: 1,
    title: 'Total Students',
    value: '142',
    change: '+12%',
    changeType: 'positive',
    icon: Users,
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 2,
    title: 'Active Assignments',
    value: '8',
    change: '+3',
    changeType: 'positive',
    icon: FileText,
    color: 'from-green-500 to-green-600'
  },
  {
    id: 3,
    title: 'Upcoming Exams',
    value: '3',
    change: 'This week',
    changeType: 'neutral',
    icon: Calendar,
    color: 'from-orange-500 to-orange-600'
  },
  {
    id: 4,
    title: 'Completion Rate',
    value: '87%',
    change: '+5%',
    changeType: 'positive',
    icon: TrendingUp,
    color: 'from-purple-500 to-purple-600'
  }
]

export default function OverviewCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-200 card-hover"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                stat.changeType === 'positive' 
                  ? 'text-green-700 bg-green-100' 
                  : stat.changeType === 'negative'
                  ? 'text-red-700 bg-red-100'
                  : 'text-gray-700 bg-gray-100'
              }`}>
                {stat.change}
              </span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-600 text-sm">{stat.title}</p>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}