import React from 'react'
import './praise.css'
import PraiseBack from './praise-back'

const values = require('../assets/icons/values.png')

const Praise = () => {
  return (
    <div className='praise-container'>
        <PraiseBack />
        <div className="praise-aside">
            <div className="praise-l-side">
                <h2>
                  Vision & Values
                </h2>
                <h1>
                  Beyond the Best
                </h1>
                <p>
                as a Complete Software Development Company we are Developing the organizational culture where we are as a team is confident and inspired to create something awesome and serve our clients effectively and efficiently by adapting and updating ourselves for new technologies for sustainable and constant growth.
                </p>
                <div className="barI"></div>
                <div className="barII"></div>
                <div className="barIII"></div>
            </div>
            <div className="praise-r-side">
                <img src={values} alt="" />                
            </div>
        </div>
    </div>
  )
}

export default Praise