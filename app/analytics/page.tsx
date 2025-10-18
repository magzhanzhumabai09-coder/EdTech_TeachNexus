'use client'

import { BarChart3, TrendingUp, TrendingDown, Users, Clock, CheckCircle, Activity, Download } from 'lucide-react'

export default function AnalyticsPage() {
  type StatusType = 'excellent' | 'good' | 'needs-attention' | 'at-risk'

  const courseAnalytics = [
    {
      id: 1,
      course: 'CS 201 - Data Structures',
      students: 45,
      avgAttendance: 87,
      avgGrade: 84,
      completionRate: 92,
      engagement: 78,
      trend: 'up',
    },
    {
      id: 2,
      course: 'CS 301 - Algorithms',
      students: 38,
      avgAttendance: 82,
      avgGrade: 79,
      completionRate: 88,
      engagement: 72,
      trend: 'down',
    },
    {
      id: 3,
      course: 'CS 305 - Database Systems',
      students: 52,
      avgAttendance: 91,
      avgGrade: 86,
      completionRate: 95,
      engagement: 85,
      trend: 'up',
    },
  ]

  const studentPerformance: Array<{
    id: number
    name: string
    course: string
    grade: number
    attendance: number
    status: StatusType
  }> = [
    { id: 1, name: 'John Doe', course: 'CS 201', grade: 92, attendance: 95, status: 'excellent' },
    { id: 2, name: 'Jane Smith', course: 'CS 301', grade: 88, attendance: 90, status: 'good' },
    { id: 3, name: 'Bob Johnson', course: 'CS 201', grade: 65, attendance: 70, status: 'needs-attention' },
    { id: 4, name: 'Alice Brown', course: 'CS 305', grade: 94, attendance: 98, status: 'excellent' },
    { id: 5, name: 'Charlie Wilson', course: 'CS 301', grade: 58, attendance: 65, status: 'at-risk' },
  ]

  const statusColors: Record<StatusType, string> = {
    excellent: 'bg-green-100 text-green-700',
    good: 'bg-skyblue-100 text-skyblue-700',
    'needs-attention': 'bg-yellow-100 text-yellow-700',
    'at-risk': 'bg-red-100 text-red-700',
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
            <BarChart3 className="w-8 h-8 text-mint-600" />
            Monitoring & Analytics
          </h1>
          <p className="text-navy-600 mt-2">Track performance metrics and gain insights</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Download className="w-5 h-5" />
          Export Report
        </button>
      </div>

      {/* Overall Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card bg-gradient-to-br from-mint-50 to-mint-100">
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-6 h-6 text-mint-600" />
            <span className="text-sm text-navy-600 font-medium">Total Students</span>
          </div>
          <p className="text-4xl font-bold text-navy-900">284</p>
          <div className="flex items-center gap-1 text-sm text-green-600 mt-2">
            <TrendingUp className="w-4 h-4" />
            <span>+12% from last semester</span>
          </div>
        </div>

        <div className="card bg-gradient-to-br from-skyblue-50 to-skyblue-100">
          <div className="flex items-center gap-3 mb-2">
            <Activity className="w-6 h-6 text-skyblue-600" />
            <span className="text-sm text-navy-600 font-medium">Avg. Engagement</span>
          </div>
          <p className="text-4xl font-bold text-navy-900">78%</p>
          <div className="flex items-center gap-1 text-sm text-green-600 mt-2">
            <TrendingUp className="w-4 h-4" />
            <span>+5% this month</span>
          </div>
        </div>

        <div className="card bg-gradient-to-br from-navy-50 to-navy-100">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="w-6 h-6 text-navy-600" />
            <span className="text-sm text-navy-600 font-medium">Avg. Time Spent</span>
          </div>
          <p className="text-4xl font-bold text-navy-900">4.2h</p>
          <div className="flex items-center gap-1 text-sm text-navy-500 mt-2">
            <TrendingDown className="w-4 h-4" />
            <span>-3% this week</span>
          </div>
        </div>

        <div className="card bg-gradient-to-br from-green-50 to-green-100">
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle className="w-6 h-6 text-green-600" />
            <span className="text-sm text-navy-600 font-medium">Completion Rate</span>
          </div>
          <p className="text-4xl font-bold text-navy-900">92%</p>
          <div className="flex items-center gap-1 text-sm text-green-600 mt-2">
            <TrendingUp className="w-4 h-4" />
            <span>+3% this month</span>
          </div>
        </div>
      </div>

      {/* Course Analytics */}
      <div className="card">
        <h2 className="text-xl font-bold text-navy-900 mb-6">Course Performance Overview</h2>
        <div className="space-y-4">
          {courseAnalytics.map((course) => (
            <div key={course.id} className="p-5 border-2 border-beige-200 rounded-2xl hover:border-mint-300 hover:shadow-md transition-all">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-navy-900 mb-1">{course.course}</h3>
                  <p className="text-sm text-navy-600">{course.students} students enrolled</p>
                </div>
                {course.trend === 'up' ? (
                  <div className="flex items-center gap-1 text-green-600 bg-green-50 px-3 py-1 rounded-lg">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-medium">Improving</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1 text-red-600 bg-red-50 px-3 py-1 rounded-lg">
                    <TrendingDown className="w-4 h-4" />
                    <span className="text-sm font-medium">Needs Focus</span>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div>
                  <p className="text-xs text-navy-500 mb-1">Avg. Attendance</p>
                  <p className="text-2xl font-bold text-navy-900">{course.avgAttendance}%</p>
                </div>
                <div>
                  <p className="text-xs text-navy-500 mb-1">Avg. Grade</p>
                  <p className="text-2xl font-bold text-navy-900">{course.avgGrade}%</p>
                </div>
                <div>
                  <p className="text-xs text-navy-500 mb-1">Completion Rate</p>
                  <p className="text-2xl font-bold text-navy-900">{course.completionRate}%</p>
                </div>
                <div>
                  <p className="text-xs text-navy-500 mb-1">Engagement</p>
                  <p className="text-2xl font-bold text-navy-900">{course.engagement}%</p>
                </div>
                <div className="flex items-end">
                  <button className="btn-secondary w-full py-2 text-sm">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Student Performance Table */}
      <div className="card">
        <h2 className="text-xl font-bold text-navy-900 mb-6">Student Performance Monitoring</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-beige-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-navy-700">Student Name</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-navy-700">Course</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-navy-700">Grade</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-navy-700">Attendance</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-navy-700">Status</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-navy-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {studentPerformance.map((student) => (
                <tr key={student.id} className="border-b border-beige-200 hover:bg-beige-50 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-mint-500 to-skyblue-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {student.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="font-medium text-navy-900">{student.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-navy-600">{student.course}</td>
                  <td className="py-4 px-4 text-center">
                    <span className={`font-bold ${
                      student.grade >= 90 ? 'text-green-600' :
                      student.grade >= 70 ? 'text-skyblue-600' :
                      student.grade >= 60 ? 'text-yellow-600' :
                      'text-red-600'
                    }`}>
                      {student.grade}%
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="font-medium text-navy-900">{student.attendance}%</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className={`px-3 py-1 rounded-lg text-xs font-medium ${statusColors[student.status]}`}>
                      {student.status.replace('-', ' ')}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <button className="text-mint-600 hover:text-mint-700 font-medium text-sm">
                      View Profile
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
