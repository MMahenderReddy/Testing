import React, { useState } from 'react';
import TaskCard from '../components/TaskCard';
import TaskEditPanel from '../components/TaskEditPanel';

const initialTasks = [
  { id: 1, title: 'Design homepage', description: 'Create wireframes for homepage.' },
  { id: 2, title: 'Setup CI/CD', description: 'Configure GitHub Actions.' },
  { id: 3, title: 'Write tests', description: 'Add unit tests for components.' },
];

const TaskListPage = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [editingTask, setEditingTask] = useState(null);

  const handleCardClick = (task) => {
    setEditingTask(task);
  };

  const handleClosePanel = () => {
    setEditingTask(null);
  };

  const handleSaveTask = (updatedTask) => {
    setTasks(tasks.map(t => t.id === updatedTask.id ? updatedTask : t));
    setEditingTask(null);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', padding: '32px', background: '#f4f6fa' }}>
      <h1>Tasks</h1>
      <div>
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} onClick={handleCardClick} />
        ))}
      </div>
      <TaskEditPanel
        task={editingTask}
        onClose={handleClosePanel}
        onSave={handleSaveTask}
      />
    </div>
  );
};

export default TaskListPage;
