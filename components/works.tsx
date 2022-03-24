import Image from "next/image"
import Link from "next/link"
import { WorksItem } from "./works-item"

/* eslint-disable-next-line */
export interface WorksProps {}

export function Works({}: WorksProps) {
  return (
    <div className="">
      <h1 className="mx-auto px-11 pb-5 font-Syne text-3xl font-extrabold tracking-widest text-red-300 sm:text-7xl">
        WORKS
      </h1>
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
    </div>
  )
}
