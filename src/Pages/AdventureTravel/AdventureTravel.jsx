import React from 'react'
import TripData from '../Shared/TripData/TripData'
import SwiperTrip from './SwipeTrip'
import Title from '../Shared/Title/Title'

const AdventureTravel = () => {
    
  return (
    <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://i.ibb.co/17MFVNh/symbol.png)",
    backgroundAttachment:"fixed",
    backgroundRepeat: "no-repeat",
    marginTop:"160px"
    
  }}>
  <div className='hero-overlay opacity-80 '></div>
  <div className='flex  justify-between gap-5 px-5'>
  <div className=' px-5'>
  <SwiperTrip></SwiperTrip>
  </div>
  <div className='rounded-md p-[40px] bg-slate-950'>
    
    <div className='flex gap-3 flex-col'>
      <Title title="Adventure Travel"></Title>
      <h3 className='text-3xl font-bold leading-8 text-white'>Embrace the Thrill of
      the Unknown</h3>
      <p className='text-xl text-white'>Are you tired of the typical tourist destinations and looking to step out of
your comfort zone? Adventure travel may be the perfect solution for you!
Here are four reasons why you should book an adventure travel experience</p>
      <p className='text-white'>Connect with nature</p>
      <hr className='w-[400px]' />
      <p className='text-white'>Experience other cultures</p>
      <hr className='w-[400px]' />
  
      <p className='text-white'>Create unforgettable memories</p>
      <hr className='w-[400px]' />
      <button className='px-2 py-3 mt-5 rounded-md bg-[#1bbc9b] w-[100px]'>All Services</button>
    </div>
  </div>
  </div>

</div>
  )
}

export default AdventureTravel