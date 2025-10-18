import React, { useState } from 'react';
import { 
  CpuChipIcon, 
  BookOpenIcon, 
  ClockIcon, 
  AcademicCapIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const AISyllabusGenerator: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedSyllabus, setGeneratedSyllabus] = useState<any>(null);
  const [formData, setFormData] = useState({
    courseTitle: '',
    courseCode: '',
    duration: '16',
    level: 'undergraduate',
    prerequisites: '',
    objectives: '',
    topics: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      setGeneratedSyllabus({
        title: formData.courseTitle || 'Advanced Mathematics',
        code: formData.courseCode || 'MATH 301',
        duration: `${formData.duration} weeks`,
        level: formData.level,
        objectives: [
          'Master fundamental calculus concepts and applications',
          'Develop problem-solving skills in mathematical analysis',
          'Apply calculus to real-world engineering problems',
          'Understand the theoretical foundations of calculus'
        ],
        topics: [
          { week: 1, topic: 'Limits and Continuity', hours: 4, type: 'Lecture' },
          { week: 2, topic: 'Derivatives and Applications', hours: 6, type: 'Lecture + Lab' },
          { week: 3, topic: 'Integration Techniques', hours: 6, type: 'Lecture + Lab' },
          { week: 4, topic: 'Applications of Integration', hours: 4, type: 'Lecture' },
          { week: 5, topic: 'Infinite Series', hours: 5, type: 'Lecture + Problem Solving' },
          { week: 6, topic: 'Differential Equations', hours: 6, type: 'Lecture + Lab' },
          { week: 7, topic: 'Multivariable Calculus', hours: 6, type: 'Lecture + Lab' },
          { week: 8, topic: 'Midterm Review and Exam', hours: 4, type: 'Assessment' }
        ],
        assessments: [
          { type: 'Homework', weight: '30%', description: 'Weekly problem sets' },
          { type: 'Midterm Exam', weight: '25%', description: 'Comprehensive exam covering weeks 1-7' },
          { type: 'Final Project', weight: '20%', description: 'Real-world application project' },
          { type: 'Final Exam', weight: '25%', description: 'Comprehensive final examination' }
        ]
      });
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="p-3 bg-primary-100 rounded-xl mr-4">
            <CpuChipIcon className="w-8 h-8 text-primary-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">AI Syllabus Generator</h1>
        </div>
        <p className="text-gray-600 text-lg">
          Create comprehensive, well-structured syllabi with AI assistance
        </p>
      </div>

      {!generatedSyllabus ? (
        /* Input Form */
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Course Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Course Title *
              </label>
              <input
                type="text"
                name="courseTitle"
                value={formData.courseTitle}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="e.g., Advanced Calculus I"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Course Code *
              </label>
              <input
                type="text"
                name="courseCode"
                value={formData.courseCode}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="e.g., MATH 301"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duration (weeks)
              </label>
              <select
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="8">8 weeks</option>
                <option value="12">12 weeks</option>
                <option value="16">16 weeks</option>
                <option value="20">20 weeks</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Level
              </label>
              <select
                name="level"
                value={formData.level}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="undergraduate">Undergraduate</option>
                <option value="graduate">Graduate</option>
                <option value="mixed">Mixed Level</option>
              </select>
            </div>
          </div>
          
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Prerequisites
            </label>
            <input
              type="text"
              name="prerequisites"
              value={formData.prerequisites}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="e.g., MATH 201, MATH 202"
            />
          </div>
          
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Learning Objectives
            </label>
            <textarea
              name="objectives"
              value={formData.objectives}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Describe what students should learn in this course..."
            />
          </div>
          
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Key Topics (optional)
            </label>
            <textarea
              name="topics"
              value={formData.topics}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="List any specific topics you want to cover..."
            />
          </div>
          
          <div className="mt-8 text-center">
            <button
              onClick={handleGenerate}
              disabled={isGenerating || !formData.courseTitle || !formData.courseCode}
              className="bg-primary-600 text-white px-8 py-4 rounded-xl hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center mx-auto"
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  Generating Syllabus...
                </>
              ) : (
                <>
                  <CpuChipIcon className="w-5 h-5 mr-2" />
                  Generate with AI
                </>
              )}
            </button>
          </div>
        </div>
      ) : (
        /* Generated Syllabus Preview */
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Generated Syllabus</h2>
              <div className="flex space-x-3">
                <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                  Edit
                </button>
                <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200">
                  Save & Publish
                </button>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {generatedSyllabus.title} ({generatedSyllabus.code})
                </h3>
                <p className="text-gray-600">
                  {generatedSyllabus.duration} • {generatedSyllabus.level.charAt(0).toUpperCase() + generatedSyllabus.level.slice(1)} Level
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Learning Objectives</h4>
                <ul className="space-y-2">
                  {generatedSyllabus.objectives.map((objective: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Course Schedule</h4>
                <div className="space-y-3">
                  {generatedSyllabus.topics.map((topic: any, index: number) => (
                    <div key={index} className="flex items-center p-4 bg-gray-50 rounded-xl">
                      <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-4">
                        <span className="text-primary-600 font-semibold">{topic.week}</span>
                      </div>
                      <div className="flex-1">
                        <h5 className="font-medium text-gray-900">{topic.topic}</h5>
                        <p className="text-sm text-gray-600">{topic.type} • {topic.hours} hours</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Assessment Plan</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {generatedSyllabus.assessments.map((assessment: any, index: number) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-xl">
                      <h5 className="font-medium text-gray-900">{assessment.type}</h5>
                      <p className="text-2xl font-bold text-primary-600 mb-1">{assessment.weight}</p>
                      <p className="text-sm text-gray-600">{assessment.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button
              onClick={() => setGeneratedSyllabus(null)}
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              ← Generate Another Syllabus
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AISyllabusGenerator;