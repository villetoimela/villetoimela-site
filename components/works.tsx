import { WorksItem } from "./works-item"
// @ts-ignore
import Fade from "react-reveal/Fade"

/* eslint-disable-next-line */
export interface WorksProps {}

export function Works({}: WorksProps) {
  return (
    <div id="works" className=" overflow-hidden">
      <Fade left>
        <h1 className="mx-auto px-11 pb-5 font-Syne text-3xl font-extrabold tracking-widest text-red-300 sm:text-7xl">
          PORTFOLIO
        </h1>
      </Fade>
      <Fade left>
        <WorksItem
          title={"personal portfolio"}
          text={
            "tehty kaikilla mukavilla millä seonb tehty eli stäcki ja jotai tähä pientä"
          }
          imgSrc={"/sitescreenshot.png"}
          imgWidth={1897}
          imgHeight={946}
          tag1="Web"
        />
      </Fade>
      <Fade right>
        <WorksItem
          title={"Crypto-tracker App"}
          text={
            "tehty kaikilla mukavilla millä seonb tehty eli stäcki ja jotai tähä pientä"
          }
          imgSrc={"/paska.png"}
          imgWidth={2880}
          imgHeight={1642}
          tag1="design"
        />
      </Fade>
    </div>
  )
}
