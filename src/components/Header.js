import React from 'react';
import '../styles/Header.css';

const Header = ({ title }) => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">DreamPlanner</h1>
        <p className="slogan">Plan smart, dream big</p>
      </div>
      <div className="header-center">
        <h2 className="header-title">{title}</h2>
      </div>
      <div className="header-right">
        <p className="quote">
          "Делайте то, что можете, с тем, что у вас есть, там, где вы находитесь." <br />
          <span className="author">— Теодор Рузвельт</span>
        </p>
      </div>
    </header>
  );
};

export default Header;
