// App.jsx
import { useState } from 'react';


const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function Square({ value, onClick, isWinner }) {
  return (
    <button
      className={`square ${isWinner ? 'winner-square' : ''}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winnerInfo, setWinnerInfo] = useState({
    winner: null,
    combo: [],
  });

  const handleClick = (index) => {
    if (board[index] || winnerInfo.winner) return;

    const updatedBoard = [...board];
    updatedBoard[index] = isXTurn ? 'X' : 'O';

    setBoard(updatedBoard);

    const winner = checkWinner(updatedBoard);

    if (winner) {
      setWinnerInfo(winner);
    } else {
      setIsXTurn(!isXTurn);
    }
  };

  const checkWinner = (currentBoard) => {
    for (let combo of winningCombinations) {
      const [a, b, c] = combo;

      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return {
          winner: currentBoard[a],
          combo,
        };
      }
    }

    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
    setWinnerInfo({
      winner: null,
      combo: [],
    });
  };

  const isDraw = !winnerInfo.winner && board.every((square) => square !== null);

  return (
    <div className="container">
      <div className="game-card">
        <h1 className="title">Tic Tac Toe</h1>

        <div className="status">
          {winnerInfo.winner ? (
            <h2>Winner: {winnerInfo.winner}</h2>
          ) : isDraw ? (
            <h2>It's a Draw!</h2>
          ) : (
            <h2>Current Turn: {isXTurn ? 'X' : 'O'}</h2>
          )}
        </div>

        <div className="board">
          {board.map((square, index) => (
            <Square
              key={index}
              value={square}
              onClick={() => handleClick(index)}
              isWinner={winnerInfo.combo.includes(index)}
            />
          ))}
        </div>

        <button className="reset-btn" onClick={resetGame}>
          Reset Game
        </button>
      </div>
    </div>
  );
}
