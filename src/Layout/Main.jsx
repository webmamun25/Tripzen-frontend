import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Pages/Shared/Menu/Navbar'


const MainLayout = () => {
  return (
          <div>
          <Navbar></Navbar>
          <Outlet data-aos="fade-up-right"></Outlet>
        
          </div>
        

  )
}

export default MainLayout