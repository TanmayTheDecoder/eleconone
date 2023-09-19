import React from 'react'
import './navbar.css'

const headerLogo = require('../assets/icons/eleconone-logo-light.png')

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className="navbar-inner">
            <div className="logo">
                <img src={headerLogo} alt="" srcset="" />
            </div>
            <div className="nav-links">
                <a href="#">Home</a>
                <a href="#">Services</a>
                <a href="#">About Us</a>
                <a href="#">Careers</a>
                <a href="#">Contact &#x1F50D;</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar