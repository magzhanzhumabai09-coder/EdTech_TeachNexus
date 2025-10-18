'use client'

import React from 'react'
import { Bell, Search, User, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

interface HeaderProps {
  activeTab: string
}

const tabTitles = {
  dashboard: 'Dashboard',
  syllabus: 'Syllabus Management',
  schedule: 'Schedule & Planning',
  assignments: 'Assignments',
  exams: 'Exams & Quizzes',
  students: 'Student Management',
  analytics: 'Analytics & Reports',
  'ai-tools': 'AI Tools',
}

export default function Header({ activeTab }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Page Title */}
        <div className="flex items-center space-x-4">
          <motion.h1 
            key={activeTab}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold text-navy-800"
          >
            {tabTitles[activeTab as keyof typeof tabTitles] || 'Dashboard'}
          </motion.h1>
        </div>

        {/* Search and Actions */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search anything..."
              className="pl-10 pr-4 py-2 w-80 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Notifications */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-2xl transition-colors"
          >
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </motion.button>

          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <div className="hidden md:block text-right">
              <p className="text-sm font-medium text-gray-900">Sarah Johnson</p>
              <p className="text-xs text-gray-500">Mathematics Teacher</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-2xl transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center">
                <User size={16} className="text-white" />
              </div>
              <ChevronDown size={16} className="text-gray-500 hidden md:block" />
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  )
}