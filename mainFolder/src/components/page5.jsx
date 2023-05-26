import React, { useState } from "react";
import "../styles/d5.css";

const ContentSlide = () => {
  const [checkTop, setCheckTop] = useState(0);
  const boxes = document.querySelectorAll(".box");
  window.addEventListener("scroll", checkBoxes);
  function checkBoxes() {
    setCheckTop((window.innerHeight / 5) * 4);

    boxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;

      if (boxTop < checkTop) {
        box.classList.add("show");
      } else {
        box.classList.remove("show");
      }
    });
  }
  return (
    <div className="p5wrapper">
      <div className="box">
        <h2>Content</h2>
      </div>
      <div className="box">
        <h2>Content</h2>
      </div>
      <div className="box">
        <h2>Content</h2>
      </div>
      <div className="box">
        <h2>Content</h2>
      </div>
    </div>
  );
};

export default ContentSlide;
