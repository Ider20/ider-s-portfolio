import React from "react";
import { DataBaseOfIconLoop } from "./DataBaseOfIconLoop";

export const Skills = (x) => {
  return (
    <div className="py-10 px-8 pb-20 bg-white lg:h-100 lg:m-auto lg:py-10 lg:px-56">
      <div className="text-text-gray w-14 flex justify-center m-auto bg-[#e5e7eb] rounded-[12px] h-6 text-xs items-center">
        Skills
      </div>
      <div className="my-5 flex justify-center lg:w-[400px] lg:m-auto lg:my-10 text-text-gray">
        The skills, tools and technologies I am really good at:
      </div>
      <DataBaseOfIconLoop />
    </div>
  );
};

export default Skills;
