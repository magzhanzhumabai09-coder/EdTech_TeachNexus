'use client'

import React from 'react'
import OverviewCards from './OverviewCards'
import QuickActions from './QuickActions'
import RecentActivity from './RecentActivity'
import UpcomingEvents from './UpcomingEvents'
import { motion } from 'framer-motion'

export default function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-8 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-3xl font-bold mb-2">Good morning, Sarah! 👋</h1>
          <p className="text-primary-100 text-lg">
            You have 3 classes today and 12 assignments to review. Let's make it a great day!
          </p>
        </motion.div>
      </div>

      {/* Overview Cards */}
      <OverviewCards />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          <QuickActions />
          <RecentActivity />
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <UpcomingEvents />
          
          {/* AI Insights Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-3xl p-6 shadow-sm"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">AI Insights</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-2xl">
                <h3 className="font-semibold text-blue-900 mb-2">📈 Student Engagement</h3>
                <p className="text-blue-800 text-sm">
                  Math class engagement is up 15% this week. Consider similar interactive methods for Physics.
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-2xl">
                <h3 className="font-semibold text-green-900 mb-2">✅ Assignment Patterns</h3>
                <p className="text-green-800 text-sm">
                  Students perform 23% better on assignments given on Tuesdays. Optimal scheduling detected.
                </p>
              </div>
              <div className="p-4 bg-orange-50 rounded-2xl">
                <h3 className="font-semibold text-orange-900 mb-2">⚠️ Learning Gap Alert</h3>
                <p className="text-orange-800 text-sm">
                  5 students struggling with quadratic equations. Recommend additional practice sessions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}