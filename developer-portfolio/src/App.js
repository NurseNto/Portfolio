// Routes.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Routing from "./Routing";
import Footer from "./components/footer";
import NavigationMenu from "./components/navbar";

function App() {
  return (
    <>
      <Routing />
      <Footer />
      <NavigationMenu/>
    </>
  );
}

export default App;
