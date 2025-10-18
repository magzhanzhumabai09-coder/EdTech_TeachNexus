import React, { useState } from 'react';
import { 
  BookOpenIcon, 
  PlusIcon, 
  PencilIcon, 
  TrashIcon,
  ShareIcon,
  EyeIcon,
  ClockIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

interface Syllabus {
  id: string;
  title: string;
  course: string;
  lastModified: string;
  status: 'draft' | 'published' | 'archived';
  students: number;
  duration: string;
}

const SyllabusList: React.FC = () => {
  const [syllabi] = useState<Syllabus[]>([
    {
      id: '1',
      title: 'Advanced Calculus I',
      course: 'MATH 301',
      lastModified: '2 hours ago',
      status: 'published',
      students: 28,
      duration: '16 weeks'
    },
    {
      id: '2',
      title: 'Linear Algebra Fundamentals',
      course: 'MATH 201',
      lastModified: '1 day ago',
      status: 'draft',
      students: 35,
      duration: '14 weeks'
    },
    {
      id: '3',
      title: 'Differential Equations',
      course: 'MATH 401',
      lastModified: '3 days ago',
      status: 'published',
      students: 22,
      duration: '15 weeks'
    },
    {
      id: '4',
      title: 'Statistics & Probability',
      course: 'MATH 250',
      lastModified: '1 week ago',
      status: 'archived',
      students: 0,
      duration: '12 weeks'
    }
  ]);

  const getStatusStyles = (status: string) => {
    const statusMap = {
      draft: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      published: 'bg-green-100 text-green-800 border-green-200',
      archived: 'bg-gray-100 text-gray-800 border-gray-200'
    };
    return statusMap[status as keyof typeof statusMap] || statusMap.draft;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Syllabus Management</h2>
          <p className="text-gray-600">Create, edit, and manage your course syllabi</p>
        </div>
        <button className="bg-primary-600 text-white px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors duration-200 flex items-center">
          <PlusIcon className="w-5 h-5 mr-2" />
          New Syllabus
        </button>
      </div>

      {/* AI Assistant Banner */}
      <div className="bg-gradient-to-r from-primary-50 to-mint-50 border border-primary-200 rounded-2xl p-6">
        <div className="flex items-center">
          <div className="p-3 bg-primary-100 rounded-xl mr-4">
            <BookOpenIcon className="w-6 h-6 text-primary-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">AI Syllabus Generator</h3>
            <p className="text-gray-600 mb-3">
              Let AI help you create comprehensive syllabi with suggested topics, time allocations, and learning outcomes.
            </p>
            <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200">
              Generate with AI
            </button>
          </div>
        </div>
      </div>

      {/* Syllabus Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {syllabi.map((syllabus) => (
          <div
            key={syllabus.id}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{syllabus.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{syllabus.course}</p>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusStyles(syllabus.status)}`}>
                  {syllabus.status}
                </span>
              </div>
              <div className="flex space-x-1">
                <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                  <EyeIcon className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                  <PencilIcon className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                  <ShareIcon className="w-4 h-4" />
                </button>
                <button className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200">
                  <TrashIcon className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-600">
                <UserGroupIcon className="w-4 h-4 mr-2" />
                {syllabus.students} students
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <ClockIcon className="w-4 h-4 mr-2" />
                {syllabus.duration}
              </div>
              <div className="text-sm text-gray-500">
                Modified {syllabus.lastModified}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <button className="flex-1 bg-primary-50 text-primary-700 py-2 px-3 rounded-lg hover:bg-primary-100 transition-colors duration-200 text-sm font-medium">
                  Edit
                </button>
                <button className="flex-1 bg-gray-50 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-sm font-medium">
                  Duplicate
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {syllabi.length === 0 && (
        <div className="text-center py-12">
          <BookOpenIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No syllabi yet</h3>
          <p className="text-gray-500 mb-6">Create your first syllabus to get started</p>
          <button className="bg-primary-600 text-white px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors duration-200">
            Create Syllabus
          </button>
        </div>
      )}
    </div>
  );
};

export default SyllabusList;