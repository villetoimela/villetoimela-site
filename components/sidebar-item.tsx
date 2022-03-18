import Image from "next/image"

/* eslint-disable-next-line */
export interface SideBarItemProps {
  title: string
  icon: string
}

export function SideBarItem({ title, icon }: SideBarItemProps) {
  return (
    <div className="group mb-4 flex cursor-pointer items-center">
      <div className="pr-2 group-hover:animate-bounce">
        <Image src={icon} alt="kuva" width={30} height={30} />
      </div>

      <p className="z-50 rounded-lg  bg-gray-200 px-2 tracking-widest text-gray-900 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        {title}
      </p>
    </div>
  )
}
