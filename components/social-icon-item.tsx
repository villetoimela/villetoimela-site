import Link from "next/link"
import Image from "next/image"

/* eslint-disable-next-line */
export interface SocialIconItemProps {
  imgSrc: string
  width: number
  height: number
  linkUrl: string
}

export function SocialIconItem({
  imgSrc,
  width,
  height,
  linkUrl,
}: SocialIconItemProps) {
  return (
    <div className="z-50 cursor-pointer transition-transform hover:-translate-y-2">
      <Link href={linkUrl}>
        <a>
          <Image src={imgSrc} width={width} height={height} />
        </a>
      </Link>
    </div>
  )
}
