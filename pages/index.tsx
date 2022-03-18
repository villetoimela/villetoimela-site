import type { NextPage } from "next"
import Head from "next/head"
import { Hero } from "../components/hero"
import { NoisyBg } from "../components/noisy-bg"
import { SideBar } from "../components/sidebar"
import { Welcome } from "../components/welcome"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>villetoimela.com</title>
        <link rel="icon" href="/faviconcat.ico" />
      </Head>
      <NoisyBg />
      <SideBar />
      <Welcome imgSrc="/welcome-sivulle.png" />
      <Hero imgSrc="/kissa-sivulle.png" />
    </div>
  )
}

export default Home
