import React from "react";
import './App.css';
import BasePage from "./pages/base/BasePage";
import Projects from "./pages/projects/Projects";
import Experience from "./pages/experience/Experience";
import Skills from "./pages/skills/Skills";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from "./pages/home/Home";

function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap components in JSX */}
        <Route path="/" element={<BasePage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience/>} />
        <Route path="/skills" element={<Skills/>} />
        
        
        {/* Redirect undefined routes to the home page */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
