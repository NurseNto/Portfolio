// Projects.js
import React from 'react';

function Projects() {
  // Example project data
  const projects = [
    {
      title: 'E-commerce Website',
      description: 'Built a responsive e-commerce website using React and Node.js.',
    },
    {
      title: 'Task Management App',
      description: 'Developed a task management app with authentication using MERN stack.',
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
