'use client'

import { BookOpen, Users, Calendar, FileText, Plus } from 'lucide-react'

export default function CoursesPage() {
  type ColorType = 'mint' | 'skyblue' | 'navy'

  const courses: Array<{
    id: number
    code: string
    name: string
    students: number
    schedule: string
    room: string
    color: ColorType
  }> = [
    {
      id: 1,
      code: 'CS 201',
      name: 'Data Structures',
      students: 45,
      schedule: 'Mon, Wed 9:00-10:30 AM',
      room: 'Room 305',
      color: 'mint',
    },
    {
      id: 2,
      code: 'CS 301',
      name: 'Algorithms',
      students: 38,
      schedule: 'Tue, Thu 11:00-12:30 PM',
      room: 'Room 201',
      color: 'skyblue',
    },
    {
      id: 3,
      code: 'CS 305',
      name: 'Database Systems',
      students: 52,
      schedule: 'Mon, Wed, Fri 2:00-3:00 PM',
      room: 'Room 401',
      color: 'navy',
    },
  ]

  const colorClasses: Record<ColorType, string> = {
    mint: 'from-mint-500 to-mint-600',
    skyblue: 'from-skyblue-500 to-skyblue-600',
    navy: 'from-navy-600 to-navy-700',
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-navy-900 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-mint-600" />
            My Courses
          </h1>
          <p className="text-navy-600 mt-2">Manage your teaching courses</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Add Course
        </button>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="card group hover:shadow-xl transition-all cursor-pointer">
            <div className={`h-32 -mx-6 -mt-6 mb-6 rounded-t-2xl bg-gradient-to-r ${colorClasses[course.color]} flex items-center justify-center`}>
              <div className="text-center text-white">
                <p className="text-3xl font-bold mb-1">{course.code}</p>
                <p className="text-mint-50">{course.name}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-navy-600">
                <Users className="w-5 h-5" />
                <span>{course.students} Students</span>
              </div>
              <div className="flex items-center gap-2 text-navy-600">
                <Calendar className="w-5 h-5" />
                <span className="text-sm">{course.schedule}</span>
              </div>
              <div className="flex items-center gap-2 text-navy-600">
                <FileText className="w-5 h-5" />
                <span>{course.room}</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-beige-200">
              <button className="w-full btn-secondary group-hover:bg-mint-100 transition-colors">
                View Course
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
