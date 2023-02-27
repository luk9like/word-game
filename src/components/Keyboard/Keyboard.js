import React from "react";
import KeyboardLetter from "../KeyboardLetter";

const ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

function getStatusByLetter(validatedGuesses) {
  const statusObj = {};

  validatedGuesses.forEach((guess) => {
    guess.forEach(({ letter, status }) => {
      statusObj[letter] = status;
    });
  });

  return statusObj;
}

function Keyboard({ validatedGuesses }) {
  let statusByLetter = getStatusByLetter(validatedGuesses);

  return (
    <div className={"keyboard"}>
      {ROWS.map((row, index) => (
        <div key={index} className={"row"}>
          {row.map((letter) => (
            <KeyboardLetter
              key={letter}
              letter={letter}
              status={statusByLetter[letter] || ""}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
