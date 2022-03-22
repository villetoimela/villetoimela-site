import type { NextPage } from "next"
import Head from "next/head"
import { Hero } from "../components/hero"
import { NoisyBg } from "../components/noisy-bg"
import { SideBar } from "../components/sidebar"
import { SideBarRight } from "../components/sidebar-right"
import { Welcome } from "../components/welcome"
import { About } from "../components/about"
import AboutCta from "../components/about-cta"
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
      <About />
      <AboutCta />
    </div>
  )
}

export default Home
