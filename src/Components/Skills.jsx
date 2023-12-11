import React from "react";
import { DataBaseOfIconLoop } from "./DataBaseOfIconLoop";

export const Skills = (x) => {
  return (
    <div className="w-3/4 bg-white h-100 m-auto py-10 px-20">
      <div className="text-text-gray w-14 flex justify-center m-auto bg-[#e5e7eb] rounded-[12px] h-6 text-xs items-center">
        Skills
      </div>
      <div className="w-[400px] m-auto my-10 text-text-gray">
        The skills, tools and technologies I am really good at:
      </div>
      <DataBaseOfIconLoop />
    </div>
  );
};

export default Skills;
