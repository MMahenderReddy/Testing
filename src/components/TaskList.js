import React, { useState } from 'react';
import TaskFilter from './TaskFilter';

function isWithinRange(dateStr, start, end) {
  if (!dateStr) return false;
  const date = new Date(dateStr);
  if (start && date < new Date(start)) return false;
  if (end && date > new Date(end)) return false;
  return true;
}

function TaskList({ tasks }) {
  const [filter, setFilter] = useState({ startDate: '', endDate: '' });

  const filteredTasks = tasks.filter(task => {
    if (!filter.startDate && !filter.endDate) return true;
    return isWithinRange(task.dueDate, filter.startDate, filter.endDate);
  });

  return (
    <div>
      <TaskFilter onFilter={setFilter} />
      <ul>
        {filteredTasks.map(task => (
          <li key={task.id}>
            <strong>{task.title}</strong> - Due: {task.dueDate || 'N/A'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
