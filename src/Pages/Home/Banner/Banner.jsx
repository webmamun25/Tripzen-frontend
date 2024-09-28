import React from 'react'
import world from '../../../assets/images/Banner/worldmap.png'
import banner1 from '../../../assets/images/Banner/banner1.png'
import banner2 from '../../../assets/images/Banner/banner2.png'
import { FaEarthAsia, FaLocationDot, FaMagnifyingGlass, FaSistrix } from "react-icons/fa6";
const Banner = () => {
  return (
    <div 
     style={{ 
    height:'700px',
    backgroundImage: `url(${world})`,
    objectFit:"cover",
    backgroundPosition:'center',
    backgroundColor:'#f2f2f2',
    backgroundRepeat:'no-repeat',

    }} >




      <div className="px-[440px]  flex gap-8 py-[150px]">
            <div className='flex flex-col '>
            <p className=''>Uncover Hidden Gems</p>
            <p className='poppins-bold  font-extrabold text-4xl' >Adventure & <br /> Experience <br />
            The Travel !</p>
            <div className='flex w-[100%] gap-5 h-[103px] px-[16px] py-[20px] mt-[60px] bg-white justify-between rounded-md'>

                <div className='flex justify-between items-center space-x-8 '>
                    
                    <div>
                    <FaMagnifyingGlass className='text-[#14B9D5] text-3xl' />
                    </div>
                    <div>
                      <h4 className='poppins-bold  font-extrabold text-2xl' >Search</h4>
                      <h6>Insert Keyword</h6>
                    </div>
                </div>
                <div className='flex justify-between items-center space-x-8 '>
                    
                    <div>
                    <FaLocationDot className='text-[#14B9D5] text-3xl' />
                    </div>
                    <div>
                      <h4 className='poppins-bold  font-extrabold text-2xl '>Destinations</h4>
                      <h6>All Destinations</h6>
                    </div>
                </div>
                <div className='flex justify-between items-center space-x-8 '>
                    
                    <div>
                    <FaEarthAsia className='text-[#14B9D5] text-3xl' />
                    </div>
                    <div>
                      <h4 className='poppins-bold  font-extrabold text-2xl'>Typologies</h4>
                      <h6>All Typologies</h6>
                    </div>
                </div>
                <div className='flex justify-between items-center space-x-8 '>
                    
                <button type="button" className="text-white bg-[#1BBC9B] hover:bg-[#1BBC9B] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-[104px] py-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SEARCH</button>
                </div>
                

            </div>
            </div>
            <div className='flex gap-4'>

              <div>
                <img  className='absolute left-[10%] top-[50%] h-[300px]' src={banner1} alt="" />
              </div>
              <div>
                <img src={banner2}  className='absolute top-[10%] right-[8%] h-[400px]' alt="" />
              </div>

            </div>
         
        
        </div>     
  
    </div>
  )
}

export default Banner