import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

window.$object = [
  {
    jsxD2: `import React, { useState, useEffect } from 'react'
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
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
