import axios from 'axios'
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../Components/AuthProvider';
const axiosSecure=axios.create({
    baseURL:'http://localhost:5000'
})

const UseAxiossecure = () => {
  const navigate=useNavigate()
  const {Logout}=useContext(AuthContext) 
    axiosSecure.interceptors.request.use(function (config) {
        // Do something before request is sent
        const token=localStorage.getItem('access-token')
  
        config.headers.authorization=`Bearer ${token}`
        return config;
      }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      });


    axiosSecure.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
      }, async function (error) {
        console.log("satus error",error.response.status)
        const status=error.response.status
        if(status===401 || status===403){
          await Logout()
          navigate('/signin')
        }
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
      });


    return axiosSecure
}

export default UseAxiossecure