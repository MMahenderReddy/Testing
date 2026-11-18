import React, { useState } from 'react';
import FilterBar from './FilterBar';
import KanbanColumn from './KanbanColumn';

const KanbanBoard = ({ columns, tasks }) => {
  const [filters, setFilters] = useState({});

  const applyFilters = (task) => {
    // Example filter logic: iterate over filters and check if task matches
    return Object.entries(filters).every(([key, value]) => {
      if (!value) return true;
      if (Array.isArray(value)) {
        return value.length === 0 || value.includes(task[key]);
      }
      return String(task[key]) === String(value);
    });
  };

  const clearFilters = () => {
    setFilters({});
  };

  return (
    <div className="kanban-board">
      <FilterBar filters={filters} setFilters={setFilters} clearFilters={clearFilters} />
      <div className="kanban-columns">
        {columns.map((column) => (
          <KanbanColumn
            key={column.id}
            column={column}
            tasks={tasks.filter(
              (task) => task.status === column.id && applyFilters(task)
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
