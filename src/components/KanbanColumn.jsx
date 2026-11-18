import React, { memo } from 'react';
import PropTypes from 'prop-types';
import KanbanTask from './KanbanTask';

const KanbanColumn = memo(function KanbanColumn({ column, tasks }) {
  return (
    <div className="kanban-column" style={{ flex: 1, minWidth: 250 }}>
      <h2>{column.title}</h2>
      <div className="kanban-tasks">
        {tasks.map((task) => (
          <KanbanTask key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
});

KanbanColumn.propTypes = {
  column: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default KanbanColumn;
