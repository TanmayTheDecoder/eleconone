import React from 'react'
import './benefits-back.css'

const benefitsBackSVG = require('../assets/icons/benefits_svg.png')

const BenefitsBack = () => {
  return (
    <div className='benefits-back-container'>
      <img src={benefitsBackSVG} alt="img not found" />   
    </div>
  )
}

export default BenefitsBack