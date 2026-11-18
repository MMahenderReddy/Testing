import React from 'react';
import './TaskEditPanel.css';

const TaskEditPanel = ({ task, isOpen, onClose }) => {
  if (!task) return null;
  return (
    <div className={`task-edit-panel${isOpen ? ' open' : ''}`}>
      <button className="close-btn" onClick={onClose}>×</button>
      <h2>Edit Task</h2>
      <div>
        <label>Title</label>
        <input type="text" value={task.title} readOnly />
      </div>
      <div>
        <label>Description</label>
        <textarea value={task.description} readOnly />
      </div>
    </div>
  );
};

export default TaskEditPanel;
