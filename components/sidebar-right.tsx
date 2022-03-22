import { SideBarItemRight } from "./sidebar-item-right"

/* eslint-disable-next-line */
export interface SideBarRightProps {}

export function SideBarRight(props: SideBarRightProps) {
  return (
    <div className="center fixed right-0 flex h-screen flex-col justify-center pr-2 font-Syne font-bold text-gray-100">
      <SideBarItemRight title="INSTAGRAM" icon="/icon-instagram.svg" />
      <SideBarItemRight title="GITLAB" icon="/icon-gitlab.svg" />
      <SideBarItemRight title="LINKEDIN" icon="/icon-linkedin.svg" />
      <SideBarItemRight title="YOUTUBE" icon="/icon-youtube.svg" />
    </div>
  )
}
