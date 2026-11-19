import React from 'react';
import KanbanBoard from './components/KanbanBoard';
import ActivityFeed from './components/ActivityFeed';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <ActivityFeed />
      <KanbanBoard />
    </div>
  );
}

export default App;
