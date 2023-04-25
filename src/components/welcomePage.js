// src/components/WelcomePage.js
import React from 'react';
import './welcomePage.css';

const WelcomePage = ({ onStart }) => {
  return (
    <div className="welcome-page">
      <div className="welcome-container">
        <h1 className="welcome-title">Virtual Escape Room</h1>
        <p className="welcome-subtitle">Unravel the mysteries and find your way out!</p>
        <button className="welcome-button" onClick={onStart}>Start the Adventure</button>
      </div>
    </div>
  );
}

export default WelcomePage;