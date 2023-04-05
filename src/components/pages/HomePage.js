import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="header-container">
        <h1 className="header-title">Welcome to AI Design Platform</h1>
        <p className="header-subtitle">Revolutionize your design process with AI-powered tools and insights</p>
        <button className="cta-btn">Get Started</button>
        <button className="secondary-cta-btn">Learn More</button>
      </div>
    </div>
  );
};

export default HomePage;
