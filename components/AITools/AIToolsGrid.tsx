'use client'

import React from 'react'
import { Bot, FileText, MessageSquare, BarChart3, Lightbulb, BookOpen, Users, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const aiTools = [
  {
    id: 1,
    title: 'Lesson Generator',
    description: 'Create comprehensive lesson plans from syllabus topics with AI assistance',
    icon: BookOpen,
    color: 'from-blue-500 to-blue-600',
    features: ['Auto-generate content', 'Curriculum alignment', 'Interactive elements'],
    status: 'active'
  },
  {
    id: 2,
    title: 'Feedback Assistant',
    description: 'Generate personalized, constructive feedback for student assignments',
    icon: MessageSquare,
    color: 'from-green-500 to-green-600',
    features: ['Personalized comments', 'Improvement suggestions', 'Tone analysis'],
    status: 'active'
  },
  {
    id: 3,
    title: 'Performance Analyzer',
    description: 'Detect learning gaps and performance patterns using student data',
    icon: BarChart3,
    color: 'from-purple-500 to-purple-600',
    features: ['Learning gap detection', 'Progress tracking', 'Predictive insights'],
    status: 'active'
  },
  {
    id: 4,
    title: 'Content Rewriter',
    description: 'Transform teacher notes into engaging, student-friendly materials',
    icon: FileText,
    color: 'from-orange-500 to-orange-600',
    features: ['Readability optimization', 'Engagement enhancement', 'Format conversion'],
    status: 'active'
  },
  {
    id: 5,
    title: 'Quiz Generator',
    description: 'Automatically create quizzes and assessments from course content',
    icon: Lightbulb,
    color: 'from-pink-500 to-pink-600',
    features: ['Multiple question types', 'Difficulty adjustment', 'Answer explanations'],
    status: 'beta'
  },
  {
    id: 6,
    title: 'Student Insights',
    description: 'AI-powered analysis of student behavior and learning patterns',
    icon: Users,
    color: 'from-indigo-500 to-indigo-600',
    features: ['Behavior analysis', 'Learning style detection', 'Intervention suggestions'],
    status: 'coming-soon'
  }
]

export default function AIToolsGrid() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800'
      case 'beta':
        return 'bg-yellow-100 text-yellow-800'
      case 'coming-soon':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Active'
      case 'beta':
        return 'Beta'
      case 'coming-soon':
        return 'Coming Soon'
      default:
        return 'Unknown'
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {aiTools.map((tool, index) => {
        const Icon = tool.icon
        return (
          <motion.div
            key={tool.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 card-hover ${
              tool.status === 'coming-soon' ? 'opacity-75' : 'cursor-pointer'
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-14 h-14 bg-gradient-to-r ${tool.color} rounded-2xl flex items-center justify-center`}>
                <Icon className="w-7 h-7 text-white" />
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadge(tool.status)}`}>
                {getStatusText(tool.status)}
              </span>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2">{tool.title}</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">{tool.description}</p>

            <div className="space-y-2 mb-6">
              {tool.features.map((feature, idx) => (
                <div key={idx} className="flex items-center text-sm text-gray-700">
                  <Zap className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={tool.status === 'coming-soon'}
              className={`w-full py-3 px-4 rounded-2xl font-medium transition-all duration-200 ${
                tool.status === 'coming-soon'
                  ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                  : 'bg-primary-600 hover:bg-primary-700 text-white shadow-sm hover:shadow-md'
              }`}
            >
              {tool.status === 'coming-soon' ? 'Coming Soon' : 'Launch Tool'}
            </motion.button>
          </motion.div>
        )
      })}
    </div>
  )
}