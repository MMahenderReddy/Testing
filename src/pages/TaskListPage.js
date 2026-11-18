import React, { useState } from 'react';
import TaskCard from '../components/TaskCard';
import TaskEditPanel from '../components/TaskEditPanel';

const mockTasks = [
  { id: 1, title: 'Task One', description: 'Description for task one.' },
  { id: 2, title: 'Task Two', description: 'Description for task two.' },
  { id: 3, title: 'Task Three', description: 'Description for task three.' },
];

const TaskListPage = () => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [editPanelOpen, setEditPanelOpen] = useState(false);

  const handleCardClick = (task) => {
    setSelectedTask(task);
    setEditPanelOpen(true);
  };

  const handleClosePanel = () => {
    setEditPanelOpen(false);
    setTimeout(() => setSelectedTask(null), 300); // Wait for animation
  };

  return (
    <div style={{ position: 'relative' }}>
      <div className="task-list">
        {mockTasks.map((task) => (
          <TaskCard key={task.id} task={task} onClick={handleCardClick} />
        ))}
      </div>
      <TaskEditPanel
        task={selectedTask}
        isOpen={editPanelOpen}
        onClose={handleClosePanel}
      />
    </div>
  );
};

export default TaskListPage;
