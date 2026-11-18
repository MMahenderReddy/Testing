import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function updateTabBadge(count) {
  if (count > 0) {
    document.title = `(${count}) Task Manager`;
  } else {
    document.title = 'Task Manager';
  }
}

const TaskList = ({ tasks, currentUser }) => {
  // Compute the number of tasks assigned to the current user
  const assignedCount = tasks.filter(
    (task) => task.assignee && task.assignee.id === currentUser.id
  ).length;

  useEffect(() => {
    updateTabBadge(assignedCount);
    return () => {
      // Reset title on unmount
      document.title = 'Task Manager';
    };
  }, [assignedCount]);

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            {task.assignee && task.assignee.id === currentUser.id && (
              <span style={{ color: 'green', marginLeft: 8 }}>(Assigned to you)</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      assignee: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        name: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
  currentUser: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default TaskList;
