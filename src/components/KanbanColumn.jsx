import React from 'react';
import TaskCard from './TaskCard';
import './KanbanColumn.css';

function KanbanColumn({ columnId, title, tasks, onDropTask }) {
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('text/plain');
    if (taskId) {
      onDropTask(taskId, columnId);
    }
  };

  return (
    <div
      className="kanban-column"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <h2>{title}</h2>
      <div className="kanban-column-tasks">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default KanbanColumn;
