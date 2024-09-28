


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './Swiper.css';

// import required modules
import { Navigation } from 'swiper/modules';
import TripData from '../Shared/TripData/TripData';

export default function SwiperTrip() {
    const [locations]=TripData()
    const Adventure=locations.filter(location=>location.type=="Adventure")
    console.log(Adventure)

    
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
            Adventure.map((adv,i)=><SwiperSlide key={i}
            ><img className='w-full h-full object-cover' src={adv.img} alt="" /></SwiperSlide>)
        }
        
 
       
      </Swiper>
    </>
  );
}
