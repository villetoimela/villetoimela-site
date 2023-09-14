import Image from "next/image"
import { SocialIconItem } from "./social-icon-item"


/* eslint-disable-next-line */
export interface AboutReverseProps {
  imgSrc: string
}

export function AboutReverse({ imgSrc }: AboutReverseProps) {
  return (
    <div className="mx-auto w-full px-11 py-44 ">
      <div className="relative mx-auto max-w-7xl xl:px-0">
        
          <h2 className="font-Syne text-3xl font-extrabold tracking-widest text-white sm:text-7xl">
            LISÄÄ MINUSTA
          </h2>
        
        <div className="mt-4 border border-red-300 sm:mb-20"></div>
        <div className="flex flex-col items-center pt-10 lg:flex-row">
          <div className="relative w-full lg:w-2/3">
            
              <div>
                <p className="font-Syne text-base font-bold tracking-wider text-white ">
                
                  <p className="pb-4">
                    {" "}
                    Opintojani edeltänyt itseoppimis- ja harrastuneisuusvaihe on
                    keskittynyt pääosin fronttipuoleen, mutta etenkin
                    ohjelmistokehittäjän opinnoissa olen saanut paljon
                    merkittävää näkökulmaa myös konepellin alle. 
                    Itseltäni löytyy osaamista toteuttaa webbisovelluksia 
                    esimerkiksi Reactia käyttäen, varsinkin Nextjs, TailwindCSS, 
                    JavaScript/TypeScript stackilla. Konstikkaammatkin hommat, 
                    sekä pulmat varmasti alkavat ratkeamaan myös jo kertyneillä 
                    Google ja Stack Overflow -kahlaustaidoilla! Viime 
                    aikoina on myös tullut omaksuttua paljon C#:ia ja dotnetin 
                    maailmaa, mukaanlukien OOP, MVC ym. paradigmat.{" "}
                  </p>{" "}
                  
                  <p className="pb-4">
                    Tällä hetkellä eniten kiinnostaa web-ohjelmointi ja modernit
                    komponenttipohjaiset JS framikset, joista erityisesti react
                    ja vue. Intoa ja mielenkiintoa löytyy tietysti laajasti
                    kaikkiin muihinkin moderneihin frameworkkeihin ja
                    teknologioihin!
                  </p>{" "}
                  
                  <p className="pb-4">
                  Tulevaisuutta ajatellen suunta alalla on vielä auki, 
                  vaikka suurimmaksi osaksi taidot tällä hetkellä löytyykin 
                  front-end puolelta. Full-stack tekeminen kiinnostaa ottaa 
                  haltuun jatkossa, mutta katson järkevämmäksi hallita toisen 
                  puolen ensin, ja keskittyä pellin alle tarkemmin sitten 
                  myöhemmässä vaiheessa. UX/UI suunnittelu kiinnostaa yhtä lailla 
                  kuin käyttöliittymän itse koodaaminen, eli designerinkin hommat 
                  voisi olla yksi mahdollinen suunta tulevaisuudessa.
                  </p>{" "}
                  
                  <p className="pb-4">
                  Versionhallinnan puolelta git on tietysti tuttu kaveri, samoin
                  isoimmat forget workfloweineen (PR:t, issuet ym).
                  </p>
                  
                </p>
              </div>
            
            
              <div className="z-50 flex items-center justify-around gap-4 pt-10 lg:justify-start">
                <SocialIconItem
                  imgSrc={"/icon-instagram.svg"}
                  width={42}
                  height={42}
                  linkUrl={"https://www.instagram.com/villetoimela/"}
                />
                <SocialIconItem
                  imgSrc={"/icon-gitlab.svg"}
                  width={50}
                  height={50}
                  linkUrl={"https://gitlab.com/villetoimela"}
                />
                <SocialIconItem
                  imgSrc={"/icon-linkedin.svg"}
                  width={43}
                  height={43}
                  linkUrl={
                    "https://www.linkedin.com/in/ville-toimela-7ba2841b5/"
                  }
                />
                <SocialIconItem
                  imgSrc={"/icon-whatsapp.svg"}
                  width={45}
                  height={45}
                  linkUrl={"https://wa.me/358405137883"}
                />
              </div>
            
            <div className="mt-4 border border-white sm:mb-20"></div>
          </div>
          <div className="mt-16 flex w-full animate-float items-center overflow-hidden lg:mt-0 lg:w-1/3 lg:pb-0 lg:pr-24">
            
              <Image src={imgSrc} width={1122} height={1912} />
            
          </div>
        </div>
        <p className="text-xs font-normal italic tracking-widest text-gray-400">
          {" "}
          {"< /about >"}{" "}
        </p>
      </div>
    </div>
  )
}

export default AboutReverse
