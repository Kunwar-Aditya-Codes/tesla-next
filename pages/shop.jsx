import React from 'react'
import { Toaster } from 'react-hot-toast'
import ShopCard from '../components/ShopCard'
import ShopHeader from '../components/ShopHeader'

const shop = () => {
  return (
    <div className="h-screen">
      <Toaster position="bottom-center" />
      <ShopHeader />
      <ShopCard />
    </div>
  )
}

export default shop
