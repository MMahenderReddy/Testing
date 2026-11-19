import React from 'react';
import KanbanBoard from './components/KanbanBoard';
import QuickActions from './components/QuickActions';

function App() {
  // Dummy handlers for demonstration
  const handleCreateTask = () => {
    alert('Create New Task action triggered!');
  };

  const handleViewProjects = () => {
    alert('View All Projects action triggered!');
  };

  const handleDownloadReport = () => {
    // Simulate report download
    const blob = new Blob([
      'Report Title\n\nSummary: This is a sample report.'
    ], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'report.txt';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div>
      <QuickActions
        onCreateTask={handleCreateTask}
        onViewProjects={handleViewProjects}
        onDownloadReport={handleDownloadReport}
      />
      <KanbanBoard />
    </div>
  );
}

export default App;
