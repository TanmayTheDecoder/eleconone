import React from 'react'
import './techs-cards.css'

const mobile = require('../assets/icons/mobile.png')
const brackets = require('../assets/icons/brackets.png')
const dice = require('../assets/icons/dice.png')
const cloud = require('../assets/icons/cloud.png')
const suitcase = require('../assets/icons/case.png')
const horn = require('../assets/icons/digital-marketing.png')

const TechsCards = ({heading='heading'}) => {
  return (
    <div className='techs-cards-container'>
        <div className={heading}>
            <img src={mobile} alt="" srcset="" />
            <h2>EleconOne offer you all kind of the</h2>
            <h1>Digital solutions</h1>
        </div>
        <div className="cards">
            <div className="inner-cards">
                <div className="web-development card-adjustment">
                    <img src={brackets} alt="" srcset="" />
                    <h2>Web Development</h2>
                    <p>We have expertise in developing website with WordPress , Joomla, Magento and Drupal and core development with php, .NET, React, node, and other technology as well.</p>
                    <a href="#">Read More</a>
                </div>
                <div className="mobile-app-development card-adjustment">
                    <img src={mobile} alt="" srcset="" />
                    <h2>Mobile App Development</h2>
                    <p>We develop Android, iPhone & iPad Applications Using Native & Hybrid Framework Like React Native, Flutter, PhoneGap and Xamarin . You can get Multimedia, Finance, Business, Communication and other apps developed</p>
                    <a href="#">Read More</a>
                </div>
                <div className="UI/UX-design card-adjustment">
                    <img src={dice} alt="" srcset="" />
                    <h2>UI/UX Design</h2>
                    <p>we have expertise in web and Mobile App design, we always prefer minimalist & interactive UI that bring whole product or project to the higher level and add more value into it. we are using Adobe XD, Sketch, Figma, and other Technologies </p>
                    <a href="#">Read More</a>
                </div>
                <div className="cloud-services card-adjustment">
                    <img src={cloud} alt="" srcset="" />
                    <h2>Cloud Services</h2>
                    <p>We offer a complete package of cloud services, including – infrastructure and security Services to help you transform your Business. Cloud services are helpful to handle every issue related to data and utility in an organization. </p>
                    <a href="#">Read More</a>
                </div>
                <div className="enterprise-services card-adjustment">
                    <img src={suitcase} alt="" srcset="" />
                    <h2>Enterprise Services</h2>
                    <p>we known for our high-end enterprise software services. We are dedicated to simplifying key business processes, maintaining business productivity, monitoring functional aspects, and assuring multi-level security. </p>
                    <a href="#">Read More</a>
                </div>
                <div className="digital-marketing card-adjustment">
                    <img src={horn} alt="" srcset="" />
                    <h2>Digital Marketing</h2>
                    <p>we are emerging digital marketing agency that provides Search Engine Optimization, Search Engine Marketing and Social Media Marketing, Content Marketing, Inbound Marketing, Web Analytics solutions  globally. </p>
                    <a href="#">Read More</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TechsCards