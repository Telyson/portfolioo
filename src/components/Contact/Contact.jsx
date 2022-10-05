import React from 'react'
import { useRef } from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import {themeContext} from '../../Context';
import {useContext} from 'react'
import Roll from 'react-reveal/Roll';


export default function Contact() {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const form = useRef();
    const [done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8o22fnp', 'template_h27hu3n', form.current, 'LbENN2kyK0XeztvWh')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='contact-form' id='Contact'>
        <Roll left>
        <div className="w-left">
            <div className="awesome">
                <span style={{color: darkMode? 'white' : ""}}>Get in touch</span>
                <span>Contact Me</span>
            </div>
        </div>
        </Roll>

        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user_name' className='user' placeholder='Name' />
                <input type="email" name='user_email' className='user' placeholder='Email' />
                <textarea name='message' className='user' placeholder='Message' />
                <input type="submit" value='Send' className='button' />
                {done && "Thanks for contacting me...!"}
            </form>
        </div>
    </div>
  )
}
