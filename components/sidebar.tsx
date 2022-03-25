import { SideBarItem } from "./sidebar-item"
import Image from "next/image"
// @ts-ignore
import { Element, Link } from "react-scroll"

/* eslint-disable-next-line */
export interface SideBarProps {}

export function SideBar(props: SideBarProps) {
  return (
    <div className="center fixed z-50 flex h-screen flex-col justify-center pl-2 font-Syne font-bold text-gray-100">
      <SideBarItem title={"ALKUUN"} icon={"/icon-home.svg"} navTo={"home"} />
      <SideBarItem title={"MINUSTA"} icon={"/icon-about.svg"} navTo={"about"} />
      <SideBarItem
        title={"PORTFOLIO"}
        icon={"/icon-work.svg"}
        navTo={"works"}
      />
      <SideBarItem
        title={"OTA YHTEYTTÄ"}
        icon={"/icon-contact.svg"}
        navTo={"contact"}
      />
    </div>
  )
}
