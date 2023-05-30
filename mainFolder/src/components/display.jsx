import React, { useState, useEffect } from "react";
import "../styles/display.css";
import ProgressSteps from "./page2";
import ExpendingCard from "./page1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faC,
  faCheckCircle,
  faClipboard,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  darcula,
  atomOneDark,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import SearchIcon from "./page3";
import Imageload from "./page4";
import ContentSlide from "./page5";
import SplitHover from "./page6";
import WaveLogin from "./page7";
import SoundBoard from "./page8";
import FaqCollapse from "./page9";
import HamburgerCollapse from "./page10";
import Clock from "./page11";
import KineticCss from "./page12";
import SkeletonLoader from "./page13";
import AutoText from "./page14";
import AnimatedCountdown from "./page15";
import TestiCard from "./page16";
import IncrementBox from "./page17";
import EnableButton from "./page18";
import RangeDown from "./page19";
import CodeConfirmation from "./page20";

const Display = (e) => {
  const allObject = [
    {
      jsxD2: `
          import React, { useState, useEffect } from 'react'
          import '../styles/d2.css'
          const ProgressSteps = () => {
              const [active, setActive] = useState(1);
              const [circle1, setCircle1] = useState(false);
              const [circle2, setCircle2] = useState(false);
              const [circle3, setCircle3] = useState(false);
              const [circle4, setCircle4] = useState(false);
              const circles = document.querySelectorAll('.circle');
              useEffect(() => {
                  if (active === 1) {
                      setCircle1(true);
                      setCircle2(false);
                      setCircle3(false);
                      setCircle4(false);
                      document.querySelector('.progress').style.width = '0%';
                  } else if (active === 2) {
                      setCircle1(true);
                      setCircle2(true);
                      setCircle3(false);
                      setCircle4(false);
                      document.querySelector('.progress').style.width = '25%';
                  } else if (active === 3) {
                      setCircle1(true);
                      setCircle2(true);
                      setCircle3(true);
                      setCircle4(false);
                      document.querySelector('.progress').style.width = '50%';
                  } else if (active === 4) {
                      setCircle1(true);
                      setCircle2(true);
                      setCircle3(true);
                      setCircle4(true);
                      document.querySelector('.progress').style.width = '75%';
                  }
              }, [active]);
              return (
                  <div className='main'>
                      <div className='container'>
                          <div className='wrapper'>
                              <div className="progress-container">
                                  <div className="progress" id="progress"></div>
                                  <div className={circle //$//{circle1 ? 'active' : ''}}>1</div>
                                  <div className={circle //$//{circle2 ? 'active' : ''}}>2</div>
                                  <div className={circle //$//{circle3 ? 'active' : ''}}>3</div>
                                  <div className={circle //$//{circle4 ? 'active' : ''}}>4</div>
                              </div>
                              <button className='boton' id="prev" disabled={active == 1} onClick={() => {
                                  setActive(active - 1)
                                  console.log(document.querySelectorAll('.active').length, circles.length);
                              }}>Prev</button>
                              <button className='boton' id='next' disabled={active >= 4} onClick={() => {
                                  setActive(active + 1)
                                  console.log(document.querySelectorAll('.active').length, circles.length);
                              }}>Next</button>
                          </div>
                      </div>
                  </div>
              )
          }
          export default ProgressSteps;
          `,
      cssD2: `
          .wrapper {
              position: relative;
              width: 100%;
              justify-content: center;
              padding-top: 10%;
          }
          
          .progress-container {
              display: flex;
              justify-content: space-around;
              align-content: center;
              align-items: center;
              align-self: center;
              position: relative;
              width: 100%;
              z-index: 1;
              margin-bottom: 10%;
          }
          
          .progress-container::before {
              content: '';
              position: absolute;
              background-color: var(--line-border-empty);
              top: 50%;
              left: 12%;
              transform: translateY(-50%);
              height: 4px;
              width: 76%;
              z-index: -1;
          }
          
          #progress {
              position: absolute;
              top: 50%;
              left: 12%;
              transform: translateY(-50%);
              height: 4px;
              width: 0%;
              z-index: -1;
              background-color: var(--line-border-fill);
              transition: 0.4s ease-in;
          }
          
          .circle {
              background-color: #fff;
              color: #999;
              border-radius: 50%;
              height: 30px;
              width: 30px;
              display: flex;
              justify-content: center;
              align-content: center;
              border: 3px solid var(--line-border-empty);
              transition: .4s;
          }
          
          .circle.active {
              border-color: var(--line-border-fill);
          }
          
          .boton {
              background-color: var(--line-border-fill);
              color: white;
              border: 0;
              border-radius: 6px;
              cursor: pointer;
              font-family: inherit;
              padding: 8px 30px;
              margin: 5px;
              font-size: 14px;
          }
          
          .boton:active {
              transform: scale(0.98);
          }
          
          .boton:focus {
              outline: 0;
          }
          
          .boton:disabled {
              background-color: var(--line-border-empty);
              cursor: not-allowed;
          }
          `,
    },
    {
      jsxD1: `
      import React, { useState } from 'react';
      import '../styles/d1.css';
      
      const ExpendingCard = () => {
        const [active, setActive] = useState(false);
        const [card1, setCard1] = useState(false);
        const [card2, setCard2] = useState(false);
        const [card3, setCard3] = useState(false);
        const [card4, setCard4] = useState(false);
        const [card5, setCard5] = useState(false);
        return (
          <div className='main'>
            <div className="container">
              <div className={panel //$//{card1 ? "active" : ""}} style={{ backgroundImage: url(https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80) }} onClick={() => {
                setCard1(true);
                setCard2(false);
                setCard3(false);
                setCard4(false);
                setCard5(false);
              }}
              >
                <h3>Explore The World</h3>
              </div>
              <div className={panel //$//{card2 ? "active" : ""}} style={{ backgroundImage: url(https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80) }}
                onClick={() => {
                  setCard1(false);
                  setCard2(true);
                  setCard3(false);
                  setCard4(false);
                  setCard5(false);
                }}>
                <h3>Wild Forest</h3>
              </div>
              <div className={panel //$//{card3 ? "active" : ""}} style={{ backgroundImage: url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80> }}
                onClick={() => {
                  setCard1(false);
                  setCard2(false);
                  setCard3(true);
                  setCard4(false);
                  setCard5(false);
                }}>
                <h3>Sunny Beach</h3>
              </div>
              <div className={panel //$//{
                card4 ? "active" : ""
              }} style={{ backgroundImage: url(https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80) }}
                onClick={() => {
                  setCard1(false);
                  setCard2(false);
                  setCard3(false);
                  setCard4(true);
                  setCard5(false);
                }}>
                <h3>City on Winter</h3>
              </div>
              <div className={panel //$//{
                card5 ? "active" : ""
              }} style={{ backgroundImage: url(https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80) }}
                onClick={() => {
                  setCard1(false);
                  setCard2(false);
                  setCard3(false);
                  setCard4(false);
                  setCard5(true);
                }}>
                <h3>City on Winter</h3>
              </div>
            </div>
          </div >
        )
      }
      
      export default ExpendingCard;
      `,
      cssD1: `
      .expan {
          display: flex;
          justify-content: center;
          background-color: white;
          border-style: outset;
      }
      
      .panel {
          position: relative;
          display: flex;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          height: 30vh;
          color: white;
          cursor: pointer;
          flex: 0.7;
          margin: 10px;
          transition: flex 0.7s ease-in;
          box-sizing: border-box;
          justify-content: center;
      }
      
      .panel h3 {
          font-size: 24px;
          opacity: 0;
          display: flex;
          flex-direction: column;
          justify-content: end;
          align-content: flex-end;
          padding-bottom: 10%;
          padding-left: 10%;
      }
      
      .panel.active {
          display: flex;
          flex: 5;
      }
      
      .panel.active h3 {
          opacity: 10;
          transition: opacity 0.3s ease-in 0.4s;
      }
      
      @media (max-width: 880px) {
          .container {
              width: 100vw;
              height: 100vh;
              flex-direction: column;
          }
          .panel {
              width: 80vw;
              position: relative;
              display: flex;
              background-size: cover;
              background-position: center;
              background-repeat: no-repeat;
              height: 30vh;
              color: white;
              cursor: pointer;
              flex: 0.7;
              margin: 10px;
              transition: flex 0.7s ease-in;
              box-sizing: border-box;
              justify-content: center;
          }
          .panel h3 {
              font-size: 24px;
              opacity: 0;
              display: flex;
              justify-content: center;
              align-content: center;
              padding-bottom: 0%;
              padding-left: 0%;
          }
          /* .panel:nth-of-type(4),
          .panel:nth-of-type(5) {
              display: none;
          } */
      }
      `,
    },
    {
      jsxD3: `
      import React, {useState} from 'react'
      import '../styles/d3.css'
      import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
      import { faSearch } from '@fortawesome/free-solid-svg-icons'
      
      const SearchIcon = () => {
          const [active, setActive] = useState(false);
        return (
          <div className='container'>
              <div className='d3Wrapper'>
              <div className={search //$//{active ? 'active' : ''}}>
              <input type='text' placeholder='Search...' />
              <button className='btn' onClick={() => {
                  setActive(!active);
              }}>
                  <i><FontAwesomeIcon icon={faSearch} /></i>
              </button>
              </div>
              </div>
          </div>
        )
      }
      
      export default SearchIcon
      `,
      cssD3: `
      .search {
          position: relative;
          height: 55px;
          border-style: groove;
      }
      
      .search input {
          background-color: white;
          border: 0;
          font-size: 18px;
          padding: 15px;
          height: 50px;
          width: 50px;
          transition: width 0.3s ease;
          border-style: none;
      }
      
      .search .btn {
          background-color: white;
          border: 0;
          cursor: pointer;
          font-size: 24px;
          position: absolute;
          top: 0;
          left: 0;
          height: 50px;
          width: 50px;
          transition: transform 0.3s ease;
      }
      
      .btn:focus,
      .input:focus {
          outline: 0;
      }
      
      .search.active input {
          width: 200px;
      }
      
      .search.active .btn {
          transform: translateX(220px);
      }
      
      .d3Wrapper {
          margin-top: 5%;
          width: 100%;
          align-items: center;
          display: flex;
          justify-content: center;
      }
      `,
    },
    {
      jsxD4: `
      import React from 'react';
      import '../styles/d4.css';
      
      const Imageload = () => {
        return (
          <div className='p4Wrapper' onClick={() => {
              const loadText = document.querySelector('.loadtext');
              const bg = document.querySelector('.bgImage');
              let load = 0;
              let int = setInterval(blurring, 30)
              const scale = (num, in_min, in_max, out_min, out_max) => {
                  return((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min 
              }
          
              function blurring() {
                      load++;
                      if(load > 99) {
                          clearInterval(int);
                      }
                      loadText.innerText = //$//{load}%;
                      loadText.style.opacity = scale(load, 0, 100, 1, 0);
                      bg.style.filter = blur(//$//{scale(load, 0, 100, 30, 0)}px)
              } 
          }}>
              <div className='container'>
                  <section className='bgImage'></section>
                  <div className='loadtext'>0%</div>
              </div>
          </div>
        )
      }
      
      export default Imageload
      `,
      cssD4: `
      .p4Wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          margin: 0;
          position: relative;
      }
      
      .bgImage {
          background: url('https://images.unsplash.com/photo-1509514026798-53d40bf1aa09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80') no-repeat center center/cover;
          position: absolute;
          top: -30px;
          left: -30px;
          right: 0;
          width: calc(100vw + 60px);
          height: calc(100vh + 60px);
          z-index: -1;
          filter: blur(30px);
      }
      
      .loadtext {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          align-content: center;
          font-size: 50px;
          color: white;
      }
      `,
    },
    {
      jsxD5: `
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
      `,
      cssD5: `
      .p5wrapper {
          margin-top: 10%;
      }
      
      .box {
          background-color: black;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 400px;
          height: 200px;
          margin: 10px;
          border-radius: 10px;
          transform: translateX(400%);
          transition: transform 0.4s ease;
      }
      
      .box:nth-of-type(even) {
          transform: translateX(-400%);
      }
      
      .box.show {
          transform: translateX(0);
      }
      `,
    },
    {
      jsxD6: `
      import React from 'react'
      import '../styles/d6.css'
      const SplitHover = () => {
        return (
          <div className='d6Wrapper' onMouseOver={() => {
            const left = document.querySelector('.left');
            const right = document.querySelector('.right');
            const wrapper = document.querySelector('.d6Wrapper');
            left.addEventListener('mouseenter', () => wrapper.classList.add('hover-left'));
            left.addEventListener('mouseleave', () => wrapper.classList.remove('hover-left'));
      
            right.addEventListener('mouseenter', () => wrapper.classList.add('hover-right'));
            right.addEventListener('mouseleave', () => wrapper.classList.remove('hover-right'));
          }}>
            <div className='split left'>
              <h1 className='titleD6'>Playstation 5</h1>
              <button href='#' className='btnBuy'>Buy Now</button>
            </div>
            <div className='split right'>
              <h1 className='titleD6'>Xbox Series X</h1>
              <button href='#' className='btnBuy'>Buy Now</button>
            </div>
          </div>
        )
      
      }
      
      export default SplitHover;
      `,
      cssD6: `
      :root {
          --left-bg-color: rgba(87, 84, 236, 0.7);
          --right-bg-color: rgba(43, 43, 43, 0.8);
      }
      
      .d6Wrapper {
          width: 150%;
          height: 100vh;
          display: flex;
      }
      
      .split {
          position: relative;
          width: 50%;
          height: 100%;
          overflow: hidden;
      }
      
      .titleD6 {
          position: relative;
          font-size: 3em;
          color: white;
          left: 50%;
          top: 40%;
          transform: translateX(-50%);
          white-space: nowrap;
          display: flex;
          justify-content: center;
          align-items: center;
      }
      
      .btnBuy {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          left: 50%;
          top: 40%;
          transform: translateX(-50%);
          text-decoration: none;
          background-color: black;
          color: white;
          border: black solid 0.2rem;
          font-size: 1rem;
          font-weight: bold;
          height: 30px;
          width: 10rem;
          padding: 1rem;
          text-transform: uppercase;
      }
      
      .split.left {
          left: 0;
          background: url('../pictures/ps.jpg');
          background-repeat: no-repeat;
          background-size: cover;
      }
      
      .split.left::before {
          content: '';
          width: 100%;
          height: 100%;
          background-color: var(--left-bg-color);
      }
      
      .split.left .btnBuy:hover {
          background-color: rgba(87, 84, 236, 1);
          border-color: rgba(87, 84, 236, 1);
      }
      
      .split.right {
          right: 0;
          background: url('../pictures/xbox.jpg');
          background-repeat: no-repeat;
          background-size: cover;
      }
      
      .split.right::before {
          content: '';
          width: 100%;
          height: 100%;
          background-color: var(--right-bg-color);
      }
      
      .split.right .btnBuy:hover {
          background-color: rgba(28, 122, 28, 1);
          border-color: rgba(28, 122, 28, 1);
      }
      
      .hover-left .left {
          width: 75%;
      }
      
      .hover-left .right {
          width: 25%;
      }
      
      .hover-right .right {
          width: 75%;
      }
      
      .hover-right .left {
          width: 25%;
      }
      
      .split.right,
      .split.left,
      .split.right::before,
      .split.left::before {
          transition: all 1000ms ease-in-out;
      }
      `,
    },
    {
      jsxD7: `
      import React from 'react';
      import '../styles/d7.css'
      
      
      const WaveLogin = () => {
        return (
          <div>
              <div className='waveWrapper' onMouseEnter={() => {
                    const labels = document.querySelectorAll('.waveForm label');
                    labels.forEach(label => {
                      label.innerHTML = label.innerText
                      .split('')
                      .map((letter, idx) => <span style="transition-delay://$//{
                        idx * 30
                      }ms">//$//{letter}</span>)
                      .join('')
                    })
              }}>
              <h1>Login</h1>
              <div className='waveForm'>
                <input type='text' required />
                <label className='waveLabel'>Email</label>
              </div>
              <div className='waveForm'>
                <input type='password' required />
                <label className='waveLabel'>Password</label>
              </div>
              <button className='btnWave'>Login</button>
              <div className='waveText'>Didnt have an account? <a href='#'>Register</a></div>
              </div>
          </div>
        )
      }
      
      export default WaveLogin;
      `,
      cssD7: `
      .waveWrapper {
          margin-top: 10%;
          background-color: whitesmoke;
          width: 100%;
          color: black;
          border-radius: 5%;
          padding: 5%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
      }
      
      .waveWrapper h1 {
          text-align: center;
      }
      
      .waveForm {
          position: relative;
          width: 400px;
          padding: 24px 48px;
      }
      
      .waveForm input {
          width: 100%;
          border: 0;
          border-bottom: 1px black solid;
          background-color: transparent;
          display: block;
          padding: 10px 0;
      }
      
      .btnWave {
          display: flex;
          justify-content: center;
          align-items: center;
          align-content: center;
          width: 80%;
          padding: 15px;
          border-radius: 5%;
          border: 0;
          background-color: black;
          color: white;
          font-size: 16px;
          margin-top: 2.5%;
          margin-bottom: 2.5%;
      }
      
      .waveForm input:focus,
      .waveform input:valid {
          outline: 0;
      }
      
      .btnWave:active {
          transform: scale(.98);
      }
      
      .waveText a {
          text-decoration: none;
          color: black;
          border-bottom: 2px black solid;
      }
      
      .waveText a:hover {
          text-decoration: none;
          color: black;
      }
      
      .waveForm label {
          position: absolute;
          top: 30px;
      }
      
      .waveForm label span {
          display: inline-block;
          font-size: 18px;
          min-width: 5px;
          transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
      
      .waveForm input:focus+label span,
      .waveForm input:valid+label span {
          color: black;
          transform: translateY(-30px);
      }
      `,
    },
    {
      jsxD8: `
      import React from 'react'
      import '../styles/d8.css'
      import applauseP from '../sounds/applauseP.mp3'
      import booP from '../sounds/booP.mp3'
      import gaspP from '../sounds/gaspP.mp3'
      import tadaP from '../sounds/tadaP.mp3'
      import victoryP from '../sounds/victoryP.mp3'
      import wrongP from '../sounds/wrongP.mp3'
      
      const SoundBoard = () => {
          const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
          const applause = new Audio(applauseP);
          const boo = new Audio(booP);
          const gasp = new Audio(gaspP);
          const tada = new Audio(tadaP);
          const victory = new Audio(victoryP);
          const wrong = new Audio(wrongP);
      
          // sounds.forEach(song => {
          //     song.play();
          // })
      
        return (
          <div className='d8Wrapper'>
              <audio id='applause' src='../sounds/applause.mp3' ></audio>
              <audio id='boo' src='../sounds/boo.mp3'></audio>
              <audio id='gasp' src='../sounds/gasp.mp3'></audio>
              <audio id='tada' src='../sounds/tada.mp3'></audio>
              <audio id='victory' src='../sounds/victory.mp3'></audio>
              <audio id='wrong' src='../sounds/wrong.mp3'></audio>
              <button className='soundButton' onClick={()=>{
                  applause.play();
              }}>Applause</button>
                      <button className='soundButton' onClick={()=>{
                  boo.play();
              }}>Boo</button>
                      <button className='soundButton' onClick={()=>{
                  gasp.play();
              }}>Gasp</button>
                      <button className='soundButton' onClick={()=>{
                  tada.play();
              }}>Tada</button>
                      <button className='soundButton' onClick={()=>{
                  victory.play();
              }}>Victory</button>
                      <button className='soundButton' onClick={()=>{
                  wrong.play();
              }}>Wrong</button>
          </div>
        )
      }
      
      export default SoundBoard;
      `,
      cssD8: `
      .d8Wrapper {
          margin-top: 5%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: row;
      }
      
      .soundButton {
          width: 50%;
          border: 0;
          margin: 1%;
          padding: 12px 24px;
          font-size: 22px;
          border-radius: 5px;
      }
      
      @media only screen and (max-width: 800px) {
          .d8Wrapper {
              flex-direction: column;
          }
      }
      `,
    },
    {
      jsxD9: `
      import React, { useState } from "react";
      import "../styles/d9.css";
      import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
      import { faTimes, faChevronDown } from "@fortawesome/free-solid-svg-icons";
      
      const FaqCollapse = () => {
        const [toggle1, setToggle1] = useState(false);
        const [toggle2, setToggle2] = useState(false);
        const [toggle3, setToggle3] = useState(false);
        const [toggle4, setToggle4] = useState(false);
        const [toggle5, setToggle5] = useState(false);
      
        return (
          <div className="d9Wrapper">
            <div className="container">
              <div className="faq-container">
                <h1>Frequently Asked Questions</h1>
                <div className={faq //$//{toggle1 ? "active" :  null}}>
                  <h3 className="faq-title">Why shouldn't we trust atoms?</h3>
      
                  <p className="faq-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
                    nemo consequuntur reiciendis, deserunt voluptate labore
                    dignissimos aut culpa omnis atque?
                  </p>
      
                  <button
                    className="faq-toggle 1"
                    onClick={() => {
                      setToggle1(!toggle1);
                    }}
                  >
                    <i className="fas fa-chevron-down">
                      <FontAwesomeIcon icon={faChevronDown} />
                    </i>
                    <i className="fas fa-times">
                      <FontAwesomeIcon icon={faTimes} />
                    </i>
                  </button>
                </div>
      
                <div className={faq //$//{toggle2 ? "active" : null}}>
                  <h3 className="faq-title">
                    What do you call someone with no body and no nose?
                  </h3>
                  <p className="faq-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                    officiis pariatur, ad atque dolorum adipisci eum voluptatem saepe
                    aspernatur eos.
                  </p>
                  <button
                    className="faq-toggle 2"
                    onClick={() => {
                      setToggle2(!toggle2);
                    }}
                  >
                    <i className="fas fa-chevron-down">
                      <FontAwesomeIcon icon={faChevronDown} />
                    </i>
                    <i className="fas fa-times">
                      <FontAwesomeIcon icon={faTimes} />
                    </i>
                  </button>
                </div>
      
                <div className={faq //$//{toggle3 ? "active" : null}}>
                  <h3 className="faq-title">
                    What's the object-oriented way to become wealthy?
                  </h3>
                  <p className="faq-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                    aliquid animi provident quos officiis praesentium ab reprehenderit
                    sit accusamus vel?
                  </p>
                  <button
                    className="faq-toggle"
                    onClick={() => {
                      setToggle3(!toggle3);
                    }}
                  >
                    <i className="fas fa-chevron-down">
                      <FontAwesomeIcon icon={faChevronDown} />
                    </i>
                    <i className="fas fa-times">
                      <FontAwesomeIcon icon={faTimes} />
                    </i>
                  </button>
                </div>
      
                <div className={faq //$//{toggle4 ? "active" : null}}>
                  <h3 className="faq-title">
                    How many tickles does it take to tickle an octopus?
                  </h3>
                  <p className="faq-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Perferendis, est. Quis sapiente blanditiis, eum veniam itaque non
                    quos aspernatur. Sit.
                  </p>
                  <button
                    className="faq-toggle"
                    onClick={() => {
                      setToggle4(!toggle4);
                    }}
                  >
                    <i className="fas fa-chevron-down">
                      <FontAwesomeIcon icon={faChevronDown} />
                    </i>
                    <i className="fas fa-times">
                      <FontAwesomeIcon icon={faTimes} />
                    </i>
                  </button>
                </div>
      
                <div className={faq //$//{toggle5 ? "active" : null}}>
                  <h3 className="faq-title">What is: 1 + 1?</h3>
                  <p className="faq-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero
                    cum repellendus commodi illum doloremque! Recusandae fugit omnis
                    minus odio.
                  </p>
                  <button
                    className="faq-toggle"
                    onClick={() => {
                      setToggle5(!toggle5);
                    }}
                  >
                    <i className="fas fa-chevron-down">
                      <FontAwesomeIcon icon={faChevronDown} />
                    </i>
                    <i className="fas fa-times">
                      <FontAwesomeIcon icon={faTimes} />
                    </i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      };
      
      export default FaqCollapse;
      `,
      cssD9: `
      .faq-container {
          max-width: 600px;
          margin: 0 auto;
      }
      
      .faq {
          background-color: transparent;
          border: 1px solid #9fa4a8;
          border-radius: 10px;
          margin: 20px 0;
          padding: 30px;
          position: relative;
          overflow: hidden;
          transition: 0.3s ease;
      }
      
      .faq.active {
          background-color: #fff;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1);
      }
      
      .faq.active::before,
      .faq.active::after {
          content: '\f075';
          font-family: 'Font Awesome 5 Free';
          color: #2ecc71;
          font-size: 7rem;
          position: absolute;
          opacity: 0.2;
          top: 20px;
          left: 20px;
          z-index: 0;
      }
      
      .faq.active::before {
          color: #3498db;
          top: -10px;
          left: -30px;
          transform: rotateY(180deg);
      }
      
      .faq-title {
          margin: 0 35px 0 0;
          font-weight: bold;
      }
      
      .faq-text {
          display: none;
          margin: 30px 0 0;
      }
      
      .faq.active .faq-text {
          display: block;
      }
      
      .faq-toggle {
          background-color: transparent;
          border: 0;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          padding: 0;
          position: absolute;
          top: 30px;
          right: 30px;
          height: 30px;
          width: 30px;
      }
      
      .faq-toggle:focus {
          outline: 0;
      }
      
      .faq-toggle .fa-times {
          display: none;
      }
      
      .faq.active .faq-toggle .fa-times {
          color: #fff;
          display: block;
      }
      
      .faq.active .faq-toggle .fa-chevron-down {
          display: none;
      }
      
      .faq.active .faq-toggle {
          background-color: #9fa4a8;
      }
      `,
    },
    {
      jsxD10: `
      import React, { useState } from "react";
      import "../styles/d10.css";
      
      const HamburgerCollapse = () => {
        const [toggle, setToggle] = useState(true);
        return (
          <div className="d10Wrapper">
            <div className={nav //$//{toggle ? "active" : ""}} id="nav">
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
      `,
      cssD10: `
      .nav {
          background-color: #fff;
          padding: 20px 0px;
          width: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          align-content: center;
          border-radius: 3px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
          transition: width 0.6s linear;
          overflow-x: hidden;
          margin: 5%;
      }
      
      .nav.active {
          width: 350px;
      }
      
      .nav ul {
          display: flex;
          list-style-type: none;
          padding: 0;
          margin: 0;
          width: 0;
          transition: width 0.6s linear;
      }
      
      .nav.active ul {
          width: 80%;
      }
      
      .nav ul li {
          transform: rotateY(0deg);
          opacity: 0;
          transition: transform 0.6s linear, opacity 0.6s linear;
      }
      
      .nav.active ul li {
          opacity: 1;
          transform: rotateY(360deg);
      }
      
      .nav ul a {
          position: relative;
          color: #000;
          text-decoration: none;
          margin: 0 10px;
      }
      
      .icon {
          background-color: #fff;
          border: 0;
          cursor: pointer;
          padding: 0;
          position: relative;
          height: 30px;
          width: 30px;
      }
      
      .icon:focus {
          outline: 0;
      }
      
      .icon .line {
          background-color: #5290f9;
          height: 2px;
          width: 20px;
          position: absolute;
          top: 10px;
          left: 5px;
          transition: transform 0.6s linear;
      }
      
      .icon .line2 {
          top: auto;
          bottom: 10px;
      }
      
      .nav.active .icon .line1 {
          transform: rotate(-765deg) translateY(5.5px);
      }
      
      .nav.active .icon .line2 {
          transform: rotate(765deg) translateY(-5.5px);
      }
      `,
    },
    {
      jsxD11: `
      import React, { useEffect } from "react";
      import "../styles/d11.css";
      
      const Clock = () => {
        const days = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        const months = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
      
        useEffect(() => {
          setInterval(() => {
            const hourEl = document.querySelector(".hour");
            const minuteEl = document.querySelector(".minute");
            const secondEl = document.querySelector(".second");
            const timeEl = document.querySelector(".time");
            const dateEl = document.querySelector(".date");
            const time = new Date();
            const month = time.getMonth();
            const day = time.getDay();
            const date = time.getDate();
            const hours = time.getHours();
            const hoursForClock = hours >= 13 ? hours % 12 : hours;
            const minutes = time.getMinutes();
            const seconds = time.getSeconds();
            const ampm = hours >= 12 ? "PM" : "AM";
            const scale = (num, in_min, in_max, out_min, out_max) => {
              return (
                ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
              );
            };
            hourEl.style.transform = translate(-50%, -100%) rotate(//$//{scale(
              hoursForClock,
              0,
              12,
              0,
              360
            )}deg);
            minuteEl.style.transform = translate(-50%, -100%) rotate(//$//{scale(
              minutes,
              0,
              60,
              0,
              360
            )}deg);
            secondEl.style.transform = translate(-50%, -100%) rotate(//$//{scale(
              seconds,
              0,
              60,
              0,
              360
            )}deg);
            timeEl.innerHTML = //$//{hoursForClock}://$//{
              minutes < 10 ? 0//$//{minutes} : minutes
            } //$//{ampm};
            dateEl.innerHTML = //$//{days[day]}, //$//{months[month]} <span class="circle">//$//{date}</span>;
          }, 1000);
        });
        return (
          <div className="d11Wrapper">
            <div className="clock-container">
              <div className="clock">
                <div className="needle hour"></div>
                <div className="needle minute"></div>
                <div className="needle second"></div>
                <div className="center-point"></div>
              </div>
      
              <div className="time"></div>
              <div className="date"></div>
            </div>
          </div>
        );
      };
      
      export default Clock;
      `,
      cssD11: `
      :root {
          --primary-color: #000;
          --secondary-color: #fff;
      }
      
      .toggle {
          cursor: pointer;
          background-color: var(--primary-color);
          color: var(--secondary-color);
          border: 0;
          border-radius: 4px;
          padding: 8px 12px;
          position: absolute;
          top: 100px;
      }
      
      .toggle:focus {
          outline: none;
      }
      
      .clock-container {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
      }
      
      .clock {
          position: relative;
          width: 200px;
          height: 200px;
      }
      
      .needle {
          background-color: var(--primary-color);
          position: absolute;
          top: 50%;
          left: 50%;
          height: 65px;
          width: 3px;
          transform-origin: bottom center;
          transition: all 0.5s ease-in;
      }
      
      .needle.hour {
          transform: translate(-50%, -100%) rotate(0deg);
      }
      
      .needle.minute {
          transform: translate(-50%, -100%) rotate(0deg);
          height: 100px;
      }
      
      .needle.second {
          transform: translate(-50%, -100%) rotate(0deg);
          height: 100px;
          background-color: #e74c3c;
      }
      
      .center-point {
          background-color: #e74c3c;
          width: 10px;
          height: 10px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
      }
      
      .center-point::after {
          content: '';
          background-color: var(--primary-color);
          width: 5px;
          height: 5px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
      }
      
      .time {
          font-size: 60px;
      }
      
      .date {
          color: #aaa;
          font-size: 14px;
          letter-spacing: 0.3px;
          text-transform: uppercase;
      }
      
      .date .circle {
          background-color: var(--primary-color);
          color: var(--secondary-color);
          border-radius: 50%;
          height: 18px;
          width: 18px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          line-height: 18px;
          transition: all 0.5s ease-in;
          font-size: 12px;
      }
      `,
    },
    {
      jsxD12: `
      import React from "react";
      import "../styles/d12.css";
      
      const KineticCss = () => {
        return (
          <div className="d12Wrapper">
            <div className="kineticWrap">
              <div class="kinetic"></div>
            </div>
          </div>
        );
      };
      
      export default KineticCss;
      `,
      cssD12: `
      .kinetic {
          position: relative;
          height: 80px;
          width: 80px;
          color: white;
      }
      
      .kinetic::after,
      .kinetic::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 0;
          border: 50px solid transparent;
          border-bottom-color: #fff;
          animation: rotateA 2s linear infinite 0.5s;
      }
      
      .kinetic::before {
          transform: rotate(90deg);
          animation: rotateB 2s linear infinite;
      }
      
      .kineticWrap {
          width: 500px;
          height: 350px;
          background-color: whitesmoke;
          display: flex;
          justify-content: center;
          align-items: center;
      }
      
      @keyframes rotateA {
          0%,
          25% {
              transform: rotate(0deg);
          }
          50%,
          75% {
              transform: rotate(180deg);
          }
          100% {
              transform: rotate(360deg);
          }
      }
      
      @keyframes rotateB {
          0%,
          25% {
              transform: rotate(90deg);
          }
          50%,
          75% {
              transform: rotate(270deg);
          }
          100% {
              transform: rotate(450deg);
          }
      }
      `,
    },
    {
      jsxD13: `
      import React, { useEffect } from "react";
      import "../styles/d13.css";
      
      const SkeletonLoader = () => {
        return (
          <div className="d13Wrapper">
            <div class="card">
              <div class="card-header animated-bg" id="header">
                &nbsp;
              </div>
      
              <div class="card-content">
                <h3 class="card-title animated-bg animated-bg-text" id="title">
                  &nbsp;
                </h3>
                <p class="card-excerpt" id="excerpt">
                  &nbsp;
                  <span class="animated-bg animated-bg-text">&nbsp;</span>
                  <span class="animated-bg animated-bg-text">&nbsp;</span>
                  <span class="animated-bg animated-bg-text">&nbsp;</span>
                </p>
                <div class="author">
                  <div class="profile-img animated-bg" id="profile_img">
                    &nbsp;
                  </div>
                  <div class="author-info">
                    <strong class="animated-bg animated-bg-text" id="name">
                      &nbsp;
                    </strong>
                    <small class="animated-bg animated-bg-text" id="date">
                      &nbsp;
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      };
      
      export default SkeletonLoader;
      `,
      cssD13: `
      img {
          max-width: 100%;
      }
      
      .card {
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          overflow: hidden;
          width: 350px;
      }
      
      .card-header {
          height: 200px;
      }
      
      .card-header img {
          object-fit: cover;
          height: 100%;
          width: 100%;
      }
      
      .card-content {
          background-color: #fff;
          padding: 30px;
      }
      
      .card-title {
          height: 20px;
          margin: 0;
      }
      
      .card-excerpt {
          color: #777;
          margin: 10px 0 20px;
      }
      
      .author {
          display: flex;
      }
      
      .profile-img {
          border-radius: 50%;
          overflow: hidden;
          height: 40px;
          width: 40px;
      }
      
      .author-info {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          margin-left: 10px;
          width: 100px;
      }
      
      .author-info small {
          color: #aaa;
          margin-top: 5px;
      }
      
      .animated-bg {
          background-image: linear-gradient( to right, #f6f7f8 0%, #edeef1 10%, #f6f7f8 20%, #f6f7f8 100%);
          background-size: 200% 100%;
          animation: bgPos 1s linear infinite;
      }
      
      .animated-bg-text {
          border-radius: 50px;
          display: inline-block;
          margin: 0;
          height: 10px;
          width: 100%;
      }
      
      @keyframes bgPos {
          0% {
              background-position: 50% 0;
          }
          100% {
              background-position: -150% 0;
          }
      }
      `,
    },
    {
      jsxD14: `
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
      
            <div className="autoT">
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
            </div>
          </div>
        );
      };
      export default AutoText;
      `,
      cssD14: `
      .d14Wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          text-align: center;
      }
      
      .autoWrap {
          background-color: whitesmoke;
          width: 80%;
          display: flex;
          justify-content: center;
          text-align: center;
          align-items: center;
          align-content: center;
          margin: 5%;
          padding: 42px 24px;
      }
      
      .autoT {
          position: relative;
          padding: 10px 20px;
          font-size: 18px;
          margin-top: 5%;
          opacity: 0;
      }
      
      #textAuto {
          width: 100%;
          color: black;
          text-align: center;
      }
      
      input {
          width: 50px;
          padding: 5px;
          font-size: 18px;
          border-style: groove;
          border-color: black;
          text-align: center;
      }
      
      input:focus {
          outline: none;
      }
      `,
    },
    {
      jsxD15: `
      import React, { useState } from "react";
      import "../styles/d15.css";
      
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
                  className={rating //$//{toggle1 ? "active" : ""}}
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
                  className={rating //$//{toggle2 ? "active" : ""}}
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
                  className={rating //$//{toggle3 ? "active" : ""}}
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
      `,
      cssD15: `
      .panel-container {
          background-color: #fff;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
          border-radius: 4px;
          font-size: 90%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 30px;
          max-width: 400px;
      }
      
      .panel-container strong {
          line-height: 20px;
      }
      
      .ratings-container {
          display: flex;
          margin: 20px 0;
      }
      
      .rating {
          flex: 1;
          cursor: pointer;
          padding: 20px;
          margin: 10px 5px;
      }
      
      .rating:hover,
      .rating.active {
          border-radius: 4px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
      
      .rating img {
          width: 40px;
      }
      
      .rating small {
          color: #555;
          display: inline-block;
          margin: 10px 0 0;
      }
      
      .rating:hover small,
      .rating.active small {
          color: #111;
      }
      
      .btn15 {
          background-color: #302d2b;
          color: #fff;
          border: 0;
          border-radius: 4px;
          padding: 12px 30px;
          cursor: pointer;
      }
      
      .btn:focus {
          outline: 0;
      }
      
      .btn:active {
          transform: scale(0.98);
      }
      
      .fa-heart {
          color: red;
          font-size: 30px;
          margin-bottom: 10px;
      }
      `,
    },
    {
      jsxD16: `
      import React from "react";
      import "../styles/d16.css";
      
      const TestiCard = () => {
        const testimonials = [
          {
            name: "Miyah Myles",
            position: "Marketing",
            photo:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
            text: "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time.",
          },
          {
            name: "June Cha",
            position: "Software Engineer",
            photo: "https://randomuser.me/api/portraits/women/44.jpg",
            text: "This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!",
          },
          {
            name: "Iida Niskanen",
            position: "Data Entry",
            photo: "https://randomuser.me/api/portraits/women/68.jpg",
            text: "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him.",
          },
          {
            name: "Renee Sims",
            position: "Receptionist",
            photo: "https://randomuser.me/api/portraits/women/65.jpg",
            text: "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future.",
          },
          {
            name: "Jonathan Nunfiez",
            position: "Graphic Designer",
            photo: "https://randomuser.me/api/portraits/men/43.jpg",
            text: "I had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again!",
          },
          {
            name: "Sasha Ho",
            position: "Accountant",
            photo:
              "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
            text: "This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!",
          },
          {
            name: "Veeti Seppanen",
            position: "Director",
            photo: "https://randomuser.me/api/portraits/men/97.jpg",
            text: "This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results.",
          },
        ];
        let idx = 1;
        function updateTestimonial() {
          const testimonial = document.querySelector(".testimonial");
          const userImage = document.querySelector(".user-image");
          const username = document.querySelector(".username");
          const role = document.querySelector(".role");
          const { name, position, photo, text } = testimonials[idx];
      
          testimonial.innerHTML = text;
          userImage.src = photo;
          username.innerHTML = name;
          role.innerHTML = position;
      
          idx++;
      
          if (idx > testimonials.length - 1) {
            idx = 0;
          }
        }
        setInterval(updateTestimonial, 10000);
        return (
          <div className="d16Wrapper">
            <div class="testimonial-container">
              <div class="progress-barTesti"></div>
              <div class="fas fa-quote-right fa-quote"></div>
              <div class="fas fa-quote-left fa-quote"></div>
              <p class="testimonial">
                I've worked with literally hundreds of HTML/CSS developers and I have
                to say the top spot goes to this guy. This guy is an amazing
                developer. He stresses on good, clean code and pays heed to the
                details. I love developers who respect each and every aspect of a
                throughly thought out design and do their best to put it in code. He
                goes over and beyond and transforms ART into PIXELS - without a
                glitch, every time.
              </p>
              <div class="user">
                <img
                  src="https://randomuser.me/api/portraits/women/46.jpg"
                  alt="user"
                  class="user-image"
                />
                <div class="user-details">
                  <h4 class="username">Miyah Myles</h4>
                  <p class="role">Marketing</p>
                </div>
              </div>
            </div>
          </div>
        );
      };
      
      export default TestiCard;
      `,
      cssD16: `
      .d16Wrapper {
          box-sizing: border-box;
          width: 800px;
      }
      
      .testimonial-container {
          box-sizing: border-box;
          background-color: #476ce4;
          color: #fff;
          border-radius: 15px;
          margin: 20px 10px;
          padding: 50px 80px;
          max-width: 100%;
      }
      
      .fa-quote {
          color: rgba(255, 255, 255, 0.3);
          font-size: 28px;
          position: absolute;
          top: 70px;
      }
      
      .fa-quote-right {
          left: 40px;
      }
      
      .fa-quote-left {
          right: 40px;
      }
      
      .testimonial {
          line-height: 28px;
          text-align: justify;
          box-sizing: border-box;
          width: 600px;
          height: 150px;
      }
      
      .user {
          display: flex;
          align-items: center;
          justify-content: center;
      }
      
      .user .user-image {
          border-radius: 50%;
          height: 75px;
          width: 75px;
          object-fit: cover;
      }
      
      .user .user-details {
          margin-left: 10px;
      }
      
      .user .username {
          margin: 0;
      }
      
      .user .role {
          font-weight: normal;
          margin: 10px 0;
      }
      
      .progress-barTesti {
          height: 4px;
          width: 100%;
          animation: grow 10s linear infinite;
          transform-origin: left;
          background-color: white;
      }
      
      @keyframes grow {
          0% {
              transform: scaleX(0);
          }
      }
      
      @media (max-width: 768px) {
          .testimonial-container {
              padding: 20px 30px;
          }
          .fa-quote {
              display: none;
          }
      }
      `,
    },
    {
      jsxD17: `
      import React, { useEffect } from "react";
      import "../styles/d17.css";
      
      const IncrementBox = () => {
        useEffect(() => {
          const counters = document.querySelectorAll(".counter");
      
          counters.forEach((counter) => {
            counter.innerText = "0";
      
            const updateCounter = () => {
              const target = +counter.getAttribute("data-target");
              const c = +counter.innerText;
      
              const increment = target / 200;
      
              if (c < target) {
                counter.innerText = //$//{Math.ceil(c + increment)};
                setTimeout(updateCounter, 1);
              } else {
                counter.innerText = target;
              }
            };
      
            updateCounter();
          });
        });
        return (
          <div className="d17Wrapper">
            <div class="counter-container">
              <i class="fab fa-twitter fa-3x"></i>
              <div class="counter" data-target="12000"></div>
              <span>Twitter Followers</span>
            </div>
      
            <div class="counter-container">
              <i class="fab fa-youtube fa-3x"></i>
              <div class="counter" data-target="5000"></div>
              <span>YouTube Subscribers</span>
            </div>
      
            <div class="counter-container">
              <i class="fab fa-facebook fa-3x"></i>
              <div class="counter" data-target="7500"></div>
              <span>Facebook Fans</span>
            </div>
          </div>
        );
      };
      
      export default IncrementBox;
      `,
      cssD17: `
      .d17Wrapper {
          display: flex;
          background-color: #476ce4;
          border-radius: 15px;
          color: white;
      }
      
      .counter-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          margin: 30px 50px;
      }
      
      .counter {
          font-size: 60px;
          margin-top: 10px;
      }
      
      @media (max-width: 580px) {
          body {
              flex-direction: column;
          }
      }
      `,
    },
    {
      jsxD18: `
      import React from "react";
      import "../styles/d18.css";
      
      const EnableButton = () => {
        const toggles = document.querySelectorAll(".toggle");
        const good = document.querySelector("#good");
        const cheap = document.querySelector("#cheap");
        const fast = document.querySelector("#fast");
      
        toggles.forEach((toggle) =>
          toggle.addEventListener("change", (e) => doTheTrick(e.target))
        );
      
        function doTheTrick(theClickedOne) {
          if (good.checked && cheap.checked && fast.checked) {
            if (good === theClickedOne) {
              fast.checked = false;
            }
      
            if (cheap === theClickedOne) {
              good.checked = false;
            }
      
            if (fast === theClickedOne) {
              cheap.checked = false;
            }
          }
        }
        return (
          <div className="d18Wrapper">
            <br></br>
            <h2>How do you want your project to be?</h2>
            <div className="toggleWrap">
              <div class="toggle-container">
                <input type="checkbox" id="good" class="toggle" />
                <label for="good" class="label">
                  <div class="ball"></div>
                </label>
                <span>Good</span>
              </div>
      
              <div class="toggle-container">
                <input type="checkbox" id="cheap" class="toggle" />
                <label for="cheap" class="label">
                  <div class="ball"></div>
                </label>
                <span>Cheap</span>
              </div>
      
              <div class="toggle-container">
                <input type="checkbox" id="fast" class="toggle" />
                <label for="fast" class="label">
                  <div class="ball"></div>
                </label>
                <span>Fast</span>
              </div>
            </div>
          </div>
        );
      };
      
      export default EnableButton;
      `,
      cssD18: `
      .d18Wrapper {
          background-color: #476ce4;
          border-radius: 15px;
          width: 100%;
          color: white;
          text-align: center;
          padding: 5%;
      }
      
      .toggle-container {
          display: flex;
          align-items: center;
          margin: 10px 0;
          width: 200px;
      }
      
      .toggleWrap {
          display: flex;
          justify-content: center;
      }
      
      .toggle {
          visibility: hidden;
      }
      
      .label {
          position: relative;
          background-color: #d0d0d0;
          border-radius: 50px;
          cursor: pointer;
          display: inline-block;
          margin: 0 15px 0;
          width: 80px;
          height: 40px;
      }
      
      .toggle:checked+.label {
          background-color: black;
      }
      
      .ball {
          background: #fff;
          height: 34px;
          width: 34px;
          border-radius: 50%;
          position: absolute;
          top: 3px;
          left: 3px;
          align-items: center;
          justify-content: center;
          animation: slideOff 0.3s linear forwards;
      }
      
      .toggle:checked+.label .ball {
          animation: slideOn 0.3s linear forwards;
      }
      
      @keyframes slideOn {
          0% {
              transform: translateX(0) scale(1);
          }
          50% {
              transform: translateX(20px) scale(1.2);
          }
          100% {
              transform: translateX(40px) scale(1);
          }
      }
      
      @keyframes slideOff {
          0% {
              transform: translateX(40px) scale(1);
          }
          50% {
              transform: translateX(20px) scale(1.2);
          }
          100% {
              transform: translateX(0) scale(1);
          }
      }
      `,
    },
    {
      jsxD19: `
      import React, { useEffect } from "react";
      import "../styles/d19.css";
      
      const RangeDown = () => {
        useEffect(() => {
          const range = document.getElementById("range");
      
          range.addEventListener("input", (e) => {
            const value = +e.target.value;
            const label = e.target.nextElementSibling;
      
            const range_width = getComputedStyle(e.target).getPropertyValue("width");
            const label_width = getComputedStyle(label).getPropertyValue("width");
      
            const num_width = +range_width.substring(0, range_width.length - 2);
            const num_label_width = +label_width.substring(0, label_width.length - 2);
      
            const max = +e.target.max;
            const min = +e.target.min;
      
            const left =
              value * (num_width / max) -
              num_label_width / 2 +
              scale(value, min, max, 10, -10);
      
            label.style.left = //$//{left}px;
      
            label.innerHTML = value;
          });
      
          const scale = (num, in_min, in_max, out_min, out_max) => {
            return (
              ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
            );
          };
        });
        return (
          <div className="d19Wrapper">
            <div class="range-container">
              <input type="range" id="range" min="0" max="100" />
              <label for="range">50</label>
            </div>
          </div>
        );
      };
      
      export default RangeDown;
      `,
      cssD19: `
      .d19Wrapper {
          background-color: whitesmoke;
          width: 50%;
          height: 10;
          border-radius: 15px;
          display: flex;
          justify-content: center;
      }
      
      .range-container {
          position: relative;
          margin: 20%;
      }
      
      input[type='range'] {
          width: 300px;
          margin: 18px 0;
          -webkit-appearance: none;
      }
      
      input[type='range']:focus {
          outline: none;
      }
      
      input[type='range']+label {
          background-color: #fff;
          position: absolute;
          top: -25px;
          left: 110px;
          width: 80px;
          padding: 5px 0;
          text-align: center;
      }
      
      
      /* Chrome & Safari */
      
      input[type='range']::-webkit-slider-runnable-track {
          background: black;
          border-radius: 4px;
          width: 100%;
          height: 10px;
          cursor: pointer;
      }
      
      input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 24px;
          width: 24px;
          background: #fff;
          border-radius: 50%;
          border: 1px solid purple;
          margin-top: -7px;
          cursor: pointer;
      }
      
      
      /* Firefox */
      
      input[type='range']::-moz-range-track {
          background: purple;
          border-radius: 4px;
          width: 100%;
          height: 13px;
          cursor: pointer;
      }
      
      input[type='range']::-moz-range-thumb {
          -webkit-appearance: none;
          height: 24px;
          width: 24px;
          background: #fff;
          border-radius: 50%;
          border: 1px solid purple;
          margin-top: -7px;
          cursor: pointer;
      }
      
      
      /* IE */
      
      input[type='range']::-ms-track {
          background: purple;
          border-radius: 4px;
          width: 100%;
          height: 13px;
          cursor: pointer;
      }
      
      input[type='range']::-ms-thumb {
          -webkit-appearance: none;
          height: 24px;
          width: 24px;
          background: #fff;
          border-radius: 50%;
          border: 1px solid purple;
          margin-top: -7px;
          cursor: pointer;
      }
      `,
    },
    {
      jsxD20: `
      import React, { useEffect } from "react";
      import "../styles/d20.css";
      
      const CodeConfirmation = () => {
        useEffect(() => {
          const codes = document.querySelectorAll(".code");
      
          codes[0].focus();
      
          codes.forEach((code, idx) => {
            code.addEventListener("keydown", (e) => {
              if (e.key >= 0 && e.key <= 9) {
                codes[idx].value = "";
                setTimeout(() => codes[idx + 1].focus(), 10);
              } else if (e.key === "Backspace") {
                setTimeout(() => codes[idx - 1].focus(), 10);
              }
            });
          });
        });
        return (
          <div className="d20Wrapper">
            <h2>Verify Your Account</h2>
            <p>
              We emailed you the six digit code to blablabla@gmail.com <br /> Enter
              the code below to confirm your email address.
            </p>
            <div class="code-container">
              <input
                type="number"
                class="code"
                placeholder="0"
                min="0"
                max="9"
                required
              />
              <input
                type="number"
                class="code"
                placeholder="0"
                min="0"
                max="9"
                required
              />
              <input
                type="number"
                class="code"
                placeholder="0"
                min="0"
                max="9"
                required
              />
              <input
                type="number"
                class="code"
                placeholder="0"
                min="0"
                max="9"
                required
              />
              <input
                type="number"
                class="code"
                placeholder="0"
                min="0"
                max="9"
                required
              />
              <input
                type="number"
                class="code"
                placeholder="0"
                min="0"
                max="9"
                required
              />
            </div>
            <small class="info">
              This is design only. We didn't actually send you an email as we don't
              have your email, right?
            </small>
          </div>
        );
      };
      
      export default CodeConfirmation;
      `,
      cssD20: `
      .d20Wrapper {
        width: 100%;
        justify-content: center;
        text-align: center;
    }
    
    .code-container {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 40px 0;
    }
    
    .code {
        caret-color: transparent;
        border-radius: 5px;
        font-size: 75px;
        height: 120px;
        width: 100px;
        border: 1px solid #eee;
        margin: 1%;
        text-align: center;
        font-weight: 300;
        -moz-appearance: textfield;
    }
    
    .code::-webkit-outer-spin-button,
    .code::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    
    .code:valid {
        border-color: #3498db;
        box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.25);
    }
    
    .info {
        background-color: #eaeaea;
        display: inline-block;
        padding: 10px;
        line-height: 20px;
        max-width: 400px;
        color: #777;
        border-radius: 5px;
    }
    
    @media (max-width: 600px) {
        .code-container {
            flex-wrap: wrap;
        }
        .code {
            font-size: 60px;
            height: 80px;
            max-width: 70px;
        }
    }
    `,
    },
  ];
  const [copyJSX, setCopyJSX] = useState(false);
  const [copyCSS, setCopyCSS] = useState(false);
  const [
    d2,
    d1,
    d3,
    d4,
    d5,
    d6,
    d7,
    d8,
    d9,
    d10,
    d11,
    d12,
    d13,
    d14,
    d15,
    d16,
    d17,
    d18,
    d19,
    d20,
  ] = allObject;
  const { jsxD2, cssD2 } = d2;
  const { jsxD1, cssD1 } = d1;
  const { jsxD3, cssD3 } = d3;
  const { jsxD4, cssD4 } = d4;
  const { jsxD5, cssD5 } = d5;
  const { jsxD6, cssD6 } = d6;
  const { jsxD7, cssD7 } = d7;
  const { jsxD8, cssD8 } = d8;
  const { jsxD9, cssD9 } = d9;
  const { jsxD10, cssD10 } = d10;
  const { jsxD11, cssD11 } = d11;
  const { jsxD12, cssD12 } = d12;
  const { jsxD13, cssD13 } = d13;
  const { jsxD14, cssD14 } = d14;
  const { jsxD15, cssD15 } = d15;
  const { jsxD16, cssD16 } = d16;
  const { jsxD17, cssD17 } = d17;
  const { jsxD18, cssD18 } = d18;
  const { jsxD19, cssD19 } = d19;
  const { jsxD20, cssD20 } = d20;
  function lockA() {
    const xPos = window.scrollX;
    const yPos = window.scrollY;
    window.onscroll = () => window.scroll(xPos, yPos);
  }
  function unlock() {
    window.onscroll = "";
  }
  useEffect(() => {
    lockA();
  });
  setTimeout(() => {
    unlock();
  }, 650);
  return (
    <div className="divHero">
      <div className="divHeader">
        <h1>EasyFeatures</h1>
      </div>
      <div className="divMain">
        <h1>From front end developer for front end developer.</h1>
      </div>
      <div className="divBody">
        <div class="blob-cont">
          <div class="yellow blob"></div>
          <div class="red blob"></div>
          <div class="green blob"></div>
        </div>
        <div class="blob-cont2">
          <div class="yellow blob"></div>
          <div class="red blob"></div>
          <div class="green blob"></div>
        </div>
        <div className="container">
          <div className="displayWrap">
            <div className="allWrap">
              <div className="displayOne">
                <div className="displayName">
                  <h1>Progress Steps</h1>
                </div>
                <div className="displayComponent">
                  <ProgressSteps />
                </div>
              </div>
              <div className="displayCode">
                <div className="editorWrap">
                  <div className="editorJSX">
                    <div className="editorTitle">
                      <div className="editorName">
                        <h6>JSX</h6>
                      </div>
                      {copyJSX ? (
                        <div className="iconCopy">
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faCheckCircle}
                          />
                          <p>Copied</p>
                        </div>
                      ) : (
                        <div
                          className="iconCopy"
                          onClick={() => {
                            navigator.clipboard.writeText(jsxD2);
                            setCopyJSX(true);
                            setTimeout(() => {
                              setCopyJSX(false);
                            }, 1500);
                          }}
                        >
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faClipboard}
                          />
                          <p>Copy code</p>
                        </div>
                      )}
                    </div>
                    <div className="editorCode">
                      <SyntaxHighlighter
                        language="javascript"
                        style={atomOneDark}
                        wrapLongLines={false}
                        customStyle={{
                          height: "300px",
                        }}
                      >
                        {jsxD2}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                  <div className="editorCSS">
                    <div className="editorTitle">
                      <div className="editorName">
                        <h6>CSS</h6>
                      </div>
                      {copyCSS ? (
                        <div className="iconCopy">
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faCheckCircle}
                          />
                          <p>Copied</p>
                        </div>
                      ) : (
                        <div
                          className="iconCopy"
                          onClick={() => {
                            navigator.clipboard.writeText(jsxD2);
                            setCopyCSS(true);
                            setTimeout(() => {
                              setCopyCSS(false);
                            }, 1500);
                          }}
                        >
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faClipboard}
                          />
                          <p>Copy code</p>
                        </div>
                      )}
                    </div>
                    <div className="editorCode">
                      <SyntaxHighlighter
                        language="javascript"
                        style={atomOneDark}
                        wrapLongLines={true}
                        customStyle={{
                          height: "300px",
                        }}
                      >
                        {cssD2}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="allWrap">
              <div className="displayTwo">
                <div className="displayName">
                  <h1>Extended Card</h1>
                </div>
                <div className="displayComponent">
                  <ExpendingCard />
                </div>
              </div>
              <div className="displayCode">
                <div className="editorWrap">
                  <div className="editorJSX">
                    <div className="editorTitle">
                      <div className="editorName">
                        <h6>JSX</h6>
                      </div>
                      {copyJSX ? (
                        <div className="iconCopy">
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faCheckCircle}
                          />
                          <p>Copied</p>
                        </div>
                      ) : (
                        <div
                          className="iconCopy"
                          onClick={() => {
                            navigator.clipboard.writeText(jsxD1);
                            setCopyJSX(true);
                            setTimeout(() => {
                              setCopyJSX(false);
                            }, 1500);
                          }}
                        >
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faClipboard}
                          />
                          <p>Copy code</p>
                        </div>
                      )}
                    </div>
                    <div className="editorCode">
                      <SyntaxHighlighter
                        language="javascript"
                        style={atomOneDark}
                        wrapLongLines={false}
                        customStyle={{
                          height: "300px",
                        }}
                      >
                        {jsxD1}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                  <div className="editorCSS">
                    <div className="editorTitle">
                      <div className="editorName">
                        <h6>CSS</h6>
                      </div>
                      {copyCSS ? (
                        <div className="iconCopy">
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faCheckCircle}
                          />
                          <p>Copied</p>
                        </div>
                      ) : (
                        <div
                          className="iconCopy"
                          onClick={() => {
                            navigator.clipboard.writeText(cssD2);
                            setCopyCSS(true);
                            setTimeout(() => {
                              setCopyCSS(false);
                            }, 1500);
                          }}
                        >
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faClipboard}
                          />
                          <p>Copy code</p>
                        </div>
                      )}
                    </div>
                    <div className="editorCode">
                      <SyntaxHighlighter
                        language="javascript"
                        style={atomOneDark}
                        wrapLongLines={true}
                        customStyle={{
                          height: "300px",
                        }}
                      >
                        {cssD1}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="allWrap">
              <div className="displayThree">
                <div className="displayName">
                  <h1>Search Icon</h1>
                </div>
                <div className="displayComponent">
                  <SearchIcon />
                </div>
              </div>
              <div className="displayCode">
                <div className="editorWrap">
                  <div className="editorJSX">
                    <div className="editorTitle">
                      <div className="editorName">
                        <h6>JSX</h6>
                      </div>
                      {copyJSX ? (
                        <div className="iconCopy">
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faCheckCircle}
                          />
                          <p>Copied</p>
                        </div>
                      ) : (
                        <div
                          className="iconCopy"
                          onClick={() => {
                            navigator.clipboard.writeText(jsxD3);
                            setCopyJSX(true);
                            setTimeout(() => {
                              setCopyJSX(false);
                            }, 1500);
                          }}
                        >
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faClipboard}
                          />
                          <p>Copy code</p>
                        </div>
                      )}
                    </div>
                    <div className="editorCode">
                      <SyntaxHighlighter
                        language="javascript"
                        style={atomOneDark}
                        wrapLongLines={false}
                        customStyle={{
                          height: "300px",
                        }}
                      >
                        {jsxD3}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                  <div className="editorCSS">
                    <div className="editorTitle">
                      <div className="editorName">
                        <h6>CSS</h6>
                      </div>
                      {copyCSS ? (
                        <div className="iconCopy">
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faCheckCircle}
                          />
                          <p>Copied</p>
                        </div>
                      ) : (
                        <div
                          className="iconCopy"
                          onClick={() => {
                            navigator.clipboard.writeText(cssD3);
                            setCopyCSS(true);
                            setTimeout(() => {
                              setCopyCSS(false);
                            }, 1500);
                          }}
                        >
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faClipboard}
                          />
                          <p>Copy code</p>
                        </div>
                      )}
                    </div>
                    <div className="editorCode">
                      <SyntaxHighlighter
                        language="javascript"
                        style={atomOneDark}
                        wrapLongLines={true}
                        customStyle={{
                          height: "300px",
                        }}
                      >
                        {cssD3}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="allWrap">
              <div className="displayFour">
                <div className="displayName">
                  <h1>Blur Loading</h1>
                </div>
                <div className="displayComponent">
                  <Imageload />
                </div>
              </div>
              <div className="displayCode">
                <div className="editorWrap">
                  <div className="editorJSX">
                    <div className="editorTitle">
                      <div className="editorName">
                        <h6>JSX</h6>
                      </div>
                      {copyJSX ? (
                        <div className="iconCopy">
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faCheckCircle}
                          />
                          <p>Copied</p>
                        </div>
                      ) : (
                        <div
                          className="iconCopy"
                          onClick={() => {
                            navigator.clipboard.writeText(jsxD4);
                            setCopyJSX(true);
                            setTimeout(() => {
                              setCopyJSX(false);
                            }, 1500);
                          }}
                        >
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faClipboard}
                          />
                          <p>Copy code</p>
                        </div>
                      )}
                    </div>
                    <div className="editorCode">
                      <SyntaxHighlighter
                        language="javascript"
                        style={atomOneDark}
                        wrapLongLines={false}
                        customStyle={{
                          height: "300px",
                        }}
                      >
                        {jsxD4}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                  <div className="editorCSS">
                    <div className="editorTitle">
                      <div className="editorName">
                        <h6>CSS</h6>
                      </div>
                      {copyCSS ? (
                        <div className="iconCopy">
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faCheckCircle}
                          />
                          <p>Copied</p>
                        </div>
                      ) : (
                        <div
                          className="iconCopy"
                          onClick={() => {
                            navigator.clipboard.writeText(cssD4);
                            setCopyCSS(true);
                            setTimeout(() => {
                              setCopyCSS(false);
                            }, 1500);
                          }}
                        >
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faClipboard}
                          />
                          <p>Copy code</p>
                        </div>
                      )}
                    </div>
                    <div className="editorCode">
                      <SyntaxHighlighter
                        language="javascript"
                        style={atomOneDark}
                        wrapLongLines={true}
                        customStyle={{
                          height: "300px",
                        }}
                      >
                        {cssD4}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="allWrap">
              <div className="displayFive">
                <div className="displayName">
                  <h1>Content Slide</h1>
                </div>
                <div className="displayComponent">
                  <ContentSlide />
                </div>
              </div>
              <div className="displayCode">
                <div className="editorWrap">
                  <div className="editorJSX">
                    <div className="editorTitle">
                      <div className="editorName">
                        <h6>JSX</h6>
                      </div>
                      {copyJSX ? (
                        <div className="iconCopy">
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faCheckCircle}
                          />
                          <p>Copied</p>
                        </div>
                      ) : (
                        <div
                          className="iconCopy"
                          onClick={() => {
                            navigator.clipboard.writeText(jsxD5);
                            setCopyJSX(true);
                            setTimeout(() => {
                              setCopyJSX(false);
                            }, 1500);
                          }}
                        >
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faClipboard}
                          />
                          <p>Copy code</p>
                        </div>
                      )}
                    </div>
                    <div className="editorCode">
                      <SyntaxHighlighter
                        language="javascript"
                        style={atomOneDark}
                        wrapLongLines={false}
                        customStyle={{
                          height: "300px",
                        }}
                      >
                        {jsxD5}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                  <div className="editorCSS">
                    <div className="editorTitle">
                      <div className="editorName">
                        <h6>CSS</h6>
                      </div>
                      {copyCSS ? (
                        <div className="iconCopy">
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faCheckCircle}
                          />
                          <p>Copied</p>
                        </div>
                      ) : (
                        <div
                          className="iconCopy"
                          onClick={() => {
                            navigator.clipboard.writeText(cssD5);
                            setCopyCSS(true);
                            setTimeout(() => {
                              setCopyCSS(false);
                            }, 1500);
                          }}
                        >
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faClipboard}
                          />
                          <p>Copy code</p>
                        </div>
                      )}
                    </div>
                    <div className="editorCode">
                      <SyntaxHighlighter
                        language="javascript"
                        style={atomOneDark}
                        wrapLongLines={true}
                        customStyle={{
                          height: "300px",
                        }}
                      >
                        {cssD5}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="allWrap">
              <div className="displaySix">
                <div className="displayName">
                  <h1>Split Hover</h1>
                </div>
                <div className="displayComponent">
                  <SplitHover />
                </div>
              </div>
              <div className="displayCode">
                <div className="editorWrap">
                  <div className="editorJSX">
                    <div className="editorTitle">
                      <div className="editorName">
                        <h6>JSX</h6>
                      </div>
                      {copyJSX ? (
                        <div className="iconCopy">
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faCheckCircle}
                          />
                          <p>Copied</p>
                        </div>
                      ) : (
                        <div
                          className="iconCopy"
                          onClick={() => {
                            navigator.clipboard.writeText(jsxD6);
                            setCopyJSX(true);
                            setTimeout(() => {
                              setCopyJSX(false);
                            }, 1500);
                          }}
                        >
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faClipboard}
                          />
                          <p>Copy code</p>
                        </div>
                      )}
                    </div>
                    <div className="editorCode">
                      <SyntaxHighlighter
                        language="javascript"
                        style={atomOneDark}
                        wrapLongLines={false}
                        customStyle={{
                          height: "300px",
                        }}
                      >
                        {jsxD6}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                  <div className="editorCSS">
                    <div className="editorTitle">
                      <div className="editorName">
                        <h6>CSS</h6>
                      </div>
                      {copyCSS ? (
                        <div className="iconCopy">
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faCheckCircle}
                          />
                          <p>Copied</p>
                        </div>
                      ) : (
                        <div
                          className="iconCopy"
                          onClick={() => {
                            navigator.clipboard.writeText(cssD6);
                            setCopyCSS(true);
                            setTimeout(() => {
                              setCopyCSS(false);
                            }, 1500);
                          }}
                        >
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faClipboard}
                          />
                          <p>Copy code</p>
                        </div>
                      )}
                    </div>
                    <div className="editorCode">
                      <SyntaxHighlighter
                        language="javascript"
                        style={atomOneDark}
                        wrapLongLines={true}
                        customStyle={{
                          height: "300px",
                        }}
                      >
                        {cssD6}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="allWrap">
              <div className="displaySeven">
                <div className="displayName">
                  <h1>Wave Form</h1>
                </div>
                <div className="displayComponent">
                  <WaveLogin />
                </div>
              </div>
              <div className="displayCode">
                <div className="editorWrap">
                  <div className="editorJSX">
                    <div className="editorTitle">
                      <div className="editorName">
                        <h6>JSX</h6>
                      </div>
                      {copyJSX ? (
                        <div className="iconCopy">
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faCheckCircle}
                          />
                          <p>Copied</p>
                        </div>
                      ) : (
                        <div
                          className="iconCopy"
                          onClick={() => {
                            navigator.clipboard.writeText(jsxD7);
                            setCopyJSX(true);
                            setTimeout(() => {
                              setCopyJSX(false);
                            }, 1500);
                          }}
                        >
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faClipboard}
                          />
                          <p>Copy code</p>
                        </div>
                      )}
                    </div>
                    <div className="editorCode">
                      <SyntaxHighlighter
                        language="javascript"
                        style={atomOneDark}
                        wrapLongLines={false}
                        customStyle={{
                          height: "300px",
                        }}
                      >
                        {jsxD7}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                  <div className="editorCSS">
                    <div className="editorTitle">
                      <div className="editorName">
                        <h6>CSS</h6>
                      </div>
                      {copyCSS ? (
                        <div className="iconCopy">
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faCheckCircle}
                          />
                          <p>Copied</p>
                        </div>
                      ) : (
                        <div
                          className="iconCopy"
                          onClick={() => {
                            navigator.clipboard.writeText(cssD7);
                            setCopyCSS(true);
                            setTimeout(() => {
                              setCopyCSS(false);
                            }, 1500);
                          }}
                        >
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faClipboard}
                          />
                          <p>Copy code</p>
                        </div>
                      )}
                    </div>
                    <div className="editorCode">
                      <SyntaxHighlighter
                        language="javascript"
                        style={atomOneDark}
                        wrapLongLines={true}
                        customStyle={{
                          height: "300px",
                        }}
                      >
                        {cssD7}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="allWrap">
              <div className="displayEight">
                <div className="displayName">
                  <h1>Button Sound</h1>
                </div>
                <div className="displayComponent">
                  <SoundBoard />
                </div>
              </div>
              <div className="displayCode">
                <div className="editorWrap">
                  <div className="editorJSX">
                    <div className="editorTitle">
                      <div className="editorName">
                        <h6>JSX</h6>
                      </div>
                      {copyJSX ? (
                        <div className="iconCopy">
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faCheckCircle}
                          />
                          <p>Copied</p>
                        </div>
                      ) : (
                        <div
                          className="iconCopy"
                          onClick={() => {
                            navigator.clipboard.writeText(jsxD8);
                            setCopyJSX(true);
                            setTimeout(() => {
                              setCopyJSX(false);
                            }, 1500);
                          }}
                        >
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faClipboard}
                          />
                          <p>Copy code</p>
                        </div>
                      )}
                    </div>
                    <div className="editorCode">
                      <SyntaxHighlighter
                        language="javascript"
                        style={atomOneDark}
                        wrapLongLines={false}
                        customStyle={{
                          height: "300px",
                        }}
                      >
                        {jsxD8}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                  <div className="editorCSS">
                    <div className="editorTitle">
                      <div className="editorName">
                        <h6>CSS</h6>
                      </div>
                      {copyCSS ? (
                        <div className="iconCopy">
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faCheckCircle}
                          />
                          <p>Copied</p>
                        </div>
                      ) : (
                        <div
                          className="iconCopy"
                          onClick={() => {
                            navigator.clipboard.writeText(cssD8);
                            setCopyCSS(true);
                            setTimeout(() => {
                              setCopyCSS(false);
                            }, 1500);
                          }}
                        >
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faClipboard}
                          />
                          <p>Copy code</p>
                        </div>
                      )}
                    </div>
                    <div className="editorCode">
                      <SyntaxHighlighter
                        language="javascript"
                        style={atomOneDark}
                        wrapLongLines={true}
                        customStyle={{
                          height: "300px",
                        }}
                      >
                        {cssD8}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="allWrap">
              <div className="displayNine">
                <div className="displayName">
                  <h1>FAQ Collapse</h1>
                </div>
                <div className="displayComponent">
                  <FaqCollapse />
                </div>
              </div>
              <div className="displayCode">
                <div className="editorWrap">
                  <div className="editorJSX">
                    <div className="editorTitle">
                      <div className="editorName">
                        <h6>JSX</h6>
                      </div>
                      {copyJSX ? (
                        <div className="iconCopy">
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faCheckCircle}
                          />
                          <p>Copied</p>
                        </div>
                      ) : (
                        <div
                          className="iconCopy"
                          onClick={() => {
                            navigator.clipboard.writeText(jsxD9);
                            setCopyJSX(true);
                            setTimeout(() => {
                              setCopyJSX(false);
                            }, 1500);
                          }}
                        >
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faClipboard}
                          />
                          <p>Copy code</p>
                        </div>
                      )}
                    </div>
                    <div className="editorCode">
                      <SyntaxHighlighter
                        language="javascript"
                        style={atomOneDark}
                        wrapLongLines={false}
                        customStyle={{
                          height: "300px",
                        }}
                      >
                        {jsxD9}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                  <div className="editorCSS">
                    <div className="editorTitle">
                      <div className="editorName">
                        <h6>CSS</h6>
                      </div>
                      {copyCSS ? (
                        <div className="iconCopy">
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faCheckCircle}
                          />
                          <p>Copied</p>
                        </div>
                      ) : (
                        <div
                          className="iconCopy"
                          onClick={() => {
                            navigator.clipboard.writeText(cssD9);
                            setCopyCSS(true);
                            setTimeout(() => {
                              setCopyCSS(false);
                            }, 1500);
                          }}
                        >
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faClipboard}
                          />
                          <p>Copy code</p>
                        </div>
                      )}
                    </div>
                    <div className="editorCode">
                      <SyntaxHighlighter
                        language="javascript"
                        style={atomOneDark}
                        wrapLongLines={true}
                        customStyle={{
                          height: "300px",
                        }}
                      >
                        {cssD9}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="allWrap">
              <div className="displayTen">
                <div className="displayName">
                  <h1>Hamburger Close</h1>
                </div>
                <div className="displayComponentTen">
                  <HamburgerCollapse />
                </div>
              </div>
              <div className="displayCode">
                <div className="editorWrap">
                  <div className="editorJSX">
                    <div className="editorTitle">
                      <div className="editorName">
                        <h6>JSX</h6>
                      </div>
                      {copyJSX ? (
                        <div className="iconCopy">
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faCheckCircle}
                          />
                          <p>Copied</p>
                        </div>
                      ) : (
                        <div
                          className="iconCopy"
                          onClick={() => {
                            navigator.clipboard.writeText(jsxD10);
                            setCopyJSX(true);
                            setTimeout(() => {
                              setCopyJSX(false);
                            }, 1500);
                          }}
                        >
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faClipboard}
                          />
                          <p>Copy code</p>
                        </div>
                      )}
                    </div>
                    <div className="editorCode">
                      <SyntaxHighlighter
                        language="javascript"
                        style={atomOneDark}
                        wrapLongLines={false}
                        customStyle={{
                          height: "300px",
                        }}
                      >
                        {jsxD10}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                  <div className="editorCSS">
                    <div className="editorTitle">
                      <div className="editorName">
                        <h6>CSS</h6>
                      </div>
                      {copyCSS ? (
                        <div className="iconCopy">
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faCheckCircle}
                          />
                          <p>Copied</p>
                        </div>
                      ) : (
                        <div
                          className="iconCopy"
                          onClick={() => {
                            navigator.clipboard.writeText(cssD10);
                            setCopyCSS(true);
                            setTimeout(() => {
                              setCopyCSS(false);
                            }, 1500);
                          }}
                        >
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faClipboard}
                          />
                          <p>Copy code</p>
                        </div>
                      )}
                    </div>
                    <div className="editorCode">
                      <SyntaxHighlighter
                        language="javascript"
                        style={atomOneDark}
                        wrapLongLines={true}
                        customStyle={{
                          height: "300px",
                        }}
                      >
                        {cssD10}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="allWrap">
              <div className="displayEleven">
                <div className="displayName">
                  <h1>Clock</h1>
                </div>
                <div className="displayComponent">
                  <Clock />
                </div>
              </div>
              <div className="displayCode">
                <div className="editorWrap">
                  <div className="editorJSX">
                    <div className="editorTitle">
                      <div className="editorName">
                        <h6>JSX</h6>
                      </div>
                      {copyJSX ? (
                        <div className="iconCopy">
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faCheckCircle}
                          />
                          <p>Copied</p>
                        </div>
                      ) : (
                        <div
                          className="iconCopy"
                          onClick={() => {
                            navigator.clipboard.writeText(jsxD11);
                            setCopyJSX(true);
                            setTimeout(() => {
                              setCopyJSX(false);
                            }, 1500);
                          }}
                        >
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faClipboard}
                          />
                          <p>Copy code</p>
                        </div>
                      )}
                    </div>
                    <div className="editorCode">
                      <SyntaxHighlighter
                        language="javascript"
                        style={atomOneDark}
                        wrapLongLines={false}
                        customStyle={{
                          height: "300px",
                        }}
                      >
                        {jsxD11}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                  <div className="editorCSS">
                    <div className="editorTitle">
                      <div className="editorName">
                        <h6>CSS</h6>
                      </div>
                      {copyCSS ? (
                        <div className="iconCopy">
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faCheckCircle}
                          />
                          <p>Copied</p>
                        </div>
                      ) : (
                        <div
                          className="iconCopy"
                          onClick={() => {
                            navigator.clipboard.writeText(cssD11);
                            setCopyCSS(true);
                            setTimeout(() => {
                              setCopyCSS(false);
                            }, 1500);
                          }}
                        >
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faClipboard}
                          />
                          <p>Copy code</p>
                        </div>
                      )}
                    </div>
                    <div className="editorCode">
                      <SyntaxHighlighter
                        language="javascript"
                        style={atomOneDark}
                        wrapLongLines={true}
                        customStyle={{
                          height: "300px",
                        }}
                      >
                        {cssD11}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="allWrap">
              <div className="displayTwelve">
                <div className="displayName">
                  <h1>Kinetic Loader</h1>
                </div>
                <div className="displayComponent">
                  <KineticCss />
                </div>
              </div>
              <div className="displayCode">
                <div className="editorWrap">
                  <div className="editorJSX">
                    <div className="editorTitle">
                      <div className="editorName">
                        <h6>JSX</h6>
                      </div>
                      {copyJSX ? (
                        <div className="iconCopy">
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faCheckCircle}
                          />
                          <p>Copied</p>
                        </div>
                      ) : (
                        <div
                          className="iconCopy"
                          onClick={() => {
                            navigator.clipboard.writeText(jsxD12);
                            setCopyJSX(true);
                            setTimeout(() => {
                              setCopyJSX(false);
                            }, 1500);
                          }}
                        >
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faClipboard}
                          />
                          <p>Copy code</p>
                        </div>
                      )}
                    </div>
                    <div className="editorCode">
                      <SyntaxHighlighter
                        language="javascript"
                        style={atomOneDark}
                        wrapLongLines={false}
                        customStyle={{
                          height: "300px",
                        }}
                      >
                        {jsxD12}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                  <div className="editorCSS">
                    <div className="editorTitle">
                      <div className="editorName">
                        <h6>CSS</h6>
                      </div>
                      {copyCSS ? (
                        <div className="iconCopy">
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faCheckCircle}
                          />
                          <p>Copied</p>
                        </div>
                      ) : (
                        <div
                          className="iconCopy"
                          onClick={() => {
                            navigator.clipboard.writeText(cssD12);
                            setCopyCSS(true);
                            setTimeout(() => {
                              setCopyCSS(false);
                            }, 1500);
                          }}
                        >
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faClipboard}
                          />
                          <p>Copy code</p>
                        </div>
                      )}
                    </div>
                    <div className="editorCode">
                      <SyntaxHighlighter
                        language="javascript"
                        style={atomOneDark}
                        wrapLongLines={true}
                        customStyle={{
                          height: "300px",
                        }}
                      >
                        {cssD12}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="allWrap">
              <div className="display13">
                <div className="displayName">
                  <h1>Skeleton loader</h1>
                </div>
                <div className="displayComponent">
                  <SkeletonLoader />
                </div>
              </div>
              <div className="displayCode">
                <div className="editorWrap">
                  <div className="editorJSX">
                    <div className="editorTitle">
                      <div className="editorName">
                        <h6>JSX</h6>
                      </div>
                      {copyJSX ? (
                        <div className="iconCopy">
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faCheckCircle}
                          />
                          <p>Copied</p>
                        </div>
                      ) : (
                        <div
                          className="iconCopy"
                          onClick={() => {
                            navigator.clipboard.writeText(jsxD13);
                            setCopyJSX(true);
                            setTimeout(() => {
                              setCopyJSX(false);
                            }, 1500);
                          }}
                        >
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faClipboard}
                          />
                          <p>Copy code</p>
                        </div>
                      )}
                    </div>
                    <div className="editorCode">
                      <SyntaxHighlighter
                        language="javascript"
                        style={atomOneDark}
                        wrapLongLines={false}
                        customStyle={{
                          height: "300px",
                        }}
                      >
                        {jsxD13}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                  <div className="editorCSS">
                    <div className="editorTitle">
                      <div className="editorName">
                        <h6>CSS</h6>
                      </div>
                      {copyCSS ? (
                        <div className="iconCopy">
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faCheckCircle}
                          />
                          <p>Copied</p>
                        </div>
                      ) : (
                        <div
                          className="iconCopy"
                          onClick={() => {
                            navigator.clipboard.writeText(cssD13);
                            setCopyCSS(true);
                            setTimeout(() => {
                              setCopyCSS(false);
                            }, 1500);
                          }}
                        >
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faClipboard}
                          />
                          <p>Copy code</p>
                        </div>
                      )}
                    </div>
                    <div className="editorCode">
                      <SyntaxHighlighter
                        language="javascript"
                        style={atomOneDark}
                        wrapLongLines={true}
                        customStyle={{
                          height: "300px",
                        }}
                      >
                        {cssD13}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="allWrap">
              <div className="display15">
                <div className="displayName">
                  <h1>Feedback Box</h1>
                </div>
                <div className="displayComponent">
                  <AnimatedCountdown />
                </div>
              </div>
              <div className="displayCode">
                <div className="editorWrap">
                  <div className="editorJSX">
                    <div className="editorTitle">
                      <div className="editorName">
                        <h6>JSX</h6>
                      </div>
                      {copyJSX ? (
                        <div className="iconCopy">
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faCheckCircle}
                          />
                          <p>Copied</p>
                        </div>
                      ) : (
                        <div
                          className="iconCopy"
                          onClick={() => {
                            navigator.clipboard.writeText(jsxD15);
                            setCopyJSX(true);
                            setTimeout(() => {
                              setCopyJSX(false);
                            }, 1500);
                          }}
                        >
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faClipboard}
                          />
                          <p>Copy code</p>
                        </div>
                      )}
                    </div>
                    <div className="editorCode">
                      <SyntaxHighlighter
                        language="javascript"
                        style={atomOneDark}
                        wrapLongLines={false}
                        customStyle={{
                          height: "300px",
                        }}
                      >
                        {jsxD15}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                  <div className="editorCSS">
                    <div className="editorTitle">
                      <div className="editorName">
                        <h6>CSS</h6>
                      </div>
                      {copyCSS ? (
                        <div className="iconCopy">
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faCheckCircle}
                          />
                          <p>Copied</p>
                        </div>
                      ) : (
                        <div
                          className="iconCopy"
                          onClick={() => {
                            navigator.clipboard.writeText(cssD15);
                            setCopyCSS(true);
                            setTimeout(() => {
                              setCopyCSS(false);
                            }, 1500);
                          }}
                        >
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faClipboard}
                          />
                          <p>Copy code</p>
                        </div>
                      )}
                    </div>
                    <div className="editorCode">
                      <SyntaxHighlighter
                        language="javascript"
                        style={atomOneDark}
                        wrapLongLines={true}
                        customStyle={{
                          height: "300px",
                        }}
                      >
                        {cssD15}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="allWrap">
              <div className="display17">
                <div className="displayName">
                  <h1>Refresh Counter</h1>
                </div>
                <div className="displayComponent">
                  <IncrementBox />
                </div>
              </div>
              <div className="displayCode">
                <div className="editorWrap">
                  <div className="editorJSX">
                    <div className="editorTitle">
                      <div className="editorName">
                        <h6>JSX</h6>
                      </div>
                      {copyJSX ? (
                        <div className="iconCopy">
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faCheckCircle}
                          />
                          <p>Copied</p>
                        </div>
                      ) : (
                        <div
                          className="iconCopy"
                          onClick={() => {
                            navigator.clipboard.writeText(jsxD17);
                            setCopyJSX(true);
                            setTimeout(() => {
                              setCopyJSX(false);
                            }, 1500);
                          }}
                        >
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faClipboard}
                          />
                          <p>Copy code</p>
                        </div>
                      )}
                    </div>
                    <div className="editorCode">
                      <SyntaxHighlighter
                        language="javascript"
                        style={atomOneDark}
                        wrapLongLines={false}
                        customStyle={{
                          height: "300px",
                        }}
                      >
                        {jsxD17}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                  <div className="editorCSS">
                    <div className="editorTitle">
                      <div className="editorName">
                        <h6>CSS</h6>
                      </div>
                      {copyCSS ? (
                        <div className="iconCopy">
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faCheckCircle}
                          />
                          <p>Copied</p>
                        </div>
                      ) : (
                        <div
                          className="iconCopy"
                          onClick={() => {
                            navigator.clipboard.writeText(cssD17);
                            setCopyCSS(true);
                            setTimeout(() => {
                              setCopyCSS(false);
                            }, 1500);
                          }}
                        >
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faClipboard}
                          />
                          <p>Copy code</p>
                        </div>
                      )}
                    </div>
                    <div className="editorCode">
                      <SyntaxHighlighter
                        language="javascript"
                        style={atomOneDark}
                        wrapLongLines={true}
                        customStyle={{
                          height: "300px",
                        }}
                      >
                        {cssD17}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="allWrap">
              <div className="display18">
                <div className="displayName">
                  <h1>Enable Button</h1>
                </div>
                <div className="displayComponent">
                  <EnableButton />
                </div>
              </div>
              <div className="displayCode">
                <div className="editorWrap">
                  <div className="editorJSX">
                    <div className="editorTitle">
                      <div className="editorName">
                        <h6>JSX</h6>
                      </div>
                      {copyJSX ? (
                        <div className="iconCopy">
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faCheckCircle}
                          />
                          <p>Copied</p>
                        </div>
                      ) : (
                        <div
                          className="iconCopy"
                          onClick={() => {
                            navigator.clipboard.writeText(jsxD18);
                            setCopyJSX(true);
                            setTimeout(() => {
                              setCopyJSX(false);
                            }, 1500);
                          }}
                        >
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faClipboard}
                          />
                          <p>Copy code</p>
                        </div>
                      )}
                    </div>
                    <div className="editorCode">
                      <SyntaxHighlighter
                        language="javascript"
                        style={atomOneDark}
                        wrapLongLines={false}
                        customStyle={{
                          height: "300px",
                        }}
                      >
                        {jsxD18}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                  <div className="editorCSS">
                    <div className="editorTitle">
                      <div className="editorName">
                        <h6>CSS</h6>
                      </div>
                      {copyCSS ? (
                        <div className="iconCopy">
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faCheckCircle}
                          />
                          <p>Copied</p>
                        </div>
                      ) : (
                        <div
                          className="iconCopy"
                          onClick={() => {
                            navigator.clipboard.writeText(cssD18);
                            setCopyCSS(true);
                            setTimeout(() => {
                              setCopyCSS(false);
                            }, 1500);
                          }}
                        >
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faClipboard}
                          />
                          <p>Copy code</p>
                        </div>
                      )}
                    </div>
                    <div className="editorCode">
                      <SyntaxHighlighter
                        language="javascript"
                        style={atomOneDark}
                        wrapLongLines={true}
                        customStyle={{
                          height: "300px",
                        }}
                      >
                        {cssD18}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="allWrap">
              <div className="display19">
                <div className="displayName">
                  <h1>Range Slider</h1>
                </div>
                <div className="displayComponent">
                  <RangeDown />
                </div>
              </div>
              <div className="displayCode">
                <div className="editorWrap">
                  <div className="editorJSX">
                    <div className="editorTitle">
                      <div className="editorName">
                        <h6>JSX</h6>
                      </div>
                      {copyJSX ? (
                        <div className="iconCopy">
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faCheckCircle}
                          />
                          <p>Copied</p>
                        </div>
                      ) : (
                        <div
                          className="iconCopy"
                          onClick={() => {
                            navigator.clipboard.writeText(jsxD19);
                            setCopyJSX(true);
                            setTimeout(() => {
                              setCopyJSX(false);
                            }, 1500);
                          }}
                        >
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faClipboard}
                          />
                          <p>Copy code</p>
                        </div>
                      )}
                    </div>
                    <div className="editorCode">
                      <SyntaxHighlighter
                        language="javascript"
                        style={atomOneDark}
                        wrapLongLines={false}
                        customStyle={{
                          height: "300px",
                        }}
                      >
                        {jsxD19}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                  <div className="editorCSS">
                    <div className="editorTitle">
                      <div className="editorName">
                        <h6>CSS</h6>
                      </div>
                      {copyCSS ? (
                        <div className="iconCopy">
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faCheckCircle}
                          />
                          <p>Copied</p>
                        </div>
                      ) : (
                        <div
                          className="iconCopy"
                          onClick={() => {
                            navigator.clipboard.writeText(cssD19);
                            setCopyCSS(true);
                            setTimeout(() => {
                              setCopyCSS(false);
                            }, 1500);
                          }}
                        >
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faClipboard}
                          />
                          <p>Copy code</p>
                        </div>
                      )}
                    </div>
                    <div className="editorCode">
                      <SyntaxHighlighter
                        language="javascript"
                        style={atomOneDark}
                        wrapLongLines={true}
                        customStyle={{
                          height: "300px",
                        }}
                      >
                        {cssD19}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="allWrap">
              <div className="display20">
                <div className="displayName">
                  <h1>Confirmation Number</h1>
                </div>
                <div className="displayComponent">
                  <CodeConfirmation />
                </div>
              </div>
              <div className="displayCode">
                <div className="editorWrap">
                  <div className="editorJSX">
                    <div className="editorTitle">
                      <div className="editorName">
                        <h6>JSX</h6>
                      </div>
                      {copyJSX ? (
                        <div className="iconCopy">
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faCheckCircle}
                          />
                          <p>Copied</p>
                        </div>
                      ) : (
                        <div
                          className="iconCopy"
                          onClick={() => {
                            navigator.clipboard.writeText(jsxD20);
                            setCopyJSX(true);
                            setTimeout(() => {
                              setCopyJSX(false);
                            }, 1500);
                          }}
                        >
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faClipboard}
                          />
                          <p>Copy code</p>
                        </div>
                      )}
                    </div>
                    <div className="editorCode">
                      <SyntaxHighlighter
                        language="javascript"
                        style={atomOneDark}
                        wrapLongLines={false}
                        customStyle={{
                          height: "300px",
                        }}
                      >
                        {jsxD20}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                  <div className="editorCSS">
                    <div className="editorTitle">
                      <div className="editorName">
                        <h6>CSS</h6>
                      </div>
                      {copyCSS ? (
                        <div className="iconCopy">
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faCheckCircle}
                          />
                          <p>Copied</p>
                        </div>
                      ) : (
                        <div
                          className="iconCopy"
                          onClick={() => {
                            navigator.clipboard.writeText(cssD20);
                            setCopyCSS(true);
                            setTimeout(() => {
                              setCopyCSS(false);
                            }, 1500);
                          }}
                        >
                          <FontAwesomeIcon
                            className="faClip"
                            icon={faClipboard}
                          />
                          <p>Copy code</p>
                        </div>
                      )}
                    </div>
                    <div className="editorCode">
                      <SyntaxHighlighter
                        language="javascript"
                        style={atomOneDark}
                        wrapLongLines={true}
                        customStyle={{
                          height: "300px",
                        }}
                      >
                        {cssD20}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg>
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.6"
            stitchTiles="stitch"
          />
          <feColorMatrix
            in="colorNoise"
            type="matrix"
            values="0 0 0 0 0 1 0 0 0 0 0"
          />
          <feComposite operator="in" in2="SourceGraphic" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="screen" />
        </filter>
      </svg>
    </div>
  );
};

export default Display;
