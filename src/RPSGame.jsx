import React, { useState } from "react";

function RPSGame() {
  const [palyerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  const handleChoice = (playerChoice) => {
    const choices = ["rock", "Paper", "Scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let gameResult;
    if (palyerChoice === computerChoice) {
      gameResult = "It's a tie";
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      gameResult = "You win!";
    } else {
      gameResult = "Computer wins!";
    }
    setPlayerChoice(playerChoice);
    setComputerChoice(computerChoice);
    setResult(gameResult);
  };
  return (
    <div>
      <h1>Rock, Paper, Scissors</h1>
      <p>Player:{palyerChoice}</p>
      <p>Computer:{computerChoice}</p>
      <p>Result:{result}</p>
      <button onClick={() => handleChoice("rock")}>Rock</button>
      <button onClick={() => handleChoice("paper")}>Paper</button>
      <button onClick={() => handleChoice("scissors")}>Scissors</button>
    </div>
  );
}

export default RPSGame;
