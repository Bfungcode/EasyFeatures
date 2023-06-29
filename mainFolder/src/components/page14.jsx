import React, { useState } from "react";
import "../styles/d14.css";

const AnimatedCountdown = () => {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);

  return (
    <div className="d15Wrapper">
      <div id="panel" className="panel-container">
        <strong>
          How satisfied are you with our <br /> customer support performance?
        </strong>
        <div className="ratings-container">
          <div
            className={`rating ${toggle1 ? "active" : ""}`}
            onClick={() => {
              setToggle1(true);
              setToggle2(false);
              setToggle3(false);
            }}
          >
            <img
              src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-17.png"
              alt=""
            />
            <small>Unhappy</small>
          </div>

          <div
            className={`rating ${toggle2 ? "active" : ""}`}
            onClick={() => {
              setToggle1(false);
              setToggle2(true);
              setToggle3(false);
            }}
          >
            <img
              src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-3.png"
              alt=""
            />
            <small>Neutral</small>
          </div>

          <div
            className={`rating ${toggle3 ? "active" : ""}`}
            onClick={() => {
              setToggle1(false);
              setToggle2(false);
              setToggle3(true);
            }}
          >
            <img
              src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-30.png"
              alt=""
            />
            <small>Satisfied</small>
          </div>
        </div>
        <button className="btn15" id="send">
          Send Review
        </button>
      </div>
    </div>
  );
};

export default AnimatedCountdown;
