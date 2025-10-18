import React from 'react';
import { 
  UserIcon, 
  DocumentTextIcon, 
  AcademicCapIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationCircleIcon
} from '@heroicons/react/24/outline';

const RecentActivity: React.FC = () => {
  const activities = [
    {
      type: 'assignment',
      title: 'Calculus Problem Set #3',
      description: '15 students submitted, 3 pending',
      time: '2 hours ago',
      status: 'in-progress',
      icon: DocumentTextIcon
    },
    {
      type: 'exam',
      title: 'Linear Algebra Midterm',
      description: 'Grading completed, average: 87.3%',
      time: '4 hours ago',
      status: 'completed',
      icon: AcademicCapIcon
    },
    {
      type: 'student',
      title: 'New student enrolled',
      description: 'Emily Chen joined Advanced Calculus',
      time: '6 hours ago',
      status: 'info',
      icon: UserIcon
    },
    {
      type: 'assignment',
      title: 'Statistics Project',
      description: 'Due in 2 days, 8 students haven\'t started',
      time: '1 day ago',
      status: 'warning',
      icon: ExclamationCircleIcon
    },
    {
      type: 'exam',
      title: 'Differential Equations Quiz',
      description: 'Scheduled for tomorrow at 10 AM',
      time: '2 days ago',
      status: 'scheduled',
      icon: ClockIcon
    }
  ];

  const getStatusStyles = (status: string) => {
    const statusMap = {
      'in-progress': 'text-blue-600 bg-blue-50',
      'completed': 'text-green-600 bg-green-50',
      'info': 'text-gray-600 bg-gray-50',
      'warning': 'text-yellow-600 bg-yellow-50',
      'scheduled': 'text-purple-600 bg-purple-50'
    };
    return statusMap[status as keyof typeof statusMap] || statusMap.info;
  };

  const getStatusIcon = (status: string) => {
    if (status === 'completed') return CheckCircleIcon;
    if (status === 'warning') return ExclamationCircleIcon;
    return ClockIcon;
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
          View All
        </button>
      </div>
      
      <div className="space-y-4">
        {activities.map((activity, index) => {
          const StatusIcon = getStatusIcon(activity.status);
          return (
            <div key={index} className="flex items-start space-x-4 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                  <activity.icon className="w-5 h-5 text-gray-600" />
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-gray-900 truncate">
                    {activity.title}
                  </h4>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">{activity.description}</p>
                
                <div className="mt-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusStyles(activity.status)}`}>
                    <StatusIcon className="w-3 h-3 mr-1" />
                    {activity.status.replace('-', ' ')}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentActivity;