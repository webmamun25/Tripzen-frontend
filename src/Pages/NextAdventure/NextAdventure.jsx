import React from 'react'
import Title from '../Shared/Title/Title'
import TripData from '../Shared/TripData/TripData'
import NextTripCard from './NextTripCard'

const NextAdventure = () => {
  const [locations]=TripData()
  console.log(locations)
  const monthMap = {
    'January': 0,
    'February': 1,
    'March': 2,
    'April': 3,
    'May': 4,
    'June': 5,
    'July': 6,
    'August': 7,
    'September': 8,
    'October': 9,
    'November': 10,
    'December': 11
};
const currentMonth = new Date().getMonth();


 const nextTrip=locations.filter(location=>monthMap[location.tripMonth]>=currentMonth)
 console.log(nextTrip)


  

  return (
    <div className='px-[130px] mt-[160px] '>
        <div className='flex flex-col space-y-5'>
        <Title title="Next Adventure"></Title>
        <h1 className='text-black font-bold text-5xl w-1/3'>Travel Destinations
        Available Worldwide</h1>
        <p className='w-2/6 text-justify text-[#6E6E6E] text-md'>We have compiled a list of top destinations across the globe, scoured the world
for the most alluring and fascinating places to visit. From the beautiful beaches
of the Caribbean to the majestic mountains of Europe and the vibrant cities of
Asia, our destination list has something for everyone.</p>
        </div>

    <div className='grid grid-cols-4 gap-5 mt-5'>
      {
        nextTrip.slice(3,7).map((Ntrip,i)=><NextTripCard key={i} Ntrip={Ntrip}></NextTripCard>)
      }

    </div>

    </div>
  )
}

export default NextAdventure