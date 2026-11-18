import React from 'react';

const PRIORITIES = ['High', 'Medium', 'Low'];

function PriorityFilter({ selectedPriorities, onChange }) {
  const handleCheckboxChange = (priority) => {
    if (selectedPriorities.includes(priority)) {
      onChange(selectedPriorities.filter((p) => p !== priority));
    } else {
      onChange([...selectedPriorities, priority]);
    }
  };

  return (
    <div className="priority-filter">
      <span>Filter by Priority:</span>
      {PRIORITIES.map((priority) => (
        <label key={priority} style={{ marginLeft: 8, marginRight: 8 }}>
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

export default PriorityFilter;
