import React, { useEffect, useState } from 'react';

const TaskFilter = ({ users, selectedAssignees, onChange }) => {
  const [selected, setSelected] = useState(selectedAssignees || []);

  useEffect(() => {
    setSelected(selectedAssignees || []);
  }, [selectedAssignees]);

  const handleSelectChange = (e) => {
    const options = Array.from(e.target.options);
    const values = options.filter(o => o.selected).map(o => o.value);
    setSelected(values);
    onChange(values);
  };

  return (
    <div className="task-filter">
      <label htmlFor="assignee-select">Filter by Assignee:</label>
      <select
        id="assignee-select"
        multiple
        value={selected}
        onChange={handleSelectChange}
        style={{ minWidth: 180, minHeight: 80 }}
      >
        {users.map(user => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TaskFilter;
