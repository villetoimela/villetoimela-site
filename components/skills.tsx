import SkillsItem from "./skills-item"
import Image from "next/image"

/* eslint-disable-next-line */
export interface SkillsProps {}

export function Skills(props: SkillsProps) {
  return (
    <div className="mx-auto w-full px-11 pb-44 font-Syne">
      <div className="mx-auto text-center lg:max-w-xl">
        <p className="text-lg font-extrabold uppercase tracking-wide text-gray-100 sm:text-4xl">
          Teknologioita jotka ovat tuttuja
        </p>
        <div className="pt-4">
          <Image src={"/arrow-down.svg"} width={70} height={70} />
        </div>
      </div>
      <div className="mx-auto grid grid-cols-3 gap-5 py-4 sm:grid-cols-3 md:grid-cols-6 lg:max-w-screen-lg">
        <SkillsItem imgSrc={"/skills-javascript.svg"} text={"JavaScript"} />
        <SkillsItem imgSrc={"/skills-tailwind.svg"} text={"TailwindCSS"} />
        <SkillsItem imgSrc={"/skills-figma.svg"} text={"Figma"} />
        <SkillsItem imgSrc={"/skills-typescript.svg"} text={"TypeScript"} />
        <SkillsItem imgSrc={"/skills-html.svg"} text={"HTML"} />
        <SkillsItem imgSrc={"/skills-css.svg"} text={"CSS"} />
      </div>
      <div className="mx-auto grid grid-cols-2 gap-5 sm:grid-cols-4 lg:max-w-screen-lg">
        <SkillsItem imgSrc={"/skills-csharp.svg"} text={"C#"} />
        <SkillsItem imgSrc={"/skills-nextjs.svg"} text={"NextJS"} />
        <SkillsItem imgSrc={"/skills-vscode.svg"} text={"VScode"} />
        <SkillsItem
          imgSrc={"/skills-visualstudio.svg"}
          text={"Visual Studio"}
        />
      </div>
      <div className="mx-auto grid grid-cols-3 gap-5 sm:grid-cols-3 md:grid-cols-6 lg:max-w-screen-lg">
        <SkillsItem imgSrc={"/skills-git.svg"} text={"Git"} />
        <SkillsItem imgSrc={"/skills-gitlab.svg"} text={"GitLab"} />
        <SkillsItem imgSrc={"/skills-github.svg"} text={"GitHub"} />
        <SkillsItem imgSrc={"/skills-react.svg"} text={"ReactJS"} />
        <SkillsItem imgSrc={"/skills-sql.svg"} text={"SQL"} />
        <SkillsItem imgSrc={"/skills-nx.svg"} text={"Nx"} />
      </div>
      <div className="mx-auto mt-20 w-full max-w-7xl border border-gray-100 sm:mb-20"></div>
    </div>
  )
}

export default Skills
