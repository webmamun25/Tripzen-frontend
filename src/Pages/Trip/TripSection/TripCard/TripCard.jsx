import React, { useEffect, useState } from 'react'
import TripLocations from '../TripLocations/TripLocations'
import TripData from '../../../Shared/TripData/TripData'

const TripCard = () => {
  const [locations]=TripData()
  console.log(locations)
  return (
    <section>
      <div className='grid grid-cols-3 gap-5  justify-items-center px-[130px] py-5 ' data-aos="fade-up">
          {
            locations.slice(0,3).map((location,i)=><TripLocations
            key={i}
            locations={location}
            ></TripLocations>)
          }
      </div>
    </section>
  )
}

export default TripCard