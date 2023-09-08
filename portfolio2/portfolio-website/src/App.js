
import './App.css';
import './components/style.css'
// App.js
import React from 'react';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <header>
        <h1>Full Stack Developer Portfolio</h1>
      </header>
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;

