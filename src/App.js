import React from "react";
import {BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import './App.css';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Services from "./pages/Services";
import SkillsPage from "./pages/SkillsPage";
import NavBar from "./NavBar";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
      <Router>
          <NavBar/>
          <Routes>
              <Route path="/" element={<HomePage />} exact/>
              <Route path="/about" element={<AboutPage />} exact/>
              <Route path="/services" element={<Services />} exact/>
              <Route path="/skills" element={<SkillsPage />} exact/>
              <Route path="/projects" element={<ProjectsPage />} exact/>
          </Routes>
      </Router>
  );
}

export default App;
