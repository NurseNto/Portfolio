import React from 'react';
import './navbar.css';

function NavigationMenu() {
  return (
    <section className="navbar">
    <h2><svg preserveAspectRatio="none" data-bbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 200 200" role="img" aria-label="Homepage" color='red'>
    <g>
        <path d="M200 100c0 55.228-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0s100 44.772 100 100z" fill="orange"></path>
    </g>
</svg> Nurse Masango</h2>
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
         Resume
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
