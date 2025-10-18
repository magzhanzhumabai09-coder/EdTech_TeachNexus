import React, { useState } from 'react';
import { 
  AcademicCapIcon, 
  PlusIcon, 
  PencilIcon, 
  TrashIcon,
  ClockIcon,
  CheckCircleIcon,
  XMarkIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';

interface Question {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'short-answer' | 'essay';
  question: string;
  options?: string[];
  correctAnswer?: string | number;
  points: number;
  timeLimit?: number;
}

const ExamBuilder: React.FC = () => {
  const [examTitle, setExamTitle] = useState('');
  const [examDescription, setExamDescription] = useState('');
  const [timeLimit, setTimeLimit] = useState(60);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const addQuestion = (type: Question['type']) => {
    const newQuestion: Question = {
      id: Date.now().toString(),
      type,
      question: '',
      options: type === 'multiple-choice' ? ['', '', '', ''] : undefined,
      points: 10,
      timeLimit: 5
    };
    setQuestions([...questions, newQuestion]);
  };

  const updateQuestion = (id: string, updates: Partial<Question>) => {
    setQuestions(questions.map(q => q.id === id ? { ...q, ...updates } : q));
  };

  const deleteQuestion = (id: string) => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  const generateWithAI = async () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      const aiQuestions: Question[] = [
        {
          id: 'ai1',
          type: 'multiple-choice',
          question: 'What is the derivative of x²?',
          options: ['2x', 'x', '2', 'x²'],
          correctAnswer: 0,
          points: 10,
          timeLimit: 3
        },
        {
          id: 'ai2',
          type: 'true-false',
          question: 'The limit of 1/x as x approaches infinity is 0.',
          correctAnswer: 'true',
          points: 5,
          timeLimit: 2
        },
        {
          id: 'ai3',
          type: 'short-answer',
          question: 'Solve for x: 2x + 5 = 13',
          correctAnswer: 'x = 4',
          points: 15,
          timeLimit: 5
        }
      ];
      setQuestions([...questions, ...aiQuestions]);
      setIsGenerating(false);
    }, 2000);
  };

  const getQuestionTypeIcon = (type: string) => {
    const iconMap = {
      'multiple-choice': 'A',
      'true-false': 'T/F',
      'short-answer': 'SA',
      'essay': 'E'
    };
    return iconMap[type as keyof typeof iconMap] || 'Q';
  };

  const getQuestionTypeColor = (type: string) => {
    const colorMap = {
      'multiple-choice': 'bg-blue-100 text-blue-800',
      'true-false': 'bg-green-100 text-green-800',
      'short-answer': 'bg-yellow-100 text-yellow-800',
      'essay': 'bg-purple-100 text-purple-800'
    };
    return colorMap[type as keyof typeof colorMap] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Exam & Quiz Builder</h2>
          <p className="text-gray-600">Create assessments with AI assistance</p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={generateWithAI}
            disabled={isGenerating}
            className="bg-mint-600 text-white px-4 py-2 rounded-xl hover:bg-mint-700 disabled:opacity-50 transition-colors duration-200 flex items-center"
          >
            {isGenerating ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Generating...
              </>
            ) : (
              <>
                <CpuChipIcon className="w-5 h-5 mr-2" />
                Generate with AI
              </>
            )}
          </button>
          <button className="bg-primary-600 text-white px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors duration-200 flex items-center">
            <PlusIcon className="w-5 h-5 mr-2" />
            Add Question
          </button>
        </div>
      </div>

      {/* Exam Details */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Exam Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Exam Title
            </label>
            <input
              type="text"
              value={examTitle}
              onChange={(e) => setExamTitle(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="e.g., Calculus Midterm Exam"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Time Limit (minutes)
            </label>
            <input
              type="number"
              value={timeLimit}
              onChange={(e) => setTimeLimit(Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            value={examDescription}
            onChange={(e) => setExamDescription(e.target.value)}
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="Instructions for students..."
          />
        </div>
      </div>

      {/* AI Assistant Banner */}
      <div className="bg-gradient-to-r from-primary-50 to-mint-50 border border-primary-200 rounded-2xl p-6">
        <div className="flex items-center">
          <div className="p-3 bg-primary-100 rounded-xl mr-4">
            <CpuChipIcon className="w-6 h-6 text-primary-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">AI Exam Generator</h3>
            <p className="text-gray-600 mb-3">
              Generate questions automatically based on your course content, difficulty level, and learning objectives.
            </p>
            <div className="flex space-x-3">
              <button
                onClick={generateWithAI}
                disabled={isGenerating}
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 disabled:opacity-50 transition-colors duration-200"
              >
                {isGenerating ? 'Generating...' : 'Generate Questions'}
              </button>
              <button className="bg-white text-primary-600 px-4 py-2 rounded-lg border border-primary-200 hover:bg-primary-50 transition-colors duration-200">
                Configure AI Settings
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">
            Questions ({questions.length})
          </h3>
          <div className="text-sm text-gray-500">
            Total Points: {questions.reduce((sum, q) => sum + q.points, 0)}
          </div>
        </div>

        {questions.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-gray-200">
            <AcademicCapIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No questions yet</h3>
            <p className="text-gray-500 mb-6">Add questions manually or generate with AI</p>
            <div className="flex justify-center space-x-3">
              <button
                onClick={() => addQuestion('multiple-choice')}
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200"
              >
                Add Multiple Choice
              </button>
              <button
                onClick={() => addQuestion('true-false')}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200"
              >
                Add True/False
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {questions.map((question, index) => (
              <div key={question.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-semibold ${getQuestionTypeColor(question.type)}`}>
                      {getQuestionTypeIcon(question.type)}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Question {index + 1}</h4>
                      <p className="text-sm text-gray-500 capitalize">{question.type.replace('-', ' ')}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                      <PencilIcon className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => deleteQuestion(question.id)}
                      className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Question
                    </label>
                    <textarea
                      value={question.question}
                      onChange={(e) => updateQuestion(question.id, { question: e.target.value })}
                      rows={2}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Enter your question..."
                    />
                  </div>

                  {question.type === 'multiple-choice' && question.options && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Options
                      </label>
                      <div className="space-y-2">
                        {question.options.map((option, optionIndex) => (
                          <div key={optionIndex} className="flex items-center space-x-3">
                            <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-sm font-medium text-gray-600">
                              {String.fromCharCode(65 + optionIndex)}
                            </span>
                            <input
                              type="text"
                              value={option}
                              onChange={(e) => {
                                const newOptions = [...question.options!];
                                newOptions[optionIndex] = e.target.value;
                                updateQuestion(question.id, { options: newOptions });
                              }}
                              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                              placeholder={`Option ${String.fromCharCode(65 + optionIndex)}`}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Points
                      </label>
                      <input
                        type="number"
                        value={question.points}
                        onChange={(e) => updateQuestion(question.id, { points: Number(e.target.value) })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Time Limit (min)
                      </label>
                      <input
                        type="number"
                        value={question.timeLimit}
                        onChange={(e) => updateQuestion(question.id, { timeLimit: Number(e.target.value) })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Correct Answer
                      </label>
                      <input
                        type="text"
                        value={question.correctAnswer || ''}
                        onChange={(e) => updateQuestion(question.id, { correctAnswer: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Answer key"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Action Buttons */}
      {questions.length > 0 && (
        <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
          <button className="px-6 py-3 text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors duration-200">
            Save Draft
          </button>
          <button className="px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors duration-200">
            Publish Exam
          </button>
        </div>
      )}
    </div>
  );
};

export default ExamBuilder;