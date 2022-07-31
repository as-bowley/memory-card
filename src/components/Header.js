import React from "react";
import "./styles/Header.css";

export default function Header() {
  return (
    <div className="header">
      <h1 className="header--title">Demon Slayer: Memory Game</h1>
      <p className="header--description">
        Score points by clicking on a character, but don't click on the same one
        twice!
      </p>
    </div>
  );
}
