import React, { useEffect, useState } from 'react';
import './WelcomeCard.css';

const WelcomeCard = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProfile() {
      try {
        setLoading(true);
        setError(null);
        // Replace with your actual user profile API endpoint
        const res = await fetch('/api/user/profile');
        if (!res.ok) throw new Error('Failed to fetch user profile');
        const data = await res.json();
        setProfile(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProfile();
  }, []);

  function formatDate(dateString) {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return date.toLocaleString();
  }

  if (loading) return <div className="welcome-card">Loading...</div>;
  if (error) return <div className="welcome-card error">{error}</div>;
  if (!profile) return null;

  return (
    <div className="welcome-card">
      <div className="welcome-title">Welcome, {profile.fullName}!</div>
      <div className="welcome-info">
        <div><strong>Role:</strong> {profile.role}</div>
        <div><strong>Last login:</strong> {formatDate(profile.lastLogin)}</div>
      </div>
    </div>
  );
};

export default WelcomeCard;
