import React, { useState, useEffect } from 'react';

const priorities = ['Low', 'Medium', 'High'];

function InlineEditPanel({ task, users, onSave, onClose }) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [priority, setPriority] = useState(task.priority);
  const [assignee, setAssignee] = useState(task.assignee);
  const [dueDate, setDueDate] = useState(task.dueDate ? task.dueDate.slice(0, 10) : '');

  useEffect(() => {
    setTitle(task.title);
    setDescription(task.description);
    setPriority(task.priority);
    setAssignee(task.assignee);
    setDueDate(task.dueDate ? task.dueDate.slice(0, 10) : '');
  }, [task]);

  const handleSave = () => {
    onSave({
      ...task,
      title,
      description,
      priority,
      assignee,
      dueDate: dueDate ? new Date(dueDate).toISOString() : null,
    });
  };

  return (
    <div className="inline-edit-panel">
      <div className="inline-edit-header">
        <input
          className="inline-edit-title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Title"
        />
        <button onClick={onClose} className="close-btn">×</button>
      </div>
      <div className="inline-edit-body">
        <label>Description</label>
        <textarea
          className="inline-edit-description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Description"
        />
        <label>Priority</label>
        <select
          className="inline-edit-priority"
          value={priority}
          onChange={e => setPriority(e.target.value)}
        >
          {priorities.map(p => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
        <label>Assignee</label>
        <select
          className="inline-edit-assignee"
          value={assignee || ''}
          onChange={e => setAssignee(e.target.value)}
        >
          <option value="">Unassigned</option>
          {users.map(user => (
            <option key={user.id} value={user.id}>{user.name}</option>
          ))}
        </select>
        <label>Due Date</label>
        <input
          type="date"
          className="inline-edit-due-date"
          value={dueDate}
          onChange={e => setDueDate(e.target.value)}
        />
      </div>
      <div className="inline-edit-footer">
        <button onClick={handleSave} className="save-btn">Save</button>
      </div>
    </div>
  );
}

export default InlineEditPanel;
