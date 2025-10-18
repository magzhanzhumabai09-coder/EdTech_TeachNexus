'use client'

import React from 'react'
import { Calendar, Clock, MapPin, Users } from 'lucide-react'
import { motion } from 'framer-motion'

const events = [
  {
    id: 1,
    title: 'Physics Lab Session',
    time: '10:00 AM - 11:30 AM',
    date: 'Today',
    location: 'Lab Room 204',
    attendees: 24,
    type: 'class',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 2,
    title: 'Parent-Teacher Meeting',
    time: '2:00 PM - 3:00 PM',
    date: 'Today',
    location: 'Conference Room A',
    attendees: 2,
    type: 'meeting',
    color: 'from-green-500 to-green-600'
  },
  {
    id: 3,
    title: 'Math Quiz - Algebra',
    time: '9:00 AM - 10:00 AM',
    date: 'Tomorrow',
    location: 'Room 301',
    attendees: 28,
    type: 'exam',
    color: 'from-orange-500 to-orange-600'
  },
  {
    id: 4,
    title: 'Faculty Meeting',
    time: '4:00 PM - 5:00 PM',
    date: 'Tomorrow',
    location: 'Main Hall',
    attendees: 15,
    type: 'meeting',
    color: 'from-purple-500 to-purple-600'
  }
]

export default function UpcomingEvents() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Upcoming Events</h2>
        <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
          View Calendar
        </button>
      </div>
      
      <div className="space-y-4">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center space-x-4 p-4 rounded-2xl border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-200 cursor-pointer"
          >
            <div className={`w-12 h-12 bg-gradient-to-r ${event.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
              <Calendar className="w-6 h-6 text-white" />
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 truncate">{event.title}</h3>
              <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {event.time}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {event.location}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {event.attendees}
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <span className="text-sm font-medium text-gray-900">{event.date}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}