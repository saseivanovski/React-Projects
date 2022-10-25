import "./RockPaperScissors.css";
import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";
import { useState, useEffect } from "react";
import Reset from "../components/Reset";
import Button from "../components/Button";
import ScoreBoard from "../components/ScoreBoard";

const RockPaperScissors = () => {
  const [playerAction, setPlayerAction] = useState("");
  const [computerAction, setComputerAction] = useState("");

  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const actions = [1, 2, 3];

  function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
  }

  const rock = () => {
    setPlayerAction(actions[0]);
    setComputerAction(getRandomItem(actions));
  };
  const paper = () => {
    setPlayerAction(actions[1]);
    setComputerAction(getRandomItem(actions));
  };
  const scissors = () => {
    setPlayerAction(actions[2]);
    setComputerAction(getRandomItem(actions));
  };

  const scoring = () => {
    if (
      (playerAction === 3 && computerAction === 2) ||
      (playerAction === 2 && computerAction === 1) ||
      (playerAction === 1 && computerAction === 3)
    ) {
      setPlayerScore(playerScore + 1);
    } else if (
      (computerAction === 3 && playerAction === 2) ||
      (computerAction === 2 && playerAction === 1) ||
      (computerAction === 1 && playerAction === 3)
    ) {
      setComputerScore(computerScore + 1);
    }
  };

  useEffect(() => {
    if (playerAction && computerAction) scoring();
  }, [playerAction, computerAction]);

  const restart = () => {
    setPlayerAction("");
    setComputerAction("");
    setPlayerScore(0);
    setComputerScore(0);
  };

  return (
    <div className="center">
      <div>
        <div className="container">
          <div className="player">
            <ScoreBoard className="score">Player: {playerScore}</ScoreBoard>
            <div className="action">
              {playerAction === 1 ? <FaHandRock size={60} /> : ""}
              {playerAction === 2 ? <FaHandPaper size={60} /> : ""}
              {playerAction === 3 ? <FaHandScissors size={60} /> : ""}
            </div>
          </div>
          <div className="player">
            <ScoreBoard className="score">Computer: {computerScore}</ScoreBoard>
            <div className="action">
              {computerAction === 1 ? <FaHandRock size={60} /> : ""}
              {computerAction === 2 ? <FaHandPaper size={60} /> : ""}
              {computerAction === 3 ? <FaHandScissors size={60} /> : ""}
            </div>
          </div>
        </div>
        <div className="rowButtons">
          <Button className="button" onClick={rock}>
            <FaHandRock size={30} />
          </Button>
          <Button className="button" onClick={paper}>
            <FaHandPaper size={30} />
          </Button>
          <Button className="button" onClick={scissors}>
            <FaHandScissors size={30} />
          </Button>
        </div>
        <Reset className="resetButton" onClick={restart} />
      </div>
    </div>
  );
};

export default RockPaperScissors;
