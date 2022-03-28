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
        <div className="duration-300 hover:scale-110">
          <span
            className={`${className} relative z-10 rounded-lg bg-red-300 px-8 py-4 font-bold text-gray-900 duration-300 group-hover:text-gray-200`}
          >
            {btnText}
          </span>
        </div>
      </a>
    </Link>
  )
}
