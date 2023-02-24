import React from "react";

function GuessResult({ guesses }) {
  return (
    guesses.length > 0 && (
      <div className="guess-results">
        {guesses.map((guess) => (
          <p key={guess.id} className="guess">
            {guess.text}
          </p>
        ))}
      </div>
    )
  );
}

export default GuessResult;
