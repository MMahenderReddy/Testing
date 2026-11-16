import React from 'react';
import PropTypes from 'prop-types';
import './UserProfile.css';

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile-card">
      <div className="user-avatar-wrapper">
        <img
          className="user-avatar"
          src={user.avatar}
          alt={user.name + "'s avatar"}
        />
      </div>
      <div className="user-info">
        <h2 className="user-name">{user.name}</h2>
        <p className="user-email">{user.email}</p>
      </div>
    </div>
  );
};

UserProfile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserProfile;
