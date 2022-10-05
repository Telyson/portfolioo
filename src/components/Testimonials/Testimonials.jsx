import React from 'react'
import './Testimonials.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination} from 'swiper'
import profile1 from '../../img/profile1.jpg'
import profile2 from '../../img/profile2.jpg'
import profile3 from '../../img/profile3.jpg'
import profile4 from '../../img/profile4.jpg'
import 'swiper/css'
import 'swiper/css/pagination'
import {themeContext} from '../../Context';
import {useContext} from 'react'

export default function Testimonials() {

    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

    const clients = [
        {
            img: profile1,
            review:
                "This guy's work is top notch"
        },
        {
            img: profile2,
            review:
                "He's an amazing developer"
        },
        {
            img: profile3,
            review:
                "His work ethic is great"
        },
        {
            img: profile4,
            review:
                "Trusted and reliable"
        },
    ]
  return (
    <div className='t-wrapper' id='Testimonials'>
        <div className="t-heading">
            <span>Clients always get</span>
            <span>Exceptional Work</span>
            <span>from me...</span>
        </div>

        <Swiper 
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{ clickable: true }}
        >
            {clients.map((client, index) => {
                return (
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                            <img src={client.img} alt="" />
                            <span style={{color: darkMode? 'white' : ""}}>{client.review}</span>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  )
}
