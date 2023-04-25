import React from 'react';
import './WelcomePage.css';

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <div className="welcome-container">
        <h1 className="welcome-title">Virtual Escape Room</h1>
        <p className="welcome-subtitle">Unravel the mysteries and find your way out!</p>
        <button className="welcome-button">Start the Adventure</button>
      </div>
    </div>
  );
}

export default WelcomePage;