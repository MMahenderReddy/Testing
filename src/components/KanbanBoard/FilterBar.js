import React, { useEffect, useState } from 'react';

const FILTERS_LOCAL_STORAGE_KEY = 'kanban_selected_filters';

const defaultFilters = {
  status: '',
  assignee: '',
  priority: '',
};

function loadFiltersFromStorage() {
  try {
    const stored = localStorage.getItem(FILTERS_LOCAL_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    // ignore
  }
  return { ...defaultFilters };
}

function saveFiltersToStorage(filters) {
  try {
    localStorage.setItem(FILTERS_LOCAL_STORAGE_KEY, JSON.stringify(filters));
  } catch (e) {
    // ignore
  }
}

export default function FilterBar({ onChange }) {
  const [filters, setFilters] = useState(loadFiltersFromStorage());

  useEffect(() => {
    saveFiltersToStorage(filters);
    if (onChange) {
      onChange(filters);
    }
    // eslint-disable-next-line
  }, [filters]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  }

  return (
    <div className="kanban-filter-bar">
      <select name="status" value={filters.status} onChange={handleChange}>
        <option value="">All Statuses</option>
        <option value="todo">To Do</option>
        <option value="inprogress">In Progress</option>
        <option value="done">Done</option>
      </select>
      <select name="assignee" value={filters.assignee} onChange={handleChange}>
        <option value="">All Assignees</option>
        <option value="alice">Alice</option>
        <option value="bob">Bob</option>
        <option value="carol">Carol</option>
      </select>
      <select name="priority" value={filters.priority} onChange={handleChange}>
        <option value="">All Priorities</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  );
}
