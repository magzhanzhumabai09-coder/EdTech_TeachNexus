import React from 'react';
import { 
  PlusIcon, 
  CalendarIcon, 
  DocumentTextIcon,
  AcademicCapIcon,
  CpuChipIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const QuickActions: React.FC = () => {
  const actions = [
    {
      title: 'Create Assignment',
      description: 'Set up a new assignment for your students',
      icon: DocumentTextIcon,
      color: 'primary',
      href: '/assignments/new'
    },
    {
      title: 'Schedule Lesson',
      description: 'Plan your next class session',
      icon: CalendarIcon,
      color: 'mint',
      href: '/schedules/new'
    },
    {
      title: 'Generate Quiz',
      description: 'Create an AI-powered quiz',
      icon: AcademicCapIcon,
      color: 'beige',
      href: '/exams/new'
    },
    {
      title: 'AI Lesson Plan',
      description: 'Let AI help create your lesson',
      icon: CpuChipIcon,
      color: 'navy',
      href: '/ai-tools/lesson-generator'
    },
    {
      title: 'View Analytics',
      description: 'Check student performance data',
      icon: ChartBarIcon,
      color: 'primary',
      href: '/analytics'
    },
    {
      title: 'Quick Grade',
      description: 'Grade recent submissions',
      icon: PlusIcon,
      color: 'mint',
      href: '/assignments/grade'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: 'bg-primary-50 hover:bg-primary-100 text-primary-600 border-primary-200',
      mint: 'bg-mint-50 hover:bg-mint-100 text-mint-600 border-mint-200',
      beige: 'bg-beige-50 hover:bg-beige-100 text-beige-600 border-beige-200',
      navy: 'bg-navy-50 hover:bg-navy-100 text-navy-600 border-navy-200'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {actions.map((action, index) => (
          <a
            key={index}
            href={action.href}
            className={`
              p-4 rounded-xl border transition-all duration-200 hover:shadow-md cursor-pointer
              ${getColorClasses(action.color)}
            `}
          >
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-3">
                <action.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-medium mb-1">{action.title}</h4>
                <p className="text-sm opacity-80">{action.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;