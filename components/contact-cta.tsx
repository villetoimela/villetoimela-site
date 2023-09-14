// @ts-ignore
import { Element, Link } from "react-scroll"
import Image from "next/image"

/* eslint-disable-next-line */
export interface ContactCtaProps {}

export function ContactCta(props: ContactCtaProps) {
  return (
    <div className="relative overflow-hidden px-11 pb-20 pt-10 font-Syne">
      <div className="relative mx-auto flex max-w-4xl flex-wrap overflow-hidden bg-red-300 px-5 py-5 shadow-lg sm:flex-nowrap sm:items-center sm:justify-center sm:pr-11 md:rounded-lg md:px-3 md:py-3 md:pr-0">
        
          <span className="absolute top-0 left-0 -mt-16 -ml-20 hidden h-32 w-32 rotate-45 opacity-50 md:block"></span>
          <div className="order-1 mb-2 inline-flex w-11/12 max-w-screen-sm flex-col text-3xl font-bold text-gray-900 sm:order-none sm:mb-0 sm:w-auto sm:flex-row sm:items-center ">
            <div className="mb-2 mr-4">
              
                <Image src={"/icon-cat.svg"} width={100} height={100} />
              
            </div>
            
              Ota vapaasti yhteyttä vain viesteitse jos se on mieluisin tapa
              itsellesi!
            
          </div>

          <div className="relative order-last w-full duration-300 hover:scale-110 sm:order-none sm:w-auto">
            <Link activeClass="active" to="contact" spy={true} smooth={true}>
            
                <a
                  href="#"
                  className="text-md relative inline-block w-full whitespace-nowrap rounded-md bg-gray-900 px-4 py-4 text-center font-semibold text-white outline-none transition duration-300 hover:bg-gray-700 focus-visible:ring active:bg-white sm:ml-4 sm:w-auto"
                >
                  OTA YHTEYTTÄ
                </a>
              
            </Link>
          </div>
      
      </div>
    </div>
  )
}

export default ContactCta
