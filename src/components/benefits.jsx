import React from 'react'
import BenefitsBack from './benefits-back'
import './benefits.css'

const user = require('../assets/icons/user.png');
const team = require('../assets/icons/team.png'); 
const clock = require('../assets/icons/clock.png');

const Benefits = () => {
  return (
    <div className='benefits-container'>
        <BenefitsBack />
        <div className="benefits_content">
          <div className="benefits_content_inner">
              <div className="benefits_title">
                <span className="small">benefits</span>
                <span className="big">our flexible hiring model</span>
                <span className="smallest">You get flexible engagement models that are personalized as per your specific business needs.</span>
              </div>
              <div className="benefits_cards">
                <div className="developer adjust">
                  <img src={user} alt="image not found" />
                  <span className="small blue">dedicated developer</span>
                  <span className="smaller">single dedicated resource</span>
                  <span className="smallest">Work 8 hrs/day exclusively for you</span>
                  <hr width = "70%"/>
                  <span className="smallest">agile approach</span>
                  <hr width = "70%"/>
                  <span className="smallest">Sprint based delivery</span>
                  <hr width = "70%"/>
                  <span className="smallest">Project Analysis and Documentation</span>
                  <hr width = "70%"/>
                  <span className="smallest">Code Ownership</span>
                  <hr width = "70%"/>
                  <span className="smallest">Design and Testing</span>
                  <hr width = "70%"/>
                  <span className="smallest">Multiple Channels of Communication</span>
                  <button type='button'>
                  &#x1F4AC; let's Talk
                  </button>
                </div>
                <div className="model adjust">
                  <img src={team} alt="image not found" />
                  <span className="small blue">team model</span>
                  <span className="smaller">team of dedicated developers</span>
                  <span className="smallest">Work 8 hrs/day exclusively for you</span>
                  <hr width = "70%"/>
                  <span className="smallest">agile approach</span>
                  <hr width = "70%"/>
                  <span className="smallest">Sprint based delivery</span>
                  <hr width = "70%"/>
                  <span className="smallest">Project Analysis and Documentation</span>
                  <hr width = "70%"/>
                  <span className="smallest">Code Ownership</span>
                  <hr width = "70%"/>
                  <span className="smallest">Design and Testing</span>
                  <hr width = "70%"/>
                  <span className="smallest">Multiple Channels of Communication</span>
                  <button type='button'>
                  &#x1F4AC; let's Talk
                  </button>
                </div>
                <div className="part_time adjust">
                  <img src={clock} alt="image not found" />
                  <span className="small blue">part time or hourly</span>
                  <span className="smaller">dedicated resources as required</span>
                  <span className="smallest">Work 8 hrs/day exclusively for you</span>
                  <hr width = "70%"/>
                  <span className="smallest">agile approach</span>
                  <hr width = "70%"/>
                  <span className="smallest">Sprint based delivery</span>
                  <hr width = "70%"/>
                  <span className="smallest">Project Analysis and Documentation</span>
                  <hr width = "70%"/>
                  <span className="smallest">Code Ownership</span>
                  <hr width = "70%"/>
                  <span className="smallest">Design and Testing</span>
                  <hr width = "70%"/>
                  <span className="smallest">Multiple Channels of Communication</span>
                  <button type='button'>
                  &#x1F4AC; let's Talk
                  </button>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Benefits