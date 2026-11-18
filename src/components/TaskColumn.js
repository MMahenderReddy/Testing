import React from 'react';

export default function TaskColumn({ column, tasks, moveTask }) {
  return (
    <div className="task-column" style={{ margin: 8, flex: 1 }}>
      <h2>{column.title}</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map(task => (
          <li key={task.id} style={{ margin: '8px 0', padding: 8, background: '#f4f4f4', borderRadius: 4 }}>
            {task.title}
            <div style={{ float: 'right' }}>
              {column.id !== 'done' && (
                <button onClick={() => moveTask(task.id, 'done')} style={{ marginLeft: 8 }}>
                  Move to Done
                </button>
              )}
              {column.id !== 'todo' && (
                <button onClick={() => moveTask(task.id, 'todo')} style={{ marginLeft: 8 }}>
                  Move to To Do
                </button>
              )}
              {column.id !== 'inprogress' && (
                <button onClick={() => moveTask(task.id, 'inprogress')} style={{ marginLeft: 8 }}>
                  Move to In Progress
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
