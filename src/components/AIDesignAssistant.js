import React, { useState } from 'react';
import './AIDesignAssistant.css';

const AIDesignAssistant = () => {
  const [assistantFeedback, setAssistantFeedback] = useState('');

  const handleInputChange = (event) => {
    setAssistantFeedback(event.target.value);
  };

  const submitFeedback = (event) => {
    event.preventDefault();
    console.log('AI assistant feedback:', assistantFeedback);
    setAssistantFeedback('');
  };

  return (
    <div className="ai-design-assistant">
      <h2>AI Design Assistant Panel</h2>
      <p>Ask the AI Design Assistant for feedback or suggestions:</p>
      <form onSubmit={submitFeedback}>
        <textarea
          value={assistantFeedback}
          onChange={handleInputChange}
          placeholder="Type your question or request here..."
          required
        />
        <button type="submit">Submit</button>
      </form>
      <div className="ai-assistant-response">
        {/* Display AI Design Assistant's response here */}
      </div>
    </div>
  );
};

export default AIDesignAssistant;
