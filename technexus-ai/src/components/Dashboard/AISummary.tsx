import React from 'react';
import { CpuChipIcon, LightBulbIcon, TrendingUpIcon } from '@heroicons/react/24/outline';

const AISummary: React.FC = () => {
  const insights = [
    {
      title: 'Student Engagement Trend',
      description: 'Your Advanced Calculus class shows a 15% increase in engagement this week. Students are particularly active during problem-solving sessions.',
      type: 'positive',
      icon: TrendingUpIcon
    },
    {
      title: 'Learning Gap Detected',
      description: '3 students in Linear Algebra are struggling with matrix operations. Consider scheduling additional review sessions.',
      type: 'warning',
      icon: LightBulbIcon
    },
    {
      title: 'Optimal Teaching Time',
      description: 'AI analysis suggests your students are most responsive during 10-11 AM sessions. Consider scheduling complex topics during this window.',
      type: 'info',
      icon: CpuChipIcon
    }
  ];

  const getTypeStyles = (type: string) => {
    const typeMap = {
      positive: 'bg-green-50 border-green-200 text-green-800',
      warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
      info: 'bg-blue-50 border-blue-200 text-blue-800'
    };
    return typeMap[type as keyof typeof typeMap] || typeMap.info;
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 mb-8">
      <div className="flex items-center mb-6">
        <div className="p-2 bg-primary-50 rounded-xl mr-3">
          <CpuChipIcon className="w-6 h-6 text-primary-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">AI Insights & Recommendations</h3>
          <p className="text-sm text-gray-500">Powered by advanced analytics</p>
        </div>
      </div>
      
      <div className="space-y-4">
        {insights.map((insight, index) => (
          <div
            key={index}
            className={`p-4 rounded-xl border ${getTypeStyles(insight.type)}`}
          >
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-3">
                <insight.icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-medium mb-1">{insight.title}</h4>
                <p className="text-sm opacity-90">{insight.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <button className="w-full bg-primary-600 text-white py-2 px-4 rounded-xl hover:bg-primary-700 transition-colors duration-200 font-medium">
          View Detailed Analytics
        </button>
      </div>
    </div>
  );
};

export default AISummary;