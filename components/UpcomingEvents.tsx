'use client'

import { Calendar, Clock, MapPin } from 'lucide-react'

export default function UpcomingEvents() {
  type EventType = 'exam' | 'meeting' | 'deadline'

  const events: Array<{
    id: number
    title: string
    course: string
    date: string
    location: string
    type: EventType
  }> = [
    {
      id: 1,
      title: 'Data Structures Exam',
      course: 'CS 201',
      date: 'Tomorrow, 10:00 AM',
      location: 'Room 305',
      type: 'exam',
    },
    {
      id: 2,
      title: 'Parent-Teacher Meeting',
      course: 'General',
      date: 'Oct 20, 2:00 PM',
      location: 'Conference Room',
      type: 'meeting',
    },
    {
      id: 3,
      title: 'Algorithm Assignment Due',
      course: 'CS 301',
      date: 'Oct 21, 11:59 PM',
      location: 'Online',
      type: 'deadline',
    },
    {
      id: 4,
      title: 'Department Faculty Meeting',
      course: 'CS Department',
      date: 'Oct 22, 3:00 PM',
      location: 'Room 101',
      type: 'meeting',
    },
  ]

  const typeColors: Record<EventType, string> = {
    exam: 'bg-red-100 text-red-700',
    meeting: 'bg-skyblue-100 text-skyblue-700',
    deadline: 'bg-mint-100 text-mint-700',
  }

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-navy-900 flex items-center gap-2">
          <Calendar className="w-6 h-6 text-mint-600" />
          Upcoming Events
        </h2>
        <button className="text-sm text-mint-600 hover:text-mint-700 font-medium">
          View All
        </button>
      </div>

      <div className="space-y-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="p-4 rounded-xl border border-beige-200 hover:border-mint-300 hover:bg-mint-50/30 transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <h3 className="font-semibold text-navy-900 mb-1">{event.title}</h3>
                <p className="text-sm text-navy-600">{event.course}</p>
              </div>
              <span className={`text-xs px-2 py-1 rounded-lg ${typeColors[event.type]}`}>
                {event.type}
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm text-navy-500 mt-3">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {event.date}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {event.location}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
