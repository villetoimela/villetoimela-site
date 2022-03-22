import { SideBarItem } from "./sidebar-item"

/* eslint-disable-next-line */
export interface SideBarProps {}

export function SideBar(props: SideBarProps) {
  return (
    <div className="center fixed z-50 flex h-screen flex-col justify-center pl-2 font-Syne font-bold text-gray-100">
      <SideBarItem title="HOME" icon="/icon-home.svg" />
      <SideBarItem title="ABOUT" icon="/icon-about.svg" />
      <SideBarItem title="WORK" icon="/icon-work.svg" />
      <SideBarItem title="CONTACT" icon="/icon-contact.svg" />
    </div>
  )
}
