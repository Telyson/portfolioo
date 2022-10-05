import React from 'react'
import './Footer.css'
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';
import Rotate from 'react-reveal/Rotate';


export default function Footer() {
  return (
    <div className='footer'>

            <p>atelyson@gmail.com</p>


            <div className="i-icon">
                <Rotate bottom right>
                <a href="#">
                    <BsGithub className='inst' />
                    
                </a>
                </Rotate>

                <Rotate top right>
                <a href="#">
                    <BsLinkedin className='inst' />
                    {/* <img src={linkedin} alt="linkedin"  /> */}
                </a>
                </Rotate>

                <Rotate top left>
                <a href="#">
                    <BsInstagram className='inst' />
                    {/* <img src={instagram} alt="instagram"  /> */}
                </a>   
                </Rotate>
                
            </div>
    </div>
  )
}
