import type { NextPage } from 'next'
import Head from 'next/head'
import { Toaster } from 'react-hot-toast'
import Header from '../components/Header'
import LayoutCard from '../components/LayoutCard'

const Home: NextPage = () => {
  return (
    <div className=" ">
      <Head>
        <title>Tesla App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Toaster position="bottom-center" />
        <Header />
        <LayoutCard />
      </main>
    </div>
  )
}

export default Home
