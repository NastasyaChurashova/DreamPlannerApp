import React from 'react';
import { NavLink } from 'react-router-dom';
import calendarIcon from '../assets/icons/calendar.svg';
import myAccountIcon from '../assets/icons/my_account.svg';
import createEventIcon from '../assets/icons/create_event.svg';
import analyticsIcon from '../assets/icons/analytics.svg';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              <img src={calendarIcon} alt="Calendar" className="icon" />
              CALENDAR
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-account" className={({ isActive }) => (isActive ? 'active' : '')}>
              <img src={myAccountIcon} alt="My Account" className="icon" />
              MY ACCOUNT
            </NavLink>
          </li>
          <li>
            <NavLink to="/create-event" className={({ isActive }) => (isActive ? 'active' : '')}>
              <img src={createEventIcon} alt="Create Event" className="icon" />
              CREATE EVENT
            </NavLink>
          </li>
          <li>
            <NavLink to="/analytics" className={({ isActive }) => (isActive ? 'active' : '')}>
              <img src={analyticsIcon} alt="Analytics" className="icon" />
              ANALYTICS
            </NavLink>
          </li>
        </ul>
      </nav>
      <footer className="sidebar-footer">
        <ul>
          <li>
            <NavLink to="/settings" className={({ isActive }) => (isActive ? 'active' : '')}>
              SETTINGS
            </NavLink>
          </li>
          <li>
            <NavLink to="/help-center" className={({ isActive }) => (isActive ? 'active' : '')}>
              HELP CENTER
            </NavLink>
          </li>
        </ul>
      </footer>
    </aside>
  );
};

export default Sidebar;
