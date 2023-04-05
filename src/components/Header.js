import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">AI Design Platform</div>
      <nav className="nav">
        <NavLink to="/" exact activeClassName="active">Home</NavLink>
        <NavLink to="/projects" activeClassName="active">Projects</NavLink>
        <NavLink to="/ai-tools" activeClassName="active">AI Tools</NavLink>
        <NavLink to="/analytics" activeClassName="active">Analytics</NavLink>
        <NavLink to="/settings" activeClassName="active">Settings</NavLink>
        <NavLink to="/help" activeClassName="active">Help</NavLink>
      </nav>
    </header>
  );
};

export default Header;
