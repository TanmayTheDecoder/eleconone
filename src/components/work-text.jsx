import React from 'react'
import './work-text.css'

const iCard = require('../assets/icons/i-card.png') 
const rocket = require('../assets/icons/rocket.png')
const cube = require('../assets/icons/cube.png')

const WorkText = () => {
  return (
    <div className='work-text-container'>
        <div className="work-text-aside">
            <div className="work-text-l-side">
                <h4>What's Our Work?</h4>
                <h1>
                    Transformation <br />
                    Through <br />
                    Technology & <br />
                    Innovation <br />
                </h1>
                <p>
                Primarily, we love to work with latest technology & solve <br /> problems with innovative ideas for businesses & startups
                </p>
                <button type='button'>
                    Start Now
                </button>
            </div>
            <div className="work-text-r-side">
                <div className="r-side-divs">
                    <div className="r-side-left-div">
                        <div className="card-I">
                            <img src={iCard} alt="" srcset=""/>
                            <h3>Planning</h3>
                            <p>
                                We understand your needs deeply & come up with innovative solution based every time.
                            </p>
                        </div>
                        <div className="card-II">
                        <img src={rocket} alt="" srcset=""/>
                            <h3>Development</h3>
                            <p>
                                we are experts at Mobile & Web Development using full stack technology and delivering on time & budget
                            </p>
                        </div>
                    </div>
                    <div className="r-side-right-div">
                    <div className="card-III">
                        <img src={cube} alt="" srcset=""/>
                            <h3>Design</h3>
                            <p>
                                Creativity, Innovation and Efficiency by analysis of modern trends & requirements
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkText