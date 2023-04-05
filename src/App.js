import React from 'react';
import "./App.css";
import Header from './components/Header';
import HomePage from './components/pages/HomePage';
import MainComponent from './components/MainComponent';
import UserDashboard from './components/UserDashboard/UserDashboard';
import DesignInterface from './components/DesignInterface';
import AIDesignAssistantPanel from './components/AIDesignAssistantPanel';
import DesignInputOutput from './components/DesignInputOutput';
import OnboardingTutorial from './components/OnboardingTutorial';
import ProjectManagement from './components/ProjectManagement';
import Collaboration from "./components/Collaboration/Collaboration";

function App() {
  return (
    <div className="App">
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
}

export default App;
