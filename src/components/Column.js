import React from 'react';

function Column({ column, tasks, moveTask }) {
  return (
    <div className="column">
      <h2>{column.title}</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            <div style={{ marginTop: 8 }}>
              {column.id !== 'todo' && (
                <button onClick={() => moveTask(task.id, 'todo')}>To Do</button>
              )}
              {column.id !== 'inprogress' && (
                <button onClick={() => moveTask(task.id, 'inprogress')}>In Progress</button>
              )}
              {column.id !== 'done' && (
                <button onClick={() => moveTask(task.id, 'done')}>Done</button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Column;
