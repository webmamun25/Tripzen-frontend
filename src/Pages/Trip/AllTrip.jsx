import React, { useEffect, useState } from 'react'
import TripData from '../Shared/TripData/TripData'
import TripLocations from './TripSection/TripLocations/TripLocations'


const AllTrip = () => {
  const [locations]=TripData()
  console.log(locations)
  return (
    <section>
      <div className='grid grid-cols-3 gap-5  justify-items-center px-[130px] py-5 ' data-aos="fade-up">
          {
            locations.map((location,i)=><TripLocations
            key={i}
            locations={location}
            ></TripLocations>)
          }
      </div>
    </section>
  )
}

export default AllTrip