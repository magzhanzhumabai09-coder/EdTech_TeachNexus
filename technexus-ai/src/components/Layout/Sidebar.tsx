import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  HomeIcon, 
  BookOpenIcon, 
  CalendarIcon, 
  ClipboardDocumentListIcon,
  AcademicCapIcon,
  CpuChipIcon,
  ChartBarIcon,
  CogIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  
  const navigation = [
    { name: 'Dashboard', href: '/', icon: HomeIcon },
    { name: 'Syllabus', href: '/syllabus', icon: BookOpenIcon },
    { name: 'Schedules', href: '/schedules', icon: CalendarIcon },
    { name: 'Assignments', href: '/assignments', icon: ClipboardDocumentListIcon },
    { name: 'Exams & Quizzes', href: '/exams', icon: AcademicCapIcon },
    { name: 'AI Tools', href: '/ai-tools', icon: CpuChipIcon },
    { name: 'Analytics', href: '/analytics', icon: ChartBarIcon },
    { name: 'Settings', href: '/settings', icon: CogIcon },
  ];

  return (
    <>
      {/* Mobile sidebar overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <CpuChipIcon className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="ml-3">
              <h1 className="text-xl font-bold text-navy-900">TechNexus.Ai</h1>
              <p className="text-xs text-gray-500">Teacher Platform</p>
            </div>
          </div>
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <XMarkIcon className="w-6 h-6 text-gray-500" />
          </button>
        </div>
        
        <nav className="mt-6 px-3">
          <div className="space-y-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`
                    group flex items-center px-3 py-2 text-sm font-medium rounded-xl transition-all duration-200
                    ${isActive 
                      ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-500' 
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                    }
                  `}
                >
                  <item.icon
                    className={`
                      mr-3 h-5 w-5 flex-shrink-0 transition-colors duration-200
                      ${isActive ? 'text-primary-500' : 'text-gray-400 group-hover:text-gray-500'}
                    `}
                  />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>
        
        {/* User profile section */}
        <div className="absolute bottom-0 w-full p-4 border-t border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-gradient-to-br from-mint-400 to-mint-600 rounded-full flex items-center justify-center">
                <UserIcon className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Dr. Sarah Johnson</p>
              <p className="text-xs text-gray-500">Mathematics Teacher</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;