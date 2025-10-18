import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';

export default function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen flex bg-gradient-to-b from-sky-50 to-beige-50">
      <Sidebar collapsed={sidebarCollapsed} />
      <div className="flex-1 flex flex-col min-w-0">
        <Header onToggleSidebar={() => setSidebarCollapsed(c => !c)} />
        <main className="p-6 sm:p-8">
          <div className="mx-auto max-w-7xl animate-fadeIn">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
