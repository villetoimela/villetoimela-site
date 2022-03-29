import Image from "next/image"
// @ts-ignore
import Fade from "react-reveal/Fade"

/* eslint-disable-next-line */
export interface LoadingScreenProps {}

export function LoadingScreen({}: LoadingScreenProps) {
  return (
    <div className="relative mx-auto flex h-screen w-screen flex-col items-center justify-center bg-black opacity-95">
      <div className="flex ">
        <div className="flex items-center justify-center ">
          <div className="h-2 w-2 animate-spin rounded-full border-t-4 border-b-4 border-red-100"></div>
          <div className=" absolute h-4 w-4 animate-spin rounded-full border-t-2 border-b-2 border-red-100"></div>
          <div className=" absolute h-6 w-6 animate-spin rounded-full border-t-2 border-b-2 border-red-200"></div>
          <div className=" absolute h-8 w-8 animate-spin rounded-full border-t-2 border-b-2 border-red-200"></div>
          <div className=" absolute h-10 w-10 animate-spin rounded-full border-t-2 border-b-2 border-red-300"></div>
          <div className=" absolute h-12 w-12 animate-spin rounded-full border-t-2 border-b-2 border-red-300"></div>
          <div className=" absolute h-14 w-14 animate-spin rounded-full border-t-2 border-b-2 border-red-400"></div>
          <div className=" absolute h-16 w-16 animate-spin rounded-full border-t-2 border-b-2 border-red-400"></div>
          <div className=" absolute h-20 w-20 animate-spin rounded-full border-t-2 border-b-2 border-red-500"></div>
          <div className=" absolute h-24 w-24 animate-spin rounded-full border-t-2 border-b-2 border-red-500"></div>
          <div className=" absolute h-28 w-28 animate-spin rounded-full border-t-2 border-b-2 border-red-400"></div>
          <div className=" absolute h-32 w-32 animate-spin rounded-full border-t-2 border-b-2 border-red-400"></div>
          <div className=" absolute h-36 w-36 animate-spin rounded-full border-t-2 border-b-2 border-red-300"></div>
          <div className=" absolute h-40 w-40 animate-spin rounded-full border-t-2 border-b-2 border-red-300"></div>
          <div className=" absolute h-44 w-44 animate-spin rounded-full border-t-2 border-b-2 border-red-200"></div>
          <div className=" absolute h-48 w-48 animate-spin rounded-full border-t-2 border-b-2 border-red-200"></div>
          <div className=" absolute h-52 w-52 animate-spin rounded-full border-t-2 border-b-2 border-red-100"></div>
          <div className=" absolute h-56 w-56 animate-spin rounded-full border-t-2 border-b-2 border-red-100"></div>
          <div className=" absolute h-60 w-60 animate-spin rounded-full border-t-2 border-b-2 border-red-50"></div>
          <div className=" absolute h-64 w-64 animate-spin rounded-full border-t-2 border-b-2 border-red-50"></div>
        </div>
      </div>
      <h1 className="absolute text-center font-Syne text-2xl font-black tracking-widest text-red-100">
        LADATAAN
      </h1>
    </div>
  )
}
