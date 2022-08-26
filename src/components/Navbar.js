import React from 'react'
import logo from '../assets/logo192.png'
import '../styles/index.css'



export default function Navbar() {
    return (
      <header>
         <nav>
            <img className='custom-image' alt='react logo' src={logo} />
            <h3 className='nav-text'>SaraFacts</h3>
            <a className='small-nav-text' href='https://missatrox44.github.io/portfolio/' target='_blank' rel='noreferrer'>Portfolio</a>
        </nav>
        </header>

    )
}