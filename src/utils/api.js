// Simulated API for fetching tasks efficiently

// Generate 500 tasks for testing performance
const generateTasks = (count = 500) => {
  const statuses = ['todo', 'inprogress', 'done'];
  const tasks = [];
  for (let i = 0; i < count; i++) {
    tasks.push({
      id: `task-${i}`,
      title: `Task #${i + 1}`,
      status: statuses[i % statuses.length],
    });
  }
  return tasks;
};

export function fetchTasks() {
  // Simulate fast network latency
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(generateTasks(500));
    }, 100); // 100ms simulated latency
  });
}
