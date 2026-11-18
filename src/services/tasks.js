// Dummy implementations for demonstration. Replace with real data logic.

// Example: get current user id from auth context or similar
default export function getCurrentUserId() {
  // Replace with real user id logic
  return window.currentUserId || 'user1';
}

// Example: tasks data source (replace with real data source)
let tasks = [
  { id: 1, title: 'Task 1', assignedTo: 'user1' },
  { id: 2, title: 'Task 2', assignedTo: 'user2' },
  { id: 3, title: 'Task 3', assignedTo: 'user1' },
];

// Simulate listeners for real-time updates
let listeners = [];

export function getAssignedTasksCount() {
  const userId = getCurrentUserId();
  return Promise.resolve(tasks.filter(t => t.assignedTo === userId).length);
}

export function subscribeToAssignedTasksCount(callback) {
  listeners.push(callback);
  // Initial call
  callback(tasks.filter(t => t.assignedTo === getCurrentUserId()).length);
  // Return unsubscribe function
  return () => {
    listeners = listeners.filter(l => l !== callback);
  };
}

// For demonstration: simulate task assignment changes
export function _simulateTaskAssignmentChange(newTasks) {
  tasks = newTasks;
  listeners.forEach(cb => cb(tasks.filter(t => t.assignedTo === getCurrentUserId()).length));
}
