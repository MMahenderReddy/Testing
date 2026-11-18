import React, { useEffect } from 'react';

const Toast = ({ message, onClose, duration = 3000 }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 20,
      right: 20,
      background: '#323232',
      color: '#fff',
      padding: '12px 24px',
      borderRadius: 4,
      boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
      zIndex: 1000,
      fontSize: 16
    }}>
      {message}
    </div>
  );
};

export default Toast;
