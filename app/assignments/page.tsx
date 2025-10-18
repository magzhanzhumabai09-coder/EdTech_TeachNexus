'use client'

import { useState } from 'react'
import { FileText, Plus, Download, Eye, CheckCircle, Clock, AlertCircle, Sparkles } from 'lucide-react'

export default function AssignmentsPage() {
  type TabType = 'active' | 'grading' | 'completed'
  const [activeTab, setActiveTab] = useState<TabType>('active')
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showAIGrading, setShowAIGrading] = useState(false)

  const assignments: Record<TabType, any[]> = {
    active: [
      {
        id: 1,
        title: 'Binary Trees Implementation',
        course: 'CS 201',
        dueDate: 'Oct 25, 2025',
        submitted: 38,
        total: 45,
        status: 'active',
      },
      {
        id: 2,
        title: 'Algorithm Analysis Report',
        course: 'CS 301',
        dueDate: 'Oct 28, 2025',
        submitted: 25,
        total: 38,
        status: 'active',
      },
      {
        id: 3,
        title: 'Database Design Project',
        course: 'CS 305',
        dueDate: 'Nov 1, 2025',
        submitted: 42,
        total: 52,
        status: 'active',
      },
    ],
    grading: [
      {
        id: 4,
        title: 'Linked List Assignment',
        course: 'CS 201',
        dueDate: 'Oct 15, 2025',
        submitted: 45,
        total: 45,
        graded: 32,
        status: 'grading',
      },
      {
        id: 5,
        title: 'Sorting Algorithms',
        course: 'CS 301',
        dueDate: 'Oct 12, 2025',
        submitted: 38,
        total: 38,
        graded: 15,
        status: 'grading',
      },
    ],
    completed: [
      {
        id: 6,
        title: 'Array Operations Quiz',
        course: 'CS 201',
        dueDate: 'Oct 5, 2025',
        submitted: 45,
        total: 45,
        averageGrade: 85,
        status: 'completed',
      },
    ],
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
            <FileText className="w-8 h-8 text-mint-600" />
            Assignments & Assessments
          </h1>
          <p className="text-navy-600 mt-2">Create, distribute, and grade student assignments</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setShowAIGrading(true)}
            className="btn-secondary flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            AI Grading
          </button>
          <button
            onClick={() => setShowCreateModal(true)}
            className="btn-primary flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Create Assignment
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="w-5 h-5 text-mint-600" />
            <span className="text-sm text-navy-600 font-medium">Active</span>
          </div>
          <p className="text-3xl font-bold text-navy-900">{assignments.active.length}</p>
        </div>
        <div className="card">
          <div className="flex items-center gap-3 mb-2">
            <AlertCircle className="w-5 h-5 text-yellow-600" />
            <span className="text-sm text-navy-600 font-medium">Pending Grading</span>
          </div>
          <p className="text-3xl font-bold text-navy-900">
            {assignments.grading.reduce((acc, a) => acc + (a.submitted - a.graded), 0)}
          </p>
        </div>
        <div className="card">
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-sm text-navy-600 font-medium">Completed</span>
          </div>
          <p className="text-3xl font-bold text-navy-900">{assignments.completed.length}</p>
        </div>
        <div className="card">
          <div className="flex items-center gap-3 mb-2">
            <FileText className="w-5 h-5 text-skyblue-600" />
            <span className="text-sm text-navy-600 font-medium">Total This Semester</span>
          </div>
          <p className="text-3xl font-bold text-navy-900">
            {assignments.active.length + assignments.grading.length + assignments.completed.length}
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="card">
        <div className="flex gap-4 border-b border-beige-200 mb-6">
          {(['active', 'grading', 'completed'] as TabType[]).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 px-2 font-medium transition-colors capitalize ${
                activeTab === tab
                  ? 'text-mint-600 border-b-2 border-mint-600'
                  : 'text-navy-600 hover:text-navy-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Assignments List */}
        <div className="space-y-4">
          {assignments[activeTab].map(assignment => (
            <div
              key={assignment.id}
              className="p-5 border border-beige-200 rounded-2xl hover:border-mint-300 hover:bg-mint-50/30 transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-navy-900">{assignment.title}</h3>
                    <span className="px-3 py-1 bg-mint-100 text-mint-700 text-xs font-medium rounded-lg">
                      {assignment.course}
                    </span>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-navy-600">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      Due: {assignment.dueDate}
                    </span>
                    {activeTab === 'active' && (
                      <span>
                        Submitted: <strong>{assignment.submitted}/{assignment.total}</strong>
                      </span>
                    )}
                    {activeTab === 'grading' && (
                      <span>
                        Graded: <strong>{assignment.graded}/{assignment.submitted}</strong>
                      </span>
                    )}
                    {activeTab === 'completed' && (
                      <span>
                        Average Grade: <strong>{assignment.averageGrade}%</strong>
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 bg-beige-100 hover:bg-mint-100 rounded-lg transition-colors">
                    <Eye className="w-5 h-5 text-navy-600" />
                  </button>
                  <button className="p-2 bg-beige-100 hover:bg-mint-100 rounded-lg transition-colors">
                    <Download className="w-5 h-5 text-navy-600" />
                  </button>
                </div>
              </div>

              {/* Progress Bar */}
              {activeTab !== 'completed' && (
                <div className="mt-4">
                  <div className="w-full bg-beige-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-mint-500 to-skyblue-500 h-2 rounded-full transition-all"
                      style={{
                        width: `${
                          activeTab === 'active'
                            ? (assignment.submitted / assignment.total) * 100
                            : (assignment.graded / assignment.submitted) * 100
                        }%`,
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* AI Grading Modal */}
      {showAIGrading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-2xl w-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-mint-500 to-skyblue-500 rounded-xl">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-navy-900">AI Grading Assistant</h2>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-skyblue-50 border border-skyblue-200 rounded-xl">
                <p className="text-sm text-navy-700">
                  AI will help you grade essays, code submissions, and provide personalized feedback to students.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-navy-700 mb-2">Select Assignment</label>
                <select className="input-field">
                  <option>Binary Trees Implementation</option>
                  <option>Algorithm Analysis Report</option>
                  <option>Linked List Assignment</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-navy-700 mb-2">Grading Rubric</label>
                <textarea
                  placeholder="Enter grading criteria and point allocation..."
                  className="input-field h-32"
                />
              </div>

              <div>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 text-mint-600" />
                  <span className="text-sm text-navy-700">Enable plagiarism detection</span>
                </label>
              </div>

              <div>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 text-mint-600" defaultChecked />
                  <span className="text-sm text-navy-700">Generate personalized feedback</span>
                </label>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button onClick={() => setShowAIGrading(false)} className="flex-1 btn-secondary">
                Cancel
              </button>
              <button className="flex-1 btn-primary flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5" />
                Start AI Grading
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create Assignment Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-navy-900 mb-6">Create New Assignment</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-2">Assignment Title</label>
                <input type="text" className="input-field" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">Course</label>
                  <select className="input-field">
                    <option>CS 201 - Data Structures</option>
                    <option>CS 301 - Algorithms</option>
                    <option>CS 305 - Database Systems</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">Due Date</label>
                  <input type="date" className="input-field" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-navy-700 mb-2">Description</label>
                <textarea className="input-field h-32" />
              </div>

              <div>
                <label className="block text-sm font-medium text-navy-700 mb-2">Total Points</label>
                <input type="number" className="input-field" placeholder="100" />
              </div>

              <div>
                <label className="block text-sm font-medium text-navy-700 mb-2">Attachments</label>
                <div className="border-2 border-dashed border-beige-300 rounded-xl p-8 text-center hover:border-mint-400 transition-colors cursor-pointer">
                  <p className="text-navy-600">Click to upload or drag and drop</p>
                  <p className="text-sm text-navy-500 mt-1">PDF, DOC, ZIP files accepted</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button onClick={() => setShowCreateModal(false)} className="flex-1 btn-secondary">
                Cancel
              </button>
              <button className="flex-1 btn-primary">
                Create Assignment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
