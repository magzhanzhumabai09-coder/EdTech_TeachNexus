import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Dashboard from './components/Dashboard/Dashboard';
import SyllabusList from './components/Syllabus/SyllabusList';
import AISyllabusGenerator from './components/Syllabus/AISyllabusGenerator';
import AssignmentList from './components/Assignments/AssignmentList';
import AIToolsHub from './components/AITools/AIToolsHub';
import AnalyticsDashboard from './components/Analytics/AnalyticsDashboard';
import CalendarView from './components/Schedules/CalendarView';
import ExamBuilder from './components/Exams/ExamBuilder';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/syllabus" element={<SyllabusList />} />
          <Route path="/syllabus/generator" element={<AISyllabusGenerator />} />
          <Route path="/schedules" element={<CalendarView />} />
          <Route path="/assignments" element={<AssignmentList />} />
          <Route path="/exams" element={<ExamBuilder />} />
          <Route path="/ai-tools" element={<AIToolsHub />} />
          <Route path="/analytics" element={<AnalyticsDashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;