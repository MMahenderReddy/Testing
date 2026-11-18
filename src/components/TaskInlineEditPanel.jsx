import React, { useState } from 'react';

const priorities = ['Low', 'Medium', 'High'];

function TaskInlineEditPanel({
  task,
  users,
  onSave,
  onCancel
}) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [priority, setPriority] = useState(task.priority || 'Medium');
  const [assignee, setAssignee] = useState(task.assignee || '');
  const [dueDate, setDueDate] = useState(task.dueDate ? task.dueDate.slice(0, 10) : '');

  const handleSave = () => {
    onSave({
      ...task,
      title,
      description,
      priority,
      assignee,
      dueDate: dueDate ? dueDate : null
    });
  };

  return (
    <div className="task-inline-edit-panel">
      <div className="field">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          data-testid="edit-title"
        />
      </div>
      <div className="field">
        <label>Description</label>
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          data-testid="edit-description"
        />
      </div>
      <div className="field">
        <label>Priority</label>
        <select
          value={priority}
          onChange={e => setPriority(e.target.value)}
          data-testid="edit-priority"
        >
          {priorities.map(p => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label>Assignee</label>
        <select
          value={assignee}
          onChange={e => setAssignee(e.target.value)}
          data-testid="edit-assignee"
        >
          <option value="">Unassigned</option>
          {users.map(user => (
            <option key={user.id} value={user.id}>{user.name}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label>Due Date</label>
        <input
          type="date"
          value={dueDate}
          onChange={e => setDueDate(e.target.value)}
          data-testid="edit-due-date"
        />
      </div>
      <div className="actions">
        <button onClick={handleSave} data-testid="save-btn">Save</button>
        <button onClick={onCancel} data-testid="cancel-btn">Cancel</button>
      </div>
    </div>
  );
}

export default TaskInlineEditPanel;
