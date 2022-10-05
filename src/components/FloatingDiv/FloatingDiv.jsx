import React from 'react'
import './Floating.css'


export default function FloatingDiv({image, txt1, txt2}) {

  return (
    <div className='floatingdiv'>
        <img src={image} alt="imag" />
        <span>
            {txt1}
            <br />
            {txt2}
        </span>
    </div>
  )
}
