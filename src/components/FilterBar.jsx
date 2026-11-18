import React from 'react';

const FilterBar = ({ filters, setFilters, clearFilters }) => {
  // Example filter fields: status, assignee, label
  // This can be customized as per actual filter fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="filter-bar">
      {/* Example filter input fields */}
      <input
        type="text"
        name="assignee"
        placeholder="Filter by assignee"
        value={filters.assignee || ''}
        onChange={handleChange}
      />
      <input
        type="text"
        name="label"
        placeholder="Filter by label"
        value={filters.label || ''}
        onChange={handleChange}
      />
      {/* Add more filter fields as needed */}
      <button onClick={clearFilters} className="clear-filters-btn">
        Clear Filters
      </button>
    </div>
  );
};

export default FilterBar;
