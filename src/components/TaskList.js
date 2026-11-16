import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

function TaskList({ tasks }) {
  const [search, setSearch] = useState('');

  // Memoize filtered tasks for performance with large lists
  const filteredTasks = useMemo(() => {
    const lowerSearch = search.toLowerCase();
    return tasks.filter(task => task.title.toLowerCase().includes(lowerSearch));
  }, [search, tasks]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search tasks by title..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ marginBottom: '1rem', padding: '0.5rem', width: '100%' }}
        aria-label="Search tasks by title"
      />
      <ul>
        {filteredTasks.map(task => (
          <li key={task.id}>{task.title}</li>
        ))}
        {filteredTasks.length === 0 && (
          <li style={{ color: '#888' }}>No tasks found.</li>
        )}
      </ul>
    </div>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TaskList;
