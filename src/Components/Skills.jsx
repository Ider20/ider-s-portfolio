import React from "react";
import { DataBaseOfIconLoop } from "./DataBaseOfIconLoop";

export const Skills = (x) => {
  return (
    <div className="w-3/4 bg-white h-52 m-auto py-10 px-20">
      <div className="w-10 m-auto bg-[#b5b5b5]">Skills</div>
      <div>The skills, tools and technologies I am really good at:</div>
      <DataBaseOfIconLoop />
    </div>
  );
};

export default Skills;
