'use client'

import { Calendar, BookOpen, FileText, GraduationCap, TrendingUp, Users, Clock, AlertCircle } from 'lucide-react'
import DashboardCard from '@/components/DashboardCard'
import QuickStats from '@/components/QuickStats'
import UpcomingEvents from '@/components/UpcomingEvents'
import RecentActivity from '@/components/RecentActivity'
import AIInsights from '@/components/AIInsights'

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-mint-500 via-skyblue-500 to-navy-600 rounded-3xl p-8 text-white">
        <h1 className="text-4xl font-bold mb-2">Welcome back, Professor! 👋</h1>
        <p className="text-mint-50 text-lg">Here's what's happening with your classes today</p>
      </div>

      {/* Quick Stats */}
      <QuickStats />

      {/* AI Insights */}
      <AIInsights />

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Events */}
        <UpcomingEvents />

        {/* Recent Activity */}
        <RecentActivity />
      </div>

      {/* Quick Access Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Active Courses"
          value="6"
          icon={<BookOpen className="w-8 h-8" />}
          color="mint"
          link="/courses"
        />
        <DashboardCard
          title="Total Students"
          value="284"
          icon={<Users className="w-8 h-8" />}
          color="skyblue"
          link="/students"
        />
        <DashboardCard
          title="Pending Assignments"
          value="12"
          icon={<FileText className="w-8 h-8" />}
          color="navy"
          link="/assignments"
        />
        <DashboardCard
          title="Upcoming Exams"
          value="3"
          icon={<GraduationCap className="w-8 h-8" />}
          color="mint"
          link="/exams"
        />
      </div>
    </div>
  )
}
