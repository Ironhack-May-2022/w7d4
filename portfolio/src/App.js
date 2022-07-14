import React from "react";
import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import { Projects } from "./Projects";
import ProjectDetails from "./ProjectDetails";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;