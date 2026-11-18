import React, { useState } from 'react';
import DateRangePicker from './DateRangePicker';

// Example task data structure:
// const tasks = [
//   { id: 1, title: 'Task 1', dueDate: '2024-06-10', status: 'todo' },
//   ...
// ];

function isWithinRange(dateStr, start, end) {
  if (!dateStr) return false;
  const date = new Date(dateStr);
  if (start && date < new Date(start)) return false;
  if (end && date > new Date(end)) return false;
  return true;
}

function KanbanBoard({ tasks }) {
  const [dateRange, setDateRange] = useState({ startDate: '', endDate: '' });

  const filteredTasks = tasks.filter(task => {
    if (!dateRange.startDate && !dateRange.endDate) return true;
    return isWithinRange(task.dueDate, dateRange.startDate, dateRange.endDate);
  });

  const columns = ['todo', 'in-progress', 'done'];

  return (
    <div>
      <h2>Kanban Board</h2>
      <DateRangePicker
        startDate={dateRange.startDate}
        endDate={dateRange.endDate}
        onChange={setDateRange}
      />
      <div style={{ display: 'flex', gap: '24px', marginTop: '16px' }}>
        {columns.map(col => (
          <div key={col} style={{ flex: 1 }}>
            <h3 style={{ textTransform: 'capitalize' }}>{col.replace('-', ' ')}</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {filteredTasks.filter(task => task.status === col).map(task => (
                <li key={task.id} style={{ border: '1px solid #ccc', margin: '8px 0', padding: '8px', borderRadius: '4px' }}>
                  <strong>{task.title}</strong>
                  <div style={{ fontSize: '0.9em', color: '#555' }}>Due: {task.dueDate || 'N/A'}</div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KanbanBoard;
