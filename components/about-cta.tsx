import Link from "next/link"
import Image from "next/image"

/* eslint-disable-next-line */
export interface AboutCtaProps {}

export function AboutCta(props: AboutCtaProps) {
  return (
    <div className="bg-red-300 font-Syne">
      <div className="mx-auto max-w-7xl px-8 py-8 sm:py-10 lg:py-20">
        <div className="overflow-hidden rounded-lg border-2 border-gray-900 md:py-6 md:px-6 md:shadow-xl lg:flex lg:items-center lg:justify-between lg:p-16 lg:py-12">
          <div className="bg-purple-1000 rounded-lg p-6 md:p-0 md:pb-4">
            <h2 className=" text-xl font-bold uppercase tracking-tight text-gray-900 sm:text-5xl ">
              Webbiprojekti mielessä? <br /> tarvitko fronttidevaajaa
              projektiisi?
            </h2>
            <p className="mt-5 w-full text-lg font-bold leading-6 text-gray-100 md:w-3/4">
              Täysin räätälöidyt verkkosivut, yksinkertaisemmat
              webbiapplikaatiot, UX/UI suunnittelu – projekti tai tuntihinnalla
            </p>
          </div>
          <div className="flex w-full sm:w-auto lg:flex-shrink-0">
            <Link href={"/"}>
              <a
                href="dummy"
                className="focus:shadow-outline z-50 block w-full bg-gray-800 px-5 py-3 text-center text-base font-medium leading-6 text-gray-100 transition duration-300 ease-in-out hover:scale-110 hover:bg-gray-700 focus:outline-none md:inline-flex md:w-auto md:rounded-md md:shadow"
              >
                Ota yhteyttä {">"}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutCta
