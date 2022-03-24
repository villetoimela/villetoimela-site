import type { NextPage } from "next"
import Head from "next/head"
import { Hero } from "../components/hero"
import { NoisyBg } from "../components/noisy-bg"
import { SideBar } from "../components/sidebar"
import { SideBarRight } from "../components/sidebar-right"
import { Welcome } from "../components/welcome"
import { About } from "../components/about"
import AboutCta from "../components/about-cta"
import AboutReverse from "../components/about-reverse"
import Skills from "../components/skills"
import { Works } from "../components/works"
import { Contact } from "../components/contact"
import ContactCta from "../components/contact-cta"
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
      <About imgSrc={"/lääppäri-sivulle.png"} />
      <AboutCta />
      <AboutReverse imgSrc={"/pilvi-ukkeli-sivulle.png"} />
      <Skills />
      <Works />
      <ContactCta />
      <Contact />
    </div>
  )
}

export default Home
