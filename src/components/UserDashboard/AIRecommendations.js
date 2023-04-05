import React from 'react';
import './AIRecommendations.css';

const AIRecommendations = ({ recommendations }) => {
  return (
    <div className="ai-recommendations">
      <h2>AI Recommendations</h2>
      <div className="recommendations-grid">
        {recommendations.map((recommendation) => (
          <div key={recommendation.id} className="recommendation-card">
            <img src={recommendation.image} alt={recommendation.title} />
            <div>
              <h3>{recommendation.title}</h3>
              <p>{recommendation.description}</p>
              <button>Apply</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIRecommendations;
