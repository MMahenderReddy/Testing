import React, { useEffect, useState } from 'react';
import NotificationBell, { emitNotificationUpdate } from './NotificationBell';

// Simulated notification API (replace with real API calls)
function fetchUnreadNotifications() {
  // Simulate fetching unread count from server
  return Promise.resolve(3);
}

// Simulate real-time notification updates (replace with websocket or similar)
function simulateNotificationEvents(setUnread) {
  let count = 3;
  const interval = setInterval(() => {
    // Randomly increment or decrement
    const change = Math.random() > 0.5 ? 1 : -1;
    count = Math.max(0, count + change);
    setUnread(count);
    emitNotificationUpdate(count);
  }, 5000);
  return () => clearInterval(interval);
}

const Navbar = () => {
  const [unread, setUnread] = useState(0);

  useEffect(() => {
    fetchUnreadNotifications().then((count) => {
      setUnread(count);
      emitNotificationUpdate(count);
    });
    const cleanup = simulateNotificationEvents(setUnread);
    return cleanup;
  }, []);

  return (
    <nav className="navbar">
      {/* Other nav items here */}
      <NotificationBell unreadCount={unread} />
    </nav>
  );
};

export default Navbar;
