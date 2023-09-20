import React from "react";
import './project.css'

export default function Projects() {
  const projects = [
    {
      title: 'E-commerce Website',
      description: 'Built a responsive e-commerce website using Angular2+ and Node.js.',
      codeUrl: 'https://github.com/NurseNto/ShoppingCartTutorial.git',
      demoUrl: '',
      pictureUrl: 'images/ecommerce.png'

    },
    {
      title: 'Booking App',
      description: 'Developed a task management app with authentication using MERN stack.',
      codeUrl: 'https://github.com/NurseNto/DoctorsAppointmentBooking.git',
      demoUrl: '',
      pictureUrl: 'images/booking.png'
    },
    {
      title: 'Survey App',
      description: 'Built a responsive e-commerce website using Angular2+ and Node.js.',
      codeUrl: 'https://github.com/NurseNto/Survey-App.git',
      demoUrl: '',
      pictureUrl: 'images/survey.png'
    },
  ];

  return (
    <section id="skills">
    <ul className="card-list">
      {projects.map((project, index) => (
        <li key={index} className="card-item">
            <div className="card h-100" style={{ width: "18rem" }}>
              <img src={project.pictureUrl} className="card-img-top" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">
                  {project.description}
                </p>
              </div>
            
              <div className="card-body">
                <a href={project.demoUrl} className="card-link" target="_blank">Demo</a>
                <a href={project.codeUrl} className="card-link" target="_blank">Code</a>
              </div>
            </div>
      
        </li>
      ))}
    </ul>
  </section>
);
}
