import React, { useContext } from 'react'
import { AuthContext } from '../Components/AuthProvider'
import UseAdmin from '../hooks/UseAdmin'
import { Navigate, useLocation } from 'react-router-dom'

const AdminRoute = ({children}) => {
    const {users,loading}=useContext(AuthContext)
    const [isAdmin,isAdminLoading]=UseAdmin()
    const location=useLocation()
    if(loading || isAdminLoading){
        return <div>Loading</div>
    }
    if(users && isAdmin){
        return children
    }
  return (
    <Navigate to="/" state={{ from: location }} replace />
  )
}

export default AdminRoute