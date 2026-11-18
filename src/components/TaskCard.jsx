import React from 'react';
import PropTypes from 'prop-types';
import './TaskCard.css';

const PRIORITY_COLORS = {
  high: 'red',
  medium: 'orange',
  low: 'green',
};

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export default function TaskCard({ title, assignee, priority, dueDate }) {
  return (
    <div className="task-card">
      <div className="task-card-header">
        <span className="task-title">{title}</span>
        <span
          className="priority-badge"
          style={{ backgroundColor: PRIORITY_COLORS[priority] || 'gray' }}
        >
          {priority.charAt(0).toUpperCase() + priority.slice(1)}
        </span>
      </div>
      <div className="task-card-footer">
        <div className="assignee-avatar">
          {assignee && assignee.avatarUrl ? (
            <img src={assignee.avatarUrl} alt={assignee.name} />
          ) : (
            <div className="avatar-placeholder">
              {assignee && assignee.name
                ? assignee.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')
                    .toUpperCase()
                : '?'}
            </div>
          )}
        </div>
        <div className="due-date">
          Due: {formatDate(dueDate)}
        </div>
      </div>
    </div>
  );
}

TaskCard.propTypes = {
  title: PropTypes.string.isRequired,
  assignee: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string,
  }),
  priority: PropTypes.oneOf(['high', 'medium', 'low']).isRequired,
  dueDate: PropTypes.string.isRequired,
};
