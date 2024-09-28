import React, { useContext, useEffect, useState } from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import useCart from '../../hooks/useCart';
import UseAxiossecure from '../../hooks/UseAxiossecure';
import { AuthContext } from '../AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
const CheckOutForm = () => {
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const stripe = useStripe();
  const elements = useElements();
  const { users } = useContext(AuthContext)
  const [cart, refetch] = useCart()
  console.log(cart)
  const totalPrice = cart.reduce((total, item) => total + item.totalPrice, 0)
  const axiosSecure = UseAxiossecure()
  const [clientSecret, setClientSecret] = useState("")
  const [transaction, setTransaction] = useState("")
  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure.post('/create-payment-intent', { price: totalPrice })

        .then((res) => {
          console.log(res.data.clientSecret)
          setClientSecret(res.data.clientSecret)
        })
    }
  }, [])


  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setError(error.message)
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setError('')
    }


    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: users?.displayName || "Anonymous",
            email: users?.email || "Anonymous"
          },
        },
      },
    );
    if (confirmError) {
      console.log("Error is", confirmError)
    }
    else {
      console.log("paymentIntent is", paymentIntent)
      if (paymentIntent.status === "succeeded") {
        console.log("Transaction confimation", paymentIntent.id)
        setTransaction(paymentIntent.id)

        const payment = {
          email: users?.email,
          price: totalPrice,
          data: new Date(),
          transaction_id: paymentIntent.id,
          cartIds: cart.map(item => item._id),
          tripIds: cart.map(item => item.tripDetails._id),
          status: "Pending"
        }
        const res = await axiosSecure.post('/payments', payment)

        console.log("payment", res)
        refetch()
        if (res.data?.paymentResult?.insertedId) {

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/dashboard/paymenthistory')

        }

      }
    }

  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button type="submit" className='bg-purple-400 px-4 py-2 mt-4 rounded-sm' disabled={!stripe || !clientSecret}>
          Pay
        </button>
        <p className='text-red-500'>{error}</p>
        {transaction && <p className='text-red-500'>Your transaction id {transaction}</p>}
      </form>
    </div>
  )
}

export default CheckOutForm