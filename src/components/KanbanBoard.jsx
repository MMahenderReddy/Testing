import React, { useState } from 'react';
import KanbanColumn from './KanbanColumn';

const KanbanBoard = ({ columns, tasks, onTaskMove }) => {
  const [draggedTask, setDraggedTask] = useState(null);

  const handleDragStart = (taskId) => {
    setDraggedTask(taskId);
  };

  const handleDrop = (columnId) => {
    if (draggedTask && onTaskMove) {
      onTaskMove(draggedTask, columnId);
    }
    setDraggedTask(null);
  };

  const handleDragEnd = () => {
    setDraggedTask(null);
  };

  return (
    <div className="kanban-board" style={{ display: 'flex', gap: '1rem' }}>
      {columns.map((column) => (
        <KanbanColumn
          key={column.id}
          column={column}
          tasks={tasks.filter((task) => task.columnId === column.id)}
          onDragStart={handleDragStart}
          onDrop={handleDrop}
          onDragEnd={handleDragEnd}
        />
      ))}
    </div>
  );
};

export default KanbanBoard;
