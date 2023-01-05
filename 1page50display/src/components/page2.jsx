import React, { useState, useEffect } from 'react'
import '../styles/dtwo.css'

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
                        <div className={`circle ${circle1 ? 'active' : ''}`}>1</div>
                        <div className={`circle ${circle2 ? 'active' : ''}`}>2</div>
                        <div className={`circle ${circle3 ? 'active' : ''}`}>3</div>
                        <div className={`circle ${circle4 ? 'active' : ''}`}>4</div>
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