import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { AuthContext } from '../Components/AuthProvider'
import UseAxiossecure from './UseAxiossecure'

const UseAdmin = () => {
    const{users,loading}=useContext(AuthContext)
    console.log(users)
    const axiosSecure=UseAxiossecure()
    const {data:isAdmin,isPending:isAdminLoading}=useQuery({
        queryKey:[users?.email,'isAdmin'],
        enabled:!loading,
        // !true 
        // When set to `false`, the query will not automatically fetch data.
        queryFn:async()=>{
            const res = await axiosSecure.get(`/users/admin/${users.email}`)
            console.log(res.data)
            return res.data.admin
        }
    })
    return [isAdmin,isAdminLoading]
}

export default UseAdmin