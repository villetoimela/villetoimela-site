import Image from "next/image"
import { SocialIconItem } from "./social-icon-item"
// @ts-ignore
import Fade from "react-reveal/Fade"

/* eslint-disable-next-line */
export interface ContactProps {}

export function Contact({}: ContactProps) {
  return (
    <div
      id="contact"
      className="mx-auto border-4 border-white bg-black pt-20 font-Syne"
    >
      <p className="mx-auto max-w-7xl pl-11 pb-4 text-xs font-normal italic tracking-widest text-gray-400 2xl:pl-0">
        {" "}
        {"< contact >"}{" "}
      </p>
      <div className="flex overflow-hidden">
        <div className="flex-1 pt-8 sm:pt-14 md:pt-20 lg:pt-24 xl:pt-32 2xl:pt-40">
          <Fade left>
            <Image
              src={"/vasen-käsi-sivulle.svg"}
              width={1710}
              height={909}
              layout="responsive"
            />
          </Fade>
        </div>
        <div className=" flex-1">
          <Fade right>
            <img src="/oikea-käsi-sivulle.svg" width={1725} height={786} />
          </Fade>
        </div>
      </div>
      <div className="mx-auto px-11 pb-5 text-center text-2xl font-extrabold tracking-wide text-white sm:text-6xl lg:text-8xl">
        <Fade bottom>
          <h1>OTA YHTEYTTÄ</h1>
        </Fade>
      </div>
      <div className="">
        <div className="mx-auto max-w-screen-xl space-y-8 overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center text-lg font-bold tracking-widest text-white">
            <div className="flex flex-col items-center justify-center gap-1">
              <Fade bottom big>
                <p className=""> 040 513 7883</p>
              </Fade>
              <Fade bottom big>
                <p className="">ville.toimela@hiisi.digital</p>
              </Fade>
              <Fade bottom big>
                <p className="">Jyväskylä, Finland</p>
              </Fade>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-center gap-6">
            <Fade left>
              <SocialIconItem
                imgSrc={"/icon-instagram.svg"}
                width={42}
                height={42}
                linkUrl={"https://www.instagram.com/villetoimela/"}
              />
            </Fade>
            <Fade left>
              <SocialIconItem
                imgSrc={"/icon-gitlab.svg"}
                width={50}
                height={50}
                linkUrl={"https://gitlab.com/villetoimela"}
              />
            </Fade>
            <Fade right>
              <SocialIconItem
                imgSrc={"/icon-linkedin.svg"}
                width={43}
                height={43}
                linkUrl={"https://www.linkedin.com/in/ville-toimela-7ba2841b5/"}
              />
            </Fade>
            <Fade right>
              <SocialIconItem
                imgSrc={"/icon-whatsapp.svg"}
                width={45}
                height={45}
                linkUrl={"https://wa.me/358405137883"}
              />
            </Fade>
          </div>

          <Fade bottom>
            <p className="mt-8 text-center text-base font-bold leading-6 text-gray-400">
              © 2022 Hiisi Digital Oy. All rights reserved.
            </p>
          </Fade>
        </div>
      </div>
      <p className="mx-auto max-w-7xl pl-11 pb-4 text-xs font-normal italic tracking-widest text-gray-400 2xl:pl-0">
        {" "}
        {"< /contact >"}{" "}
      </p>
    </div>
  )
}
