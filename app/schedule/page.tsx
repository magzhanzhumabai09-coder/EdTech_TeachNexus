'use client'

import { useState } from 'react'
import { Calendar, Plus, ChevronLeft, ChevronRight, Clock, MapPin, Users, Sparkles } from 'lucide-react'

export default function SchedulePage() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 9, 18))
  const [showAddModal, setShowAddModal] = useState(false)
  const [showAIScheduler, setShowAIScheduler] = useState(false)

  type ColorType = 'mint' | 'skyblue' | 'navy'

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  
  const schedule: Array<{
    id: number
    title: string
    course: string
    time: string
    location: string
    day: number
    color: ColorType
  }> = [
    {
      id: 1,
      title: 'Data Structures Lecture',
      course: 'CS 201',
      time: '9:00 AM - 10:30 AM',
      location: 'Room 305',
      day: 1,
      color: 'mint',
    },
    {
      id: 2,
      title: 'Algorithms Lab',
      course: 'CS 301',
      time: '11:00 AM - 12:30 PM',
      location: 'Lab 2',
      day: 1,
      color: 'skyblue',
    },
    {
      id: 3,
      title: 'Office Hours',
      course: 'General',
      time: '2:00 PM - 4:00 PM',
      location: 'Office 412',
      day: 2,
      color: 'navy',
    },
    {
      id: 4,
      title: 'Database Systems',
      course: 'CS 305',
      time: '10:00 AM - 11:30 AM',
      location: 'Room 201',
      day: 3,
      color: 'mint',
    },
    {
      id: 5,
      title: 'Algorithm Theory',
      course: 'CS 301',
      time: '1:00 PM - 2:30 PM',
      location: 'Room 305',
      day: 4,
      color: 'skyblue',
    },
  ]

  type LessonStatusType = 'prepared' | 'draft' | 'not-started'

  const upcomingLessons: Array<{
    id: number
    title: string
    course: string
    date: string
    status: LessonStatusType
  }> = [
    { id: 1, title: 'Introduction to Trees', course: 'CS 201', date: 'Tomorrow', status: 'prepared' },
    { id: 2, title: 'Graph Algorithms', course: 'CS 301', date: 'Oct 20', status: 'draft' },
    { id: 3, title: 'SQL Joins', course: 'CS 305', date: 'Oct 21', status: 'not-started' },
  ]

  const colorClasses: Record<ColorType, string> = {
    mint: 'bg-mint-100 border-mint-300 text-mint-800',
    skyblue: 'bg-skyblue-100 border-skyblue-300 text-skyblue-800',
    navy: 'bg-navy-100 border-navy-300 text-navy-800',
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
            <Calendar className="w-8 h-8 text-mint-600" />
            Schedule & Lesson Planning
          </h1>
          <p className="text-navy-600 mt-2">Manage your teaching schedule and lesson plans</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setShowAIScheduler(true)}
            className="btn-secondary flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            AI Auto-Scheduler
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            className="btn-primary flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add Event
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weekly Schedule */}
        <div className="lg:col-span-2 card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-navy-900">Weekly Schedule</h2>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-beige-100 rounded-lg transition-colors">
                <ChevronLeft className="w-5 h-5 text-navy-600" />
              </button>
              <span className="text-navy-700 font-medium">Oct 18 - Oct 24, 2025</span>
              <button className="p-2 hover:bg-beige-100 rounded-lg transition-colors">
                <ChevronRight className="w-5 h-5 text-navy-600" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2">
            {weekDays.map((day, index) => (
              <div key={day} className="text-center">
                <div className="text-sm font-medium text-navy-600 mb-2">{day}</div>
                <div className="space-y-2">
                  {schedule
                    .filter(item => item.day === index + 1)
                    .map(item => (
                      <div
                        key={item.id}
                        className={`p-2 rounded-lg border-l-4 cursor-pointer hover:shadow-md transition-all ${colorClasses[item.color]}`}
                      >
                        <div className="text-xs font-semibold mb-1">{item.course}</div>
                        <div className="text-xs">{item.time.split('-')[0].trim()}</div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Lessons */}
        <div className="card">
          <h2 className="text-xl font-bold text-navy-900 mb-4">Upcoming Lessons</h2>
          <div className="space-y-3">
            {upcomingLessons.map(lesson => {
              const statusColors: Record<LessonStatusType, string> = {
                prepared: 'bg-green-100 text-green-700',
                draft: 'bg-yellow-100 text-yellow-700',
                'not-started': 'bg-red-100 text-red-700',
              }
              return (
                <div key={lesson.id} className="p-4 border border-beige-200 rounded-xl hover:border-mint-300 transition-colors cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-navy-900 text-sm mb-1">{lesson.title}</h3>
                      <p className="text-xs text-navy-600">{lesson.course}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-lg ${statusColors[lesson.status]}`}>
                      {lesson.status.replace('-', ' ')}
                    </span>
                  </div>
                  <p className="text-xs text-navy-500">{lesson.date}</p>
                </div>
              )
            })}
          </div>
          <button className="w-full mt-4 btn-secondary">
            View All Lessons
          </button>
        </div>
      </div>

      {/* Today's Schedule */}
      <div className="card">
        <h2 className="text-xl font-bold text-navy-900 mb-4">Today's Schedule</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {schedule.slice(0, 3).map(item => (
            <div key={item.id} className="p-4 border-l-4 border-mint-500 bg-mint-50 rounded-xl hover:shadow-md transition-all cursor-pointer">
              <h3 className="font-bold text-navy-900 mb-2">{item.title}</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-navy-600">
                  <Clock className="w-4 h-4" />
                  {item.time}
                </div>
                <div className="flex items-center gap-2 text-sm text-navy-600">
                  <MapPin className="w-4 h-4" />
                  {item.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-navy-600">
                  <Users className="w-4 h-4" />
                  {item.course}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Auto-Scheduler Modal */}
      {showAIScheduler && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-2xl w-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-mint-500 to-skyblue-500 rounded-xl">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-navy-900">AI Auto-Scheduler</h2>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-skyblue-50 border border-skyblue-200 rounded-xl">
                <p className="text-sm text-navy-700">
                  AI will automatically balance your workload considering holidays, exam dates, and optimal learning patterns.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-navy-700 mb-2">Semester Duration</label>
                <input type="text" placeholder="e.g., Sept 1 - Dec 15, 2025" className="input-field" />
              </div>

              <div>
                <label className="block text-sm font-medium text-navy-700 mb-2">Holidays & Breaks</label>
                <textarea placeholder="List any holidays or breaks..." className="input-field h-24" />
              </div>

              <div>
                <label className="block text-sm font-medium text-navy-700 mb-2">Preferred Teaching Days</label>
                <div className="flex gap-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                    <button key={day} className="flex-1 px-3 py-2 border border-beige-300 rounded-lg hover:bg-mint-50 hover:border-mint-400 transition-colors">
                      {day}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button onClick={() => setShowAIScheduler(false)} className="flex-1 btn-secondary">
                Cancel
              </button>
              <button className="flex-1 btn-primary flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5" />
                Generate Schedule
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Event Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-2xl w-full">
            <h2 className="text-2xl font-bold text-navy-900 mb-6">Add Event</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-2">Event Title</label>
                <input type="text" className="input-field" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">Start Time</label>
                  <input type="time" className="input-field" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">End Time</label>
                  <input type="time" className="input-field" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-2">Location</label>
                <input type="text" className="input-field" />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-2">Course</label>
                <select className="input-field">
                  <option>CS 201 - Data Structures</option>
                  <option>CS 301 - Algorithms</option>
                  <option>CS 305 - Database Systems</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button onClick={() => setShowAddModal(false)} className="flex-1 btn-secondary">
                Cancel
              </button>
              <button className="flex-1 btn-primary">
                Add Event
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
