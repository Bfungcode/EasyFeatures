import React, { useState } from "react";
import "../styles/d1.css";

const ExpendingCard = () => {
  const [card1, setCard1] = useState(false);
  const [card2, setCard2] = useState(false);
  const [card3, setCard3] = useState(false);
  const [card4, setCard4] = useState(false);
  const [card5, setCard5] = useState(false);
  return (
    <div className="main">
      <div className="container">
        <div
          className={`panel ${card1 ? "active" : ""}`}
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)`,
          }}
          onClick={() => {
            setCard1(true);
            setCard2(false);
            setCard3(false);
            setCard4(false);
            setCard5(false);
          }}
        >
          <h3>Explore The World</h3>
        </div>
        <div
          className={`panel ${card2 ? "active" : ""}`}
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)`,
          }}
          onClick={() => {
            setCard1(false);
            setCard2(true);
            setCard3(false);
            setCard4(false);
            setCard5(false);
          }}
        >
          <h3>Wild Forest</h3>
        </div>
        <div
          className={`panel ${card3 ? "active" : ""}`}
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80>`,
          }}
          onClick={() => {
            setCard1(false);
            setCard2(false);
            setCard3(true);
            setCard4(false);
            setCard5(false);
          }}
        >
          <h3>Sunny Beach</h3>
        </div>
        <div
          className={`panel ${card4 ? "active" : ""}`}
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80)`,
          }}
          onClick={() => {
            setCard1(false);
            setCard2(false);
            setCard3(false);
            setCard4(true);
            setCard5(false);
          }}
        >
          <h3>City on Winter</h3>
        </div>
        <div
          className={`panel ${card5 ? "active" : ""}`}
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)`,
          }}
          onClick={() => {
            setCard1(false);
            setCard2(false);
            setCard3(false);
            setCard4(false);
            setCard5(true);
          }}
        >
          <h3>City on Winter</h3>
        </div>
      </div>
    </div>
  );
};

export default ExpendingCard;
