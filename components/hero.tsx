import Image from "next/image"
import { Button2 } from "./button2"
import { SocialIconItem } from "./social-icon-item"

/* eslint-disable-next-line */
export interface HeroProps {
  imgSrc: string
}

export function Hero({ imgSrc }: HeroProps) {
  return (
    <div className="mx-auto flex max-w-4xl flex-col overflow-hidden px-11 text-center font-Syne font-bold lg:flex-row lg:text-left xl:max-w-7xl">
      <div className="mb-12 flex w-full flex-col justify-center lg:mb-0 lg:w-1/2 lg:items-start">
        <div className="relative">
          
            <p className="flex justify-start pb-10 text-xs font-normal italic tracking-widest text-gray-400">
              {" "}
              {"< hero >"}{" "}
            </p>
        
          
            <h1 className=" text-4xl font-extrabold tracking-tight text-white sm:text-5xl xl:text-6xl">
              <span className="block xl:inline">HEI, OLEN </span>
              <span className="block tracking-widest text-red-300 xl:inline">
                VILLE
              </span>
            </h1>
          
        </div>
      
          <p className="my-4 text-lg tracking-normal text-white">
            27-vuotias front-end web-kehittäjä sekä tuore ja innokas
            ohjelmistoalan yrittäjä
          </p>
      
          <div className="z-30 flex items-center justify-around gap-4 lg:justify-start">
            <SocialIconItem
              imgSrc={"/icon-instagram.svg"}
              width={32}
              height={32}
              linkUrl={"https://www.instagram.com/villetoimela/"}
            />
            <SocialIconItem
              imgSrc={"/icon-gitlab.svg"}
              width={40}
              height={40}
              linkUrl={"https://gitlab.com/villetoimela"}
            />
            <SocialIconItem
              imgSrc={"/icon-linkedin.svg"}
              width={33}
              height={33}
              linkUrl={"https://www.linkedin.com/in/ville-toimela-7ba2841b5/"}
            />
            <SocialIconItem
              imgSrc={"/icon-whatsapp.svg"}
              width={35}
              height={35}
              linkUrl={"https://wa.me/358405137883"}
            />
          </div>
          <p className="flex justify-start pt-10 text-xs font-normal italic tracking-widest text-gray-400">
            {" "}
            {"< /hero >"}{" "}
          </p>
        
      </div>
      <div className=" flex w-full flex-col items-center justify-center lg:w-1/2">
      
          <Image src={imgSrc} alt="kuva" width={2190} height={2015} />
        
      </div>
    </div>
  )
}
