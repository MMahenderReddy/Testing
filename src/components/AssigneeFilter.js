import React from 'react';

function AssigneeFilter({ assignees, selectedAssignees, onChange }) {
  return (
    <div className="assignee-filter">
      <label htmlFor="assignee-select">Filter by Assignee:</label>
      <select
        id="assignee-select"
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
}

export default AssigneeFilter;
