import React, { useState } from 'react';
import { 
  CalendarIcon, 
  PlusIcon, 
  ChevronLeftIcon, 
  ChevronRightIcon,
  ClockIcon,
  AcademicCapIcon,
  UserGroupIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

interface Event {
  id: string;
  title: string;
  time: string;
  type: 'lecture' | 'exam' | 'office-hours' | 'meeting';
  course: string;
  location: string;
  attendees: number;
}

const CalendarView: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<'month' | 'week' | 'day'>('month');

  const events: Event[] = [
    {
      id: '1',
      title: 'Advanced Calculus Lecture',
      time: '10:00 AM - 11:30 AM',
      type: 'lecture',
      course: 'MATH 301',
      location: 'Room 201',
      attendees: 28
    },
    {
      id: '2',
      title: 'Linear Algebra Midterm',
      time: '2:00 PM - 4:00 PM',
      type: 'exam',
      course: 'MATH 201',
      location: 'Room 105',
      attendees: 35
    },
    {
      id: '3',
      title: 'Office Hours',
      time: '3:00 PM - 5:00 PM',
      type: 'office-hours',
      course: 'General',
      location: 'Office 302',
      attendees: 0
    },
    {
      id: '4',
      title: 'Department Meeting',
      time: '4:30 PM - 6:00 PM',
      type: 'meeting',
      course: 'Faculty',
      location: 'Conference Room A',
      attendees: 12
    }
  ];

  const getEventTypeStyles = (type: string) => {
    const typeMap = {
      lecture: 'bg-blue-100 text-blue-800 border-blue-200',
      exam: 'bg-red-100 text-red-800 border-red-200',
      'office-hours': 'bg-green-100 text-green-800 border-green-200',
      meeting: 'bg-purple-100 text-purple-800 border-purple-200'
    };
    return typeMap[type as keyof typeof typeMap] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getEventIcon = (type: string) => {
    const iconMap = {
      lecture: AcademicCapIcon,
      exam: AcademicCapIcon,
      'office-hours': UserGroupIcon,
      meeting: UserGroupIcon
    };
    return iconMap[type as keyof typeof iconMap] || AcademicCapIcon;
  };

  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const days = [];
    const current = new Date(startDate);
    
    for (let i = 0; i < 42; i++) {
      days.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    
    return days;
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isCurrentMonth = (date: Date) => {
    return date.getMonth() === currentDate.getMonth();
  };

  const getEventsForDate = (date: Date) => {
    // In a real app, this would filter events by date
    return events.slice(0, Math.floor(Math.random() * 3));
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(newDate.getMonth() - 1);
      } else {
        newDate.setMonth(newDate.getMonth() + 1);
      }
      return newDate;
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Schedule & Calendar</h2>
          <p className="text-gray-600">Manage your classes, exams, and meetings</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-200 transition-colors duration-200">
            <CalendarIcon className="w-5 h-5 mr-2 inline" />
            Sync Calendar
          </button>
          <button className="bg-primary-600 text-white px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors duration-200 flex items-center">
            <PlusIcon className="w-5 h-5 mr-2" />
            New Event
          </button>
        </div>
      </div>

      {/* View Controls */}
      <div className="flex items-center justify-between bg-white rounded-2xl p-4 shadow-sm border border-gray-200">
        <div className="flex items-center space-x-4">
          <h3 className="text-lg font-semibold text-gray-900">
            {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </h3>
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
            {(['month', 'week', 'day'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${
                  viewMode === mode 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {mode.charAt(0).toUpperCase() + mode.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => navigateMonth('prev')}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCurrentDate(new Date())}
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
          >
            Today
          </button>
          <button
            onClick={() => navigateMonth('next')}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Days of week header */}
        <div className="grid grid-cols-7 bg-gray-50 border-b border-gray-200">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="p-4 text-center text-sm font-medium text-gray-500">
              {day}
            </div>
          ))}
        </div>
        
        {/* Calendar days */}
        <div className="grid grid-cols-7">
          {generateCalendarDays().map((date, index) => {
            const dayEvents = getEventsForDate(date);
            return (
              <div
                key={index}
                className={`min-h-[120px] p-2 border-r border-b border-gray-200 ${
                  !isCurrentMonth(date) ? 'bg-gray-50' : 'bg-white'
                } ${isToday(date) ? 'bg-primary-50' : ''}`}
              >
                <div className={`text-sm font-medium mb-1 ${
                  isToday(date) 
                    ? 'text-primary-600' 
                    : isCurrentMonth(date) 
                      ? 'text-gray-900' 
                      : 'text-gray-400'
                }`}>
                  {date.getDate()}
                </div>
                <div className="space-y-1">
                  {dayEvents.map((event) => {
                    const EventIcon = getEventIcon(event.type);
                    return (
                      <div
                        key={event.id}
                        className={`text-xs p-1 rounded border ${getEventTypeStyles(event.type)} cursor-pointer hover:opacity-80 transition-opacity duration-200`}
                      >
                        <div className="flex items-center">
                          <EventIcon className="w-3 h-3 mr-1" />
                          <span className="truncate">{event.title}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Upcoming Events</h3>
        <div className="space-y-4">
          {events.map((event) => {
            const EventIcon = getEventIcon(event.type);
            return (
              <div key={event.id} className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                <div className={`p-3 rounded-xl mr-4 ${getEventTypeStyles(event.type)}`}>
                  <EventIcon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{event.title}</h4>
                  <div className="flex items-center text-sm text-gray-600 mt-1">
                    <ClockIcon className="w-4 h-4 mr-2" />
                    <span className="mr-4">{event.time}</span>
                    <MapPinIcon className="w-4 h-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">{event.course}</div>
                  <div className="text-xs text-gray-500">{event.attendees} attendees</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CalendarView;