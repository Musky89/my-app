import React, { useState } from 'react';
import './DesignInput.css';

const DesignInput = () => {
  const [designData, setDesignData] = useState({
    brandIdentity: '',
    targetAudience: '',
    designGoals: '',
  });

  const handleInputChange = (event) => {
    setDesignData({ ...designData, [event.target.name]: event.target.value });
  };

  const submitDesignInput = (event) => {
    event.preventDefault();
    console.log('Design input data:', designData);
    setDesignData({
      brandIdentity: '',
      targetAudience: '',
      designGoals: '',
    });
  };

  return (
    <div className="design-input">
      <h2>Design Input</h2>
      <form onSubmit={submitDesignInput}>
        <label htmlFor="brandIdentity">Brand Identity:</label>
        <input
          type="text"
          name="brandIdentity"
          value={designData.brandIdentity}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="targetAudience">Target Audience:</label>
        <input
          type="text"
          name="targetAudience"
          value={designData.targetAudience}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="designGoals">Design Goals:</label>
        <textarea
          name="designGoals"
          value={designData.designGoals}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DesignInput;
