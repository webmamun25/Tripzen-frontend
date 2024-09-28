import React from 'react'
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);
const Payment = () => {

  return (
    <div>
        <h1>Payment</h1>
        <h3>Please pay to trip</h3>

        <main>
            <section>
                <h2 className='text-4xl'>Stripe make your payment easy </h2>
            </section>
            <section className="form my-8">
            <Elements stripe={stripePromise}>
      <CheckOutForm  />
    </Elements>
            </section>
        </main>

    </div>
  )
}

export default Payment