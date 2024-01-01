import React from "react";
import { IconJavaScript } from "./Icons/IconJavaScript";
import { IconTypeScript } from "./Icons/IconTypeScript";
import { IconReact } from "./Icons/IconReact";
import { IconNextJs } from "./Icons/IconNextJs";
import { IconNodeJs } from "./Icons/IconNodeJs";
import { IconExpressJs } from "./Icons/IconExpressJs";
import { IconNest } from "./Icons/IconNest";
import { IconSocket } from "./Icons/IconSocket";
import { IconPostgree } from "./Icons/IconPostgree";
import { IconMongo } from "./Icons/IconMongo";
import { IconSass } from "./Icons/IconSass";
import { IconTailwind } from "./Icons/IconTailwind";
import { IconFigma } from "./Icons/IconFigma";
import { IconCypress } from "./Icons/IconCypress";
import { IconStoryBook } from "./Icons/IconStoryBook";
import { IconGit } from "./Icons/IconGit";
import { IconNextjsDark } from "./Icons/IconNextjsDark";
import { IconExpressDark } from "./Icons/IconExpressDark";
import { IconSocketDark } from "./Icons/IconSocketDark";
import { IconCypressDark } from "./Icons/IconCypressDark";

const iconData = [
  { icon: <IconJavaScript />, name: "Javasript" },
  { icon: <IconTypeScript />, name: "Typescript" },
  { icon: <IconReact />, name: "React" },
  { icon: <IconNextJs />, name: "Next.js" },
  { icon: <IconNodeJs />, name: "Node.js" },
  { icon: <IconExpressJs />, name: "Express.js" },
  { icon: <IconNest />, name: "Nest.js" },
  { icon: <IconSocket />, name: "Socket.io" },
  { icon: <IconPostgree />, name: "PostgreSQL" },
  { icon: <IconMongo />, name: "MongoDB" },
  { icon: <IconSass />, name: "Sass/Scss" },
  { icon: <IconTailwind />, name: "Tailwindcss" },
  { icon: <IconFigma />, name: "Figma" },
  { icon: <IconCypress />, name: "Cypress" },
  { icon: <IconStoryBook />, name: "StoryBook" },
  { icon: <IconGit />, name: "Git" },
];

const iconDataDark = [
  { icon: <IconJavaScript />, name: "Javasript" },
  { icon: <IconTypeScript />, name: "Typescript" },
  { icon: <IconReact />, name: "React" },
  { icon: <IconNextjsDark />, name: "Next.js" },
  { icon: <IconNodeJs />, name: "Node.js" },
  { icon: <IconExpressDark />, name: "Express.js" },
  { icon: <IconNest />, name: "Nest.js" },
  { icon: <IconSocketDark />, name: "Socket.io" },
  { icon: <IconPostgree />, name: "PostgreSQL" },
  { icon: <IconMongo />, name: "MongoDB" },
  { icon: <IconSass />, name: "Sass/Scss" },
  { icon: <IconTailwind />, name: "Tailwindcss" },
  { icon: <IconFigma />, name: "Figma" },
  { icon: <IconCypressDark />, name: "Cypress" },
  { icon: <IconStoryBook />, name: "StoryBook" },
  { icon: <IconGit />, name: "Git" },
];
export const DataBaseOfIconLoop = ({ dark }) => {
  // let arrayIcon = [];
  // let arrayName = [];

  return (
    <>
      <div className="">
        <div className="flex flex-wrap gap-y-8 gap-x-8 justify-center lg:flex lg:gap-x-24 lg:flex-wrap lg:gap-y-8 lg:my-8 lg:justify-between">
          {!dark
            ? iconData.map((skill, index) => {
                // console.log(skill.icon, "skill");
                return (
                  <div key={index}>
                    <p className="hover:scale-110 ease-in-out duration-100 cursor-pointer">
                      {skill.icon}
                    </p>
                    <p className="flex text-xs justify-center my-2 text-text-gray">
                      {skill.name}
                    </p>
                  </div>
                );
              })
            : iconDataDark.map((skill, index) => {
                return (
                  <div key={index}>
                    <p className="hover:scale-110 ease-in-out duration-100 cursor-pointer">
                      {skill.icon}
                    </p>
                    <p className="flex text-xs justify-center my-2 text-blacktheme-text">
                      {skill.name}
                    </p>
                  </div>
                );
              })}
        </div>
      </div>
    </>
  );
};
