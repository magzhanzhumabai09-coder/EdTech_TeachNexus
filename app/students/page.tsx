'use client'

import { useState } from 'react'
import { Users, Search, Filter, Mail, Phone, Download, Eye, TrendingUp, TrendingDown } from 'lucide-react'

export default function StudentsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCourse, setSelectedCourse] = useState('all')

  type StatusType = 'active' | 'needs-attention' | 'at-risk'

  const students: Array<{
    id: number
    name: string
    email: string
    phone: string
    courses: string[]
    avgGrade: number
    attendance: number
    trend: 'up' | 'down'
    status: StatusType
  }> = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@university.edu',
      phone: '+1 234-567-8901',
      courses: ['CS 201', 'CS 301'],
      avgGrade: 92,
      attendance: 95,
      trend: 'up',
      status: 'active',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@university.edu',
      phone: '+1 234-567-8902',
      courses: ['CS 201', 'CS 305'],
      avgGrade: 88,
      attendance: 90,
      trend: 'up',
      status: 'active',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob.johnson@university.edu',
      phone: '+1 234-567-8903',
      courses: ['CS 201'],
      avgGrade: 65,
      attendance: 70,
      trend: 'down',
      status: 'needs-attention',
    },
    {
      id: 4,
      name: 'Alice Brown',
      email: 'alice.brown@university.edu',
      phone: '+1 234-567-8904',
      courses: ['CS 305', 'CS 301'],
      avgGrade: 94,
      attendance: 98,
      trend: 'up',
      status: 'active',
    },
    {
      id: 5,
      name: 'Charlie Wilson',
      email: 'charlie.wilson@university.edu',
      phone: '+1 234-567-8905',
      courses: ['CS 301'],
      avgGrade: 58,
      attendance: 65,
      trend: 'down',
      status: 'at-risk',
    },
  ]

  const statusColors: Record<StatusType, string> = {
    active: 'bg-green-100 text-green-700',
    'needs-attention': 'bg-yellow-100 text-yellow-700',
    'at-risk': 'bg-red-100 text-red-700',
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
            <Users className="w-8 h-8 text-mint-600" />
            Student Management
          </h1>
          <p className="text-navy-600 mt-2">View and manage all your students</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Download className="w-5 h-5" />
          Export List
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card">
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-5 h-5 text-mint-600" />
            <span className="text-sm text-navy-600 font-medium">Total Students</span>
          </div>
          <p className="text-3xl font-bold text-navy-900">284</p>
        </div>
        <div className="card">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <span className="text-sm text-navy-600 font-medium">Active</span>
          </div>
          <p className="text-3xl font-bold text-navy-900">267</p>
        </div>
        <div className="card">
          <div className="flex items-center gap-3 mb-2">
            <TrendingDown className="w-5 h-5 text-yellow-600" />
            <span className="text-sm text-navy-600 font-medium">Needs Attention</span>
          </div>
          <p className="text-3xl font-bold text-navy-900">12</p>
        </div>
        <div className="card">
          <div className="flex items-center gap-3 mb-2">
            <TrendingDown className="w-5 h-5 text-red-600" />
            <span className="text-sm text-navy-600 font-medium">At Risk</span>
          </div>
          <p className="text-3xl font-bold text-navy-900">5</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="card">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-navy-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search students by name or email..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-beige-300 focus:outline-none focus:ring-2 focus:ring-mint-400 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <select
              className="px-4 py-3 rounded-xl border border-beige-300 focus:outline-none focus:ring-2 focus:ring-mint-400"
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
            >
              <option value="all">All Courses</option>
              <option value="CS 201">CS 201</option>
              <option value="CS 301">CS 301</option>
              <option value="CS 305">CS 305</option>
            </select>
            <button className="btn-secondary flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Students Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map((student) => (
          <div key={student.id} className="card group hover:shadow-xl transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-gradient-to-r from-mint-500 to-skyblue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {student.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="font-bold text-navy-900">{student.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded-lg ${statusColors[student.status]}`}>
                    {student.status.replace('-', ' ')}
                  </span>
                </div>
              </div>
              {student.trend === 'up' ? (
                <TrendingUp className="w-5 h-5 text-green-600" />
              ) : (
                <TrendingDown className="w-5 h-5 text-red-600" />
              )}
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-navy-600">
                <Mail className="w-4 h-4" />
                <span className="truncate">{student.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-navy-600">
                <Phone className="w-4 h-4" />
                <span>{student.phone}</span>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-navy-600">Average Grade</span>
                <span className={`font-bold ${
                  student.avgGrade >= 90 ? 'text-green-600' :
                  student.avgGrade >= 70 ? 'text-skyblue-600' :
                  student.avgGrade >= 60 ? 'text-yellow-600' :
                  'text-red-600'
                }`}>
                  {student.avgGrade}%
                </span>
              </div>
              <div className="w-full bg-beige-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-mint-500 to-skyblue-500 h-2 rounded-full"
                  style={{ width: `${student.avgGrade}%` }}
                />
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-navy-600">Attendance</span>
                <span className="font-bold text-navy-900">{student.attendance}%</span>
              </div>
              <div className="w-full bg-beige-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-skyblue-500 to-navy-500 h-2 rounded-full"
                  style={{ width: `${student.attendance}%` }}
                />
              </div>
            </div>

            <div className="mb-4">
              <p className="text-xs text-navy-500 mb-2">Enrolled Courses</p>
              <div className="flex flex-wrap gap-1">
                {student.courses.map((course) => (
                  <span key={course} className="px-2 py-1 bg-mint-100 text-mint-700 text-xs rounded-lg">
                    {course}
                  </span>
                ))}
              </div>
            </div>

            <button className="w-full btn-secondary group-hover:bg-mint-100 transition-colors flex items-center justify-center gap-2">
              <Eye className="w-4 h-4" />
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
