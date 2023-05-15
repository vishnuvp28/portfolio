import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import Skills from "./routes/Skills";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
