import React from 'react';

function TaskFilter({ priorities, selectedPriorities, onChange }) {
  const handleCheckboxChange = (priority) => {
    if (selectedPriorities.includes(priority)) {
      onChange(selectedPriorities.filter((p) => p !== priority));
    } else {
      onChange([...selectedPriorities, priority]);
    }
  };

  return (
    <div className="task-filter">
      <span>Filter by priority:</span>
      {priorities.map((priority) => (
        <label key={priority} style={{ marginLeft: 8 }}>
          <input
            type="checkbox"
            checked={selectedPriorities.includes(priority)}
            onChange={() => handleCheckboxChange(priority)}
          />
          {priority}
        </label>
      ))}
    </div>
  );
}

export default TaskFilter;
