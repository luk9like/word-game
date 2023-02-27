import React from "react";

function KeyboardLetter({ letter, status }) {
  console.log(status);
  return <span className={`letter letter-${status}`}>{letter}</span>;
}

export default KeyboardLetter;
