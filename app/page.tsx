'use client'

import React, { useState } from 'react'
import Sidebar from '@/components/Layout/Sidebar'
import Header from '@/components/Layout/Header'
import Dashboard from '@/components/Dashboard/Dashboard'
import SyllabusManager from '@/components/Syllabus/SyllabusManager'
import AIToolsGrid from '@/components/AITools/AIToolsGrid'
import SchedulePlanner from '@/components/Schedule/SchedulePlanner'
import AnalyticsDashboard from '@/components/Analytics/AnalyticsDashboard'
import { motion, AnimatePresence } from 'framer-motion'

// Placeholder components for other tabs

const AssignmentManager = () => (
  <div className="bg-white rounded-3xl p-8 shadow-sm">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Assignment Management</h2>
    <p className="text-gray-600">Create, distribute, and grade assignments online...</p>
  </div>
)

const ExamBuilder = () => (
  <div className="bg-white rounded-3xl p-8 shadow-sm">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Exams & Quizzes</h2>
    <p className="text-gray-600">Customizable exam builder with multiple question formats...</p>
  </div>
)

const StudentManager = () => (
  <div className="bg-white rounded-3xl p-8 shadow-sm">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Student Management</h2>
    <p className="text-gray-600">Manage student profiles, track progress, and communicate...</p>
  </div>
)


export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />
      case 'syllabus':
        return <SyllabusManager />
      case 'schedule':
        return <SchedulePlanner />
      case 'assignments':
        return <AssignmentManager />
      case 'exams':
        return <ExamBuilder />
      case 'students':
        return <StudentManager />
      case 'analytics':
        return <AnalyticsDashboard />
      case 'ai-tools':
        return <AIToolsGrid />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-80">
        {/* Header */}
        <Header activeTab={activeTab} />
        
        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          <div className="p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  )
}