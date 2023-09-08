import React from "react";
import './project.css'

export default function Projects() {
  const projects = [
    {
      title: 'E-commerce Website',
      description: 'Built a responsive e-commerce website using Angular2+ and Node.js.',
    },
    {
      title: 'Task Management App',
      description: 'Developed a task management app with authentication using MERN stack.',
    },
    {
      title: 'Project 3',
      description: 'Built a responsive e-commerce website using Angular2+ and Node.js.',
    },
    {
      title: 'Project 4',
      description: 'Developed a task management app with authentication using MERN stack.',
    },
  ];

  return (
    <section id="skills">
    <ul className="card-list">
      {projects.map((project, index) => (
        <li key={index} className="card-item">
            <div className="card h-100" style={{ width: "18rem" }}>
              <img src="logo192.png" className="card-img-top" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">
                  {project.description}
                </p>
              </div>
            
              <div className="card-body">
                <a href="#" className="card-link">Demo</a>
                <a href="#" className="card-link">Code</a>
              </div>
            </div>
      
        </li>
      ))}
    </ul>
  </section>
);
}
