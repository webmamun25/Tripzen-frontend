import React from 'react'
import { BsCurrencyDollar } from "react-icons/bs";
import { Link } from 'react-router-dom';
const TripLocations = ({locations}) => {
  console.log(locations)
  return (
    <div className='w-full '  data-aos="flip-up">
      <div className="card w-full h-[600px] bg-[#f1f5f9] shadow-lg">
        <div className="img">
            <img src={locations.img} className='w-full h-[270px] rounded-md'  alt="" />
        </div>
        <div className='card-body p-[30px] '>
          <div>
            <button className=' w-full h-[40px] text-center font-semibold bg-white rounded-md shadow-sm '>{locations.days} days</button>
          </div>
          <div className='py-[10px]'>
            <h4 className='font-bold text-xl'>{locations.locationName}</h4>
            <h6 className='ps-3'>{locations.country}</h6>
          </div>
          <div className='h-[70px] overflow-hidden'>
              {locations.description.slice(0,150)}
          </div>
          <div className='pt-[30px] flex justify-around'>
             <p><Link to={`/Trip/${locations._id}`} className='py-2 px-4 rounded-md bg-red-400'>Details</Link></p> 
             <p className='py-2 font-extrabold flex items-center'> <BsCurrencyDollar className='inline-block' /> {locations.price}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TripLocations