import React from "react"
import '../styles/index.css'

export default function Navbar() {
    return (
      <header>
         <nav>
            <img className='custom-image' alt='react logo' src='../assets/react-transparent-logo.png' />
            <h3 className='nav-text'>ReactFacts</h3>
            <p className='small-nav-text'>React Course - Project 1</p>
        </nav>
        </header>

    )
}