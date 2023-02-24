import React from "react";

function GuessInput() {
  const [value, setValue] = React.useState("");

  const enterValue = (e) => {
    e.preventDefault();
    console.log({ value });
    setValue("");
  };

  return (
    <form onSubmit={enterValue} className="guess-input-wrapper">
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
