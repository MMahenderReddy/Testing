import React from 'react';
import './TaskEditPanel.css';

const TaskEditPanel = ({ task, onClose, onSave }) => {
  const [title, setTitle] = React.useState(task ? task.title : '');
  const [description, setDescription] = React.useState(task ? task.description : '');

  React.useEffect(() => {
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
    <div className={`edit-panel${task ? ' open' : ''}`}>
      <button className="close-btn" onClick={onClose}>&times;</button>
      <h2>Edit Task</h2>
      <label>
        Title:
        <input value={title} onChange={e => setTitle(e.target.value)} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={e => setDescription(e.target.value)} />
      </label>
      <button className="save-btn" onClick={handleSave}>Save</button>
    </div>
  );
};

export default TaskEditPanel;
