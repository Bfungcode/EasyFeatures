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
                loadText.innerText = `${load}%`;
                loadText.style.opacity = scale(load, 0, 100, 1, 0);
                bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
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