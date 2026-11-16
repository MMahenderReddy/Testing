import React from 'react';
import { useHistory } from 'react-router-dom';

const LogoutButton = () => {
  const history = useHistory();

  const handleLogout = () => {
    // Remove session data (example: localStorage, sessionStorage, cookies)
    localStorage.removeItem('authToken');
    sessionStorage.clear();
    // If you use cookies for session, clear them here as well
    // document.cookie = 'authToken=; Max-Age=0; path=/;';

    // Redirect to login page
    history.push('/login');
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
