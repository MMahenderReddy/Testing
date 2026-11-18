import React from 'react';
import Column from './Column';

// Dummy data for demonstration
const initialColumns = [
  { id: 'todo', title: 'To Do' },
  { id: 'inprogress', title: 'In Progress' },
  { id: 'done', title: 'Done' },
];

const initialTasks = [
  { id: '1', title: 'Task 1', column: 'todo' },
  { id: '2', title: 'Task 2', column: 'inprogress' },
  { id: '3', title: 'Task 3', column: 'done' },
];

function Board({ onTaskMovedToDone }) {
  const [tasks, setTasks] = React.useState(initialTasks);

  // Simulate moving a task between columns
  const moveTask = (taskId, toColumn) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) =>
        task.id === taskId ? { ...task, column: toColumn } : task
      );
      const movedTask = prevTasks.find((task) => task.id === taskId);
      if (movedTask && movedTask.column !== 'done' && toColumn === 'done' && onTaskMovedToDone) {
        onTaskMovedToDone(movedTask);
      }
      return updatedTasks;
    });
  };

  return (
    <div className="board">
      {initialColumns.map((col) => (
        <Column
          key={col.id}
          column={col}
          tasks={tasks.filter((task) => task.column === col.id)}
          moveTask={moveTask}
        />
      ))}
    </div>
  );
}

export default Board;
