import React, { useEffect, useState } from 'react';

const FILTERS_LOCAL_STORAGE_KEY = 'kanbanBoardSelectedFilters';

function KanbanBoard({ filters, onFilterChange, ...props }) {
  const [selectedFilters, setSelectedFilters] = useState(() => {
    try {
      const stored = localStorage.getItem(FILTERS_LOCAL_STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch (e) {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(
        FILTERS_LOCAL_STORAGE_KEY,
        JSON.stringify(selectedFilters)
      );
    } catch (e) {
      // Ignore write errors
    }
  }, [selectedFilters]);

  const handleFilterChange = (filterKey, value) => {
    const newFilters = { ...selectedFilters, [filterKey]: value };
    setSelectedFilters(newFilters);
    if (onFilterChange) {
      onFilterChange(newFilters);
    }
  };

  return (
    <div className="kanban-board">
      <div className="kanban-filters">
        {filters &&
          filters.map((filter) => (
            <label key={filter.key}>
              {filter.label}
              <select
                value={selectedFilters[filter.key] || ''}
                onChange={(e) => handleFilterChange(filter.key, e.target.value)}
              >
                <option value="">All</option>
                {filter.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          ))}
      </div>
      {/* ...rest of Kanban board rendering... */}
    </div>
  );
}

export default KanbanBoard;
