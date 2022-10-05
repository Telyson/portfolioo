import React from 'react'
import './Intro.css'
import vector1 from '../../img/Vector1.png'
import vector2 from '../../img/Vector22.png'
import boy from '../../img/mine3.png'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { SiTiktok } from 'react-icons/si';
import {themeContext} from '../../Context'
import {useContext} from 'react'
import Zoom from 'react-reveal/Zoom';

export default function Intro() {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="intro" id='Intro'>
        <div className="i-left">
            <div className="i-name">
                <span style={{color: darkMode? 'white' : ''}}>Hey! I Am</span>
                <span>Telyson Akpofure</span>
                <span style={{color: darkMode? 'white' : ""}}>Fullstack Web Developer with high level of experience 
                    in web designing and development.
                </span>
            </div>
            <button className="button i-button">Hire Me</button>

            <div className="i-icons">
                <a href="https://github.com/Telyson/">
                    <BsGithub className='insta' />
                    {/* <img src={github} alt="github"  /> */}
                </a>
                <a href="https://www.linkedin.com/in/telyson-akpofure-aa9937251/">
                    <BsLinkedin className='insta' />
                    {/* <img src={linkedin} alt="linkedin"  /> */}
                </a>
                <a href="www.tiktok.com/@telyson1">
                    <SiTiktok className='insta' />
                    {/* <img src={instagram} alt="instagram"  /> */}
                </a>   
                
            </div>
        </div>

        <div className="i-right">
            <img src={vector1} alt="vector1"  />
            <img src={vector2} alt="vector2"  />
            <Zoom bottom>
            <img style={{borderRadius: '100%', width: '430px', height: '480px', zIndex: 10}} src={boy} alt="boy"  />
            </Zoom>
            <Zoom>
                <div

                    style={{top: '7%', left:'68%'}}>
                    <FloatingDiv 
                        className='floating-div'
                        image={crown}
                        txt1="Web"
                        txt2="Developer"
                    />
                </div>
            </Zoom>

            <Zoom>
                <div style={{top: '18rem', left:'0rem'}}>
                    <FloatingDiv 
                        className='floating-div'
                        image={thumbup}
                        txt1="Best Design"
                        txt2="Award"
                    />
                </div>
            </Zoom>

        </div>
    </div>
  )
}
