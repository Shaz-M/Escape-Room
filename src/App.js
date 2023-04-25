import React, { useState } from 'react';
import './App.css';
import WelcomePage from './components/welcomePage';
import Game from './components/game';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  const startGame = () => {
    setShowWelcome(false);
  };

  return (
    <div className="App">
      {showWelcome ? (
        <WelcomePage onStart={startGame} />
      ) : (
        <Game />
      )}
    </div>
  );
}

export default App;
