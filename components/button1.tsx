// @ts-ignore
import { Element, Link } from "react-scroll"

/* eslint-disable-next-line */
export interface Button1Props {
  btnText: string
  className?: string
}

export function Button1({ btnText, className }: Button1Props) {
  return (
    <div
      className={`${className} focus:shadow-outline z-50 block w-full bg-gray-800 px-5 py-3 text-center text-base font-medium leading-6 text-white transition duration-300 ease-in-out hover:scale-110 hover:bg-gray-700 focus:outline-none md:inline-flex md:w-auto md:rounded-md md:shadow`}
    >
      <Link activeClass="active" to="contact" spy={true} smooth={true}>
        <a href="dummy">{btnText}</a>
      </Link>
    </div>
  )
}
