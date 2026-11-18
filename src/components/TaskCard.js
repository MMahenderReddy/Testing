import React from 'react';

const TaskCard = ({ task, onClick }) => {
  return (
    <div className="task-card" onClick={() => onClick(task)}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskCard;
