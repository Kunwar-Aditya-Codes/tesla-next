import { MenuIcon, XCircleIcon } from '@heroicons/react/solid'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Header = () => {
  const { data: session } = useSession()

  const [bgShow, setBgShow] = useState(false)
  const [sideOpen, setSideOpen] = useState(false)

  const router = useRouter()

  const scroll = () => {
    if (window.scrollY > 100) {
      setBgShow(true)
    } else {
      setBgShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scroll)
    return () => window.removeEventListener('scroll', scroll)
  }, [])

  return (
    <>
      <div
        className={`${
          bgShow ? 'bg-white shadow-lg' : 'bg-transparent'
        } fixed z-[10000] flex w-full items-center justify-between py-4 px-6 text-lg font-medium transition-all duration-300 ease-in`}
      >
        <div>
          <p
            onClick={() => router.push('/')}
            className="cursor-pointer text-3xl uppercase tracking-widest"
          >
            Tesla
          </p>
        </div>
        <div className="hidden flex-1 items-center justify-center space-x-8  lg:flex">
          <p className="cursor-pointer underline-offset-2 hover:underline ">
            Model X
          </p>
          <p className="cursor-pointer underline-offset-2 hover:underline ">
            Model Y
          </p>
          <p className="cursor-pointer underline-offset-2 hover:underline ">
            Model Z
          </p>
          <p className="cursor-pointer underline-offset-2 hover:underline ">
            Model S
          </p>
        </div>
        <div className="flex items-center space-x-4 ">
          <button
            className="cursor-pointer "
            onClick={() => router.push('/shop')}
          >
            Shop
          </button>
          <p
            onClick={() => (session ? signOut() : signIn())}
            className="flex cursor-pointer items-center rounded-md bg-black px-3 py-2 text-sm font-light text-white "
          >
            {session ? session?.user?.name : 'Login to Tesla'}
            <img
              src={
                session
                  ? session?.user?.image
                  : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
              }
              alt=""
              className="ml-2 hidden h-7 w-7 rounded-full md:inline"
            />
          </p>

          <MenuIcon
            onClick={() => setSideOpen(!sideOpen)}
            className="h-5 w-5 cursor-pointer"
          />
        </div>
      </div>

      {sideOpen && (
        <div className="fixed z-[1000000] h-full w-full translate-x-[40%] border-l-2 border-black/80 bg-white text-black shadow-2xl lg:translate-x-[80%] ">
          <XCircleIcon
            onClick={() => setSideOpen(false)}
            className="my-4 mx-4 h-6 w-6 cursor-pointer  "
          />
          <div className=" flex flex-col space-y-5 px-4">
            <p className="w-1/2 border-b border-gray-800 pb-2">Cars</p>
            <p className="w-1/2 border-b border-gray-800 pb-2">Accessories</p>
            <p className="w-1/2 border-b border-gray-800 pb-2">Account Info</p>
            <p className="w-1/2 border-b border-gray-800 pb-2">Model S</p>
            <p className="w-1/2 border-b border-gray-800 pb-2">Model Y</p>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
