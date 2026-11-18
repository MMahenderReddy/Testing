import React from 'react';
import './KanbanBoard.css';

const columns = [
  { key: 'backlog', label: 'Backlog' },
  { key: 'inProgress', label: 'In Progress' },
  { key: 'review', label: 'Review' },
  { key: 'done', label: 'Done' },
];

const KanbanBoard = () => {
  return (
    <div className="kanban-board">
      {columns.map((col) => (
        <div className={`kanban-column kanban-column-${col.key}`} key={col.key}>
          <div className="kanban-column-header">{col.label}</div>
          <div className="kanban-column-body">
            {/* Task cards will go here */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
