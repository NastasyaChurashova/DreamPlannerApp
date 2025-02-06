import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/assets/logo.png" alt="DreamPlanner" />
        <h1>DreamPlanner</h1>
        <p>Plan smart, dream big</p>
      </div>
    </header>
  );
};

export default Header;