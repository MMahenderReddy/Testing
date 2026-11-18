import React from 'react';

const TaskCard = ({ task }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', task.id);
    e.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      style={{
        background: '#fff',
        margin: '8px 0',
        padding: '12px',
        borderRadius: '6px',
        boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
        cursor: 'grab',
      }}
    >
      <strong>{task.title}</strong>
    </div>
  );
};

export default TaskCard;
