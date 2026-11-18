import React from 'react';

function DateRangePicker({ startDate, endDate, onChange }) {
  return (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <label>
        From:
        <input
          type="date"
          value={startDate || ''}
          onChange={e => onChange({ startDate: e.target.value, endDate })}
        />
      </label>
      <label>
        To:
        <input
          type="date"
          value={endDate || ''}
          onChange={e => onChange({ startDate, endDate: e.target.value })}
        />
      </label>
    </div>
  );
}

export default DateRangePicker;
