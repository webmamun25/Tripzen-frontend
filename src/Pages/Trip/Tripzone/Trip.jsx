import React from 'react'
import TripHeader from '../TripSection/TripHeader/TripHeader'
import TripCategory from '../TripSection/TripCategory/TripCategory'
import TripCard from '../TripSection/TripCard/TripCard'

const Trip = () => {
  return (
    <div className='flex flex-col space-y-10'>
        <TripHeader></TripHeader>
        <TripCategory></TripCategory>
        <TripCard></TripCard>
        
    </div>
  )
}

export default Trip