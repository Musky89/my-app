import React from 'react';
import Header from './Header';
import HomePage from './pages/HomePage';
import UserDashboard from './UserDashboard/UserDashboard';
import DesignInterface from './DesignInterface';
import AIDesignAssistantPanel from './AIDesignAssistantPanel';
import DesignInputOutput from './DesignInputOutput';
import OnboardingTutorial from './OnboardingTutorial';
import ProjectManagement from './ProjectManagement';
import Collaboration from './Collaboration/Collaboration';
import './MainComponent.css';

const MainComponent = () => {
  return (
    <div className="main-component">
      <Header />
      <HomePage />
      <UserDashboard />
      <ProjectManagement />
      <Collaboration />
      <DesignInterface />
      <AIDesignAssistantPanel />
      <DesignInputOutput />
      <OnboardingTutorial />
      <MainComponent />
    </div>
  );
};

export default MainComponent;
