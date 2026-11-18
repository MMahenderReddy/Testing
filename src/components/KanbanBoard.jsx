import React, { useState, useEffect } from 'react';

// Example filter options and board data for demonstration
const FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'In Progress', value: 'in-progress' },
  { label: 'Done', value: 'done' },
];

const BOARD_DATA = [
  { id: 1, title: 'Task 1', status: 'in-progress' },
  { id: 2, title: 'Task 2', status: 'done' },
  { id: 3, title: 'Task 3', status: 'in-progress' },
  { id: 4, title: 'Task 4', status: 'done' },
];

const FILTER_STORAGE_KEY = 'kanban_selected_filter';

function KanbanBoard() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Load filter from localStorage on mount
  useEffect(() => {
    const savedFilter = localStorage.getItem(FILTER_STORAGE_KEY);
    if (savedFilter && FILTERS.some(f => f.value === savedFilter)) {
      setSelectedFilter(savedFilter);
    }
  }, []);

  // Persist filter to localStorage when changed
  useEffect(() => {
    localStorage.setItem(FILTER_STORAGE_KEY, selectedFilter);
  }, [selectedFilter]);

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  const filteredData = selectedFilter === 'all'
    ? BOARD_DATA
    : BOARD_DATA.filter(item => item.status === selectedFilter);

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <label htmlFor="kanban-filter">Filter: </label>
        <select
          id="kanban-filter"
          value={selectedFilter}
          onChange={handleFilterChange}
        >
          {FILTERS.map(filter => (
            <option key={filter.value} value={filter.value}>
              {filter.label}
            </option>
          ))}
        </select>
      </div>
      <div className="kanban-board">
        {filteredData.map(item => (
          <div key={item.id} className="kanban-card">
            <h4>{item.title}</h4>
            <p>Status: {item.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KanbanBoard;
