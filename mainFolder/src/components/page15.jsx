import React from "react";
import "../styles/d15.css";

const AnimatedCountdown = () => {
  return (
    <div className="d15Wrapper">
      <div id="panel" class="panel-container">
        <strong>
          How satisfied are you with our <br /> customer support performance?
        </strong>
        <div class="ratings-container">
          <div class="rating">
            <img
              src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-17.png"
              alt=""
            />
            <small>Unhappy</small>
          </div>

          <div class="rating">
            <img
              src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-3.png"
              alt=""
            />
            <small>Neutral</small>
          </div>

          <div class="rating active">
            <img
              src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-30.png"
              alt=""
            />
            <small>Satisfied</small>
          </div>
        </div>
        <button class="btn" id="send">
          Send Review
        </button>
      </div>
    </div>
  );
};

export default AnimatedCountdown;
