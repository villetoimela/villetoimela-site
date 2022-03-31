import { WorksItem } from "./works-item"
// @ts-ignore
import Fade from "react-reveal/Fade"

/* eslint-disable-next-line */
export interface WorksProps {}

export function Works({}: WorksProps) {
  return (
    <div id="works" className="overflow-hidden ">
      <p className="mx-auto  max-w-7xl pl-11 pb-4 text-xs font-normal italic tracking-widest text-gray-400 2xl:pl-0">
        {" "}
        {"< works >"}{" "}
      </p>
      <Fade left>
        <h1 className="mx-auto px-11 pb-5 font-Syne text-3xl font-extrabold tracking-widest text-red-300 sm:text-7xl">
          PORTFOLIO
        </h1>
      </Fade>
      <Fade left>
        <WorksItem
          title={"personal portfolio"}
          text={
            "Oma personal website, joka on kasattu uudestaan entisen HTML/CSS-sivun tieltä. Sivusto on tehty stackilla, jonka olen löytänyt mieluisaksi käyttää ja jolla työskentely on sulavaa."
          }
          imgSrc={"/villetoimelacom-screenshot.png"}
          imgWidth={1920}
          imgHeight={7618}
          tag1="React / NextJS / TypeScript / TailwindCSS"
          link={"https://gitlab.com/villetoimela/villetoimela-site"}
        />
      </Fade>
      <Fade right>
        <WorksItem
          title={"Crypto tracker app"}
          text={
            "Yksinkertainen webbiappi kryptovaluuttojen hintojen seurantaa varten. Sivu on tehty rajapintojen opiskelu edellä, eli sivun ulkoasuun ei ole panostettu. Käytetty CoinGecko.com:n julkista API:a datan hankintaan."
          }
          imgSrc={"/crypto-tracker-test.png"}
          imgWidth={1897}
          imgHeight={10709}
          tag1="React / NextJS / CSS / API"
          link={"https://github.com/villetoimela/nextjs-crypto-app"}
        />
      </Fade>
      <p className="mx-auto max-w-7xl pl-11 pb-4 text-xs font-normal italic tracking-widest text-gray-400 2xl:pl-0">
        {" "}
        {"< /works >"}{" "}
      </p>
    </div>
  )
}
