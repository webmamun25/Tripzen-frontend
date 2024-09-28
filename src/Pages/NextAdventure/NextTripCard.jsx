import React from 'react'
import Tilt from 'react-parallax-tilt';
const NextTripCard = ({Ntrip}) => {
    console.log(Ntrip)
  return (
  <div>
      <Tilt>
    <div  style={{ height: '400px',position:'relative',width:'100%',borderRadius:'15px', background:`url(${Ntrip.img})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundOrigin:'border-box',backgroundPosition:"center" }}>
      
      <div className='absolute bottom-10'>
        <div className='text-center text-white p-2'>
        <h1 className='font-bold text-3xl'>{Ntrip.locationName}</h1>
        <p>{Ntrip.description.slice(0,70)}.</p>
        </div>
       
      </div>

    </div>
  </Tilt>
  </div>
  )
}

export default NextTripCard