import React from 'react'
import './Toggle.css'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import {themeContext} from '../../Context';
import {useContext} from 'react'

export default function Toggle() {

    const handleClick = () => {
        theme.dispatch({type: 'toggle'})
    }

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
  return (
    <div className='toggle' onClick={handleClick}>
        <BsFillMoonStarsFill />
        <BsFillSunFill />

        <div className='t-button'
            style={darkMode? {left: '2px'}: {right: '2px'}}
        >

        </div>
    </div>
  )
}
