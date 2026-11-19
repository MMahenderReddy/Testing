import React, { useEffect, useState } from 'react';
import './ActivityFeed.css';

const ActivityFeed = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const res = await fetch('/api/activities?limit=5');
        if (!res.ok) throw new Error('Failed to fetch activities');
        const data = await res.json();
        setActivities(data.activities || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchActivities();
  }, []);

  return (
    <div className="activity-feed">
      <div className="activity-feed-header">Recent Activity</div>
      <div className="activity-feed-body">
        {loading && <div className="activity-feed-loading">Loading...</div>}
        {error && <div className="activity-feed-error">{error}</div>}
        {!loading && !error && activities.length === 0 && (
          <div className="activity-feed-empty">No recent activity.</div>
        )}
        <ul className="activity-feed-list">
          {activities.map((activity, idx) => (
            <li className="activity-feed-item" key={activity.id || idx}>
              <div className="activity-feed-action">{activity.action}</div>
              <div className="activity-feed-meta">
                <span className="activity-feed-project">{activity.projectName}</span>
                <span className="activity-feed-timestamp">{new Date(activity.timestamp).toLocaleString()}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ActivityFeed;
