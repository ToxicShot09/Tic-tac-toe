// src/App.js
import React, { useState } from 'react';
import Board from './Board';
import './App.css';

function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (i) => {
    const historyCopy = history.slice(0, currentMove + 1);
    const currentSquares = historyCopy[historyCopy.length - 1];
    const squares = currentSquares.slice();

    if (calculateWinner(squares) || squares[i]) return;

    squares[i] = isXNext ? 'X' : 'O';
    setHistory(historyCopy.concat([squares]));
    setCurrentMove(historyCopy.length);
    setIsXNext(!isXNext);
  };

  const handleReset = () => {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
    setIsXNext(true);
  };

  const winner = calculateWinner(history[history.length - 1]);
  const status = winner ? `Player ${winner === 'X' ? 1 : 2} Wins!` : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="game">
      <div className="game-header">TIC-TAC-TOE</div>
      <div className="status">{status}</div>
      <div className="game-board">
        <Board squares={history[currentMove]} onClick={handleClick} />
      </div>
      <button className="reset-button" onClick={handleReset}>Reset</button>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default App;
