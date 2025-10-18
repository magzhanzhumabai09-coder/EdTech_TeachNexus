'use client'

import React, { useState } from 'react'
import { Calendar, Clock, Plus, Edit, Trash2, Users, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

const timeSlots = [
  '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
]

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

const scheduleData: Record<string, Record<string, { title: string; room: string; students: number; color: string }>> = {
  'Monday': {
    '9:00 AM': { title: 'Math - Calculus II', room: 'Room 301', students: 28, color: 'from-blue-500 to-blue-600' },
    '11:00 AM': { title: 'Physics Lab', room: 'Lab 204', students: 24, color: 'from-green-500 to-green-600' },
    '2:00 PM': { title: 'Office Hours', room: 'Office 105', students: 0, color: 'from-gray-500 to-gray-600' }
  },
  'Tuesday': {
    '10:00 AM': { title: 'Chemistry Lecture', room: 'Room 205', students: 19, color: 'from-purple-500 to-purple-600' },
    '1:00 PM': { title: 'Math - Calculus II', room: 'Room 301', students: 28, color: 'from-blue-500 to-blue-600' }
  },
  'Wednesday': {
    '9:00 AM': { title: 'Physics - Mechanics', room: 'Room 302', students: 24, color: 'from-green-500 to-green-600' },
    '3:00 PM': { title: 'Faculty Meeting', room: 'Conference A', students: 0, color: 'from-orange-500 to-orange-600' }
  },
  'Thursday': {
    '10:00 AM': { title: 'Chemistry Lab', room: 'Lab 301', students: 19, color: 'from-purple-500 to-purple-600' },
    '2:00 PM': { title: 'Math - Calculus II', room: 'Room 301', students: 28, color: 'from-blue-500 to-blue-600' }
  },
  'Friday': {
    '9:00 AM': { title: 'Physics Quiz', room: 'Room 302', students: 24, color: 'from-green-500 to-green-600' },
    '11:00 AM': { title: 'Chemistry Review', room: 'Room 205', students: 19, color: 'from-purple-500 to-purple-600' }
  }
}

export default function SchedulePlanner() {
  const [selectedSlot, setSelectedSlot] = useState(null)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Schedule & Lesson Planning</h2>
          <p className="text-gray-600 mt-1">Manage your weekly schedule and plan lessons</p>
        </div>
        <div className="flex space-x-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-2xl hover:bg-primary-200 transition-colors"
          >
            <Calendar className="w-4 h-4" />
            <span>Sync Calendar</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-2xl hover:bg-primary-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add Event</span>
          </motion.button>
        </div>
      </div>

      {/* Schedule Grid */}
      <div className="bg-white rounded-3xl p-6 shadow-sm overflow-x-auto">
        <div className="min-w-full">
          {/* Header Row */}
          <div className="grid grid-cols-6 gap-4 mb-4">
            <div className="text-center font-semibold text-gray-700 py-3">Time</div>
            {weekDays.map(day => (
              <div key={day} className="text-center font-semibold text-gray-700 py-3">
                {day}
              </div>
            ))}
          </div>

          {/* Time Slots */}
          <div className="space-y-2">
            {timeSlots.map(time => (
              <div key={time} className="grid grid-cols-6 gap-4">
                <div className="text-center text-sm text-gray-600 py-4 font-medium">
                  {time}
                </div>
                {weekDays.map(day => {
                  const event = scheduleData[day]?.[time]
                  return (
                    <div key={`${day}-${time}`} className="min-h-[80px]">
                      {event ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className={`bg-gradient-to-r ${event.color} rounded-2xl p-3 text-white cursor-pointer hover:shadow-lg transition-all duration-200`}
                        >
                          <h4 className="font-semibold text-sm mb-1 truncate">{event.title}</h4>
                          <div className="flex items-center text-xs opacity-90 mb-1">
                            <MapPin className="w-3 h-3 mr-1" />
                            {event.room}
                          </div>
                          {event.students > 0 && (
                            <div className="flex items-center text-xs opacity-90">
                              <Users className="w-3 h-3 mr-1" />
                              {event.students} students
                            </div>
                          )}
                        </motion.div>
                      ) : (
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="h-full border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-center cursor-pointer hover:border-primary-300 hover:bg-primary-50 transition-all duration-200"
                        >
                          <Plus className="w-5 h-5 text-gray-400" />
                        </motion.div>
                      )}
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-6 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">This Week</p>
              <p className="text-2xl font-bold text-gray-900">18 Hours</p>
            </div>
            <Clock className="w-8 h-8 text-blue-500" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl p-6 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Classes</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
            <Calendar className="w-8 h-8 text-green-500" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-6 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Office Hours</p>
              <p className="text-2xl font-bold text-gray-900">4 Hours</p>
            </div>
            <Users className="w-8 h-8 text-purple-500" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl p-6 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Free Time</p>
              <p className="text-2xl font-bold text-gray-900">6 Hours</p>
            </div>
            <Clock className="w-8 h-8 text-orange-500" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}