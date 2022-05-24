import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from './data/cartSlice'

const CheckoutCart = (data) => {
  const dispatch = useDispatch()

  const removeProduct = (itemId) => {
    dispatch(removeFromCart(itemId))
  }

  const renderCartItems = data.cartData.cart.map((info) => (
    <div
      key={info.id}
      className="my-2 mx-3 rounded-md  bg-black/90  p-2 px-3 text-white shadow-md  lg:flex lg:items-center lg:justify-between "
    >
      <div className="relative mt-2 h-36 lg:h-64 lg:w-64">
        <Image
          layout="fill"
          src={info.image}
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <div className="my-4 flex items-center justify-between lg:flex-[0.9]   lg:pr-5 ">
        <div className="text-justify">
          <p className="text-2xl font-medium lg:text-4xl">{info.title}</p>
          <p className="text-md text-gray-300 lg:text-xl">{info.description}</p>
          <button
            onClick={() => removeProduct(info.id)}
            className="mt-3 mb-1 rounded-md bg-red-600 px-2 py-1 text-sm font-light lg:text-lg"
          >
            Remove
          </button>
        </div>
        <p className="text-lg font-light lg:text-xl">₹ {info.price}</p>
      </div>
    </div>
  ))

  return <div className="">{renderCartItems}</div>
}

export default CheckoutCart
