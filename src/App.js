import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import CharacterCard from "./components/CharacterCard";
import uniqid from "uniqid";
import data from "./components/data";

function App() {
  const [apiData, setApiData] = useState(data.data);
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clicked, setClicked] = useState([]);
  const [displayedCharacters, setDisplayedCharacters] = useState([]);

  useEffect(() => {
    createCharacterList();
    setIsLoading(false);
  }, []);

  useEffect(() => {
    setDisplayedCharacters([]);
    if (characters.length > 0) {
      const newRandomIndexes = randomNumbers();
      newRandomIndexes.map((num) => {
        return setDisplayedCharacters((prevDisplayedCharacters) => [
          characters[num],
          ...prevDisplayedCharacters,
        ]);
      });
    }
  }, [score]);

  const randomNumbers = () => {
    let array = [];
    for (let i = 0; array.length < 10; i++) {
      let num = Math.ceil(Math.random() * 76) + 1;
      if (array.indexOf(num) === -1) {
        array.push(num);
      }
    }
    return array;
  };

  const createCharacterList = () => {
    apiData.map((character) => {
      const newChar = {
        name: character.character.name,
        image: character.character.images.jpg.image_url,
        id: uniqid(),
      };
      return setCharacters((prevCharacters) => [newChar, ...prevCharacters]);
    });
  };

  const handleClick = (e) => {
    const id = e.target.id;

    if (clicked.includes(id)) {
      setHighScore(score);
      setScore(0);
      setClicked([]);
    } else {
      setClicked((prevClicked) => [id, ...prevClicked]);
      setScore((prevScore) => prevScore + 1);
    }
  };

  const characterCards = displayedCharacters.map((char) => {
    return (
      <CharacterCard
        src={char.image}
        alt={char.name}
        onClick={handleClick}
        id={char.id}
        key={char.id}
      />
    );
  });

  return (
    <div>
      <Header />
      <Scoreboard score={score} highScore={highScore} />
      <div className="demo-grid">
        {characterCards.length > 0 ? characterCards : "Loading..."}
      </div>
    </div>
  );
}

export default App;
