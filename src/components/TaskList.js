import React, { useState } from 'react';
import TaskFilter from './TaskFilter';

const PRIORITIES = ['High', 'Medium', 'Low'];

function TaskList({ tasks }) {
  const [selectedPriorities, setSelectedPriorities] = useState(PRIORITIES);

  const filteredTasks = tasks.filter(
    (task) => selectedPriorities.includes(task.priority)
  );

  return (
    <div>
      <TaskFilter
        priorities={PRIORITIES}
        selectedPriorities={selectedPriorities}
        onChange={setSelectedPriorities}
      />
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <strong>{task.title}</strong> - <em>{task.priority}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
