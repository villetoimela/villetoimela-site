import Image from "next/image"

/* eslint-disable-next-line */
export interface AboutProps {}

export function About(props: AboutProps) {
  return (
    <div className="mx-auto w-full px-14 py-44 ">
      <div className="relative mx-auto max-w-7xl xl:px-0">
        <h2 className="font-Syne text-3xl font-extrabold tracking-widest text-gray-100 sm:text-7xl">
          MINUSTA
        </h2>
        <div className="mt-4 border border-red-300 sm:mb-20"></div>
        <div className="flex flex-col items-center lg:flex-row">
          <div className="mt-16 flex w-full items-center pb-10 lg:mt-0 lg:w-1/3 lg:pb-0 lg:pr-24">
            <Image
              src={"/pilvi-ukkeli-sivulle.png"}
              width={1122}
              height={1912}
            />
          </div>
          <div className="relative w-full lg:w-2/3">
            <p className="font-Syne text-lg font-bold tracking-wider text-gray-100 ">
              Terve, minä olen tosissaan{" "}
              <span className="block font-Syne text-red-300 xl:inline">
                Ville.
              </span>{" "}
              <br /> Ohjelmistokehittäjän opintoni (tieto- ja viestintätekniikan
              perustutkinto) ovat loppusuoralla ja tarkoitus on valmistua vuoden
              2022 loppupuolella. Viime vuosina olen alkanut tositarkoituksella
              toteuttamaan unelmaani koodariksi ryhtymisestä. olen tykittäny
              kymmeniä tuhansia tunteja hc hikoilua pelien parissa, nyt seuraava
              tavoite on saada (vähintäänkin) vastaava lukema mittariin, mutta
              ohjelmistokehityksen parissa. Ja nälkähän se vain kasvaa tehdessä!
            </p>
            <p className="mt-12 font-Syne text-sm font-bold uppercase italic text-red-300">
              " It’s not a bug – it’s an undocumented feature. "
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
