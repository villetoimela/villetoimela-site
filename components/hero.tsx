import Image from "next/image"
import Link from "next/link"

/* eslint-disable-next-line */
export interface HeroProps {
  imgSrc: string
}

export function Hero({ imgSrc }: HeroProps) {
  return (
    <div className="mx-auto flex max-w-4xl flex-col px-14 text-center font-Syne font-bold lg:flex-row lg:text-left xl:max-w-7xl">
      <div className="mb-12 flex w-full flex-col justify-center lg:mb-0 lg:w-1/2 lg:items-start">
        <div className="relative">
          <p className="mb-2 text-sm font-bold uppercase text-gray-300">
            UX/UI designer & front-end web developer
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-100 sm:text-5xl xl:text-6xl">
            <span className="block xl:inline">HEI, MIE OON </span>
            <span className="block tracking-widest text-red-300 xl:inline">
              VILLE
            </span>
          </h1>
        </div>
        <p className="my-8 text-lg tracking-tight text-gray-300">
          Olen 26-vuotias ucceli, jonka tie on päätynyt pohjosesta tänne
          Keski-Suomeen asustelemaan. Devaustaustaa löytyy nyt reippaan vuoden
          ajalta, keskittyen pääosin fronttipuoleen!
        </p>
        <div className="relative flex space-x-3 self-center pt-4 duration-200 hover:scale-110  lg:self-start">
          <Link href="/" passHref>
            <a href="dummy" className="text-md group  relative">
              <span className="relative z-10 rounded-lg border-4 border-red-300 bg-red-300 px-5 py-2 font-bold text-gray-900 duration-300 group-hover:text-gray-200">
                OTA YHTEYTTÄ
              </span>
              <span className="absolute top-0 right-0 -mt-2.5 -mr-0.5 h-12 w-full rounded-lg bg-gray-900"></span>
            </a>
          </Link>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center lg:w-1/2">
        <Image src={imgSrc} alt="kuva" width={2190} height={2015} />
      </div>
    </div>
  )
}
