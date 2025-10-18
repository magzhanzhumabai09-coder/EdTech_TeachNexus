import React, { useState } from 'react';
import { 
  CpuChipIcon, 
  BookOpenIcon, 
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  LightBulbIcon,
  SparklesIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

interface AITool {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  status: 'available' | 'beta' | 'coming-soon';
  features: string[];
}

const AIToolsHub: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  const tools: AITool[] = [
    {
      id: 'lesson-generator',
      name: 'Lesson Generator',
      description: 'Create engaging lesson plans and presentations from syllabus topics',
      icon: BookOpenIcon,
      color: 'primary',
      status: 'available',
      features: ['Auto-generate lesson structure', 'Include learning objectives', 'Add interactive elements', 'Export to multiple formats']
    },
    {
      id: 'feedback-assistant',
      name: 'Feedback Assistant',
      description: 'Generate personalized student feedback and improvement suggestions',
      icon: ChatBubbleLeftRightIcon,
      color: 'mint',
      status: 'available',
      features: ['Personalized feedback', 'Improvement suggestions', 'Tone adjustment', 'Bulk processing']
    },
    {
      id: 'performance-analyzer',
      name: 'Performance Analyzer',
      description: 'Detect learning gaps and analyze student performance patterns',
      icon: ChartBarIcon,
      color: 'beige',
      status: 'beta',
      features: ['Learning gap detection', 'Performance trends', 'Risk identification', 'Intervention suggestions']
    },
    {
      id: 'content-rewriter',
      name: 'Content Rewriter',
      description: 'Convert teacher notes into engaging student materials',
      icon: DocumentTextIcon,
      color: 'navy',
      status: 'available',
      features: ['Simplify complex concepts', 'Add visual elements', 'Create study guides', 'Generate summaries']
    },
    {
      id: 'quiz-generator',
      name: 'Quiz Generator',
      description: 'Create quizzes and assessments with various question types',
      icon: AcademicCapIcon,
      color: 'primary',
      status: 'available',
      features: ['Multiple question types', 'Difficulty adjustment', 'Auto-grading', 'Analytics integration']
    },
    {
      id: 'idea-generator',
      name: 'Teaching Ideas',
      description: 'Get creative teaching strategies and activity suggestions',
      icon: LightBulbIcon,
      color: 'mint',
      status: 'beta',
      features: ['Activity suggestions', 'Teaching strategies', 'Engagement techniques', 'Differentiation ideas']
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

  const getStatusStyles = (status: string) => {
    const statusMap = {
      available: 'bg-green-100 text-green-800',
      beta: 'bg-yellow-100 text-yellow-800',
      'coming-soon': 'bg-gray-100 text-gray-800'
    };
    return statusMap[status as keyof typeof statusMap] || statusMap.available;
  };

  const handleToolClick = (toolId: string) => {
    setSelectedTool(toolId);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="p-4 bg-primary-100 rounded-2xl mr-4">
            <CpuChipIcon className="w-8 h-8 text-primary-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">AI Tools Hub</h1>
        </div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Enhance your teaching with powerful AI tools designed to save time and improve student outcomes
        </p>
      </div>

      {/* AI Stats Banner */}
      <div className="bg-gradient-to-r from-primary-600 to-mint-600 rounded-2xl p-8 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">2.5h</div>
            <div className="text-primary-100">Time saved per week</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">94%</div>
            <div className="text-primary-100">Teacher satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">1,247</div>
            <div className="text-primary-100">Lessons generated</div>
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <div
            key={tool.id}
            onClick={() => handleToolClick(tool.id)}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 cursor-pointer group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl ${getColorClasses(tool.color)}`}>
                <tool.icon className="w-6 h-6" />
              </div>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusStyles(tool.status)}`}>
                {tool.status}
              </span>
            </div>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
              {tool.name}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
            
            <div className="space-y-2 mb-4">
              {tool.features.slice(0, 2).map((feature, index) => (
                <div key={index} className="flex items-center text-sm text-gray-500">
                  <SparklesIcon className="w-4 h-4 mr-2 text-primary-500" />
                  {feature}
                </div>
              ))}
              {tool.features.length > 2 && (
                <div className="text-sm text-gray-400">
                  +{tool.features.length - 2} more features
                </div>
              )}
            </div>
            
            <div className="flex items-center justify-between">
              <button className="text-primary-600 hover:text-primary-700 font-medium text-sm group-hover:translate-x-1 transition-transform duration-200">
                Try Now
                <ArrowRightIcon className="w-4 h-4 inline ml-1" />
              </button>
              <div className="text-xs text-gray-400">
                {tool.status === 'available' ? 'Ready to use' : 
                 tool.status === 'beta' ? 'In testing' : 'Coming soon'}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Tool Section */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
        <div className="flex items-center mb-6">
          <div className="p-3 bg-primary-100 rounded-xl mr-4">
            <BookOpenIcon className="w-6 h-6 text-primary-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Featured: Lesson Generator</h3>
            <p className="text-gray-600">Most popular AI tool this month</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-medium text-gray-900 mb-4">How it works</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-primary-600 font-semibold text-sm">1</span>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900">Input your topic</h5>
                  <p className="text-sm text-gray-600">Enter the subject, grade level, and learning objectives</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-primary-600 font-semibold text-sm">2</span>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900">AI generates content</h5>
                  <p className="text-sm text-gray-600">Our AI creates engaging lesson plans with activities and assessments</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-primary-600 font-semibold text-sm">3</span>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900">Customize and use</h5>
                  <p className="text-sm text-gray-600">Edit the generated content to fit your teaching style</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6">
            <h4 className="text-lg font-medium text-gray-900 mb-4">Sample Output</h4>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <h5 className="font-medium text-gray-900">Introduction to Calculus</h5>
                <p className="text-sm text-gray-600">45-minute lesson for Grade 12</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <h5 className="font-medium text-gray-900">Learning Objectives</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Understand the concept of limits</li>
                  <li>• Apply limit rules to solve problems</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <h5 className="font-medium text-gray-900">Activities</h5>
                <p className="text-sm text-gray-600">Interactive graphing exercise, group problem solving</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIToolsHub;