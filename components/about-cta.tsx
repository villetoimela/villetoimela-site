import { Button1 } from "./button1"
// @ts-ignore
import Fade from "react-reveal/Fade"

/* eslint-disable-next-line */
export interface AboutCtaProps {}

export function AboutCta(props: AboutCtaProps) {
  return (
    <div className="bg-red-300 font-Syne opacity-100">
      <div className="mx-auto max-w-7xl px-11 py-8 sm:py-10 lg:py-20">
        <div className="overflow-hidden rounded-lg border-2 border-gray-900 md:py-6 md:px-6 md:shadow-xl lg:flex lg:items-center lg:justify-between lg:p-16 lg:py-12">
          <div className="bg-purple-1000 rounded-lg p-6 md:p-0 md:pb-4">
            <Fade bottom delay={200}>
              <h2 className=" text-xl font-bold uppercase tracking-tight text-gray-900 sm:text-5xl ">
                Omat nettisivut mielessä? <br /> <br /> Etsitkö fronttidevaajaa
                projektiisi?
              </h2>
            </Fade>
            <Fade bottom>
              <p className="mt-5 w-full text-lg font-bold leading-6 tracking-wide text-gray-900 md:w-3/4">
                Täysin räätälöidyt verkkosivut, yksinkertaisemmat
                webbiapplikaatiot, UX/UI-suunnittelu — projekti tai
                tuntihinnalla
              </p>
            </Fade>
          </div>
          <div className="z-50 flex w-full cursor-pointer sm:w-auto lg:flex-shrink-0">
            <Button1
              btnText="Ota yhteyttä >"
              className=" uppercase tracking-wide"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutCta
