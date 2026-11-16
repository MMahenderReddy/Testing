import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FaBell } from 'react-icons/fa';
import './NotificationBell.css';

// Simulated notification event emitter (replace with real-time logic as needed)
let listeners = [];
export function emitNotificationUpdate(count) {
  listeners.forEach((cb) => cb(count));
}
export function subscribeToNotificationUpdates(cb) {
  listeners.push(cb);
  return () => {
    listeners = listeners.filter((l) => l !== cb);
  };
}

const NotificationBell = ({ unreadCount }) => {
  const [count, setCount] = useState(unreadCount);

  useEffect(() => {
    setCount(unreadCount);
  }, [unreadCount]);

  useEffect(() => {
    const unsubscribe = subscribeToNotificationUpdates((newCount) => {
      setCount(newCount);
    });
    return unsubscribe;
  }, []);

  return (
    <div className="notification-bell">
      <FaBell size={24} />
      {count > 0 && (
        <span className="notification-badge" data-testid="notification-badge">
          {count}
        </span>
      )}
    </div>
  );
};

NotificationBell.propTypes = {
  unreadCount: PropTypes.number.isRequired,
};

export default NotificationBell;
