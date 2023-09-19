import React from 'react'
import './footer.css';

const map = require('../assets/icons/map.png');
const receiver = require('../assets/icons/receiver.png');
const envelope = require('../assets/icons/envelope.png');

const Footer = () => {
  return (
    <div className='footer_container'>
      <div className="footer_inner">
        <div className="top_fancy_radius">

        </div>
        <div className="footer_cards">
            <div className="footer_cards_inner">
                <div className="visit adjust">
                    <img src={map} alt="" />
                    <span className="footer_mid">
                        VISIT
                    </span>                        
                    <span className="footer_small">
                    204, Deepkamal-1, Near Sarthana Nature Park, Sarthana Jakatnaka, Varachha Road, Surat, Gujarat 395006- India
                    </span>
                </div>    
                <div className="voice adjust">
                    <img src={receiver} alt="" />
                    <span className="footer_mid">
                        VOICE
                    </span>                        
                    <span className="footer_small">
                        +91 966 298 5099 (india) <br />
                        +1 724 206 8508 (USA)
                    </span>
                </div>
                <div className="wright adjust">
                    <img src={envelope} alt="" />
                    <span className="footer_mid">
                        WRIGHT
                    </span>                        
                    <span className="footer_small">
                        hello.eleconone@gmail.com <br />
                        +91 966 298 5099 (WhatsApp)
                    </span>
                </div>
            </div>
        </div>
        <div className="footer_rights">
            <div className="footer_rights_inner">
                EleconOne || © 2022 All Rights Reserved
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
