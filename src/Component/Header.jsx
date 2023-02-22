import React from 'react'
import MuzicLogo from '../img/MuzicLogo.png' 
import CenterMenu from './CenterMenu'
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <img src={MuzicLogo} alt=""  className='logo' />
        <CenterMenu/>
        <div className="buttons">
            <button className='buttonstyle login'>Log in</button>
            <button className='buttonstyle signup'>Sign up</button>
        </div>

    </div>
  )
}

export default Header