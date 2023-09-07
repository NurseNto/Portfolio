import React from 'react';
import './navbar.css';

function NavigationMenu() {
  return (
    <section className="navbar">
    <h2> <img src="./images/nurse.png" className="logo" alt="Card image cap" width="80" height="80"/>Nurse Masango</h2>
    <ul className="nav justify-content-end">
    <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="Home">
         Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="Skills">
         Skills
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="Projects">
         Projects
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="Contact">
         Contact
        </a>
      </li>
    </ul>
  </section>

  );
}

export default NavigationMenu;
