import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/faviconcat.ico" />
      </Head>
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        Test
      </div>
    </div>
  )
}

export default Home
