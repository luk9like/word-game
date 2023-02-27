import React from "react";
import { range } from "../../utils";

function Cell({ value, status }) {
  const classNames = status ? `cell ${status}` : "cell";
  return <span className={classNames}>{value}</span>;
}

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(5).map((index) => (
        <Cell
          key={index}
          value={guess ? guess[index].letter : undefined}
          status={guess ? guess[index].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
