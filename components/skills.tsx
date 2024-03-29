import SkillsItem from "./skills-item"
import Image from "next/image"


/* eslint-disable-next-line */
export interface SkillsProps {}

export function Skills(props: SkillsProps) {
  return (
    <div className="z-50 mx-auto w-full px-11 pb-44 font-Syne">
      <p className="mx-auto max-w-7xl pb-4 text-xs font-normal italic tracking-widest text-gray-400">
        {" "}
        {"< skills >"}{" "}
      </p>
      <div className="z-50 mx-auto text-center lg:max-w-xl">
        
          <p className="text-lg font-extrabold uppercase tracking-wide text-white sm:text-4xl">
            Tuttuja teknologioita
          </p>
        
        <div className="z-50 pt-4">
          <Image src={"/arrow-down.svg"} width={70} height={70} />
        </div>
      </div>
      <div className="z-50 mx-auto grid grid-cols-3 gap-5 text-center md:grid-cols-5 lg:max-w-screen-sm">
        
          <div className=" z-50 p-5">
            <SkillsItem imgSrc={"/skills-tailwind.svg"} text={"TailwindCSS"} />{" "}
          </div>
          <SkillsItem imgSrc={"/skills-javascript.svg"} text={"JavaScript"} />
          <div className="z-50 p-5">
            <SkillsItem imgSrc={"/skills-typescript.svg"} text={"TypeScript"} />{" "}
          </div>
          <SkillsItem imgSrc={"/skills-figma.svg"} text={"Figma"} />
          <div className="z-50 p-5">
            <SkillsItem imgSrc={"/skills-csharp.svg"} text={"C#"} />{" "}
          </div>
          <SkillsItem imgSrc={"/skills-nextjs.svg"} text={"NextJS"} />
          <div className="z-50 p-5">
            <SkillsItem imgSrc={"/skills-vscode.svg"} text={"VScode"} />{" "}
          </div>
          <SkillsItem
            imgSrc={"/skills-visualstudio.svg"}
            text={"Visual Studio"}
          />
          <div className="z-50 p-5">
            <SkillsItem imgSrc={"/skills-html.svg"} text={"HTML"} />{" "}
          </div>
          <SkillsItem imgSrc={"/skills-css.svg"} text={"CSS"} />
          <div className="z-50 p-5">
            <SkillsItem imgSrc={"/skills-git.svg"} text={"Git"} />{" "}
          </div>
          <SkillsItem imgSrc={"/skills-gitlab.svg"} text={"GitLab"} />
          <div className="z-50 p-5">
            <SkillsItem imgSrc={"/skills-github.svg"} text={"GitHub"} />{" "}
          </div>
          <SkillsItem imgSrc={"/skills-react.svg"} text={"ReactJS"} />
          <div className="z-50 p-5">
            <SkillsItem imgSrc={"/skills-sql.svg"} text={"SQL"} />{" "}
          </div>
          <SkillsItem imgSrc={"/skills-nx.svg"} text={"Nx"} />
          <div className="z-50 p-5">
            <SkillsItem imgSrc={"/skills-yarn.svg"} text={"Yarn"} />{" "}
          </div>
          <SkillsItem imgSrc={"/skills-api.svg"} text={"API"} />
          <div className="z-50 p-5">
            <SkillsItem imgSrc={"/skills-npm.svg"} text={"npm"} />{" "}
          </div>
          <SkillsItem
            imgSrc={"/skills-responsive.svg"}
            text={"Responsive design"}
          />
      
      </div>
      <p className="mx-auto max-w-7xl pt-4 pb-4 text-xs font-normal italic tracking-widest text-gray-400">
        {" "}
        {"< /skills >"}{" "}
      </p>
      <div className="mx-auto mt-20 w-full max-w-7xl border border-white sm:mb-20"></div>
    </div>
  )
}

export default Skills
