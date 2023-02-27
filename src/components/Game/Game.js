import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResult from "../GuessResult";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";
import { checkGuess } from "../../game-helpers";
import Keyboard from "../Keyboard";

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS));
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

  const handleReset = () => {
    setGuesses([]);
    setGameStatus("initial");
    setAnswer(sample(WORDS));
  };
  const validatedGuesses = guesses.map((guess) =>
    checkGuess(guess.text, answer)
  );
  return (
    <>
      <GuessResult answer={answer} guesses={validatedGuesses} />
      {gameStatus === "won" && (
        <WonBanner action={handleReset} numOfGuesses={guesses.length ?? 0} />
      )}
      <LostBanner action={handleReset} answer={answer} />
      <Keyboard validatedGuesses={validatedGuesses} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />
    </>
  );
}

export default Game;
