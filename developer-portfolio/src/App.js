// Routes.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Routing from "./Routing";
import Footer from "./components/footer";
import NavigationMenu from "./components/navbar";
import './App.css';

function App() {
  return (
    <>
      <NavigationMenu />
      <Routing />
      <Footer />
    
    </>
  );
}

export default App;
