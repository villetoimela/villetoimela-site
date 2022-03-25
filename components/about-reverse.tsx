import Image from "next/image"
import { SocialIconItem } from "./social-icon-item"
// @ts-ignore
import Fade from "react-reveal/Fade"

/* eslint-disable-next-line */
export interface AboutReverseProps {
  imgSrc: string
}

export function AboutReverse({ imgSrc }: AboutReverseProps) {
  return (
    <div className="mx-auto w-full px-11 py-44 ">
      <div className="relative mx-auto max-w-7xl xl:px-0">
        <Fade left>
          <h2 className="font-Syne text-3xl font-extrabold tracking-widest text-gray-100 sm:text-7xl">
            LISÄÄ MINUSTA
          </h2>
        </Fade>
        <div className="mt-4 border border-red-300 sm:mb-20"></div>
        <div className="flex flex-col items-center pt-10 lg:flex-row">
          <div className="relative w-full lg:w-2/3">
            <Fade bottom>
              <div>
                <p className="font-Syne text-base font-bold tracking-wider text-gray-100 ">
                  Opintojani edeltänyt itseoppimis- ja harrastuneisuusvaihe on
                  keskittynyt pääosin fronttipuoleen, mutta etenkin nyt
                  ohjelmistokehittäjän opinnoissa olen saanut paljon merkittävää
                  näkökulmaa myös konepellin alle. Vahvimmat työkalut ovat tällä
                  hetkellä perinteiset HTML, CSS sekä JS, mutta viime aikoina on
                  myös tullut omaksuttua paljon C#:ia ja dotnetin maailmaa,
                  mukaanlukien OOP, MVC ym. paradigmat. <br /> Viimeisimpinä
                  työkaluina on pyörinyt React (NextJS:llä), TypeScriptillä ja
                  olen täysin rakastunut Tailwindiin! <br /> Versionhallinnan
                  puolelta git on tietysti tuttu kaveri, samoin isoimmat forget
                  workfloweineen (PR:t, issuet ym).
                </p>
              </div>
            </Fade>
            <Fade bottom>
              <div className="flex items-center justify-around gap-4 pt-10 lg:justify-start">
                <SocialIconItem
                  imgSrc={"/icon-instagram.svg"}
                  width={42}
                  height={42}
                  linkUrl={"/"}
                />
                <SocialIconItem
                  imgSrc={"/icon-gitlab.svg"}
                  width={50}
                  height={50}
                  linkUrl={"/"}
                />
                <SocialIconItem
                  imgSrc={"/icon-linkedin.svg"}
                  width={43}
                  height={43}
                  linkUrl={"/"}
                />
                <SocialIconItem
                  imgSrc={"/icon-youtube.svg"}
                  width={52}
                  height={52}
                  linkUrl={"/"}
                />
              </div>
            </Fade>
            <div className="mt-4 border border-gray-100 sm:mb-20"></div>
          </div>
          <div className="mt-16 flex w-full items-center overflow-hidden lg:mt-0 lg:w-1/3 lg:pb-0 lg:pr-24">
            <Fade right>
              <Image src={imgSrc} width={1122} height={1912} />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutReverse
