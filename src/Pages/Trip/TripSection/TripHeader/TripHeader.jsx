import React from 'react'
import DynamicHeading from '../../../Shared/DynamicHeading/DynamicHeading'
import CommonButton from '../../../Shared/Button/CommonButton/CommonButton'
import world from '../../../../assets/images/Banner/worldmap.png'
import './TripHeader.css'
import Title from '../../../Shared/Title/Title'
const TripHeader = () => {
  return (
    <div className='h-[400px]   ps-[130px]  flex gap-4 py-[50px]'>
        <div className='flex flex-col space-y-5'>
        <Title title={"Dream Vacation Destination"}></Title>  
       <h1 className='font-pop'>Plan the Trip of a Lifetime <br />
       with Ease</h1>
       <p className='para w-[640px] '>Whether you're looking for a romantic getaway, a family-friendly adventure, or a
solo journey to explore the world, a travel agency can provide you with a
custom-tailored itinerary that exceeds your expectations.</p>
        <div>
        <CommonButton info="More info" ></CommonButton>
        </div>
        </div>
        
        <div className=''>
            <img className='world'   src={world} alt="" />
        </div>
       

    
    </div>
  )
}

export default TripHeader