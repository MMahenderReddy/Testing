import React from 'react';

function KanbanColumn({ title, tasks, children }) {
  return (
    <div className="kanban-column">
      <div className="kanban-column-header">
        <span>{title}</span>
        <span className="kanban-column-count"> ({tasks.length})</span>
      </div>
      <div className="kanban-column-tasks">
        {children}
      </div>
    </div>
  );
}

export default KanbanColumn;
