import React from 'react'
import './article-aside-back.css'
const articleVector = require('../assets/images/article-vector.png')

const ArticleAsideBack = () => {
  return (
    <div  className='article-back-container'>
        <div className="blue-circle">
            <img src={articleVector} alt="" srcset="" />
        </div>
        <div className="ring">
            
        </div>
        <div className="big-ring">

        </div>
    </div>
  )
}

export default ArticleAsideBack