import React from 'react';
import './DashboardLayout.css';

const Sidebar = ({ links }) => (
  <aside className="dashboard-sidebar">
    <div className="dashboard-sidebar-title">Dashboard</div>
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  </aside>
);

const Header = ({ userName, onLogout }) => (
  <header className="dashboard-header">
    <div className="dashboard-header-title">Welcome, {userName}</div>
    <button className="dashboard-logout-btn" onClick={onLogout}>
      Logout
    </button>
  </header>
);

const DashboardLayout = ({ userName, onLogout, sidebarLinks, children }) => {
  return (
    <div className="dashboard-layout">
      <Header userName={userName} onLogout={onLogout} />
      <div className="dashboard-main-wrapper">
        <Sidebar links={sidebarLinks} />
        <main className="dashboard-main-content">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
