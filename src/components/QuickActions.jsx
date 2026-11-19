import React from 'react';
import './QuickActions.css';

const QuickActions = ({ onCreateTask, onViewProjects, onDownloadReport }) => {
  return (
    <div className="quick-actions" role="region" aria-label="Quick Actions">
      <button
        className="quick-action-btn"
        onClick={onCreateTask}
        aria-label="Create New Task"
      >
        Create New Task
      </button>
      <button
        className="quick-action-btn"
        onClick={onViewProjects}
        aria-label="View All Projects"
      >
        View All Projects
      </button>
      <button
        className="quick-action-btn"
        onClick={onDownloadReport}
        aria-label="Download Report"
      >
        Download Report
      </button>
    </div>
  );
};

export default QuickActions;
