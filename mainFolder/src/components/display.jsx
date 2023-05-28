import React from "react";
import "../styles/display.css";
import ProgressSteps from "./page2";
import { Container } from "react-bootstrap";

const Display = () => {
  return (
    <div className="divHero">
      <div className="divHeader">
        <h1>EasyFeatures</h1>
      </div>
      <div className="divBody">
        <div className="container">
          <div className="displayWrap">
            <div className="displayOne">
              <ProgressSteps />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
