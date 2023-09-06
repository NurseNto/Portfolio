
import React from 'react';
import './body.css';

function Buttons() {
  return(
<div className='btn-container'>

<a class="round-button" href="#" role="button" >Skills</a>
<a class="round-button" href="#" role="button">Projects</a>
<a class="round-button" href="#" role="button">Contact</a>
</div>
  )
}


export default function Home() {
  return (
<div className='image-container'>
<div className='picture'>
  <img src="profile.jpg"  className="image" />
</div>
<div className='text'>
  <h1 className="greeting-title">Hello</h1>
  <p>A Bit About Me</p>
  <p>I am self-driven and i like to learn new things related to coding. I completed my diploma in IT, specializing in Software Development. and currently working as a Junior Software Developer mostly focused in Front-End development.</p>
  <Buttons/>
</div>


</div>


   
  );
}

  