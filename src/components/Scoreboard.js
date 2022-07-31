import React from "react";
import "./styles/Scoreboard.css";

export default function Scoreboard({ score, highScore }) {
  return (
    <div className="scoreboard">
      <h1>Score: {score}</h1>
      <h3>Highscore: {highScore}</h3>
    </div>
  );
}
