import Link from "next/link"
import Image from "next/image"

/* eslint-disable-next-line */
export interface SkillsItemProps {
  imgSrc: string
  text: string
}

export function SkillsItem({ imgSrc, text }: SkillsItemProps) {
  return (
    <div className="flex flex-col items-center transition-transform duration-300 hover:scale-125">
      <div className="center center mb-2 flex h-24 w-24 justify-center rounded-full bg-gray-100 bg-opacity-10 object-cover shadow-lg hover:shadow-2xl ">
        <Image src={imgSrc} width={40} height={40} />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-xs font-bold text-gray-100">{text}</p>
      </div>
    </div>
  )
}

export default SkillsItem
