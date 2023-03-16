import React from 'react'
import { Link } from 'react-router-dom';
import ExpendingCard from './page1';
import ProgressSteps from './page2';
import SearchIcon from './page3';

const Home = () => {
  return (
    <div className='hero'>
      <div className='title'>
        <h1>Home</h1>
      </div>
      <div className='d1'>
        <h1>1. EXPENDING CARDS</h1>
        <ExpendingCard />
      </div>
      <div className='d2'>
        <h1>2. PROGRESS STEPS</h1>
        <ProgressSteps />
      </div>
      <div className='d3'>
        <h1>3. Search Icon</h1>
        <SearchIcon />
      </div>
    </div>
  )
}

export default Home;