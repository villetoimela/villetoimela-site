import { WorksItem } from "./works-item"
// @ts-ignore
import Fade from "react-reveal/Fade"

/* eslint-disable-next-line */
export interface WorksProps {}

export function Works({}: WorksProps) {
  return (
    <div id="works" className=" overflow-hidden">
      <p className="mx-auto max-w-7xl pl-11 pb-4 text-xs font-normal italic tracking-widest text-gray-400 2xl:pl-0">
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
            "Oma personal website joka kasattu uudestaan entisen HTML/CSS sivun tieltä. Sivu on tehty myös täysin responsiiviseksi eri ruudun kokoja ajatellen"
          }
          imgSrc={"/testSCreenshotMaster.png"}
          imgWidth={1903}
          imgHeight={7165}
          tag1="React / NextJS / TypeScript / TailwindCSS"
        />
      </Fade>
      <Fade right>
        <WorksItem
          title={"Crypto-tracker App"}
          text={
            "tehty kaikilla mukavilla millä seonb tehty eli stäcki ja jotai tähä pientä"
          }
          imgSrc={"/testSCreenshotMaster.png"}
          imgWidth={1903}
          imgHeight={7165}
          tag1="design"
        />
      </Fade>
      <p className="mx-auto max-w-7xl pl-11 pb-4 text-xs font-normal italic tracking-widest text-gray-400 2xl:pl-0">
        {" "}
        {"< /works >"}{" "}
      </p>
    </div>
  )
}
