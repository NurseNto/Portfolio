// Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Header from './pages/header'
import Landing from './pages/landing'
import NavigationMenu from './components/navbar';

function App() {
  <NavigationMenu/>
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Landing/>} />
      <Route path="/projects" component={<Projects/>} />
      <Route path="/contact" component={<Contact/>} />
      <Route path="/header" component={<Header/>} />
      </Routes>
    </Router>
  );
}

export default App;
