import React from 'react'
import './customer-reviews.css'
import CustomerReviewBack from './customer-review-back'

const man = require('../assets/icons/man.png')

const CustomerReviews = () => {
  return (
    <div className='customer-reviews-container'>
        <CustomerReviewBack />
        <div className="review-inner">
            <div className="reviews">
                <div className="icon">
                    <img src={man} alt="" srcset="" />                    
                </div>
                <div className="opinion">
                    <p>&#x2B50;&#x2B50;&#x2B50;&#x2B50;&#x2B50;</p>
                    <h3>Angelo Jorsina</h3>
                    <p>They did a great job on development, managed all task very smoothly and fast.</p>

                </div>
            </div>
            <div className="reviews">
                <div className="icon">
                    <img src={man} alt="" srcset="" />                    
                </div>
                <div className="opinion">
                    <p>&#x2B50;&#x2B50;&#x2B50;&#x2B50;&#x2B50;</p>
                    <h3>Vijay Prakash Singh</h3>
                    <p>Amazing developer to work with. We were in time crunch and he saved us with his excellent performance. </p>
                </div>
            </div>
            <div className="reviews">
                <div className="icon">
                    <img src={man} alt="" srcset="" />                    
                </div>
                <div className="opinion">
                    <p>&#x2B50;&#x2B50;&#x2B50;&#x2B50;&#x2B50;</p>
                    <h3>Raza Kazimli</h3>
                    <p>An amazing experience. Very skilled professionals, fast and precise. Great communication, highly suggested. </p>
                </div>
            </div>
            <div className="reviews">
                <div className="icon">
                    <img src={man} alt="" srcset="" />                    
                </div>
                <div className="opinion">
                    <p>&#x2B50;&#x2B50;&#x2B50;&#x2B50;&#x2B50;</p>
                    <h3>Sumant Stan</h3>
                    <p>Great to work with. Everything was done on time and as requested. Will hire again.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CustomerReviews