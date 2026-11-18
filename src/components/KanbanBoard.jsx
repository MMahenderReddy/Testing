import React, { useState } from 'react';

// Dummy filter options for illustration
const FILTERS = [
  { label: 'Assigned to me', value: 'assigned' },
  { label: 'High Priority', value: 'high_priority' },
  { label: 'Due Soon', value: 'due_soon' },
];

function KanbanBoard() {
  const [appliedFilters, setAppliedFilters] = useState([]);

  const handleFilterChange = (filterValue) => {
    setAppliedFilters((prev) =>
      prev.includes(filterValue)
        ? prev.filter((f) => f !== filterValue)
        : [...prev, filterValue]
    );
  };

  const clearAllFilters = () => {
    setAppliedFilters([]);
  };

  // Dummy board data for illustration
  const tasks = [
    { id: 1, title: 'Task 1', assigned: true, high_priority: false, due_soon: true },
    { id: 2, title: 'Task 2', assigned: false, high_priority: true, due_soon: false },
    { id: 3, title: 'Task 3', assigned: true, high_priority: true, due_soon: false },
  ];

  // Filtering logic (simplified for illustration)
  const filteredTasks = tasks.filter((task) => {
    return appliedFilters.every((filter) => task[filter]);
  });

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <span>Filters: </span>
        {FILTERS.map((filter) => (
          <label key={filter.value} style={{ marginRight: 8 }}>
            <input
              type="checkbox"
              checked={appliedFilters.includes(filter.value)}
              onChange={() => handleFilterChange(filter.value)}
            />
            {filter.label}
          </label>
        ))}
        <button
          onClick={clearAllFilters}
          disabled={appliedFilters.length === 0}
          style={{ marginLeft: 12 }}
        >
          Clear All Filters
        </button>
      </div>
      <div>
        <h3>Kanban Board</h3>
        <ul>
          {filteredTasks.length === 0 ? (
            <li>No tasks match the selected filters.</li>
          ) : (
            filteredTasks.map((task) => <li key={task.id}>{task.title}</li>)
          )}
        </ul>
      </div>
    </div>
  );
}

export default KanbanBoard;
