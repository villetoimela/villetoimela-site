import Image from "next/image"
import Link from "next/link"

/* eslint-disable-next-line */
export interface WelcomeProps {
  imgSrc: string
}

export function Welcome({ imgSrc }: WelcomeProps) {
  return (
    <div className="mx-auto flex max-w-4xl pt-4 pb-10">
      <Image src={imgSrc} alt="kuva" width={2067} height={579} />
    </div>
  )
}
