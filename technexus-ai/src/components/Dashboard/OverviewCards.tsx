import React from 'react';
import { 
  AcademicCapIcon, 
  UserGroupIcon, 
  ClipboardDocumentListIcon,
  ChartBarIcon,
  ClockIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

const OverviewCards: React.FC = () => {
  const cards = [
    {
      title: 'Active Courses',
      value: '8',
      change: '+2 this semester',
      changeType: 'positive',
      icon: AcademicCapIcon,
      color: 'primary'
    },
    {
      title: 'Total Students',
      value: '247',
      change: '+12 new enrollments',
      changeType: 'positive',
      icon: UserGroupIcon,
      color: 'mint'
    },
    {
      title: 'Pending Assignments',
      value: '23',
      change: 'Due this week',
      changeType: 'warning',
      icon: ClipboardDocumentListIcon,
      color: 'beige'
    },
    {
      title: 'Average Grade',
      value: '87.3%',
      change: '+2.1% from last month',
      changeType: 'positive',
      icon: ChartBarIcon,
      color: 'navy'
    },
    {
      title: 'Upcoming Exams',
      value: '5',
      change: 'Next 2 weeks',
      changeType: 'neutral',
      icon: ClockIcon,
      color: 'primary'
    },
    {
      title: 'Attendance Rate',
      value: '94.2%',
      change: 'Above average',
      changeType: 'positive',
      icon: ExclamationTriangleIcon,
      color: 'mint'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: 'bg-primary-50 text-primary-600 border-primary-200',
      mint: 'bg-mint-50 text-mint-600 border-mint-200',
      beige: 'bg-beige-50 text-beige-600 border-beige-200',
      navy: 'bg-navy-50 text-navy-600 border-navy-200'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  const getChangeColor = (changeType: string) => {
    const changeMap = {
      positive: 'text-green-600',
      warning: 'text-yellow-600',
      neutral: 'text-gray-600'
    };
    return changeMap[changeType as keyof typeof changeMap] || changeMap.neutral;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">{card.title}</p>
              <p className="text-3xl font-bold text-gray-900 mb-2">{card.value}</p>
              <p className={`text-sm ${getChangeColor(card.changeType)}`}>
                {card.change}
              </p>
            </div>
            <div className={`p-3 rounded-xl border ${getColorClasses(card.color)}`}>
              <card.icon className="w-6 h-6" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OverviewCards;