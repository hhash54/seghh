// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CourseExplorationPage from './pages/CourseExplorationPage';
import InteractiveLessonPage from './pages/InteractiveLessonPage';
import UserDashboard from './pages/UserDashboard';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import Confirmation from './pages/Confirmation';

import "./App.css";
function App() {
  return (
    <Router>
      
      <Navbar />
      <Routes>
      <Route path="/confirmation" element={<Confirmation />} />

        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<CourseExplorationPage />} />
        <Route path="/lesson" element={<InteractiveLessonPage />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
