import Image from 'next/image'
import React from 'react'
import { PageData } from './PageData'
import { useDispatch } from 'react-redux'
import { addToCart } from './data/cartSlice'
import { nanoid } from '@reduxjs/toolkit'

const ShopCard = () => {
  const dispatch = useDispatch()

  const addCart = ({ id, title, description, price, image }) => {
    dispatch(addToCart(id, title, description, price, image))
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {PageData.map((data) => (
        <div
          className="mx-auto my-5 w-5/6 rounded-md bg-gray-100 p-4 shadow-md "
          key={nanoid()}
        >
          <div className="relative mx-auto mt-5 h-56 w-80 md:w-60">
            <Image
              src={data.image}
              alt=""
              layout="fill"
              className="rounded-md object-cover"
            />
          </div>
          <div className=" mx-auto mt-5 w-80 space-y-2 text-sm  font-medium md:w-60">
            <h1 className="text-xl ">Model - {data.title}</h1>
            <p>Description - {data.description}</p>
            <p>Price - ₹ {data.price}</p>
          </div>
          <button
            onClick={() => addCart(data)}
            className="mx-auto mt-5 w-full rounded-lg bg-black py-2 text-center text-white transition duration-300 ease-out active:scale-95 active:bg-gray-900 disabled:bg-gray-400"
          >
            Buy Now
          </button>
        </div>
      ))}
    </div>
  )
}

export default ShopCard
