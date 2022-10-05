import React from 'react'
import './Experience.css'
import {themeContext} from '../../Context';
import {useContext} from 'react'
import Rotate from 'react-reveal/Rotate';

export default function Experience() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='experience' id='Experience'>
        <Rotate bottom right>
        <div className="achievement">
            <div style={{color: darkMode? 'black' : ""}} className="circle">3+</div>
            <span>years</span>
            <span>Experience</span>
        </div>
        </Rotate>

        <Rotate top left>
        <div className="achievement">
            <div style={{color: darkMode? 'black' : ""}} className="circle">20+</div>
            <span>completed</span>
            <span>Projects</span>
        </div>
        </Rotate>

        <Rotate top right>
        <div className="achievement">
            <div style={{color: darkMode? 'black' : ""}} className="circle">1+</div>
            <span>company</span>
            <span>Works</span>
        </div>
        </Rotate>
    </div>
  )
}
