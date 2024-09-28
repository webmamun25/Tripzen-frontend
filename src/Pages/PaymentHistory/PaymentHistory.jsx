import React, { useContext } from 'react'
import { AuthContext } from '../../Components/AuthProvider'
import UseAxiossecure from '../../hooks/UseAxiossecure'
import { useQuery } from '@tanstack/react-query'

const PaymentHistory = () => {

    const {users}=useContext(AuthContext)

    const axiosSecure=UseAxiossecure()

    const {data:payments=[]}=useQuery({
        queryKey:['payments',users.email],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/payments/${users.email}`)
            return res.data

        }
    })
  return (
    <div>
        <h1>Total Payments:{payments?.length}</h1>
        <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Price</th>
        <th>Transaction Id</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        payments.map((payment,index)=>  <tr key={index}>
        <th>{index+1}</th>
        <td>{payment.Price}</td>
        <td>{payment.transaction_id}</td>
        <td>{payment.status}</td>
      </tr>)
      }
    
     
    </tbody>
  </table>
</div>
    </div>
  )
}

export default PaymentHistory