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