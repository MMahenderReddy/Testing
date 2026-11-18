import React, { useEffect } from 'react';

export default function Toast({ show, message, onClose }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="toast-notification" style={{
      position: 'fixed',
      bottom: 24,
      right: 24,
      background: '#333',
      color: '#fff',
      padding: '12px 24px',
      borderRadius: 6,
      zIndex: 1000,
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
    }}>
      {message}
    </div>
  );
}
