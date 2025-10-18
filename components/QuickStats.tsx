'use client'

import { TrendingUp, TrendingDown, Minus } from 'lucide-react'

export default function QuickStats() {
  const stats = [
    {
      label: 'Average Class Attendance',
      value: '87%',
      change: '+5%',
      trend: 'up',
      color: 'mint',
    },
    {
      label: 'Assignment Completion Rate',
      value: '92%',
      change: '+3%',
      trend: 'up',
      color: 'skyblue',
    },
    {
      label: 'Average Grade',
      value: '84.5',
      change: '-2%',
      trend: 'down',
      color: 'navy',
    },
    {
      label: 'Student Engagement',
      value: '78%',
      change: '0%',
      trend: 'neutral',
      color: 'mint',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-navy-600 font-medium">{stat.label}</span>
            {stat.trend === 'up' && (
              <span className="flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-lg">
                <TrendingUp className="w-3 h-3" />
                {stat.change}
              </span>
            )}
            {stat.trend === 'down' && (
              <span className="flex items-center gap-1 text-xs text-red-600 bg-red-50 px-2 py-1 rounded-lg">
                <TrendingDown className="w-3 h-3" />
                {stat.change}
              </span>
            )}
            {stat.trend === 'neutral' && (
              <span className="flex items-center gap-1 text-xs text-navy-500 bg-navy-50 px-2 py-1 rounded-lg">
                <Minus className="w-3 h-3" />
                {stat.change}
              </span>
            )}
          </div>
          <p className="text-3xl font-bold text-navy-900">{stat.value}</p>
        </div>
      ))}
    </div>
  )
}
