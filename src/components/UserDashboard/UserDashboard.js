import React from 'react';
import ActiveProjects from './ActiveProjects';
import RecentDesigns from './RecentDesigns';
import AIRecommendations from './AIRecommendations';
import './UserDashboard.css';

const UserDashboard = ({ projects, designs, recommendations }) => {
  return (
    <div className="user-dashboard">
      <ActiveProjects projects={projects} />
      <RecentDesigns designs={designs} />
      <AIRecommendations recommendations={recommendations} />
    </div>
  );
};

export default UserDashboard;
