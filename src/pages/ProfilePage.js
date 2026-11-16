import React from 'react';
import UserProfile from '../components/UserProfile';

// In a real app, user data would come from context, Redux, or API
const mockUser = {
  name: 'Jane Doe',
  email: 'jane.doe@example.com',
  avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
};

const ProfilePage = () => {
  return (
    <main>
      <h1 style={{ textAlign: 'center', marginTop: '2rem' }}>My Profile</h1>
      <UserProfile user={mockUser} />
    </main>
  );
};

export default ProfilePage;
