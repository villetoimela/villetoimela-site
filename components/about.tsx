import Image from "next/image"
// @ts-ignore
import Fade from "react-reveal/Fade"

/* eslint-disable-next-line */
export interface AboutProps {
  imgSrc: string
}

export function About({ imgSrc }: AboutProps) {
  return (
    <div id="about" className="mx-auto w-full px-11 py-44 ">
      <div className="relative mx-auto max-w-7xl xl:px-0">
        <p className="pb-4 text-xs font-normal italic tracking-widest text-gray-400">
          {" "}
          {"< about >"}{" "}
        </p>
        <Fade left>
          <h2 className="font-Syne text-3xl font-extrabold tracking-widest text-gray-100 sm:text-7xl">
            MINUSTA
          </h2>
        </Fade>
        <div className="mt-4 border border-red-300 sm:mb-20"></div>
        <div className="flex flex-col items-center lg:flex-row">
          <div className="mt-16 flex w-full animate-float items-center pb-10 lg:mt-0 lg:w-1/3 lg:pb-0 lg:pr-24">
            <Fade left>
              <Image src={imgSrc} width={2340} height={1761} />
            </Fade>
          </div>
          <div className="relative w-full lg:w-2/3">
            <div className=" overflow-hidden">
              <Fade bottom>
                <p className="font-Syne text-base font-bold tracking-wider text-gray-100 ">
                  Terve, minä olen tosissaan{" "}
                  <span className="block font-Syne text-red-300 xl:inline">
                    Ville.
                  </span>{" "}
                  <br /> Ohjelmistokehittäjän opintoni (tieto- ja
                  viestintätekniikan perustutkinto) ovat loppusuoralla ja
                  tarkoitus on valmistua vuoden 2022 loppupuolella. Viime
                  vuosina olen alkanut tositarkoituksella toteuttamaan unelmaani
                  koodariksi ryhtymisestä, lopetin jopa entisen "leipäduunin"
                  syyskuussa 2021 syventyäkseni devaamiseen sataprosenttisesti.
                  Olen tykittäny kymmeniä tuhansia tunteja hc hikoilua pelien
                  parissa, nyt seuraava tavoite on saada (vähintäänkin) vastaava
                  lukema mittariin, mutta ohjelmistokehityksen parissa. Ja
                  nälkähän se vain kasvaa tehdessä!
                </p>
              </Fade>
              <Fade right>
                <p className="mt-12 font-Syne text-sm font-bold uppercase italic text-red-300">
                  " It’s not a bug – it's an undocumented feature. "
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
