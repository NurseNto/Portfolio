import React from 'react';

function NavigationMenu() {
  return (
    <section className="navbar">
    <h2>Nurse Masango</h2>
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
         About
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
         Projects
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
         Contact
        </a>
      </li>
    </ul>
  </section>


//     <nav >

// <h2> Nurse Masango</h2>
//   <ul >


//     <li><a href="#">About Me</a></li>
//     <li><a href="#">Resume</a></li>
//     <li><a href="">Projects</a></li>
//     <li><a href="Contact">Contact</a></li>
//   </ul>
// </nav>


  );
}

export default NavigationMenu;
