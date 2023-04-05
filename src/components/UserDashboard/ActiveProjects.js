import React from 'react';
import './ActiveProjects.css';

const ActiveProjects = ({ projects }) => {
  return (
    <div className="active-projects">
      <h2>Active Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <img src={project.thumbnail} alt={project.name} />
            <div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <progress value={project.progress} max="100" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActiveProjects;
