import React from 'react';

const TaskFilter = ({ assignees, selectedAssignees, onChange }) => {
  return (
    <div className="task-filter">
      <label htmlFor="assignee-filter">Filter by Assignee:</label>
      <select
        id="assignee-filter"
        multiple
        value={selectedAssignees}
        onChange={e => {
          const options = Array.from(e.target.options);
          const selected = options.filter(o => o.selected).map(o => o.value);
          onChange(selected);
        }}
      >
        {assignees.map(assignee => (
          <option key={assignee.id} value={assignee.id}>
            {assignee.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TaskFilter;
