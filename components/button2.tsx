// @ts-ignore
import { Element, Link } from "react-scroll"

/* eslint-disable-next-line */
export interface Button2Props {
  btnText: string
  className?: string
}

export function Button2({ btnText, className }: Button2Props) {
  return (
    <Link activeClass="active" to="contact" spy={true} smooth={true}>
      <a href="dummy" className="text-md group relative">
        <span
          className={`${className} relative z-10 rounded-lg border-4 border-red-300 bg-red-300 px-5 py-2 font-bold text-gray-900 duration-300 group-hover:text-gray-200`}
        >
          {btnText}
        </span>
        <span className="absolute top-0 right-0 -mt-2.5 -mr-0.5 h-12 w-full rounded-lg bg-gray-900"></span>
      </a>
    </Link>
  )
}
