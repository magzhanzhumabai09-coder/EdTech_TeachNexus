'use client'

import React, { useState } from 'react'
import { Plus, Edit, Share, Download, Bot, Calendar, Users, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

const syllabi = [
  {
    id: 1,
    title: 'Advanced Mathematics - Calculus II',
    course: 'MATH 202',
    semester: 'Fall 2024',
    students: 28,
    lastModified: '2 days ago',
    status: 'active',
    progress: 65,
    topics: 12,
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 2,
    title: 'Physics - Mechanics & Thermodynamics',
    course: 'PHYS 101',
    semester: 'Fall 2024',
    students: 24,
    lastModified: '1 week ago',
    status: 'active',
    progress: 45,
    topics: 15,
    color: 'from-green-500 to-green-600'
  },
  {
    id: 3,
    title: 'Chemistry - Organic Chemistry',
    course: 'CHEM 301',
    semester: 'Fall 2024',
    students: 19,
    lastModified: '3 days ago',
    status: 'draft',
    progress: 20,
    topics: 10,
    color: 'from-purple-500 to-purple-600'
  }
]

export default function SyllabusManager() {
  const [selectedSyllabus, setSelectedSyllabus] = useState(null)

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Syllabus Management</h2>
          <p className="text-gray-600 mt-1">Create, edit, and manage your course syllabi</p>
        </div>
        <div className="flex space-x-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-2xl hover:bg-primary-200 transition-colors"
          >
            <Bot className="w-4 h-4" />
            <span>AI Generator</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-2xl hover:bg-primary-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>New Syllabus</span>
          </motion.button>
        </div>
      </div>

      {/* Syllabus Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {syllabi.map((syllabus, index) => (
          <motion.div
            key={syllabus.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 card-hover cursor-pointer"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 bg-gradient-to-r ${syllabus.color} rounded-2xl flex items-center justify-center`}>
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div className="flex space-x-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  syllabus.status === 'active' 
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {syllabus.status}
                </span>
              </div>
            </div>

            {/* Content */}
            <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{syllabus.title}</h3>
            <p className="text-primary-600 font-medium mb-4">{syllabus.course} • {syllabus.semester}</p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <Users className="w-4 h-4 mr-2" />
                {syllabus.students} students
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 mr-2" />
                {syllabus.topics} topics
              </div>
            </div>

            {/* Progress */}
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Progress</span>
                <span className="font-medium text-gray-900">{syllabus.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${syllabus.progress}%` }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                  className={`bg-gradient-to-r ${syllabus.color} h-2 rounded-full`}
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
              <span className="text-sm text-gray-500">Modified {syllabus.lastModified}</span>
              <div className="flex space-x-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-colors"
                >
                  <Edit className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-colors"
                >
                  <Share className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-colors"
                >
                  <Download className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* AI Syllabus Generator Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-r from-primary-500 to-primary-700 rounded-3xl p-8 text-white"
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2">AI Syllabus Generator</h3>
            <p className="text-primary-100 mb-4 max-w-2xl">
              Let our AI assistant help you create comprehensive syllabi. Just provide the course details, 
              and we'll generate topics, time allocations, learning outcomes, and assessment strategies.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-primary-700 px-6 py-3 rounded-2xl font-medium hover:bg-primary-50 transition-colors"
            >
              Try AI Generator
            </motion.button>
          </div>
          <div className="hidden lg:block">
            <Bot className="w-24 h-24 text-primary-200" />
          </div>
        </div>
      </motion.div>
    </div>
  )
}