import React from 'react'
import Card from '../Card/Card'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import humble from '../../img/humble.png'
import resume from './ted-cv2.pdf'
import {themeContext} from '../../Context';
import {useContext} from 'react'
import Roll from 'react-reveal/Roll';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

export default function Services() {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <Fade bottom>
    <div className='services' id='Services'>
        {/* left side */}
        <div className="awesome">
            <span style={{color: darkMode? 'white' : ""}}>My Awesome</span>
            <span>services</span>

            <span style={{color: darkMode? 'white' : ""}}>
                Web development, web design, graphics design 
                
            </span>

            

            <a href={resume} download className='button s-button'>
                Download CV
            </a>
        </div>


        {/* right side */}
        <div className="cards">

            <Roll right>
            <div style={{left: '14rem'}}>
                <Card 
                     
                    emoji={HeartEmoji}
                    detail={'Figma, Photoshop, Adobe, Illustrator, Corel'}
                    heading={'DESIGN' }
                />
            </div>
            </Roll>
            <Bounce>
            <div style={{top:'12rem', left: '-4rem'}}>
                <Card 
                    emoji={Glasses}
                    detail={'HTML, Css, Javascript, Bootsrap, ReactJs, NodeJs'}
                    heading={'DEVELOPER'}
                />
            </div>
            </Bounce>

            <Roll right>
            <div style={{top:'19rem', left: '14rem'}}>
                <Card 
                    emoji={humble}
                    detail={'Creating user interface for website, app or other interactive media'}
                    heading={'UI/UX'}
                />
            </div>
            </Roll>
        </div>
    </div>
    </Fade>
  )
}
