import type { NextPage } from "next"
import Head from "next/head"
import { NoisyBg } from "../components/noisy-bg"
import { SideBar } from "../components/sidebar"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>villetoimela.com</title>
        <link rel="icon" href="/faviconcat.ico" />
      </Head>
      <NoisyBg />
      <SideBar />
    </div>
  )
}

export default Home
