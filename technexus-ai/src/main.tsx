import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import Dashboard from './pages/Dashboard'
import Syllabus from './pages/Syllabus'
import Schedule from './pages/Schedule'
import Assignments from './pages/Assignments'
import Exams from './pages/Exams'
import Tools from './pages/Tools'
import Analytics from './pages/Analytics'
import Settings from './pages/Settings'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}> 
          <Route index element={<Dashboard />} />
          <Route path="syllabus" element={<Syllabus />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="exams" element={<Exams />} />
          <Route path="tools" element={<Tools />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
