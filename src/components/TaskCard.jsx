import React from 'react';

const TaskCard = ({ task, onDragStart, onDragEnd }) => {
  const handleDragStart = () => {
    if (onDragStart) {
      onDragStart(task.id);
    }
  };

  const handleDragEnd = () => {
    if (onDragEnd) {
      onDragEnd();
    }
  };

  return (
    <div
      className="task-card"
      style={{ background: '#fff', margin: '0.5rem 0', padding: '1rem', borderRadius: '4px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div>{task.title}</div>
    </div>
  );
};

export default TaskCard;
