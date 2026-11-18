import React from 'react';
import './TaskCard.css';

function TaskCard({ task }) {
  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', task.id);
  };

  return (
    <div
      className="task-card"
      draggable
      onDragStart={handleDragStart}
    >
      {task.title}
    </div>
  );
}

export default TaskCard;
