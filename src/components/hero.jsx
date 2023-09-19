import React from 'react'
import './hero.css'
import Navbar from './navbar'
import HeroGraphics from './herographics'

const wave = require('../assets/images/wave.png')
const Hero = () => {
  return (
    <div className='hero-container'>
        <Navbar />
        <HeroGraphics />
        <div className="hero-text">
            <div className="orange-title-box">
                <h3>Modern. Professional. Reliable.</h3>
            </div>
            <h1>
                Creating a Efficient
            </h1>
            <h1>
                Digital Solutions,
            </h1>
            <h1>
                Engineered for a Growth.
            </h1>
            <p>We are a Complete Software Development Company who <br /> understand your business needs then create a premium quality <br /> solutions for you.</p>
            <button className="chat-button" type='button'>
                Let's Talk <span>&#128488;</span>
            </button>
        </div>
        <img src={wave} alt="" srcset="" className='wave'/>
    </div>
  )
}

export default Hero