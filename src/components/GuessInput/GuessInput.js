import React from "react";

function GuessInput({ handleSubmitGuess }) {
  const [value, setValue] = React.useState("");

  const submitValue = (e) => {
    e.preventDefault();
    handleSubmitGuess(value);
    setValue("");
  };

  return (
    <form onSubmit={submitValue} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={value}
        minLength={5}
        maxLength={5}
        title="Das Wort muss genau 5 Buchstaben haben"
        pattern="[a-zA-Z]{5}"
        onChange={(e) => setValue(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
