import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import Loading from "./components/Loading";
import CharacterCard from "./components/CharacterCard";
import uniqid from "uniqid";
import data from "./components/data";

function App() {
  const [apiData, setApiData] = useState(data.data);
  const [characters, setCharacters] = useState([]);
  const [score, setScore] = useState();
  const [highScore, setHighScore] = useState(0);
  const [clicked, setClicked] = useState([]);
  const [displayedCharacters, setDisplayedCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    createCharacterList();
  }, []);

  useEffect(() => {
    createNewDisplayCharacters();
  }, [score]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setScore(0);
    }, 1500);
  }, []);

  const createNewDisplayCharacters = () => {
    setDisplayedCharacters([]);
    const newRandomIndexes = randomNumbers();
    newRandomIndexes.map((num) => {
      return setDisplayedCharacters((prevDisplayedCharacters) => [
        characters[num],
        ...prevDisplayedCharacters,
      ]);
    });
  };

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
    createNewDisplayCharacters();
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

  return (
    <div>
      <Header />
      <Scoreboard score={score} highScore={highScore} />
      <div className="demo-grid">
        {isLoading ? (
          <Loading />
        ) : (
          displayedCharacters.map((char) => {
            return (
              <CharacterCard
                src={char?.image}
                alt={char?.name}
                onClick={handleClick}
                id={char?.id}
                key={char?.id}
                name={char?.name}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default App;
