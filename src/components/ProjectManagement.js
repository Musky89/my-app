import React, { useState } from "react";
import "./ProjectManagement.css";

const ProjectManagement = () => {
  const [projects] = useState([
    { id: 1, name: "Project 1" },
    { id: 2, name: "Project 2" },
    { id: 3, name: "Project 3" },
  ]);

  return (
    <div className="project-management">
      <h2>Project Management</h2>
      <ul className="project-list">
        {projects.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectManagement;
