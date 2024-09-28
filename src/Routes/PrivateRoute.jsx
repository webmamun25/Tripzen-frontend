import React, { useContext } from 'react'
import { AuthContext } from '../Components/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {users,loading}=useContext(AuthContext)
    const location=useLocation()
    if(loading){
        return <div>Loading</div>
    }
    if(users){
        return children
    }
  return (
    <Navigate to="/signin" state={{ from: location }} replace />
  )
}

export default PrivateRoute