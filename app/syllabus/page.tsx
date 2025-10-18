'use client'

import { useState } from 'react'
import { BookOpen, Plus, Edit, Download, Share2, Sparkles, Clock, Users, Target } from 'lucide-react'

export default function SyllabusPage() {
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showAIGenerator, setShowAIGenerator] = useState(false)

  const syllabi = [
    {
      id: 1,
      course: 'Data Structures',
      code: 'CS 201',
      semester: 'Fall 2025',
      students: 45,
      topics: 12,
      lastUpdated: '2 days ago',
      status: 'active',
    },
    {
      id: 2,
      course: 'Algorithms',
      code: 'CS 301',
      semester: 'Fall 2025',
      students: 38,
      topics: 15,
      lastUpdated: '1 week ago',
      status: 'active',
    },
    {
      id: 3,
      course: 'Database Systems',
      code: 'CS 305',
      semester: 'Fall 2025',
      students: 52,
      topics: 10,
      lastUpdated: '3 days ago',
      status: 'active',
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-mint-600" />
            Syllabus Management
          </h1>
          <p className="text-navy-600 mt-2">Create, edit, and manage your course syllabi</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setShowAIGenerator(true)}
            className="btn-secondary flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            AI Generator
          </button>
          <button
            onClick={() => setShowCreateModal(true)}
            className="btn-primary flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Create New
          </button>
        </div>
      </div>

      {/* Syllabus Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {syllabi.map((syllabus) => (
          <div key={syllabus.id} className="card group hover:border-mint-300">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-1">{syllabus.course}</h3>
                <p className="text-navy-600 text-sm">{syllabus.code} • {syllabus.semester}</p>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-lg">
                {syllabus.status}
              </span>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2 text-navy-600">
                <Users className="w-4 h-4" />
                <span className="text-sm">{syllabus.students} Students</span>
              </div>
              <div className="flex items-center gap-2 text-navy-600">
                <Target className="w-4 h-4" />
                <span className="text-sm">{syllabus.topics} Topics Covered</span>
              </div>
              <div className="flex items-center gap-2 text-navy-600">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Updated {syllabus.lastUpdated}</span>
              </div>
            </div>

            <div className="flex gap-2 pt-4 border-t border-beige-200">
              <button className="flex-1 px-4 py-2 bg-mint-50 text-mint-700 rounded-xl hover:bg-mint-100 transition-colors font-medium flex items-center justify-center gap-2">
                <Edit className="w-4 h-4" />
                Edit
              </button>
              <button className="px-4 py-2 bg-beige-100 text-navy-700 rounded-xl hover:bg-beige-200 transition-colors">
                <Download className="w-4 h-4" />
              </button>
              <button className="px-4 py-2 bg-beige-100 text-navy-700 rounded-xl hover:bg-beige-200 transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* AI Generator Modal */}
      {showAIGenerator && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-mint-500 to-skyblue-500 rounded-xl">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-navy-900">AI Syllabus Generator</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-2">Course Name</label>
                <input
                  type="text"
                  placeholder="e.g., Introduction to Machine Learning"
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-2">Course Code</label>
                <input
                  type="text"
                  placeholder="e.g., CS 401"
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-2">Duration (weeks)</label>
                <input
                  type="number"
                  placeholder="e.g., 16"
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-2">Learning Objectives</label>
                <textarea
                  placeholder="Describe the key learning objectives for this course..."
                  className="input-field h-32"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-2">Key Topics (comma-separated)</label>
                <input
                  type="text"
                  placeholder="e.g., Linear Regression, Neural Networks, Deep Learning"
                  className="input-field"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowAIGenerator(false)}
                className="flex-1 btn-secondary"
              >
                Cancel
              </button>
              <button className="flex-1 btn-primary flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5" />
                Generate Syllabus
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-navy-900 mb-6">Create New Syllabus</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-2">Course Name</label>
                <input type="text" className="input-field" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">Course Code</label>
                  <input type="text" className="input-field" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">Semester</label>
                  <select className="input-field">
                    <option>Fall 2025</option>
                    <option>Spring 2026</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-2">Description</label>
                <textarea className="input-field h-32" />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowCreateModal(false)}
                className="flex-1 btn-secondary"
              >
                Cancel
              </button>
              <button className="flex-1 btn-primary">
                Create Syllabus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
