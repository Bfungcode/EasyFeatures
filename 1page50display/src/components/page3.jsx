import React, {useState} from 'react'
import '../styles/d3.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchIcon = () => {
    const [active, setActive] = useState(false);
  return (
    <div className='container'>
        <div className='d3Wrapper'>
        <div className={`search ${active ? 'active' : ''}`}>
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