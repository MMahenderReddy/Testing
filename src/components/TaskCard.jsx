import React from 'react';
import PropTypes from 'prop-types';
import './TaskCard.css';

function getPriorityColor(priority) {
  switch (priority) {
    case 'high':
      return 'priority-high';
    case 'medium':
      return 'priority-medium';
    case 'low':
      return 'priority-low';
    default:
      return 'priority-default';
  }
}

export default function TaskCard({ title, assignee, priority, dueDate }) {
  return (
    <div className="task-card">
      <div className="task-card-header">
        <span className="task-card-title">{title}</span>
        <span className={`task-card-priority badge ${getPriorityColor(priority)}`}>
          {priority}
        </span>
      </div>
      <div className="task-card-footer">
        <div className="task-card-assignee">
          <img
            className="task-card-avatar"
            src={assignee.avatarUrl}
            alt={assignee.name}
            title={assignee.name}
          />
        </div>
        <div className="task-card-due-date">
          Due: {dueDate}
        </div>
      </div>
    </div>
  );
}

TaskCard.propTypes = {
  title: PropTypes.string.isRequired,
  assignee: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
  }).isRequired,
  priority: PropTypes.oneOf(['high', 'medium', 'low']).isRequired,
  dueDate: PropTypes.string.isRequired,
};
