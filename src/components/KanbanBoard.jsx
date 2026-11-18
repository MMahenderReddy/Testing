import React, { useEffect, useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import KanbanColumn from './KanbanColumn';
import { fetchTasks } from '../utils/api';

const KanbanBoard = ({ columns }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch tasks with minimal re-renders and optimized data structure
  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    fetchTasks()
      .then((data) => {
        if (isMounted) {
          setTasks(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message || 'Failed to load tasks');
          setLoading(false);
        }
      });
    return () => {
      isMounted = false;
    };
  }, []);

  // Memoize tasks by column for efficient rendering
  const tasksByColumn = useMemo(() => {
    const map = {};
    columns.forEach((col) => {
      map[col.id] = [];
    });
    for (const task of tasks) {
      if (map[task.status]) {
        map[task.status].push(task);
      }
    }
    return map;
  }, [tasks, columns]);

  if (loading) return <div className="kanban-loading">Loading...</div>;
  if (error) return <div className="kanban-error">{error}</div>;

  return (
    <div className="kanban-board" style={{ display: 'flex', gap: 16 }}>
      {columns.map((column) => (
        <KanbanColumn
          key={column.id}
          column={column}
          tasks={tasksByColumn[column.id] || []}
        />
      ))}
    </div>
  );
};

KanbanBoard.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default KanbanBoard;
