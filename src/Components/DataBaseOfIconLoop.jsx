import React from "react";
import { IconJavaScript } from "./Icons/IconJavaScript";
import { IconTypeScript } from "./Icons/IconTypeScript";
import { IconReact } from "./Icons/IconReact";
import { IconNextJs } from "./Icons/IconNextJs";
import { IconNodeJs } from "./Icons/IconNodeJs";
import { IconExpressJs } from "./Icons/IconExpressJs";
import { IconNest } from "./Icons/IconNest";
// import { IconSocket } from "./icon/IconSocket";
// import { IconPostgree } from "./Icons/IconPostgree";
import { IconMongo } from "./Icons/IconMongo";
import { IconSass } from "./Icons/IconSass";
import { IconTailwind } from "./Icons/IconTailwind";
import { IconFigma } from "./Icons/IconFigma";
import { IconCypress } from "./Icons/IconCypress";
import { IconStoryBook } from "./Icons/IconStoryBook";
import { IconGit } from "./Icons/IconGit";

const iconData = [
  { icon: <IconJavaScript />, name: "Javasript" },
  { icon: <IconTypeScript />, name: "Typescript" },
  { icon: <IconReact />, name: "React" },
  { icon: <IconNextJs />, name: "Next.js" },
  { icon: <IconNodeJs />, name: "Node.js" },
  { icon: <IconExpressJs />, name: "Express.js" },
  { icon: <IconNest />, name: "Nest.js" },
  //   { icon: <IconSocket />, name: "Socket.io" },
  //   { icon: <IconPostgree />, name: "PostgreSQL" },
  { icon: <IconMongo />, name: "MongoDB" },
  { icon: <IconSass />, name: "Sass/Scss" },
  { icon: <IconTailwind />, name: "Tailwindcss" },
  { icon: <IconFigma />, name: "Figma" },
  { icon: <IconCypress />, name: "Cypress" },
  { icon: <IconStoryBook />, name: "StoryBook" },
  { icon: <IconGit />, name: "Git" },
];
export const DataBaseOfIconLoop = () => {
  let arrayIcon = [];
  let arrayName = [];

  iconData.forEach((x) => {
    console.log(x.name);
    // arrayIcon.push(x.icon);
    arrayName.push(x.name);
  });
  return (
    <>
      <div></div>
      <div className="flex flex-wrap w-3/4 gap-2 text-xs break-words">
        {arrayName}
      </div>
    </>
  );
};
