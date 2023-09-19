import React from 'react'
import './herographics.css'

const HeroVector = require('../assets/images/hero-vector.png')

const HeroGraphics = () => {
  return (
    <div className='graphics-container'>
        <div className="graphics-inner">
            <div className="hero-wobble">

            </div>
            <svg className='circle' fill="#d7d7d715" width="230px" height="230px" viewBox="0 0 32.00 32.00" version="1.1"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>circle</title> <path d="M0 16q0 3.264 1.28 6.208t3.392 5.12 5.12 3.424 6.208 1.248 6.208-1.248 5.12-3.424 3.392-5.12 1.28-6.208-1.28-6.208-3.392-5.12-5.088-3.392-6.24-1.28q-3.264 0-6.208 1.28t-5.12 3.392-3.392 5.12-1.28 6.208zM4 16q0-3.264 1.6-6.016t4.384-4.352 6.016-1.632 6.016 1.632 4.384 4.352 1.6 6.016-1.6 6.048-4.384 4.352-6.016 1.6-6.016-1.6-4.384-4.352-1.6-6.048z"></path> </g></svg>

            <div className="big-circle">
                <div className="big-circle-inner">
                    <img src={HeroVector} alt="" srcset="" />
                </div>
            </div>

            
        </div>
    </div>
  )
}

export default HeroGraphics