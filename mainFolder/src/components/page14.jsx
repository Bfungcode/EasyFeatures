import React, { useEffect } from "react";
import "../styles/d14.css";

const AutoText = () => {
  useEffect(() => {
    const textEl = document.getElementById("textAuto");
    const speedEl = document.getElementById("speed");
    const text = "I Love Banana";
    let idx = 1;
    let speed = 300 / speedEl.value;

    writeText();

    function writeText() {
      textEl.innerText = text.slice(0, idx);

      idx++;

      if (idx > text.length) {
        idx = 1;
      }

      setTimeout(writeText, speed);
    }

    speedEl.addEventListener("input", (e) => (speed = 300 / e.target.value));
  });
  return (
    <div className="d14Wrapper">
      <div className="autoWrap">
        <h1 id="textAuto">Starting...</h1>
      </div>

      <autoT>
        <label for="speed">Speed:</label>
        <input
          type="number"
          name="speed"
          id="speed"
          value="1"
          min="1"
          max="10"
          step="1"
        />
      </autoT>
    </div>
  );
};
export default AutoText;