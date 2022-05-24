import Image from 'next/image'
import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { PageData } from './PageData'
import { nanoid } from '@reduxjs/toolkit'

const LayoutCard = () => {
  return (
    <>
      {PageData.map((info) => (
        <div
          key={nanoid()}
          className="relative flex min-h-screen flex-col items-center justify-between  "
        >
          <Image
            src={info.image}
            layout="fill"
            className="z-[-10] object-cover"
          />
          <div className="mt-28 space-y-1 text-center text-gray-800 ">
            <p className="text-3xl font-semibold">{info.title}</p>
            <p className="text-lg">Order Online For Touchless Delivery</p>
          </div>
          <div className="z-[50] mb-4 flex flex-col items-center justify-evenly font-medium">
            <p className="w-full cursor-pointer rounded-full bg-black px-16 py-2 text-center text-white shadow-lg transition ease-out hover:scale-105 ">
              Custom Order
            </p>
            <p className="mt-4 cursor-pointer rounded-full bg-white px-16 py-2 shadow-lg ">
              Exisiting Inventory
            </p>
            <ChevronDownIcon className="mt-4 h-8 w-8 animate-bounce text-white" />
          </div>
        </div>
      ))}
    </>
  )
}

export default LayoutCard
