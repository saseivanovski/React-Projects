import React, { useState } from "react";
import "./TicTacToe.css";
import Button from "../components/Button";
import ScoreBoard from "../components/ScoreBoard";
import Reset from "../components/Reset";

function TicTacToe() {
  const [values, setValues] = useState(Array(9).fill(null));
  const [x, setX] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const { xScore, oScore } = scores;
  const [gameOver, setGameOver] = useState(false);

  const winGame = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const clickHandle = (i) => {
    const newValues = values.map((value, index) => {
      if (index === i) {
        return x === true ? "X" : "O";
      } else {
        return value;
      }
    });

    const theWinner = winner(newValues);
    if (theWinner) {
      if (theWinner === "O") {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore });
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
      }
    }
    setValues(newValues);
    setX(!x);
  };

  const winner = (values) => {
    for (let i = 0; i < winGame.length; i++) {
      const [a, b, c] = winGame[i];

      if (values[a] && values[a] === values[b] && values[b] === values[c]) {
        setGameOver(true);
        return values[a];
      }
    }
  };

  const resetGame = () => {
    setGameOver(false);
    setValues(Array(9).fill(null));
    setX(true);
  };

  return (
    <>
      <ScoreBoard>
        <div className="scores">
          <span className="pX">X - {xScore}</span>
          <Reset className="reset" onClick={resetGame} />
          <span className="pO">O - {oScore}</span>
        </div>
      </ScoreBoard>
      <div className="game">
        <div className="board">
          {values.map((value, index) => {
            return (
              <Button
                key={index}
                onClick={() => {
                  if (gameOver) {
                    resetGame();
                  } else {
                    value === null && clickHandle(index);
                  }
                }}
              >
                {value}
              </Button>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default TicTacToe;
