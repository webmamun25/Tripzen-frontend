import { useLoaderData } from "react-router-dom"

import { MdCancel } from "react-icons/md";
import moment from 'moment';
import { useContext, useState } from "react";
import { AuthContext } from '../../../Components/AuthProvider';
import axios from "axios";
import Swal from "sweetalert2";
import UseAxiossecure from "../../../hooks/UseAxiossecure";
import useCart from "../../../hooks/useCart";
import UseAxiosPublic from "../../../hooks/UseAxiosPublic";
const TripDetails = () => {
  const tripDetails=useLoaderData()
    console.log(tripDetails)
    const [adult,setAdults]=useState(1)
    const [child,setChilds]=useState(0)
    const {users}=useContext(AuthContext)
    const [,refetch]=useCart()
  
  
  const today=moment().format("MMM Do YY")
  


  const handleAddtoCart=()=>{
    const axiosPublic=UseAxiosPublic()
    const childsFee=200
    const adultsFee=tripDetails.price 
    const totalPrice=child*childsFee+adult*adultsFee
    console.log(totalPrice)
    if(users && users.email){
      console.log(users.email)
      const cartItem={
        tripDetails,
        adult,
        child,
        totalPrice,
        users
   
       }
       axiosPublic.post('/carts',cartItem)
       .then(res=>{
         console.log(res.data)
         Swal.fire({
           position: "top-end",
           icon: "success",
           title: "Your cart has been saved",
           showConfirmButton: false,
           timer: 1500
         });
         refetch()
       })
       .catch(error=>{
        console.log(error)
   Swal.fire({
     icon: "error",
     title: "Oops...",
     text: "Something went wrong!",
     footer: '<a href="#">Why do I have this issue?</a>'
   });
  })
    }
    
   
    

  }
 
 
 
  return (
   <section>

<div
  className="hero min-h-screen"
  style={{
    backgroundImage: `url(${tripDetails.img})`,
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">{tripDetails.locationName}</h1>
      <h3>{tripDetails.country}</h3>
      
    </div>
  </div>
</div>


<div className="max-h-screen  px-[400px] py-[160px]">

  {/* pricing */}
  <section className="py-24 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
                <h2 className="font-manrope text-5xl text-center font-bold text-gray-900 mb-4">Pricing </h2>
                <p className="text-gray-500 text-center leading-6 mb-9">Month special.No credit card required.</p>
              
             
             
            </div>
               
         
  <div className="flex  justify-center gap-8 md:gap-8   space-x-5">
    <div
      className="rounded-2xl border w-[400px] border-indigo-600 p-6 shadow-sm ring-1 ring-indigo-600 sm:order-last sm:px-8 lg:p-12"
    >
      <section className="flex justify-between items-center">
        <div>
            <h2 className="text-xl text-gray-500">Price</h2>
            
        </div>
        <div>
            <h1 className="text-3xl"><strong>${tripDetails.price}</strong></h1>
        </div>

      </section>
        <hr />
      <section>
            <h2>Date</h2>
            <p>{today}</p>
      </section>
      <hr />
      <section className="flex justify-between items-center">
        <div>
            <h2 className="text-xl text-gray-500">Adult</h2>
            <p>over 18 ($490)</p>
            
        </div>
        <div>
        <h1 className="text-3xl"><strong><button onClick={()=>setAdults(adult+1)}>+</button> {adult} <button onClick={()=>{if(adult>1){setAdults(adult-1)}}}>-</button> </strong></h1>

        </div>
 
      </section>
      <hr />
      <section className="flex justify-between items-center">
        <div>
            <h2 className="text-xl text-gray-500">Child</h2>
            <p>under 18 ($200)</p>
            
        </div>
        <div>
        <h1 className="text-3xl"><strong><button onClick={()=>setChilds(child+1)}>+</button> {child} <button onClick={()=>{if(child>0){setChilds(child-1)}}}>-</button> </strong></h1>
        </div>

      </section>
      <button
        onClick={handleAddtoCart}
        className="mt-8 block rounded-full border w-full border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 hover:ring-1 hover:ring-indigo-700 focus:outline-none focus:ring active:text-indigo-500"
      >
        Add Cart
      </button>
    </div>

   
  </div>
</div>
               
            
 
    </section>
                                            

  {/* description */}
<div className="flex flex-col space-y-10">
<h1 className="text-center">Description</h1>
<p className="text-justify">{tripDetails.description}</p>
<h1 className="text-center">Included</h1>
<ul  className=" text-gray-500 list-disc list-inside dark:text-gray-400">
{
  tripDetails.included.map((include,i)=><div key={i}>
    <li className="flex items-center space-x-3 rtl:space-x-reverse">
         <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
         </svg>
        <span>{include}</span>
    </li>
   
  
  </div>
   

)
}
</ul>

<h1 className="text-center">Excluded</h1>
<ul  className=" text-gray-500 list-disc list-inside dark:text-gray-400">
{
  tripDetails.excluded.map((exclude,i)=><div key={i}>
    <li className="flex items-center space-x-3 rtl:space-x-reverse">
    <MdCancel className="text-red-500" />
        <span>{exclude}</span>
    </li>
   
  
  </div>
   

)
}
</ul>

<h1 className="text-center">External Services</h1>
<ul className="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">

{
  tripDetails.extraServices.map((extra,i)=> <li key={i}>
 
  <span className="font-semibold text-xl">Extra offer-{i+1}</span>
 
  <ol className="ps-5 mt-2 space-y-1 list-decimal list-inside">
      <li>{extra}</li>
      
  </ol>
</li>)
}
</ul>


</div>

</div>

   </section>
  )
}

export default TripDetails