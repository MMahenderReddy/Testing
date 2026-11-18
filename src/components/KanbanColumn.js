import React from 'react';
import PropTypes from 'prop-types';
import KanbanTaskCard from './KanbanTaskCard';

function KanbanColumn({
  column,
  tasks,
  onTaskMove,
  filterFn,
  ...props
}) {
  // Apply filter if provided
  const filteredTasks = filterFn ? tasks.filter(filterFn) : tasks;

  return (
    <div className="kanban-column" {...props}>
      <div className="kanban-column-header">
        <span className="kanban-column-title">{column.title}</span>
        <span className="kanban-column-count">({filteredTasks.length})</span>
      </div>
      <div className="kanban-column-tasks">
        {filteredTasks.map((task) => (
          <KanbanTaskCard
            key={task.id}
            task={task}
            onTaskMove={onTaskMove}
            columnId={column.id}
          />
        ))}
      </div>
    </div>
  );
}

KanbanColumn.propTypes = {
  column: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  onTaskMove: PropTypes.func,
  filterFn: PropTypes.func,
};

export default KanbanColumn;
