import React from 'react';
import './TaskCard.css';

const TaskCard = ({ task, onClick }) => {
  return (
    <div className="task-card" onClick={() => onClick(task)}>
      <h4>{task.title}</h4>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskCard;
