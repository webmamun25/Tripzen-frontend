import React from 'react'
import { FaCartShopping, FaHouse } from 'react-icons/fa6'
import { NavLink, Outlet } from 'react-router-dom'
import UseAdmin from '../hooks/UseAdmin'
const Dashboard = () => {
  const [isAdmin]=UseAdmin()

  return (
    <div className='flex'>
      <div className="w-64 min-h-screen bg-[#c2ffe2]">
        <ul className="menu p-4 ">
{
  isAdmin ? <>
  
  <li className='bg-slate-400 rounded-md '>  <NavLink to='/dashboard/adminhome'><FaHouse></FaHouse> Admin Home</NavLink></li>
          <li className='bg-slate-400 rounded-md mt-3'>  <NavLink to='/dashboard/cart'><FaCartShopping></FaCartShopping> Add Items</NavLink></li>
          <li className='bg-slate-400 rounded-md mt-3'>  <NavLink to='/dashboard/reviews'><FaCartShopping></FaCartShopping> Manage Items</NavLink></li>
          <li className='bg-slate-400 rounded-md mt-3'>  <NavLink to='/dashboard/bookings'><FaCartShopping></FaCartShopping> Manage Bookings</NavLink></li>
          <li className='bg-slate-400 rounded-md mt-3'>  <NavLink to='/dashboard/users'><FaCartShopping></FaCartShopping> All Users</NavLink></li>
  </>:<> 
  <li className='bg-slate-400 rounded-md '>  <NavLink to='/dashboard/userhome'><FaHouse></FaHouse>User Home</NavLink></li>
          <li className='bg-slate-400 rounded-md mt-3'>  <NavLink to='/dashboard/cart'><FaCartShopping></FaCartShopping>My Cart</NavLink></li>
          <li className='bg-slate-400 rounded-md mt-3'>  <NavLink to='/dashboard/additems'><FaCartShopping></FaCartShopping>Add Items</NavLink></li>
          <li className='bg-slate-400 rounded-md mt-3'>  <NavLink to='/dashboard/reviews'><FaCartShopping></FaCartShopping>Add Review</NavLink></li>
          <li className='bg-slate-400 rounded-md mt-3'>  <NavLink to='/dashboard/paymenthistory'><FaCartShopping></FaCartShopping>Payment History</NavLink></li>
          <li className='bg-slate-400 rounded-md mt-3'>  <NavLink to='/dashboard/bookings'><FaCartShopping></FaCartShopping>My Booking</NavLink></li>
  </>
}
          <div className="divider"></div>
          <li className='bg-slate-400 rounded-md mt-3'>  <NavLink to='/'><FaHouse></FaHouse>  Home</NavLink></li>
        </ul>
      </div>
      <div className='flex-1 p-8'>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Dashboard