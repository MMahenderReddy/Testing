import React from 'react';

// Example user data; in a real app, this would come from props, context, or an API
const user = {
  name: 'Jane Doe',
  email: 'jane.doe@example.com',
  avatar: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y',
};

const UserProfile = () => {
  return (
    <div style={{ maxWidth: 400, margin: '40px auto', padding: 24, border: '1px solid #eee', borderRadius: 8, background: '#fff', textAlign: 'center' }}>
      <img
        src={user.avatar}
        alt={user.name}
        style={{ width: 100, height: 100, borderRadius: '50%', marginBottom: 16, objectFit: 'cover', border: '2px solid #ccc' }}
      />
      <h2 style={{ margin: '16px 0 8px' }}>{user.name}</h2>
      <p style={{ color: '#555', margin: 0 }}>{user.email}</p>
    </div>
  );
};

export default UserProfile;
