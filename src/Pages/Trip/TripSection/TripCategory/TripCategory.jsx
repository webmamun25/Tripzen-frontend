import React from 'react'
import icon1 from '../../../../assets/images/Trip/TripCategory/icon1.png'
import icon2 from '../../../../assets/images/Trip/TripCategory/icon2.png'
import icon3 from '../../../../assets/images/Trip/TripCategory/icon3.png'
import category1 from '../../../../assets/images/Trip/TripCategory/category_1.png'
import category2 from '../../../../assets/images/Trip/TripCategory/category_2.png'
import category3 from '../../../../assets/images/Trip/TripCategory/category_3.png'
const TripCategory = () => {
  return (
    <div className=' grid grid-cols-3 gap-4 px-[130px] py-[100px] ' data-aos="fade-right"  >
    
        <div className='flex justify-around items-center '  style={{ 
   
    backgroundImage: `url(${category1})`,
    
    backgroundPosition:'center',
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    borderRadius:'10px'

    }} >
            <div>
                <img className='size-15' src={icon1} alt="" />
            </div>
            <div>
                <h4 className='text-white font-semibold text-xl'>Electric Bikes</h4>
            </div>
        </div>
        <div className='flex justify-around items-center'   style={{ 
   
    backgroundImage: `url(${category2})`,
    objectFit:"cover",
    backgroundPosition:'center',
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    borderRadius:'10px'

    }} >
            <div>
                <img className='size-15' src={icon2} alt="" />
            </div>
            <div>
                <h4 className='text-white font-semibold text-xl'>Electric Bikes</h4>
            </div>
        </div>
        <div className='flex justify-around items-center'   style={{ 
   
    backgroundImage: `url(${category3})`,
    objectFit:"cover",
    backgroundPosition:'center',
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    borderRadius:'10px'

    }} >
            <div>
                <img className='size-15' src={icon3} alt="" />
            </div>
            <div>
                <h4 className='text-white font-semibold text-xl'>Skyscrapers View</h4>
            </div>
        </div>
       
    </div>
  )
}

export default TripCategory