import React, { useState, useEffect } from 'react';
import './TaskEditPanel.css';

const TaskEditPanel = ({ task, isOpen, onClose, onSave }) => {
  const [title, setTitle] = useState(task ? task.title : '');
  const [description, setDescription] = useState(task ? task.description : '');

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
    }
  }, [task]);

  const handleSave = () => {
    if (onSave) {
      onSave({ ...task, title, description });
    }
  };

  return (
    <div className={`edit-panel ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={onClose}>&times;</button>
      <h3>Edit Task</h3>
      <label>
        Title
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </label>
      <label>
        Description
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </label>
      <button className="save-btn" onClick={handleSave}>Save</button>
    </div>
  );
};

export default TaskEditPanel;
