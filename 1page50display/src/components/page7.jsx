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
                .map((letter, idx) => `<span style="transition-delay:${idx * 30}ms">${letter}</span>`)
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