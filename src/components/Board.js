import React, { useState } from 'react';
import Toast from './Toast';

const columns = [
  { id: 'todo', title: 'To Do' },
  { id: 'inprogress', title: 'In Progress' },
  { id: 'done', title: 'Done' }
];

const initialTasks = [
  { id: 1, title: 'Task 1', column: 'todo' },
  { id: 2, title: 'Task 2', column: 'inprogress' },
  { id: 3, title: 'Task 3', column: 'todo' }
];

const Board = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [draggedTask, setDraggedTask] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const onDragStart = (task) => {
    setDraggedTask(task);
  };

  const onDrop = (columnId) => {
    if (!draggedTask) return;
    setTasks((prev) =>
      prev.map((task) =>
        task.id === draggedTask.id ? { ...task, column: columnId } : task
      )
    );
    if (columnId === 'done' && draggedTask.column !== 'done') {
      setToastMessage(`Task "${draggedTask.title}" moved to Done!`);
    }
    setDraggedTask(null);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{ display: 'flex', gap: 24 }}>
      {columns.map((col) => (
        <div
          key={col.id}
          onDrop={() => onDrop(col.id)}
          onDragOver={onDragOver}
          style={{
            flex: 1,
            minHeight: 200,
            background: '#f4f4f4',
            borderRadius: 6,
            padding: 16,
            boxShadow: '0 1px 4px rgba(0,0,0,0.06)'
          }}
        >
          <h3>{col.title}</h3>
          {tasks.filter((t) => t.column === col.id).map((task) => (
            <div
              key={task.id}
              draggable
              onDragStart={() => onDragStart(task)}
              style={{
                background: '#fff',
                margin: '8px 0',
                padding: 12,
                borderRadius: 4,
                boxShadow: '0 1px 2px rgba(0,0,0,0.08)',
                cursor: 'grab'
              }}
            >
              {task.title}
            </div>
          ))}
        </div>
      ))}
      <Toast message={toastMessage} onClose={() => setToastMessage('')} />
    </div>
  );
};

export default Board;
