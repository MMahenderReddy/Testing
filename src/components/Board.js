import React, { useState } from 'react';
import TaskCard from './TaskCard';
import TaskEditPanel from './TaskEditPanel';
import './Board.css';

// Dummy data for demonstration
const initialTasks = [
  { id: 1, title: 'Design Homepage', description: 'Create wireframes and mockups.' },
  { id: 2, title: 'Setup Backend', description: 'Initialize database and API.' },
  { id: 3, title: 'Write Tests', description: 'Add unit and integration tests.' },
];

const Board = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isEditPanelOpen, setEditPanelOpen] = useState(false);

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setEditPanelOpen(true);
  };

  const handleEditPanelClose = () => {
    setEditPanelOpen(false);
    setTimeout(() => setSelectedTask(null), 300); // Wait for animation
  };

  const handleTaskSave = (updatedTask) => {
    setTasks(tasks.map(t => t.id === updatedTask.id ? updatedTask : t));
    setEditPanelOpen(false);
    setTimeout(() => setSelectedTask(null), 300);
  };

  return (
    <div className="board-container">
      <div className="board">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} onClick={handleTaskClick} />
        ))}
      </div>
      <TaskEditPanel
        task={selectedTask}
        isOpen={isEditPanelOpen}
        onClose={handleEditPanelClose}
        onSave={handleTaskSave}
      />
    </div>
  );
};

export default Board;
