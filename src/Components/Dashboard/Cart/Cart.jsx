import React from 'react'
import useCart from '../../../hooks/useCart'
import { FaTrash } from 'react-icons/fa6'
import Swal from 'sweetalert2'
import UseAxiossecure from '../../../hooks/UseAxiossecure'
import { Link } from 'react-router-dom'
const Cart = () => {
  const [cart,refetch]=useCart()
  console.log("cart is",cart)
  const axiosSecure=UseAxiossecure()
  console.log(cart)
  const totalPrice=cart.reduce((total,item)=>total+item.totalPrice,0)
  const handleDelete=(id)=>{
   
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
    
        axiosSecure.delete(`/carts/${id}`)
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

      <div className='flex justify-evenly mb-8'>
        <h2 className='text-4xl'>Items:{cart.length}</h2>
        <h2 className='text-4xl'>Price:{totalPrice}</h2>
        {
          cart.length?
          <Link to="/dashboard/payment">
            <button className='px-4 py-2 bg-purple-300 rounded-sm'>Pay</button>
          </Link>:
          <button disabled className='px-4 py-2 bg-gray-600 text-white  rounded-sm'>Pay</button>
        }
      </div>

      <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
      <th>#</th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
      cart.map((single,i)=> <tr key={i}>
        <td>
          {i+1}
        </td>

        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={single?.tripDetails?.img}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
         
          </div>
        </td>
        <td>
         {single.tripDetails.locationName
         }
        </td>
        <td>
        {single.tripDetails.price}
        </td>
        <th>
          <button onClick={()=>handleDelete(single._id)} className="btn btn-ghost btn-xs">
            <FaTrash></FaTrash>
          </button>
        </th>
      </tr>)
     }
    
     
     
     
    </tbody>
   
  
  </table>
</div>
    </div>
  )
}

export default Cart