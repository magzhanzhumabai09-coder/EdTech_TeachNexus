import React from 'react';
import OverviewCards from './OverviewCards';
import AISummary from './AISummary';
import QuickActions from './QuickActions';
import RecentActivity from './RecentActivity';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome back, Dr. Sarah Johnson!</h1>
        <p className="text-primary-100 text-lg">
          Here's what's happening in your classes today. You have 3 assignments to review and 2 upcoming exams this week.
        </p>
      </div>

      {/* Overview Cards */}
      <OverviewCards />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* AI Summary - Takes 2 columns on large screens */}
        <div className="lg:col-span-2">
          <AISummary />
        </div>
        
        {/* Recent Activity - Takes 1 column on large screens */}
        <div className="lg:col-span-1">
          <RecentActivity />
        </div>
      </div>

      {/* Quick Actions */}
      <QuickActions />

      {/* Upcoming Events */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Upcoming Events</h3>
        
        <div className="space-y-4">
          <div className="flex items-center p-4 bg-blue-50 rounded-xl border border-blue-200">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
            <div className="flex-1">
              <h4 className="font-medium text-gray-900">Advanced Calculus - Midterm Exam</h4>
              <p className="text-sm text-gray-600">Tomorrow at 10:00 AM - 12:00 PM</p>
            </div>
            <span className="text-sm font-medium text-blue-600">24h</span>
          </div>
          
          <div className="flex items-center p-4 bg-green-50 rounded-xl border border-green-200">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
            <div className="flex-1">
              <h4 className="font-medium text-gray-900">Linear Algebra - Assignment Due</h4>
              <p className="text-sm text-gray-600">Friday at 11:59 PM</p>
            </div>
            <span className="text-sm font-medium text-green-600">3d</span>
          </div>
          
          <div className="flex items-center p-4 bg-yellow-50 rounded-xl border border-yellow-200">
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-4"></div>
            <div className="flex-1">
              <h4 className="font-medium text-gray-900">Statistics - Project Presentation</h4>
              <p className="text-sm text-gray-600">Next Monday at 2:00 PM</p>
            </div>
            <span className="text-sm font-medium text-yellow-600">5d</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;