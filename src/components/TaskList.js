import React, { useState } from 'react';
import TaskFilter from './TaskFilter';

const TaskList = ({ tasks, assignees }) => {
  const [selectedAssignees, setSelectedAssignees] = useState([]);

  const filteredTasks = selectedAssignees.length === 0
    ? tasks
    : tasks.filter(task => selectedAssignees.includes(task.assigneeId));

  return (
    <div>
      <TaskFilter
        assignees={assignees}
        selectedAssignees={selectedAssignees}
        onChange={setSelectedAssignees}
      />
      <ul>
        {filteredTasks.map(task => (
          <li key={task.id}>
            <strong>{task.title}</strong> (Assignee: {assignees.find(a => a.id === task.assigneeId)?.name || 'Unassigned'})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
