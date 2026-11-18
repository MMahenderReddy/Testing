import React, { useState } from 'react';
import Board from './components/Board';
import Toast from './components/Toast';

function App() {
  const [toastMessage, setToastMessage] = useState('');

  // Handler to show toast
  const handleTaskMovedToDone = (task) => {
    setToastMessage(`Task "${task.title}" moved to Done!`);
  };

  return (
    <>
      <Board onTaskMovedToDone={handleTaskMovedToDone} />
      <Toast message={toastMessage} onClose={() => setToastMessage('')} />
    </>
  );
}

export default App;
