import React from 'react';
import './AIDesignAssistantPanel.css';

const AIDesignAssistantPanel = () => {
  return (
    <div className="ai-design-assistant-panel">
      <div className="panel-header">
        <h2>AI Design Assistant</h2>
      </div>
      <div className="tool-categories">
        <h3>Categories</h3>
        <ul>
          <li>Generative Design</li>
          <li>Design Feedback</li>
          <li>Trend Forecasting</li>
        </ul>
      </div>
      <div className="search-tools">
        <input type="text" placeholder="Search AI Tools" />
      </div>
      <div className="ai-tools">
        {/* Render the AI tools here */}
      </div>
    </div>
  );
};

export default AIDesignAssistantPanel;
