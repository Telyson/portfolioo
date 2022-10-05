import React from 'react'
import './Card.css'
import {themeContext} from '../../Context';
import {useContext} from 'react'

export default function Card({ emoji, heading, detail}) {


  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='card'>
        <img src={emoji} alt="" />
        <span style={{color: darkMode? 'white' : ""}} className='headin'>{heading}</span>
        <span style={{color: darkMode? 'white' : ""}} className='detai'>{detail}</span>
        <button className="button c-button">
            Learn More
        </button>
    </div>
  )
}
