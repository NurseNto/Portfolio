import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Body from './pages/body'
import Footer from './components/footer';

function Routing() {
    return (
      <Router>
        <Routes>
        <Route path="/" exact element={<Body/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/footer" element={<Footer/>} />
        </Routes>
      </Router>
      
    );
  }

  export default Routing;