import React from 'react';
import TaskCard from './TaskCard';

const KanbanColumn = ({ column, tasks, onDragStart, onDrop, onDragEnd }) => {
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (onDrop) {
      onDrop(column.id);
    }
  };

  return (
    <div
      className="kanban-column"
      style={{ flex: 1, background: '#f4f4f4', padding: '1rem', borderRadius: '6px', minHeight: '300px' }}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <h2>{column.title}</h2>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
        />
      ))}
    </div>
  );
};

export default KanbanColumn;
