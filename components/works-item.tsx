import Image from "next/image"
import Link from "next/link"
import { Button1 } from "./button1"

/* eslint-disable-next-line */
export interface WorksItemProps {
  title: string
  text: string
  imgSrc: string
  imgWidth: number
  imgHeight: number
  tag1?: string
  link: string
  btnClassName?: string
}

export function WorksItem({
  title,
  text,
  imgSrc,
  imgWidth,
  imgHeight,
  tag1,
  link,
  btnClassName,
}: WorksItemProps) {
  return (
    <div className="mb-10 flex w-full flex-col bg-black bg-opacity-30 font-Syne md:flex-row">
      <div className="flex h-full w-full flex-col justify-center p-10 md:w-1/2 lg:p-16">
        <h2 className="max-w-lg text-2xl font-extrabold uppercase text-white lg:text-3xl xl:text-4xl">
          {title}
        </h2>
        <p className="text-md mt-5 max-w-lg font-bold text-gray-300 ">{text}</p>
        <div className="flex gap-2 pt-4 font-bold">
          <p className=" flex w-auto rounded-md bg-opacity-90 text-center text-sm text-red-300">
            {tag1}
          </p>
        </div>
        <a href={link} className={` ${btnClassName} w-40 my-4 px-6 py-2 text-center font-bold text-sm text-white border-2 border-red-300 rounded-md hover:bg-red-300 duration-200`}>LIVE || REPO</a>
        <div className=" max-w-4xl border border-white sm:mb-20"></div>
      </div>
      <div className=" w-full self-center md:w-1/2 ">
        <div className="relative h-64 overflow-y-auto p-4 duration-300 scrollbar-hide hover:scale-110 sm:h-[19rem]">
          <Image src={imgSrc} width={imgWidth} height={imgHeight} />
        </div>
        
      </div>
    </div>
  )
}
