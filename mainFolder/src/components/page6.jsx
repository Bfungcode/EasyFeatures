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