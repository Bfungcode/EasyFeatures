import React, { useEffect, useState } from "react";
import "../styles/d9.css";
import axios from "axios";

const jData = [];
const DadJoke = () => {
  function generateJoke() {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    fetch("https://icanhazdadjoke.com", config)
      .then((response) => response.json())
      .then((data) => {});
  }
  useEffect(() => {
    generateJoke();
  }, []);

  return (
    <div className="div9Wrapper">
      <div className="jokesContainer">
        <div className="jokesTitle">
          <h6>Random Jokes</h6>
        </div>
        <div className="jokesContent">
          {jData.map((jok) => {
            return <h1>{jok.joke}</h1>;
          })}
        </div>
        <div className="jokesNext">
          <button className="jokesButton">Next Joke</button>
        </div>
      </div>
    </div>
  );
};

export default DadJoke;
