import React, { useEffect, useState } from 'react';
import './StatCards.css';

const fetchStats = async () => {
  // Simulate API calls with static data for now
  // Replace with real API calls as needed
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        projectsAssigned: 7,
        tasksCompleted: 42,
        hoursLogged: 128,
        upcomingDeadlines: 3,
      });
    }, 400);
  });
};

const statMeta = [
  {
    key: 'projectsAssigned',
    label: 'Projects Assigned',
    icon: '📁',
    color: '#1976d2',
  },
  {
    key: 'tasksCompleted',
    label: 'Tasks Completed',
    icon: '✅',
    color: '#388e3c',
  },
  {
    key: 'hoursLogged',
    label: 'Hours Logged',
    icon: '⏰',
    color: '#fbc02d',
  },
  {
    key: 'upcomingDeadlines',
    label: 'Upcoming Deadlines',
    icon: '⏳',
    color: '#d32f2f',
  },
];

const StatCards = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetchStats().then((data) => {
      if (mounted) {
        setStats(data);
        setLoading(false);
      }
    });
    return () => { mounted = false; };
  }, []);

  return (
    <div className="stat-cards-container">
      {statMeta.map((meta) => (
        <div className="stat-card" key={meta.key} style={{ borderTopColor: meta.color }}>
          <div className="stat-card-icon" style={{ color: meta.color }}>{meta.icon}</div>
          <div className="stat-card-content">
            <div className="stat-card-value">
              {loading ? '--' : stats[meta.key]}
            </div>
            <div className="stat-card-label">{meta.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatCards;
