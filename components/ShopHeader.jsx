import { ShoppingCartIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'
import { allCartData } from './data/cartSlice'

const ShopHeader = () => {
  const router = useRouter()

  const cartData = useSelector(allCartData)

  return (
    <div className="sticky top-0 z-[1000000000] flex w-full items-center justify-between bg-gray-100 py-4 px-8 shadow-lg">
      <p
        onClick={() => router.push('/shop')}
        className=" cursor-pointer text-3xl font-medium  uppercase tracking-wider "
      >
        Tesla Shop
      </p>
      <div className="flex items-center space-x-8">
        <div
          className="flex cursor-pointer items-center"
          onClick={() => router.push('/checkout')}
        >
          <ShoppingCartIcon className="mx-2 h-5 w-5" />
          <p>({cartData.cart.length > 0 ? cartData.cart.length : '0'})</p>
        </div>
        <p
          className="cursor-pointer text-lg underline underline-offset-2"
          onClick={() => router.push('/')}
        >
          Back to home
        </p>
      </div>
    </div>
  )
}

export default ShopHeader
