import { useEffect, useState } from 'react';

/**
 * Custom hook to get the count of tasks assigned to the current user.
 * Assumes there is a global auth context or similar to get current user id,
 * and a way to subscribe to tasks (e.g., via context, redux, or API polling).
 *
 * @param {function} getAssignedTasksCount - Function that returns the count of assigned tasks
 * @param {function} subscribeToAssignedTasksCount - Function to subscribe to real-time updates
 * @returns {number} assignedTasksCount
 */
export default function useAssignedTasksCount(getAssignedTasksCount, subscribeToAssignedTasksCount) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let unsubscribe;
    async function fetchAndSubscribe() {
      const initialCount = await getAssignedTasksCount();
      setCount(initialCount);
      if (subscribeToAssignedTasksCount) {
        unsubscribe = subscribeToAssignedTasksCount(setCount);
      }
    }
    fetchAndSubscribe();
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [getAssignedTasksCount, subscribeToAssignedTasksCount]);

  return count;
}
