import React from "react"
import '../styles/index.css'

export default function Navbar() {
    return (
      <header>
         <nav>
            <img className='custom-image' alt='react logo' src='../assets/logo192.png' />
            <h3 className='nav-text'>SaraFacts</h3>
            <a target='_blank' className='small-nav-text' href='https://missatrox44.github.io/portfolio/'>Portfolio</a>
        </nav>
        </header>

    )
}