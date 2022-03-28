import Image from "next/image"
// @ts-ignore
import Fade from "react-reveal/Fade"

/* eslint-disable-next-line */
export interface LoadingScreenProps {}

export function LoadingScreen({}: LoadingScreenProps) {
  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center bg-black opacity-95">
      <h1 className="text-white">ladataan</h1>
    </div>
  )
}
