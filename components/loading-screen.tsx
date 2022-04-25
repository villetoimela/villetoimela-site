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
          <div className="flex items-center justify-center ">
            <div className="h-16 w-16 animate-spin rounded-full border-l-2 border-red-300"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
