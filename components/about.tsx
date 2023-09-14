import Image from "next/image"
import Link from "next/link"
// @ts-ignore
import Fade from "react-reveal/Fade"

/* eslint-disable-next-line */
export interface AboutProps {
  imgSrc: string
}

export function About({ imgSrc }: AboutProps) {
  return (
    <div id="about" className="mx-auto w-full overflow-hidden px-11 py-44 ">
      <div className="relative mx-auto max-w-7xl xl:px-0">
        <p className="pb-4 text-xs font-normal italic tracking-widest text-gray-400">
          {" "}
          {"< about >"}{" "}
        </p>
       
          <h2 className="font-Syne text-3xl font-extrabold tracking-widest text-white sm:text-7xl">
            MINUSTA
          </h2>
        
        <div className="mt-4 border border-red-300 sm:mb-20"></div>
        <div className="flex flex-col items-center lg:flex-row">
          <div className="mt-16 flex w-full animate-float items-center pb-10 lg:mt-0 lg:w-1/3 lg:pb-0 lg:pr-24">
            
              <Image src={imgSrc} width={2340} height={1761} />
            
          </div>
          <div className="relative w-full lg:w-2/3">
            <div className=" overflow-hidden">
              
                <p className="font-Syne text-base font-bold tracking-wider text-white ">
                  Tervehdys!
                
                  <p className="pb-4 pt-4">
                    {" "}
                    Viime vuosina olen alkanut
                    tositarkoituksella toteuttamaan unelmaani devaajaksi
                    ryhtymisestä.
                  </p>{" "}
                  
                  
                  <p className="pb-4">
                    {" "}
                    Omaan valtavan määrän intoa, motivaatiota 
                    ja kiinnostusta ohjelmistokehitystä kohtaan, 
                    sekä nimenomaan halua kehittyä alan huippuosaajaksi. 
                    Vaikka ns. työkokemusta alalta ei vielä löydykään useita vuosia, 
                    niin omia koodailuja sekä oman firman kautta tehtyjä projekteja 
                    löytyy jo mukava määrä. Ensimmäiset projektini / GitHub repot 
                    löytyykin jo yli kahden vuoden takaa. Lopetin entisen viisi 
                    vuotta kestäneen työsuhteeni syyskuussa 2021 syventyäkseni 
                    devaamiseen sataprosenttisesti.{" "}
                  </p>{" "}
                  
                  <p className="pb-4">
                    Helmikuun alussa perustimmekin kahden miehen voimin
                    yrityksen, jonka kanssa on saanut tehdä töitä nyt siitä
                    lähtien. Käy kahlaamassa{" "}
                    <Link href={"https://www.hiisi.digital/"}>
                      <a className="text-red-300">Hiisi Digital</a>
                    </Link>
                    in sivut jos kinostelee!
                  </p>{" "}
                  
                  
                  <p>
                    {" "}
                    Olen tykittäny kymmeniä tuhansia tunteja hc-hikoilua pelien
                    parissa. Seuraava tavoite on saada vähintäänkin vastaava
                    lukema mittariin, mutta ohjelmistokehityksen parissa. Ja
                    nälkä vain kasvaa tehdessä!
                  </p>
                  
                </p>
              
              
                <p className="mt-12 font-Syne text-sm font-bold uppercase italic text-red-300">
                  " Software developer or a professional Google searcher? "
                </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
