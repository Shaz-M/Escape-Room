import React from 'react';
import './congratulationsPage.css';

const CongratulationsPage = ({ time, resetGame}) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
  return (
    <div className="congrats-page">
      <h1>Congratulations! You've escaped!</h1>
      <p>Your escape time: {minutes}m {seconds}s</p>
    </div>
  );
}

export default CongratulationsPage;