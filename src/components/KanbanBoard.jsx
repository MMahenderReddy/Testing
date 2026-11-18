import React, { useState } from 'react';
import './KanbanBoard.css';

const initialTasks = [
  { id: 1, title: 'Design wireframes', status: 'Backlog' },
  { id: 2, title: 'Set up database', status: 'Backlog' },
  { id: 3, title: 'Implement login', status: 'In Progress' },
  { id: 4, title: 'Write tests', status: 'Review' },
  { id: 5, title: 'Deploy to prod', status: 'Done' },
];

const columns = [
  { key: 'Backlog', label: 'Backlog' },
  { key: 'In Progress', label: 'In Progress' },
  { key: 'Review', label: 'Review' },
  { key: 'Done', label: 'Done' },
];

function KanbanBoard() {
  const [tasks, setTasks] = useState(initialTasks);
  const [draggedTask, setDraggedTask] = useState(null);

  const onDragStart = (task) => {
    setDraggedTask(task);
  };

  const onDrop = (status) => {
    if (draggedTask) {
      setTasks((prev) =>
        prev.map((t) =>
          t.id === draggedTask.id ? { ...t, status } : t
        )
      );
      setDraggedTask(null);
    }
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="kanban-board">
      {columns.map((col) => (
        <div
          key={col.key}
          className="kanban-column"
          onDragOver={onDragOver}
          onDrop={() => onDrop(col.key)}
        >
          <div className="kanban-column-header">{col.label}</div>
          <div className="kanban-column-tasks">
            {tasks
              .filter((task) => task.status === col.key)
              .map((task) => (
                <div
                  key={task.id}
                  className="kanban-task"
                  draggable
                  onDragStart={() => onDragStart(task)}
                >
                  {task.title}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default KanbanBoard;
