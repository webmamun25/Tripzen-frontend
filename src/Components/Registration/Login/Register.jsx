

import { useContext } from "react"
import { useForm } from "react-hook-form"
import { AuthContext } from "../../AuthProvider"
import { updateProfile } from "firebase/auth"
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import UseAxiosPublic from "../../../hooks/UseAxiosPublic"
const Register = () => {
    const {CreateUser}=useContext(AuthContext)
    const image_api_key=import.meta.env.VITE_IMAGE_URL
    const navigate=useNavigate()
    const axiosPublic=UseAxiosPublic()
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm()

    const onSubmit = (data) => {
  
        const formData=new FormData()
        formData.append("image",data.image[0])
        fetch(`https://api.imgbb.com/1/upload?key=${image_api_key}`, {
            method: 'POST',
            body: formData
          })
          .then(res=>res.json())
          .then(result=>{
            const images=(result.data.display_url)
           
                
    
        
                if(result.success){
          
                 
                    CreateUser(data.email,data.password)
                  .then(async(result)=>{
                    const users=result.user
                    await updateProfile(users,{
                      displayName:data.firstname+" "+data.lastname,
                 
                      photoURL:images,
                     
              
                    })
                    const {firstname,lastname,image,password,...others}=data
                    console.log(others)
                   
                    const totalProfile={...users,...others}
                    axiosPublic.post('/users', totalProfile)
                    .then(function (response) {
                      if(response.data){
                        reset()
                        Swal.fire({
                          position: "top-end",
                          icon: "success",
                          title: "Your work has been saved",
                          showConfirmButton: false,
                          timer:1500
                        })
                      
                      navigate('/signin')
                      }
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
                })
            }
        }
    )}
  return (
    <div>
     
     <div className="hero bg-base-200 min-h-screen">
  
   
 
 
<form onSubmit={handleSubmit(onSubmit)}>
  <div className="space-y-12">
    <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-4 ">
          <label htmlFor="username" className="block text-sm font-medium leading-6  text-gray-900">Username</label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset  sm:max-w-md">
              <span className="flex select-none items-center  text-gray-500 sm:text-sm"></span>
              <input type="text"  {...register("username")} id="username"  autoComplete="username" className="block ps-3 flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="janesmith"/>
            </div>
          </div>
        </div>

        <div className="col-span-full">
          <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">About</label>
          <div className="mt-2">
            <textarea id="about" {...register("about")} rows="3" className="block ps-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"></textarea>
          </div>
          <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
        </div>

       

        <div className="col-span-full">
          <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">Photo</label>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
              <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
              </svg>
              <div className="mt-4 flex text-sm leading-6 justify-center text-gray-600">
                <label htmlFor="file-upload" className="cursor-pointer rounded-md   bg-white px-4 py-2 font-semibold text-indigo-600 focus-within:outline-none   focus-within:ring-offset-2 hover:text-indigo-500">
                  <span>Upload a file</span>
                  <input id="file-upload" {...register("image")} type="file" className="sr-only"/>
                </label>
                
              </div>
              <p className="text-xs mt-2 leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
          <div className="mt-2">
            <input type="text" {...register("firstname")} id="first-name" autoComplete="given-name" className="block ps-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
          <div className="mt-2">
            <input type="text" {...register("lastname")} id="last-name" autoComplete="family-name" className="block ps-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="sm:col-span-4">
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div className="mt-2">
            <input id="email" {...register("email")} type="email" autoComplete="email" className="block ps-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">Country</label>
          <div className="mt-2">
            <select id="country" {...register("country")} autoComplete="country-name" className="block ps-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset  sm:max-w-xs sm:text-sm sm:leading-6">
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
              <option>Bangladesh</option>
              <option>India</option>
            </select>
          </div>
        </div>

        <div className="col-span-full">
          <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">Street address</label>
          <div className="mt-2">
            <input type="text" {...register("street")} id="street-address" autoComplete="street-address" className="block ps-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="sm:col-span-2 sm:col-start-1">
          <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">City</label>
          <div className="mt-2">
            <input type="text" {...register("city")} id="city" autoComplete="address-level2" className="block w-full ps-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
          <div className="mt-2">
            <input type="text" {...register("region")} id="region" autoComplete="address-level1" className="block ps-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
          <div className="mt-2">
            <input type="text" {...register("post")} id="postal-code" autoComplete="postal-code" className="block ps-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div className="col-span-full">
          <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div className="mt-2">
            <input type="text" {...register("password")} id="street-address" autoComplete="street-address" className="block ps-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"/>
          </div>
        </div>
      </div>
    </div>

    
  </div>

  <div className="mt-6 flex items-center justify-end gap-x-6 mb-4">
    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
    <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
  </div>
</form>

    </div>
  </div>

   
  )
}

export default Register