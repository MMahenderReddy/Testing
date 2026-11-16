import React from 'react';
import PropTypes from 'prop-types';
import './NotificationBell.css';

function NotificationBell({ unreadCount, onClick }) {
  return (
    <div className="notification-bell" onClick={onClick} data-testid="notification-bell">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        className="bell-icon"
      >
        <path
          d="M12 2C9.243 2 7 4.243 7 7v3.764c0 .409-.158.803-.44 1.098C5.235 13.08 6.392 16 9 16h6c2.608 0 3.765-2.92 2.44-4.138A1.5 1.5 0 0 1 17 10.764V7c0-2.757-2.243-5-5-5zm0 20a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2z"
          fill="#333"
        />
      </svg>
      {unreadCount > 0 && (
        <span className="notification-badge" data-testid="notification-badge">
          {unreadCount > 99 ? '99+' : unreadCount}
        </span>
      )}
    </div>
  );
}

NotificationBell.propTypes = {
  unreadCount: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

NotificationBell.defaultProps = {
  onClick: () => {},
};

export default NotificationBell;
