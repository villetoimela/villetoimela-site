import type { NextPage } from "next"
import Head from "next/head"
import { Hero } from "../components/hero"
import { NoisyBg } from "../components/noisy-bg"
import { SideBar } from "../components/sidebar"
import { Welcome } from "../components/welcome"
import { About } from "../components/about"
import AboutCta from "../components/about-cta"
import AboutReverse from "../components/about-reverse"
import Skills from "../components/skills"
import { Works } from "../components/works"
import { Contact } from "../components/contact"
import ContactCta from "../components/contact-cta"
import { Bg } from "../components/bg-black"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>villetoimela.com</title>
        <link rel="icon" href="/faviconcat.ico" />
      </Head>
      <Bg />
      <SideBar />
      <Welcome imgSrc="/welcome-sivulle.svg" />
      <Hero imgSrc="/kissa-sivulle.svg" />
      <About imgSrc={"/läppäri-sivulle.svg"} />
      <AboutCta />
      <AboutReverse imgSrc={"/pilvi-ukkeli-sivulle.svg"} />
      <Skills />
      <Works />
      <ContactCta />
      <Contact />
    </div>
  )
}

export default Home
