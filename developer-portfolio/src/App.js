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
    <header>
      <NavigationMenu />
      </header>
      <main >
      <Routing />
      </main>
      <footer>
      <Footer />
     </footer>
    </>
  );
}

export default App;
