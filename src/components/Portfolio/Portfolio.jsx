import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import fastcar from '../../img/fastcar.PNG'
import photographer from '../../img/photographer.PNG'
import musicapp from '../../img/musicapp.png'
import tesla from '../../img/tesla1.PNG'
import 'swiper/css'
import {themeContext} from '../../Context';
import {useContext} from 'react'

export default function Portfolio() {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id='Portfolio'>
        <span style={{color: darkMode? 'white' : ""}}>Recent Projects</span>
        <span>Portfolio</span>

        <Swiper 
            spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
            className='portfolio-slider'
        >
            <SwiperSlide>
                <img src={tesla} alt="tesla" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={fastcar} alt="fastcar" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={photographer} alt="photographer" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={musicapp} alt="musicapp" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}
