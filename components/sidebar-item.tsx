import Image from "next/image"

/* eslint-disable-next-line */
export interface SideBarItemProps {
  title: string
  icon: string
}

export function SideBarItem({ title, icon }: SideBarItemProps) {
  return (
    <div className="group z-10 mb-4 flex cursor-pointer items-center">
      <div className="scale pr-2 duration-300 group-hover:scale-150  ">
        <Image src={icon} alt="kuva" width={30} height={30} />
      </div>

      <p className="z-10 rounded-lg  bg-gray-100 px-2 tracking-widest text-gray-900 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        {title}
      </p>
    </div>
  )
}
