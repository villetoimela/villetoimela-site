import Image from "next/image"


/* eslint-disable-next-line */
export interface WelcomeProps {
  imgSrc: string
}

export function Welcome({ imgSrc }: WelcomeProps) {
  return (
    <div id="home" className="mx-auto flex max-w-4xl pt-4 pb-10 lg:pb-0">
      
        <Image src={imgSrc} alt="kuva" width={2067} height={579} />
      
    </div>
  )
}
