'use client'

import React from 'react'
import { BarChart3, TrendingUp, Users, Clock, Award, AlertTriangle } from 'lucide-react'
import { motion } from 'framer-motion'

const analyticsData = {
  studentEngagement: [
    { name: 'Mon', value: 85 },
    { name: 'Tue', value: 92 },
    { name: 'Wed', value: 78 },
    { name: 'Thu', value: 88 },
    { name: 'Fri', value: 95 }
  ],
  classPerformance: [
    { class: 'Math - Calculus II', average: 87, trend: 'up' },
    { class: 'Physics - Mechanics', average: 82, trend: 'up' },
    { class: 'Chemistry - Organic', average: 79, trend: 'down' }
  ],
  topPerformers: [
    { name: 'Jessica Chen', score: 96, subject: 'Mathematics' },
    { name: 'Alex Johnson', score: 94, subject: 'Physics' },
    { name: 'Maria Garcia', score: 92, subject: 'Chemistry' }
  ],
  needsAttention: [
    { name: 'David Kim', issue: 'Low assignment completion', priority: 'high' },
    { name: 'Sarah Wilson', issue: 'Declining test scores', priority: 'medium' },
    { name: 'Mike Brown', issue: 'Frequent absences', priority: 'high' }
  ]
}

export default function AnalyticsDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Analytics & Reports</h2>
        <p className="text-gray-600 mt-1">Track performance and gain insights into your teaching effectiveness</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-6 shadow-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <span className="text-green-600 text-sm font-medium">+5.2%</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">87%</h3>
          <p className="text-gray-600 text-sm">Average Engagement</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl p-6 shadow-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <span className="text-green-600 text-sm font-medium">+2.8%</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">83%</h3>
          <p className="text-gray-600 text-sm">Assignment Completion</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl p-6 shadow-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <span className="text-green-600 text-sm font-medium">+1.5%</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">B+</h3>
          <p className="text-gray-600 text-sm">Average Grade</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl p-6 shadow-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <span className="text-red-600 text-sm font-medium">-0.3%</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">94%</h3>
          <p className="text-gray-600 text-sm">Attendance Rate</p>
        </motion.div>
      </div>

      {/* Charts and Data */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Engagement Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-3xl p-6 shadow-sm"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6">Weekly Engagement Trends</h3>
          <div className="space-y-4">
            {analyticsData.studentEngagement.map((day, index) => (
              <div key={day.name} className="flex items-center justify-between">
                <span className="text-gray-600 font-medium w-12">{day.name}</span>
                <div className="flex-1 mx-4">
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${day.value}%` }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full"
                    />
                  </div>
                </div>
                <span className="text-gray-900 font-semibold w-12 text-right">{day.value}%</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Class Performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-3xl p-6 shadow-sm"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6">Class Performance</h3>
          <div className="space-y-4">
            {analyticsData.classPerformance.map((classData, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{classData.class}</h4>
                  <p className="text-sm text-gray-600">Average Score</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl font-bold text-gray-900">{classData.average}%</span>
                  <div className={`p-2 rounded-xl ${
                    classData.trend === 'up' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                  }`}>
                    <TrendingUp className={`w-4 h-4 ${classData.trend === 'down' ? 'rotate-180' : ''}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Students Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Performers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-3xl p-6 shadow-sm"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6">Top Performers</h3>
          <div className="space-y-4">
            {analyticsData.topPerformers.map((student, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{student.name}</h4>
                  <p className="text-sm text-gray-600">{student.subject}</p>
                </div>
                <div className="text-right">
                  <span className="text-xl font-bold text-green-600">{student.score}%</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Needs Attention */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-3xl p-6 shadow-sm"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6">Students Needing Attention</h3>
          <div className="space-y-4">
            {analyticsData.needsAttention.map((student, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 bg-red-50 rounded-2xl">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  student.priority === 'high' ? 'bg-red-500' : 'bg-orange-500'
                }`}>
                  <AlertTriangle className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{student.name}</h4>
                  <p className="text-sm text-gray-600">{student.issue}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  student.priority === 'high' 
                    ? 'bg-red-100 text-red-800' 
                    : 'bg-orange-100 text-orange-800'
                }`}>
                  {student.priority}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}