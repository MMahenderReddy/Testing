import React from 'react';
import KanbanBoard from './components/KanbanBoard';
import DashboardLayout from './components/DashboardLayout';

function App() {
  const userName = 'John Doe';
  const sidebarLinks = [
    { label: 'Kanban Board', href: '#' },
    { label: 'Reports', href: '#' },
    { label: 'Settings', href: '#' },
  ];

  const handleLogout = () => {
    // Implement logout logic here
    alert('Logged out!');
  };

  return (
    <DashboardLayout userName={userName} onLogout={handleLogout} sidebarLinks={sidebarLinks}>
      <KanbanBoard />
    </DashboardLayout>
  );
}

export default App;
