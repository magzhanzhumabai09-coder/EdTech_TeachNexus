import React, { useState } from 'react';
import { 
  ClipboardDocumentListIcon, 
  PlusIcon, 
  PencilIcon, 
  TrashIcon,
  EyeIcon,
  ClockIcon,
  UserGroupIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

interface Assignment {
  id: string;
  title: string;
  course: string;
  dueDate: string;
  status: 'draft' | 'published' | 'grading' | 'completed';
  submissions: number;
  totalStudents: number;
  points: number;
  type: 'assignment' | 'quiz' | 'exam' | 'project';
}

const AssignmentList: React.FC = () => {
  const [assignments] = useState<Assignment[]>([
    {
      id: '1',
      title: 'Calculus Problem Set #3',
      course: 'MATH 301 - Advanced Calculus',
      dueDate: '2024-01-15',
      status: 'published',
      submissions: 24,
      totalStudents: 28,
      points: 100,
      type: 'assignment'
    },
    {
      id: '2',
      title: 'Linear Algebra Quiz 2',
      course: 'MATH 201 - Linear Algebra',
      dueDate: '2024-01-12',
      status: 'grading',
      submissions: 32,
      totalStudents: 35,
      points: 50,
      type: 'quiz'
    },
    {
      id: '3',
      title: 'Statistics Final Project',
      course: 'MATH 250 - Statistics',
      dueDate: '2024-01-20',
      status: 'draft',
      submissions: 0,
      totalStudents: 30,
      points: 200,
      type: 'project'
    },
    {
      id: '4',
      title: 'Differential Equations Midterm',
      course: 'MATH 401 - Diff Equations',
      dueDate: '2024-01-10',
      status: 'completed',
      submissions: 20,
      totalStudents: 22,
      points: 150,
      type: 'exam'
    }
  ]);

  const getStatusStyles = (status: string) => {
    const statusMap = {
      draft: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      published: 'bg-blue-100 text-blue-800 border-blue-200',
      grading: 'bg-orange-100 text-orange-800 border-orange-200',
      completed: 'bg-green-100 text-green-800 border-green-200'
    };
    return statusMap[status as keyof typeof statusMap] || statusMap.draft;
  };

  const getTypeIcon = (type: string) => {
    const typeMap = {
      assignment: ClipboardDocumentListIcon,
      quiz: AcademicCapIcon,
      exam: AcademicCapIcon,
      project: ClipboardDocumentListIcon
    };
    return typeMap[type as keyof typeof typeMap] || ClipboardDocumentListIcon;
  };

  const getTypeColor = (type: string) => {
    const colorMap = {
      assignment: 'text-blue-600 bg-blue-50',
      quiz: 'text-green-600 bg-green-50',
      exam: 'text-red-600 bg-red-50',
      project: 'text-purple-600 bg-purple-50'
    };
    return colorMap[type as keyof typeof colorMap] || 'text-gray-600 bg-gray-50';
  };

  const getSubmissionStatus = (submissions: number, total: number) => {
    const percentage = (submissions / total) * 100;
    if (percentage === 100) return { text: 'All submitted', color: 'text-green-600' };
    if (percentage >= 80) return { text: 'Most submitted', color: 'text-blue-600' };
    if (percentage >= 50) return { text: 'Half submitted', color: 'text-yellow-600' };
    return { text: 'Few submitted', color: 'text-red-600' };
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Assignments & Assessments</h2>
          <p className="text-gray-600">Manage assignments, quizzes, and projects</p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-200 transition-colors duration-200 flex items-center">
            <AcademicCapIcon className="w-5 h-5 mr-2" />
            New Quiz
          </button>
          <button className="bg-primary-600 text-white px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors duration-200 flex items-center">
            <PlusIcon className="w-5 h-5 mr-2" />
            New Assignment
          </button>
        </div>
      </div>

      {/* AI Grading Assistant Banner */}
      <div className="bg-gradient-to-r from-mint-50 to-primary-50 border border-mint-200 rounded-2xl p-6">
        <div className="flex items-center">
          <div className="p-3 bg-mint-100 rounded-xl mr-4">
            <CheckCircleIcon className="w-6 h-6 text-mint-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">AI Grading Assistant</h3>
            <p className="text-gray-600 mb-3">
              Let AI help you grade assignments faster with intelligent feedback suggestions and plagiarism detection.
            </p>
            <div className="flex space-x-3">
              <button className="bg-mint-600 text-white px-4 py-2 rounded-lg hover:bg-mint-700 transition-colors duration-200">
                Start AI Grading
              </button>
              <button className="bg-white text-mint-600 px-4 py-2 rounded-lg border border-mint-200 hover:bg-mint-50 transition-colors duration-200">
                View Grading Queue
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl">
        {['All', 'Draft', 'Published', 'Grading', 'Completed'].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
              tab === 'All' 
                ? 'bg-white text-gray-900 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Assignments Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {assignments.map((assignment) => {
          const TypeIcon = getTypeIcon(assignment.type);
          const submissionStatus = getSubmissionStatus(assignment.submissions, assignment.totalStudents);
          
          return (
            <div
              key={assignment.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-xl ${getTypeColor(assignment.type)}`}>
                    <TypeIcon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{assignment.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">{assignment.course}</p>
                    <div className="flex items-center space-x-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusStyles(assignment.status)}`}>
                        {assignment.status}
                      </span>
                      <span className="text-sm text-gray-500">{assignment.points} points</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-1">
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                    <EyeIcon className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                    <PencilIcon className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200">
                    <TrashIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600">
                    <ClockIcon className="w-4 h-4 mr-2" />
                    Due: {new Date(assignment.dueDate).toLocaleDateString()}
                  </div>
                  <div className={`text-sm font-medium ${submissionStatus.color}`}>
                    {submissionStatus.text}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600">
                    <UserGroupIcon className="w-4 h-4 mr-2" />
                    {assignment.submissions}/{assignment.totalStudents} submitted
                  </div>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(assignment.submissions / assignment.totalStudents) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex space-x-2">
                  <button className="flex-1 bg-primary-50 text-primary-700 py-2 px-3 rounded-lg hover:bg-primary-100 transition-colors duration-200 text-sm font-medium">
                    Grade
                  </button>
                  <button className="flex-1 bg-gray-50 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-sm font-medium">
                    View Submissions
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {assignments.length === 0 && (
        <div className="text-center py-12">
          <ClipboardDocumentListIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No assignments yet</h3>
          <p className="text-gray-500 mb-6">Create your first assignment to get started</p>
          <button className="bg-primary-600 text-white px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors duration-200">
            Create Assignment
          </button>
        </div>
      )}
    </div>
  );
};

export default AssignmentList;