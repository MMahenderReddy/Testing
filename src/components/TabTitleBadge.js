import { useEffect } from 'react';
import useAssignedTasksCount from '../hooks/useAssignedTasksCount';
import { getAssignedTasksCount, subscribeToAssignedTasksCount } from '../services/tasks';

/**
 * Component that updates the browser tab title with a badge count
 * for the number of tasks assigned to the current user.
 *
 * Usage: Place once in your app, e.g. in App.js
 */
export default function TabTitleBadge() {
  const count = useAssignedTasksCount(getAssignedTasksCount, subscribeToAssignedTasksCount);

  useEffect(() => {
    const originalTitle = document.title.replace(/^\(\d+\) /, '');
    if (count > 0) {
      document.title = `(${count}) ${originalTitle}`;
    } else {
      document.title = originalTitle;
    }
    // Cleanup: restore original title on unmount
    return () => {
      document.title = originalTitle;
    };
  }, [count]);

  return null;
}
