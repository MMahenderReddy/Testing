import React, { memo } from 'react';
import PropTypes from 'prop-types';

const KanbanTask = memo(function KanbanTask({ task }) {
  return (
    <div className="kanban-task" style={{ margin: '8px 0', padding: 8, background: '#fff', borderRadius: 4, boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
      <div className="kanban-task-title">{task.title}</div>
    </div>
  );
});

KanbanTask.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default KanbanTask;
