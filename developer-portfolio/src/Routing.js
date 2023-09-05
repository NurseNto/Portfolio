import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Landing from './pages/landing'
import Footer from './components/footer';

function Routing() {
    return (
      <Router>
        <Routes>
        <Route exact path="/" element={<Landing/>} />
        <Route path="/projects" component={<Projects/>} />
        <Route path="/contact" component={<Contact/>} />
        <Route path="/about" component={<About/>} />
        <Route path="/footer" component={<Footer/>} />
        </Routes>
      </Router>
      
    );
  }

  export default Routing;