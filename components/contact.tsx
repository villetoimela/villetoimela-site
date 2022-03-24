import Image from "next/image"
import Link from "next/link"
import { SocialIconItem } from "./social-icon-item"

/* eslint-disable-next-line */
export interface ContactProps {}

export function Contact({}: ContactProps) {
  return (
    <div className=" mx-auto border-4 border-gray-100 bg-black pt-20 font-Syne">
      <div className="flex">
        <div className="left-hand flex-1 pt-8 sm:pt-14 md:pt-20 lg:pt-24 xl:pt-32 2xl:pt-40">
          <Image
            src={"/vasen-käsi-sivulle.png"}
            width={1710}
            height={909}
            layout="responsive"
          />
        </div>
        <div className="right-hand flex-1">
          <img src="/oikea-käsi-sivulle.png" width={1725} height={786} />
        </div>
      </div>
      <div className="mx-auto px-11 pb-5 text-center text-2xl font-extrabold tracking-wide text-gray-100 sm:text-6xl lg:text-8xl">
        <h1>OTA YHTEYTTÄ</h1>
      </div>
      <div className="">
        <div className="mx-auto max-w-screen-xl space-y-8 overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center text-lg font-bold tracking-widest text-white">
            <div className="flex flex-col items-center justify-center gap-1">
              <p className=""> 040 513 7883</p>
              <p className="">ville.toimela@hiisi.digital</p>
              <p className="">Jyväskylä, Finland</p>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-center gap-6">
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
          <p className="mt-8 text-center text-base font-bold leading-6 text-gray-400">
            © 2022 Hiisi Digital Oy. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}
