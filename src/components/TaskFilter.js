import React, { useState } from 'react';

function TaskFilter({ onFilter }) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleFilter = (e) => {
    e.preventDefault();
    onFilter({ startDate, endDate });
  };

  return (
    <form onSubmit={handleFilter} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <label>
        Start Due Date:
        <input
          type="date"
          value={startDate}
          onChange={e => setStartDate(e.target.value)}
        />
      </label>
      <label>
        End Due Date:
        <input
          type="date"
          value={endDate}
          onChange={e => setEndDate(e.target.value)}
        />
      </label>
      <button type="submit">Filter</button>
    </form>
  );
}

export default TaskFilter;
