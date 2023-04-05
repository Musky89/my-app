import React, { useState } from 'react';
import './CreateNewProject.css';

const projectTypes = [
  'Packaging',
  'Labels',
  'Promotional Materials',
];

const CreateNewProject = () => {
  const [projectType, setProjectType] = useState('');

  const handleProjectTypeChange = (e) => {
    setProjectType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form submission here
  };

  return (
    <div className="create-new-project">
      <form onSubmit={handleSubmit}>
        <label htmlFor="project-type">Project Type:</label>
        <select
          id="project-type"
          value={projectType}
          onChange={handleProjectTypeChange}
        >
          <option value="">Choose a project type</option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {/* Add more form fields as needed */}
        <button type="submit">Create New Project</button>
      </form>
    </div>
  );
};

export default CreateNewProject;
