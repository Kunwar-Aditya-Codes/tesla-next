import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allCartData, emptyCart, subTotal } from '../components/data/cartSlice'
import ShopHeader from '../components/ShopHeader'
import CheckoutCart from '../components/CheckoutCart'
import { loadStripe } from '@stripe/stripe-js'
import { useSession } from 'next-auth/react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

const checkout = () => {
  const cartData = useSelector(allCartData)
  const items = cartData.cart
  const { data: session, status } = useSession()
  const dispatch = useDispatch()

  const createCheckoutSession = async () => {
    const stripe = await stripePromise

    const checkoutSession = await axios.post('/api/checkout_session', {
      items: items,
      email: session?.user?.email,
    })
    toast.loading('Loading to payments page!!!')

    dispatch(emptyCart())

    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    })

    if (result.error) alert(result.error.message)
  }

  return (
    <div>
      <Toaster position="bottom-center" />
      <ShopHeader />
      <div className="mx-auto max-w-7xl">
        <h1 className="my-4 mb-8 text-center text-2xl underline underline-offset-2 ">
          You are ready to checkout !
        </h1>
        <div className=" mx-4 mb-8 flex items-center justify-between rounded-md border  border-black p-2 shadow-lg">
          <div className=" flex items-center justify-start space-x-2  py-2 pl-2 text-xl text-gray-600 md:text-2xl md:font-extrabold">
            <p>Your Subtotal </p> - <p>₹{subTotal(cartData.cart)} </p>
          </div>
          <button
            onClick={() =>
              !session ? toast.error('Login to pay!') : createCheckoutSession()
            }
            role="link"
            className={`rounded-md  p-2 text-white ${
              !session ? 'bg-gray-400' : 'bg-black'
            }`}
          >
            Checkout
          </button>
        </div>
        <CheckoutCart cartData={cartData} />
      </div>
    </div>
  )
}

export default checkout
