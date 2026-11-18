import React, { useState } from 'react';

// Dummy data and filter options for demonstration
const initialTasks = [
  { id: 1, title: 'Task 1', status: 'To Do', assignee: 'Alice' },
  { id: 2, title: 'Task 2', status: 'In Progress', assignee: 'Bob' },
  { id: 3, title: 'Task 3', status: 'Done', assignee: 'Alice' },
  { id: 4, title: 'Task 4', status: 'To Do', assignee: 'Charlie' },
];
const statusOptions = ['To Do', 'In Progress', 'Done'];
const assigneeOptions = ['Alice', 'Bob', 'Charlie'];

function KanbanBoard() {
  const [filters, setFilters] = useState({ status: '', assignee: '' });

  const filteredTasks = initialTasks.filter(task => {
    const statusMatch = !filters.status || task.status === filters.status;
    const assigneeMatch = !filters.assignee || task.assignee === filters.assignee;
    return statusMatch && assigneeMatch;
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleClearFilters = () => {
    setFilters({ status: '', assignee: '' });
  };

  return (
    <div>
      <h2>Kanban Board</h2>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
        <label>
          Status:
          <select name="status" value={filters.status} onChange={handleFilterChange}>
            <option value="">All</option>
            {statusOptions.map(status => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </label>
        <label>
          Assignee:
          <select name="assignee" value={filters.assignee} onChange={handleFilterChange}>
            <option value="">All</option>
            {assigneeOptions.map(assignee => (
              <option key={assignee} value={assignee}>{assignee}</option>
            ))}
          </select>
        </label>
        <button onClick={handleClearFilters} data-testid="clear-filters-btn">
          Clear Filters
        </button>
      </div>
      <div style={{ display: 'flex', gap: '2rem' }}>
        {statusOptions.map(status => (
          <div key={status} style={{ minWidth: '200px' }}>
            <h3>{status}</h3>
            <ul>
              {filteredTasks.filter(task => task.status === status).map(task => (
                <li key={task.id}>{task.title} ({task.assignee})</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KanbanBoard;
