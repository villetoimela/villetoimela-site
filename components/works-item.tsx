import Image from "next/image"
import Link from "next/link"

/* eslint-disable-next-line */
export interface WorksItemProps {
  title: string
  text: string
  imgSrc: string
  imgWidth: number
  imgHeight: number
  tag1?: string
  tag2?: string
}

export function WorksItem({
  title,
  text,
  imgSrc,
  imgWidth,
  imgHeight,
  tag1,
  tag2,
}: WorksItemProps) {
  return (
    <div className="mb-10 flex w-full flex-col bg-black bg-opacity-30 font-Syne md:flex-row">
      <div className="flex h-full w-full flex-col justify-center p-10 md:w-1/2 lg:p-16 xl:p-24">
        <h2 className="max-w-lg text-2xl font-extrabold uppercase text-gray-100 lg:text-4xl xl:text-5xl">
          {title}
        </h2>
        <p className="text-md mt-5 max-w-lg font-bold text-gray-400 ">{text}</p>
        <div className="flex gap-2 pt-4 font-bold">
          <p className=" flex w-auto rounded-md bg-red-300 bg-opacity-90 px-4 text-center text-sm">
            {tag1}
          </p>
        </div>
        <div className="flex gap-2 pt-4 font-bold">
          <p className=" flex w-auto rounded-md bg-red-300 bg-opacity-90 px-4 text-center text-sm">
            {tag2}
          </p>
        </div>
        <div className="mt-4 max-w-4xl border border-gray-100 sm:mb-20"></div>
      </div>

      <div className="min-h-full w-full self-center md:w-1/2 ">
        <div className="m-4 xl:m-14 ">
          <Image
            src={imgSrc}
            width={imgWidth}
            height={imgHeight}
            layout="intrinsic"
          />
        </div>
      </div>
    </div>
  )
}
