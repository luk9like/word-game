import React from "react";
import Banner from "../Banner";

function LostBanner({ answer, action }) {
  return (
    <Banner gameStatus="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <button className="button" onClick={action}>
        Restart
      </button>
    </Banner>
  );
}

export default LostBanner;
