import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResult from "../GuessResult";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("initial");
  const handleSubmitGuess = (value) => {
    const nextGuesses = [...guesses, { id: crypto.randomUUID(), text: value }];
    setGuesses(nextGuesses);
    if (value === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= 6) {
      setGameStatus("lost");
    }
  };
  return (
    <>
      <GuessResult answer={answer} guesses={guesses} />
      {gameStatus === "won" && <WonBanner numOfGuesses={guesses.length ?? 0} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />
    </>
  );
}

export default Game;
