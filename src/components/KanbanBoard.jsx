import React, { useState } from 'react';
import KanbanColumn from './KanbanColumn';

// Example statuses and initial tasks
const STATUSES = ['To Do', 'In Progress', 'Done'];

const initialTasks = [
  { id: 1, title: 'Task 1', status: 'To Do' },
  { id: 2, title: 'Task 2', status: 'In Progress' },
  { id: 3, title: 'Task 3', status: 'Done' },
  { id: 4, title: 'Task 4', status: 'To Do' },
];

const KanbanBoard = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const onDropTask = (taskId, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <div style={{ display: 'flex', gap: '16px', padding: '16px' }}>
      {STATUSES.map((status) => (
        <KanbanColumn
          key={status}
          status={status}
          tasks={tasks.filter((task) => task.status === status)}
          onDropTask={onDropTask}
        />
      ))}
    </div>
  );
};

export default KanbanBoard;
