import React, { useState } from 'react';

function TaskList({ tasks }) {
  const [search, setSearch] = useState('');

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search tasks by title..."
        value={search}
        onChange={handleSearchChange}
        style={{ marginBottom: '1rem', padding: '0.5rem', width: '100%' }}
      />
      <ul>
        {filteredTasks.map(task => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
