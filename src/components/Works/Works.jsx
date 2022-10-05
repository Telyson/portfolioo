import React from 'react'
import './Works.css'
import Upwork from "../../img/Upwork.png"
import fiverr from "../../img/fiverr.png"
import amazon from "../../img/amazon.png"
import Shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png"
import {themeContext} from '../../Context';
import {useContext} from 'react'
import Bounce from 'react-reveal/Bounce';

export default function Works() {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className='works'>

        {/* left side */}
        <div className="awesome">
            <span style={{color: darkMode? 'white' : ""}}>Works for all these</span>
            <span>Brands & clients</span>

            <span style={{color: darkMode? 'white' : ""}}>
                Raycom Nig Limited
                <br />
                Smart Hub Tech.
                <br />
                Harrison Industries
                <br />
                Webbiit Technologies
            </span>

            
            <button className='button w-button'>
                Hire Me
            </button>
            
        </div>

        {/* Right side */}
        <div className="w-right">
            <div className="w-mainCircle">
                <Bounce right>
                <div className="w-secCircle">
                    <img src={Upwork} alt="Upwork" />
                </div>
                </Bounce>

                <Bounce bottom>
                <div className="w-secCircle">
                    <img src={fiverr} alt="fiverr" />
                </div>
                </Bounce>

                <Bounce clear>
                <div className="w-secCircle">
                    <img src={amazon} alt="amazon" />
                </div>
                </Bounce>

                <Bounce left>
                <div className="w-secCircle">
                    <img src={Shopify} alt="Shopify" />
                </div>
                </Bounce>

                <Bounce top>
                <div className="w-secCircle">
                    <img src={Facebook} alt="Facebook" />
                </div>
                </Bounce>
            </div>

            <div className='w-backCircle blueCircle '></div>
            <div className='w-backCircle yellowCircle '></div>


        </div>

    </div>
  )
}
