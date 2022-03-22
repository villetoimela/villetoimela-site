import Image from "next/image"

/* eslint-disable-next-line */
export interface SideBarItemRightProps {
  title: string
  icon: string
}

export function SideBarItemRight({ title, icon }: SideBarItemRightProps) {
  return (
    <div className="group mb-4 flex cursor-pointer items-center justify-end">
      <p className="z-50 rounded-lg  bg-gray-200 px-2 tracking-widest text-gray-900 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        {title}
      </p>
      <div className="pl-2 group-hover:animate-bounce">
        <Image src={icon} alt="kuva" width={30} height={30} />
      </div>
    </div>
  )
}
