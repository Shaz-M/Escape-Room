import React, { useState, useEffect } from 'react';
import './App.css';
import WelcomePage from './components/welcomePage';
import Game from './components/game';
import CongratulationsPage from './components/congratulationsPage';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showGame, setShowGame] = useState(false);
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval;
    if (showGame) {
      interval = setInterval(() => {
        setTimer((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [showGame]);

  const startGame = () => {
    setShowWelcome(false);
    setShowGame(true);
  };

  const escapeRoom = () => {
    setShowGame(false);
    setShowCongratulations(true);
  };



  return (
    <div className="App">
      {showWelcome && <WelcomePage onStart={startGame} />}
      {showGame && <Game timer={timer} onEscape={escapeRoom} />}
      {showCongratulations && <CongratulationsPage time={timer} />}

      {/* {hasFinished ? (
        showCongratulations && <CongratulationsPage time={timer} resetGame={resetGame} />
      ) : (
        <Game setHasFinished={setHasFinished} timer={timer} setTimer={setTimer} reset={reset} setReset={setReset} onEscape={escapeRoom} />
      )}
      { */}
    </div>
  );
}

export default App;
