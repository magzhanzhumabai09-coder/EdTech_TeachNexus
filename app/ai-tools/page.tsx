'use client'

import { useState } from 'react'
import { Bot, Sparkles, FileText, MessageSquare, BookOpen, Lightbulb, BarChart, Wand2 } from 'lucide-react'

export default function AIToolsPage() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null)
  const [generatedContent, setGeneratedContent] = useState('')

  type ColorType = 'mint' | 'skyblue' | 'navy'

  const aiTools: Array<{
    id: string
    title: string
    description: string
    icon: any
    color: ColorType
    inputs: string[]
  }> = [
    {
      id: 'lesson-generator',
      title: 'Lesson Plan Generator',
      description: 'Create comprehensive lesson plans from syllabus topics',
      icon: BookOpen,
      color: 'mint',
      inputs: ['Topic', 'Duration', 'Learning Objectives'],
    },
    {
      id: 'feedback-assistant',
      title: 'Feedback Assistant',
      description: 'Generate personalized student feedback',
      icon: MessageSquare,
      color: 'skyblue',
      inputs: ['Student Name', 'Performance Data', 'Areas of Concern'],
    },
    {
      id: 'performance-analyzer',
      title: 'Performance Analyzer',
      description: 'Detect learning gaps using student data',
      icon: BarChart,
      color: 'navy',
      inputs: ['Student ID', 'Course', 'Time Period'],
    },
    {
      id: 'content-rewriter',
      title: 'Content Rewriter',
      description: 'Convert teacher notes into engaging materials',
      icon: FileText,
      color: 'mint',
      inputs: ['Original Content', 'Target Audience', 'Tone'],
    },
    {
      id: 'quiz-generator',
      title: 'Quiz Generator',
      description: 'Auto-generate quizzes from course materials',
      icon: Lightbulb,
      color: 'skyblue',
      inputs: ['Topic', 'Difficulty', 'Number of Questions'],
    },
    {
      id: 'presentation-maker',
      title: 'Presentation Maker',
      description: 'Create engaging presentations from topics',
      icon: Wand2,
      color: 'navy',
      inputs: ['Topic', 'Number of Slides', 'Style'],
    },
  ]

  const colorClasses: Record<ColorType, string> = {
    mint: 'from-mint-500 to-mint-600',
    skyblue: 'from-skyblue-500 to-skyblue-600',
    navy: 'from-navy-600 to-navy-700',
  }

  const bgColors: Record<ColorType, string> = {
    mint: 'bg-mint-50 border-mint-200',
    skyblue: 'bg-skyblue-50 border-skyblue-200',
    navy: 'bg-navy-50 border-navy-200',
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-mint-500 via-skyblue-500 to-navy-600 rounded-3xl p-8 text-white">
        <div className="flex items-center gap-3 mb-3">
          <Bot className="w-10 h-10" />
          <h1 className="text-4xl font-bold">AI Tools Suite</h1>
        </div>
        <p className="text-mint-50 text-lg">
          Powerful AI assistants to automate routine tasks and enhance your teaching workflow
        </p>
      </div>

      {/* AI Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {aiTools.map((tool) => {
          const Icon = tool.icon
          return (
            <div
              key={tool.id}
              onClick={() => setSelectedTool(tool.id)}
              className="card group cursor-pointer hover:scale-105 hover:shadow-xl transition-all"
            >
              <div className={`p-4 rounded-2xl bg-gradient-to-r ${colorClasses[tool.color]} text-white w-fit mb-4`}>
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">{tool.title}</h3>
              <p className="text-navy-600 text-sm mb-4">{tool.description}</p>
              <button className="w-full btn-secondary group-hover:bg-mint-100 transition-colors flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4" />
                Launch Tool
              </button>
            </div>
          )
        })}
      </div>

      {/* Recent Generations */}
      <div className="card">
        <h2 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-mint-600" />
          Recent AI Generations
        </h2>
        <div className="space-y-3">
          {([
            {
              id: 1,
              tool: 'Lesson Plan Generator',
              title: 'Binary Search Trees - Lesson Plan',
              date: '2 hours ago',
              icon: BookOpen,
              color: 'mint' as ColorType,
            },
            {
              id: 2,
              tool: 'Feedback Assistant',
              title: 'Personalized feedback for John Doe',
              date: '5 hours ago',
              icon: MessageSquare,
              color: 'skyblue' as ColorType,
            },
            {
              id: 3,
              tool: 'Quiz Generator',
              title: 'Algorithm Complexity Quiz',
              date: '1 day ago',
              icon: Lightbulb,
              color: 'skyblue' as ColorType,
            },
          ]).map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.id}
                className={`p-4 rounded-xl border ${bgColors[item.color]} hover:shadow-md transition-all cursor-pointer`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${colorClasses[item.color]} text-white`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-navy-500">{item.tool}</p>
                    <h3 className="font-semibold text-navy-900">{item.title}</h3>
                  </div>
                  <span className="text-sm text-navy-500">{item.date}</span>
                  <button className="btn-secondary py-2">View</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* AI Tool Modal */}
      {selectedTool && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            {(() => {
              const tool = aiTools.find(t => t.id === selectedTool)
              if (!tool) return null
              const Icon = tool.icon

              return (
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 bg-gradient-to-r ${colorClasses[tool.color]} rounded-xl`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-navy-900">{tool.title}</h2>
                  </div>

                  <p className="text-navy-600 mb-6">{tool.description}</p>

                  <div className="space-y-4 mb-6">
                    {tool.inputs.map((input, index) => (
                      <div key={index}>
                        <label className="block text-sm font-medium text-navy-700 mb-2">{input}</label>
                        {input.includes('Content') || input.includes('Objectives') ? (
                          <textarea className="input-field h-32" placeholder={`Enter ${input.toLowerCase()}...`} />
                        ) : (
                          <input type="text" className="input-field" placeholder={`Enter ${input.toLowerCase()}...`} />
                        )}
                      </div>
                    ))}
                  </div>

                  {generatedContent && (
                    <div className="mb-6 p-4 bg-mint-50 border border-mint-200 rounded-xl">
                      <h3 className="font-semibold text-navy-900 mb-2 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-mint-600" />
                        Generated Content
                      </h3>
                      <div className="text-navy-700 whitespace-pre-wrap">{generatedContent}</div>
                    </div>
                  )}

                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        setSelectedTool(null)
                        setGeneratedContent('')
                      }}
                      className="flex-1 btn-secondary"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => {
                        setGeneratedContent('AI-generated content will appear here...\n\nThis is a simulated response showing how the AI tool would generate content based on your inputs.')
                      }}
                      className="flex-1 btn-primary flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-5 h-5" />
                      Generate with AI
                    </button>
                  </div>
                </>
              )
            })()}
          </div>
        </div>
      )}
    </div>
  )
}
