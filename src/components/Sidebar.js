import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li className="active">Calendar</li>
          <li>My Account</li>
          <li>Create Event</li>
          <li>Analytics</li>
        </ul>
      </nav>
      <footer>
        <ul>
          <li>Settings</li>
          <li>Help Center</li>
        </ul>
      </footer>
    </aside>
  );
};

export default Sidebar;
