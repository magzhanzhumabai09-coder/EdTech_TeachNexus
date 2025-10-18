'use client'

import { Sparkles, TrendingUp, AlertCircle, Lightbulb } from 'lucide-react'

export default function AIInsights() {
  type InsightType = 'positive' | 'warning' | 'suggestion'

  const insights: Array<{
    id: number
    icon: any
    title: string
    description: string
    type: InsightType
  }> = [
    {
      id: 1,
      icon: TrendingUp,
      title: 'Student Performance Trending Up',
      description: 'CS 201 class average improved by 8% this week. Keep up the great work!',
      type: 'positive',
    },
    {
      id: 2,
      icon: AlertCircle,
      title: 'Attention Needed',
      description: '5 students in CS 301 are falling behind. Consider scheduling office hours.',
      type: 'warning',
    },
    {
      id: 3,
      icon: Lightbulb,
      title: 'AI Suggestion',
      description: 'Break down Algorithm Assignment into smaller milestones for better completion rates.',
      type: 'suggestion',
    },
  ]

  const typeStyles: Record<InsightType, string> = {
    positive: 'bg-green-50 border-green-200',
    warning: 'bg-yellow-50 border-yellow-200',
    suggestion: 'bg-skyblue-50 border-skyblue-200',
  }

  const iconStyles: Record<InsightType, string> = {
    positive: 'text-green-600',
    warning: 'text-yellow-600',
    suggestion: 'text-skyblue-600',
  }

  return (
    <div className="card bg-gradient-to-r from-mint-50 to-skyblue-50 border-mint-200">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-6 h-6 text-mint-600" />
        <h2 className="text-xl font-bold text-navy-900">AI Insights & Recommendations</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {insights.map((insight) => {
          const Icon = insight.icon
          return (
            <div
              key={insight.id}
              className={`p-4 rounded-xl border ${typeStyles[insight.type]} bg-white hover:shadow-md transition-all cursor-pointer`}
            >
              <Icon className={`w-6 h-6 mb-3 ${iconStyles[insight.type]}`} />
              <h3 className="font-semibold text-navy-900 mb-2">{insight.title}</h3>
              <p className="text-sm text-navy-600">{insight.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
