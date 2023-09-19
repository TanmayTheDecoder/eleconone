import React from 'react'
import './article.css'
import ArticleAsideBack from './article-aside-back'

const Article = () => {
  return (
    <div className='article-container'>
        <ArticleAsideBack />
        <div className='article-aside-text-container'>
            <div className="article-text-l-side">
                
            </div>
            <div className="article-text-r-side">
                <div className="title-blue-box">
                    <h3>Complete software development company</h3>
                </div>
                    <h1>Expert Solutions for</h1>
                    <span>Your Business</span>
                    <div className="thin-line">

                    </div>
                    <p>
                    We offer flexible and cutting edge solutions that help you to operate more efficiently and gain an edge over their competitors.We believe in delivering smart business solutions through smart usage of technology and continuously focus on quality of deliverable to you.
                    </p>
                    <div className="list">
                        <p><big>&#x2389;</big> Mobile Application Design and Development </p>
                        <p><big>&#x2389;</big> Website design & Development </p>
                        <p><big>&#x2389;</big> Professional User Experience & Interface researching </p>
                        <p><big>&#x2389;</big> Cloud Solutions for web & Mobile applications</p>
                        <p><big>&#x2389;</big> Powerful marketing strategies & Digital marketing</p>
                    </div>
            </div>
            
        </div>        
    </div>
  )
}

export default Article