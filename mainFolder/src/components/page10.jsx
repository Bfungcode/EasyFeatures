import React, { useState } from "react";
import "../styles/d10.css";

const HamburgerCollapse = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="d10Wrapper">
      <div className={`nav ${toggle ? "active" : ""}`} id="nav">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Works</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <button
          className="icon"
          id="toggle"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <div className="line line1"></div>
          <div className="line line2"></div>
        </button>
      </div>
    </div>
  );
};

export default HamburgerCollapse;
