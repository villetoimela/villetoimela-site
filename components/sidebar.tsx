import { SideBarItem } from "./sidebar-item"
import Image from "next/image"
// @ts-ignore
import { Element, Link } from "react-scroll"
// @ts-ignore
import Fade from "react-reveal/Fade"

/* eslint-disable-next-line */
export interface SideBarProps {}

export function SideBar(props: SideBarProps) {
  return (
    <Fade left delay={1500}>
      <div className="center fixed z-10 flex h-screen flex-col justify-center pl-2 font-Syne text-sm font-bold text-white">
        <SideBarItem title={"ALKUUN"} icon={"/icon-home.svg"} navTo={"home"} />
        <SideBarItem
          title={"MINUSTA"}
          icon={"/icon-about.svg"}
          navTo={"about"}
        />
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
    </Fade>
  )
}
