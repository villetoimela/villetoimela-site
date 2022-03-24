import SkillsItem from "./skills-item"
import Image from "next/image"

/* eslint-disable-next-line */
export interface SkillsProps {}

export function Skills(props: SkillsProps) {
  return (
    <div className="mx-auto w-full px-11 pb-44 font-Syne">
      <div className="mx-auto text-center lg:max-w-xl">
        <p className="text-lg font-extrabold uppercase tracking-wide text-gray-100 sm:text-4xl">
          Tuttuja teknologioita
        </p>
        <div className="pt-4">
          <Image src={"/arrow-down.svg"} width={70} height={70} />
        </div>
      </div>
      <div className="mx-auto grid grid-cols-3 gap-5 md:grid-cols-5 lg:max-w-screen-sm">
        <div className="p-5">
          <SkillsItem imgSrc={"/skills-tailwind.svg"} text={"TailwindCSS"} />{" "}
        </div>
        <SkillsItem imgSrc={"/skills-javascript.svg"} text={"JavaScript"} />
        <div className="p-5">
          <SkillsItem imgSrc={"/skills-typescript.svg"} text={"TypeScript"} />{" "}
        </div>
        <SkillsItem imgSrc={"/skills-figma.svg"} text={"Figma"} />
        <div className="p-5">
          <SkillsItem imgSrc={"/skills-csharp.svg"} text={"C#"} />{" "}
        </div>
        <SkillsItem imgSrc={"/skills-nextjs.svg"} text={"NextJS"} />
        <div className="p-5">
          <SkillsItem imgSrc={"/skills-vscode.svg"} text={"VScode"} />{" "}
        </div>
        <SkillsItem
          imgSrc={"/skills-visualstudio.svg"}
          text={"Visual Studio"}
        />
        <div className="p-5">
          <SkillsItem imgSrc={"/skills-html.svg"} text={"HTML"} />{" "}
        </div>
        <SkillsItem imgSrc={"/skills-css.svg"} text={"CSS"} />
        <div className="p-5">
          <SkillsItem imgSrc={"/skills-git.svg"} text={"Git"} />{" "}
        </div>
        <SkillsItem imgSrc={"/skills-gitlab.svg"} text={"GitLab"} />
        <div className="p-5">
          <SkillsItem imgSrc={"/skills-github.svg"} text={"GitHub"} />{" "}
        </div>
        <SkillsItem imgSrc={"/skills-react.svg"} text={"ReactJS"} />
        <div className="p-5">
          <SkillsItem imgSrc={"/skills-sql.svg"} text={"SQL"} />{" "}
        </div>
        <SkillsItem imgSrc={"/skills-nx.svg"} text={"Nx"} />
        <div className="p-5">
          <SkillsItem imgSrc={"/skills-yarn.svg"} text={"Yarn"} />{" "}
        </div>
        <SkillsItem imgSrc={"/skills-postcss.svg"} text={"PostCSS"} />
        <div className="p-5">
          <SkillsItem imgSrc={"/skills-npm.svg"} text={"npm"} />{" "}
        </div>
      </div>
      <div className="mx-auto mt-20 w-full max-w-7xl border border-gray-100 sm:mb-20"></div>
    </div>
  )
}

export default Skills
