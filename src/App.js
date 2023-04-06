import React from 'react';
import './App.css';
import Header from './components/Header';
import HomePage from './components/pages/HomePage';
import MainComponent from './components/MainComponent';
import UserDashboard from './components/UserDashboard/UserDashboard';
import DesignInterface from './components/DesignInterface';
import AIDesignAssistantPanel from './components/AIDesignAssistantPanel';
import DesignInputOutput from './components/DesignInputOutput';
import OnboardingTutorial from './components/OnboardingTutorial';
import ProjectManagement from './components/ProjectManagement';
import Collaboration from './components/Collaboration/Collaboration';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

const isLoggedIn = true; // Change this value to test access to the dashboard

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/onboarding" element={<OnboardingTutorial />} />
          <Route path="/project-management" element={<ProjectManagement />} />
          <Route path="/collaboration" element={<Collaboration />} />
          <Route path="/design-interface" element={<DesignInterface />} />
          <Route path="/ai-design-assistant" element={<AIDesignAssistantPanel />} />
          <Route path="/design-input-output" element={<DesignInputOutput />} />
          <PrivateRoute path="/dashboard" isLoggedIn={isLoggedIn} element={<UserDashboard />} />
        </Routes>
        <MainComponent />
      </Router>
    </div>
  );
}

export default App;
