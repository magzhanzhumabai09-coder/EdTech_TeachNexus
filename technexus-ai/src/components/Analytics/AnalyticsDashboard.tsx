import React, { useState } from 'react';
import { 
  ChartBarIcon, 
  UserGroupIcon, 
  AcademicCapIcon,
  ClockIcon,
  TrendingUpIcon,
  TrendingDownIcon,
  EyeIcon,
  ArrowUpIcon,
  ArrowDownIcon
} from '@heroicons/react/24/outline';

const AnalyticsDashboard: React.FC = () => {
  const [timeRange, setTimeRange] = useState('30d');

  const metrics = [
    {
      title: 'Student Engagement',
      value: '87.3%',
      change: '+5.2%',
      changeType: 'positive',
      icon: UserGroupIcon,
      color: 'primary'
    },
    {
      title: 'Assignment Completion',
      value: '94.1%',
      change: '+2.1%',
      changeType: 'positive',
      icon: AcademicCapIcon,
      color: 'mint'
    },
    {
      title: 'Average Grade',
      value: 'B+',
      change: '+0.3',
      changeType: 'positive',
      icon: ChartBarIcon,
      color: 'beige'
    },
    {
      title: 'Time Spent Learning',
      value: '2.4h',
      change: '-0.2h',
      changeType: 'negative',
      icon: ClockIcon,
      color: 'navy'
    }
  ];

  const courses = [
    {
      name: 'Advanced Calculus I',
      code: 'MATH 301',
      students: 28,
      engagement: 89.2,
      avgGrade: 87.5,
      completion: 96.4,
      trend: 'up'
    },
    {
      name: 'Linear Algebra',
      code: 'MATH 201',
      students: 35,
      engagement: 82.1,
      avgGrade: 84.3,
      completion: 91.2,
      trend: 'up'
    },
    {
      name: 'Differential Equations',
      code: 'MATH 401',
      students: 22,
      engagement: 85.7,
      avgGrade: 89.1,
      completion: 94.5,
      trend: 'down'
    },
    {
      name: 'Statistics & Probability',
      code: 'MATH 250',
      students: 30,
      engagement: 78.9,
      avgGrade: 81.2,
      completion: 88.7,
      trend: 'up'
    }
  ];

  const recentActivity = [
    {
      type: 'assignment',
      title: 'Calculus Problem Set #3',
      action: 'Graded',
      time: '2 hours ago',
      impact: '+2.1% avg grade'
    },
    {
      type: 'student',
      title: 'Emily Chen',
      action: 'Submitted late assignment',
      time: '4 hours ago',
      impact: 'Flagged for follow-up'
    },
    {
      type: 'exam',
      title: 'Linear Algebra Quiz 2',
      action: 'Completed by all students',
      time: '6 hours ago',
      impact: '87.3% average score'
    },
    {
      type: 'engagement',
      title: 'Advanced Calculus Discussion',
      action: 'High participation detected',
      time: '1 day ago',
      impact: '94% student engagement'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: 'bg-primary-50 text-primary-600',
      mint: 'bg-mint-50 text-mint-600',
      beige: 'bg-beige-50 text-beige-600',
      navy: 'bg-navy-50 text-navy-600'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  const getChangeIcon = (changeType: string) => {
    return changeType === 'positive' ? ArrowUpIcon : ArrowDownIcon;
  };

  const getChangeColor = (changeType: string) => {
    return changeType === 'positive' ? 'text-green-600' : 'text-red-600';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Analytics & Monitoring</h2>
          <p className="text-gray-600">Track performance and engagement across all your courses</p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
          <button className="bg-primary-600 text-white px-4 py-2 rounded-xl hover:bg-primary-700 transition-colors duration-200">
            Export Report
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const ChangeIcon = getChangeIcon(metric.changeType);
          return (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${getColorClasses(metric.color)}`}>
                  <metric.icon className="w-6 h-6" />
                </div>
                <div className={`flex items-center text-sm font-medium ${getChangeColor(metric.changeType)}`}>
                  <ChangeIcon className="w-4 h-4 mr-1" />
                  {metric.change}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</h3>
              <p className="text-sm text-gray-600">{metric.title}</p>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Engagement Trend */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Student Engagement Trend</h3>
            <div className="flex items-center text-green-600">
              <TrendingUpIcon className="w-5 h-5 mr-1" />
              <span className="text-sm font-medium">+5.2%</span>
            </div>
          </div>
          <div className="h-64 bg-gray-50 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <ChartBarIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Engagement chart would be here</p>
            </div>
          </div>
        </div>

        {/* Grade Distribution */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Grade Distribution</h3>
            <div className="flex items-center text-blue-600">
              <EyeIcon className="w-5 h-5 mr-1" />
              <span className="text-sm font-medium">View Details</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">A (90-100)</span>
              <div className="flex items-center">
                <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '35%' }}></div>
                </div>
                <span className="text-sm font-medium text-gray-900">35%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">B (80-89)</span>
              <div className="flex items-center">
                <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '42%' }}></div>
                </div>
                <span className="text-sm font-medium text-gray-900">42%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">C (70-79)</span>
              <div className="flex items-center">
                <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '18%' }}></div>
                </div>
                <span className="text-sm font-medium text-gray-900">18%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">D/F (Below 70)</span>
              <div className="flex items-center">
                <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                  <div className="bg-red-500 h-2 rounded-full" style={{ width: '5%' }}></div>
                </div>
                <span className="text-sm font-medium text-gray-900">5%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Performance */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Course Performance Overview</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-900">Course</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Students</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Engagement</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Avg Grade</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Completion</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Trend</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div>
                      <div className="font-medium text-gray-900">{course.name}</div>
                      <div className="text-sm text-gray-500">{course.code}</div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-900">{course.students}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div 
                          className="bg-primary-500 h-2 rounded-full" 
                          style={{ width: `${course.engagement}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{course.engagement}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-900">{course.avgGrade}%</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div 
                          className="bg-mint-500 h-2 rounded-full" 
                          style={{ width: `${course.completion}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{course.completion}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className={`flex items-center ${course.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {course.trend === 'up' ? (
                        <TrendingUpIcon className="w-4 h-4 mr-1" />
                      ) : (
                        <TrendingDownIcon className="w-4 h-4 mr-1" />
                      )}
                      <span className="text-sm font-medium capitalize">{course.trend}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h3>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center p-4 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center mr-4">
                <AcademicCapIcon className="w-5 h-5 text-primary-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">{activity.title}</h4>
                <p className="text-sm text-gray-600">{activity.action}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">{activity.time}</p>
                <p className="text-xs text-primary-600">{activity.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;