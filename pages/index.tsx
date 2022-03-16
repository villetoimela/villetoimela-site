import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="font-bold text-6xl flex min-h-screen flex-col items-center justify-center py-2">test</div>
    </div>
  )
}

export default Home
