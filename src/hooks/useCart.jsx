import React, { useContext } from 'react'
import UseAxiossecure from './UseAxiossecure'
import {
    useQuery,
   
  } from '@tanstack/react-query'
import { AuthContext } from '../Components/AuthProvider'
import UseAxiosPublic from './UseAxiosPublic'
const useCart = () => {
    const axiosPublic=UseAxiosPublic()
    const {users}=useContext(AuthContext)
    const { refetch, data:cart=[] } = useQuery({
        queryKey: ['cart',users?.email],
        queryFn:async () =>{
            const res=await axiosPublic.get(`/carts?email=${users?.email}`)
            
            return res.data
        }

      })

      return [cart,refetch]
}

export default useCart