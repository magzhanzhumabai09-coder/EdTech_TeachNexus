'use client'

import { useState } from 'react'
import { GraduationCap, Plus, BarChart, Clock, Users, CheckCircle, AlertCircle, Play } from 'lucide-react'

export default function ExamsPage() {
  const [showCreateModal, setShowCreateModal] = useState(false)
  type TabType = 'upcoming' | 'ongoing' | 'completed'
  const [activeTab, setActiveTab] = useState<TabType>('upcoming')

  const exams: Record<TabType, any[]> = {
    upcoming: [
      {
        id: 1,
        title: 'Midterm Exam - Data Structures',
        course: 'CS 201',
        date: 'Oct 25, 2025',
        time: '10:00 AM - 12:00 PM',
        duration: '120 min',
        students: 45,
        type: 'Written',
        status: 'scheduled',
      },
      {
        id: 2,
        title: 'Algorithm Analysis Quiz',
        course: 'CS 301',
        date: 'Oct 28, 2025',
        time: '2:00 PM - 3:00 PM',
        duration: '60 min',
        students: 38,
        type: 'Online',
        status: 'scheduled',
      },
    ],
    ongoing: [
      {
        id: 3,
        title: 'SQL Database Quiz',
        course: 'CS 305',
        startTime: '2 hours ago',
        duration: '45 min',
        completed: 38,
        total: 52,
        status: 'ongoing',
      },
    ],
    completed: [
      {
        id: 4,
        title: 'Arrays and Strings Test',
        course: 'CS 201',
        date: 'Oct 10, 2025',
        students: 45,
        averageScore: 78,
        highestScore: 98,
        lowestScore: 45,
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
            <GraduationCap className="w-8 h-8 text-mint-600" />
            Exams & Quizzes
          </h1>
          <p className="text-navy-600 mt-2">Create, manage, and analyze student assessments</p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="btn-primary flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Create Exam
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card bg-gradient-to-br from-mint-50 to-mint-100">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="w-6 h-6 text-mint-600" />
            <span className="text-sm text-navy-600 font-medium">Upcoming</span>
          </div>
          <p className="text-4xl font-bold text-navy-900">{exams.upcoming.length}</p>
        </div>
        <div className="card bg-gradient-to-br from-skyblue-50 to-skyblue-100">
          <div className="flex items-center gap-3 mb-2">
            <Play className="w-6 h-6 text-skyblue-600" />
            <span className="text-sm text-navy-600 font-medium">Ongoing</span>
          </div>
          <p className="text-4xl font-bold text-navy-900">{exams.ongoing.length}</p>
        </div>
        <div className="card bg-gradient-to-br from-green-50 to-green-100">
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle className="w-6 h-6 text-green-600" />
            <span className="text-sm text-navy-600 font-medium">Completed</span>
          </div>
          <p className="text-4xl font-bold text-navy-900">{exams.completed.length}</p>
        </div>
        <div className="card bg-gradient-to-br from-navy-50 to-navy-100">
          <div className="flex items-center gap-3 mb-2">
            <BarChart className="w-6 h-6 text-navy-600" />
            <span className="text-sm text-navy-600 font-medium">Avg. Score</span>
          </div>
          <p className="text-4xl font-bold text-navy-900">82%</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="card">
        <div className="flex gap-4 border-b border-beige-200 mb-6">
          {(['upcoming', 'ongoing', 'completed'] as TabType[]).map(tab => (
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

        {/* Exams List */}
        <div className="space-y-4">
          {exams[activeTab].map(exam => (
            <div
              key={exam.id}
              className="p-6 border-2 border-beige-200 rounded-2xl hover:border-mint-300 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-navy-900">{exam.title}</h3>
                    <span className="px-3 py-1 bg-mint-100 text-mint-700 text-xs font-medium rounded-lg">
                      {exam.course}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    {activeTab === 'upcoming' && (
                      <>
                        <div className="flex items-center gap-2 text-navy-600">
                          <Clock className="w-4 h-4" />
                          <div>
                            <p className="text-xs text-navy-500">Date & Time</p>
                            <p className="font-medium text-sm">{exam.date}</p>
                            <p className="text-xs">{exam.time}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-navy-600">
                          <Users className="w-4 h-4" />
                          <div>
                            <p className="text-xs text-navy-500">Students</p>
                            <p className="font-medium">{exam.students}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-navy-600">
                          <Clock className="w-4 h-4" />
                          <div>
                            <p className="text-xs text-navy-500">Duration</p>
                            <p className="font-medium">{exam.duration}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-navy-600">
                          <GraduationCap className="w-4 h-4" />
                          <div>
                            <p className="text-xs text-navy-500">Type</p>
                            <p className="font-medium">{exam.type}</p>
                          </div>
                        </div>
                      </>
                    )}

                    {activeTab === 'ongoing' && (
                      <>
                        <div className="flex items-center gap-2 text-navy-600">
                          <Clock className="w-4 h-4" />
                          <div>
                            <p className="text-xs text-navy-500">Started</p>
                            <p className="font-medium">{exam.startTime}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-navy-600">
                          <Users className="w-4 h-4" />
                          <div>
                            <p className="text-xs text-navy-500">Progress</p>
                            <p className="font-medium">{exam.completed}/{exam.total}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-navy-600">
                          <Clock className="w-4 h-4" />
                          <div>
                            <p className="text-xs text-navy-500">Duration</p>
                            <p className="font-medium">{exam.duration}</p>
                          </div>
                        </div>
                      </>
                    )}

                    {activeTab === 'completed' && (
                      <>
                        <div className="flex items-center gap-2 text-navy-600">
                          <BarChart className="w-4 h-4" />
                          <div>
                            <p className="text-xs text-navy-500">Average Score</p>
                            <p className="font-medium text-lg">{exam.averageScore}%</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-navy-600">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <div>
                            <p className="text-xs text-navy-500">Highest</p>
                            <p className="font-medium text-green-600">{exam.highestScore}%</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-navy-600">
                          <AlertCircle className="w-4 h-4 text-red-600" />
                          <div>
                            <p className="text-xs text-navy-500">Lowest</p>
                            <p className="font-medium text-red-600">{exam.lowestScore}%</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-navy-600">
                          <Users className="w-4 h-4" />
                          <div>
                            <p className="text-xs text-navy-500">Students</p>
                            <p className="font-medium">{exam.students}</p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {activeTab === 'ongoing' && (
                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm text-navy-600 mb-2">
                    <span>Completion Progress</span>
                    <span>{Math.round((exam.completed / exam.total) * 100)}%</span>
                  </div>
                  <div className="w-full bg-beige-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-mint-500 to-skyblue-500 h-2 rounded-full transition-all"
                      style={{ width: `${(exam.completed / exam.total) * 100}%` }}
                    />
                  </div>
                </div>
              )}

              <div className="flex gap-2 mt-4 pt-4 border-t border-beige-200">
                {activeTab === 'upcoming' && (
                  <>
                    <button className="flex-1 btn-primary">
                      View Details
                    </button>
                    <button className="btn-secondary">
                      Edit
                    </button>
                  </>
                )}
                {activeTab === 'ongoing' && (
                  <>
                    <button className="flex-1 btn-primary flex items-center justify-center gap-2">
                      <Play className="w-4 h-4" />
                      Monitor Live
                    </button>
                  </>
                )}
                {activeTab === 'completed' && (
                  <>
                    <button className="flex-1 btn-primary flex items-center justify-center gap-2">
                      <BarChart className="w-4 h-4" />
                      View Analytics
                    </button>
                    <button className="btn-secondary">
                      Export Results
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Create Exam Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-navy-900 mb-6">Create New Exam</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-2">Exam Title</label>
                <input type="text" placeholder="e.g., Midterm Exam - Data Structures" className="input-field" />
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
                  <label className="block text-sm font-medium text-navy-700 mb-2">Exam Type</label>
                  <select className="input-field">
                    <option>Online</option>
                    <option>Written</option>
                    <option>Practical</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">Date</label>
                  <input type="date" className="input-field" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">Start Time</label>
                  <input type="time" className="input-field" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">Duration (min)</label>
                  <input type="number" placeholder="120" className="input-field" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-navy-700 mb-2">Instructions</label>
                <textarea className="input-field h-24" placeholder="Enter exam instructions for students..." />
              </div>

              <div className="border-t border-beige-200 pt-4">
                <h3 className="font-semibold text-navy-900 mb-3">Question Bank</h3>
                <div className="space-y-3">
                  <button className="w-full p-4 border-2 border-dashed border-beige-300 rounded-xl hover:border-mint-400 transition-colors text-navy-600 hover:text-mint-600 font-medium">
                    + Add Multiple Choice Questions
                  </button>
                  <button className="w-full p-4 border-2 border-dashed border-beige-300 rounded-xl hover:border-mint-400 transition-colors text-navy-600 hover:text-mint-600 font-medium">
                    + Add True/False Questions
                  </button>
                  <button className="w-full p-4 border-2 border-dashed border-beige-300 rounded-xl hover:border-mint-400 transition-colors text-navy-600 hover:text-mint-600 font-medium">
                    + Add Essay Questions
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 text-mint-600" />
                  <span className="text-sm text-navy-700">Enable browser activity monitoring</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 text-mint-600" defaultChecked />
                  <span className="text-sm text-navy-700">Auto-submit when time expires</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 text-mint-600" />
                  <span className="text-sm text-navy-700">Randomize question order</span>
                </label>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button onClick={() => setShowCreateModal(false)} className="flex-1 btn-secondary">
                Cancel
              </button>
              <button className="flex-1 btn-primary">
                Create Exam
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
