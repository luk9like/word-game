import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ value, status }) {
  const classNames = status ? `cell ${status ?? ""}` : "cell";
  return <span className={classNames}>{value}</span>;
}

function Guess({ guess, answer }) {
  const validation = guess && checkGuess(guess.text, answer);
  return (
    <p className="guess">
      {range(5).map((index) => (
        <Cell
          key={index}
          value={validation ? validation[index].letter : undefined}
          status={validation ? validation[index].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
