import React, { useState } from 'react';
import TaskColumn from './TaskColumn';
import Toast from './Toast';

const columns = [
  { id: 'todo', title: 'To Do' },
  { id: 'inprogress', title: 'In Progress' },
  { id: 'done', title: 'Done' },
];

const initialTasks = [
  { id: 1, title: 'Task 1', column: 'todo' },
  { id: 2, title: 'Task 2', column: 'inprogress' },
  { id: 3, title: 'Task 3', column: 'todo' },
];

export default function TaskBoard() {
  const [tasks, setTasks] = useState(initialTasks);
  const [toast, setToast] = useState({ show: false, message: '' });

  const moveTask = (taskId, toColumn) => {
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.map(task =>
        task.id === taskId ? { ...task, column: toColumn } : task
      );
      return updatedTasks;
    });
    const task = tasks.find(t => t.id === taskId);
    if (toColumn === 'done' && task && task.column !== 'done') {
      setToast({ show: true, message: `Task "${task.title}" moved to Done!` });
    }
  };

  const handleToastClose = () => {
    setToast({ show: false, message: '' });
  };

  return (
    <div className="task-board">
      <div className="columns">
        {columns.map(col => (
          <TaskColumn
            key={col.id}
            column={col}
            tasks={tasks.filter(task => task.column === col.id)}
            moveTask={moveTask}
          />
        ))}
      </div>
      <Toast show={toast.show} message={toast.message} onClose={handleToastClose} />
    </div>
  );
}
