import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='hero'>
    <div className='title'>
        <h1>Home</h1>
    </div>
    <div className='Page1'>
        <div className='card1'>
        <Link to='/displayOne' className='Link'>
            <h2>Expending Cards</h2>
            </Link>
            </div>
    </div>
    </div>
  )
}

export default Home;