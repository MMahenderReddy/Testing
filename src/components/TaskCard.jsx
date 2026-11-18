import React from 'react';
import PropTypes from 'prop-types';
import './TaskCard.css';

function getPriorityBadge(priority) {
  switch (priority) {
    case 'high':
      return <span className="priority-badge high">High</span>;
    case 'medium':
      return <span className="priority-badge medium">Medium</span>;
    case 'low':
      return <span className="priority-badge low">Low</span>;
    default:
      return null;
  }
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString();
}

const TaskCard = ({ title, assignee, priority, dueDate }) => (
  <div className="task-card">
    <div className="task-card-header">
      <div className="task-title">{title}</div>
      {getPriorityBadge(priority)}
    </div>
    <div className="task-card-footer">
      {assignee && assignee.avatarUrl && (
        <img
          className="assignee-avatar"
          src={assignee.avatarUrl}
          alt={assignee.name || 'Assignee'}
        />
      )}
      <div className="due-date">{dueDate ? formatDate(dueDate) : ''}</div>
    </div>
  </div>
);

TaskCard.propTypes = {
  title: PropTypes.string.isRequired,
  assignee: PropTypes.shape({
    name: PropTypes.string,
    avatarUrl: PropTypes.string,
  }),
  priority: PropTypes.oneOf(['high', 'medium', 'low']),
  dueDate: PropTypes.string,
};

TaskCard.defaultProps = {
  assignee: null,
  priority: 'medium',
  dueDate: '',
};

export default TaskCard;
