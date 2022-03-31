import Image from "next/image"
// @ts-ignore
import Fade from "react-reveal/Fade"

/* eslint-disable-next-line */
export interface LoadingScreenProps {}

export function LoadingScreen({}: LoadingScreenProps) {
  return (
    <div className=" mx-auto flex h-screen w-screen flex-col items-center justify-center bg-black opacity-95">
      <div className="flex animate-pulse">
        <div className="flex items-center justify-center ">
          <div className="h-6 w-6 animate-pulse animate-spin rounded-full border-t-2 border-b-2 border-red-300"></div>
          <h1 className="pl-4 text-center font-Syne font-black tracking-widest text-gray-300 ">
            LADATAAN..
          </h1>
        </div>
      </div>
    </div>
  )
}
