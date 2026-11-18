import React, { useState, useEffect } from 'react';
import TaskFilter from './TaskFilter';

const TaskList = ({ tasks, users }) => {
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [selectedAssignees, setSelectedAssignees] = useState([]);

  useEffect(() => {
    if (selectedAssignees.length === 0) {
      setFilteredTasks(tasks);
    } else {
      setFilteredTasks(
        tasks.filter(task => selectedAssignees.includes(String(task.assigneeId)))
      );
    }
  }, [tasks, selectedAssignees]);

  return (
    <div>
      <TaskFilter
        users={users}
        selectedAssignees={selectedAssignees}
        onChange={setSelectedAssignees}
      />
      <ul>
        {filteredTasks.map(task => (
          <li key={task.id}>
            <strong>{task.title}</strong> (Assignee: {users.find(u => String(u.id) === String(task.assigneeId))?.name || 'Unassigned'})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
