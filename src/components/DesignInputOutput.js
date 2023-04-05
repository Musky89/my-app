import React from 'react';
import './DesignInputOutput.css';

const DesignInputOutput = () => {
  return (
    <div className="design-input-output">
      <div className="design-brief-form">
        <h2>Design Brief</h2>
        <form>
          <label htmlFor="brandName">Brand Name</label>
          <input type="text" id="brandName" name="brandName" required />

          <label htmlFor="category">Category</label>
          <input type="text" id="category" name="category" required />

          <label htmlFor="launchType">Launch Type</label>
          <select id="launchType" name="launchType">
            <option value="lineExtension">Line Extension</option>
            <option value="newLaunch">New Launch</option>
            <option value="adjacentCategory">Adjacent Category</option>
          </select>

          <label htmlFor="brandPositioning">Brand Positioning Statement</label>
          <textarea id="brandPositioning" name="brandPositioning" required />

          <label htmlFor="launchObjectives">Objectives of the Launch</label>
          <textarea id="launchObjectives" name="launchObjectives" required />

          <label htmlFor="keyBenefits">Key Benefits and Claims</label>
          <textarea id="keyBenefits" name="keyBenefits" required />

          <label htmlFor="marketingMessage">Marketing Message</label>
          <textarea id="marketingMessage" name="marketingMessage" required />

          <label htmlFor="substrate">Substrate</label>
          <input type="text" id="substrate" name="substrate" required />

          <label htmlFor="brandConsiderations">Brand Mandatories & Considerations</label>
          <textarea id="brandConsiderations" name="brandConsiderations" required />

          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="file-import-export">
        <h2>File Import/Export</h2>
        {/* Render the file import/export system here */}
      </div>
    </div>
  );
};

export default DesignInputOutput;
