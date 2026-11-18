import { useEffect } from 'react';

function getAssignedTaskCount(tasks, currentUserId) {
  if (!Array.isArray(tasks)) return 0;
  return tasks.filter(task => task.assignedTo === currentUserId).length;
}

export default function TaskBadgeTitle({ tasks, currentUserId, baseTitle }) {
  useEffect(() => {
    const count = getAssignedTaskCount(tasks, currentUserId);
    if (count > 0) {
      document.title = `(${count}) ${baseTitle}`;
    } else {
      document.title = baseTitle;
    }
    // Cleanup: restore title on unmount
    return () => {
      document.title = baseTitle;
    };
  }, [tasks, currentUserId, baseTitle]);

  return null;
}
