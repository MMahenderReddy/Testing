import React, { useState } from 'react';
import KanbanColumn from './KanbanColumn';
import './KanbanBoard.css';

const initialTasks = [
  { id: '1', title: 'Task 1', status: 'todo' },
  { id: '2', title: 'Task 2', status: 'inprogress' },
  { id: '3', title: 'Task 3', status: 'done' },
];

const columns = [
  { id: 'todo', title: 'To Do' },
  { id: 'inprogress', title: 'In Progress' },
  { id: 'done', title: 'Done' },
];

function KanbanBoard() {
  const [tasks, setTasks] = useState(initialTasks);

  const onDropTask = (taskId, newStatus) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <div className="kanban-board">
      {columns.map(col => (
        <KanbanColumn
          key={col.id}
          columnId={col.id}
          title={col.title}
          tasks={tasks.filter(task => task.status === col.id)}
          onDropTask={onDropTask}
        />
      ))}
    </div>
  );
}

export default KanbanBoard;
