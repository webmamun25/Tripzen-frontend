import React from 'react'
import UseAxiossecure from '../../../hooks/UseAxiossecure'
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import Swal from 'sweetalert2';
const AllUsers = () => {
  console.log(localStorage.getItem('access-token'))
  const axiosSecure = UseAxiossecure()
  const {refetch, data: Users = [] } = useQuery({
    queryKey: ['Users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users')
      return res.data
    },
    
  })
  

  const handleMakeAdmin=(user)=>{
      axiosSecure.patch(`/users/admin/${user._id}`)
      .then(res=>{
        console.log(res.data)
        if(res.data.modifiedCount>0){
          refetch()
          Swal.fire({
            position: "top-end",
            icon: "success",
            title:"You make your admin",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
  }

  const handleDelete=(user)=>{
   
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
    
        axiosSecure.delete(`/users/${user._id}`)
        .then(res=>{
          if(res.data.deletedCount>0){
              refetch()
             Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
          }
        }
        )
       
      }
    });
      }


  return (
    <div>

      <div className='text-center text-5xl'>
        Manage All Users
      </div>

      <div className='bg-red-400 m-[50px]'>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {
                  Users.map((items,i)=><tr key={items._id}>
                    <th>{i+1}</th>
                    <td> <img className='size-20 rounded-full' src={items?.photoURL}alt="" /></td>
                    <td>{items?.displayName}</td>
                    <td>{items?.email}</td>
                    <td>
                      {items?.role=='admin'?"Admin":<button onClick={()=>handleMakeAdmin(items)} >
                      <FaUsers />
                      </button>}
                    

                    </td>
                    <td><button onClick={()=>handleDelete(items)}>
                      <FaTrashAlt />
                      </button></td>
                  </tr>)
                }
                

              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AllUsers