import React from 'react';

function KanbanColumn({ title, tasks, children }) {
  return (
    <div className="kanban-column">
      <div className="kanban-column-header">
        <h2>{title} <span className="task-count">({tasks.length})</span></h2>
      </div>
      <div className="kanban-column-content">
        {children}
      </div>
    </div>
  );
}

export default KanbanColumn;
