import React from "react";
import { WorkDetail } from "./WorkDetail";
let workArray = [];
for (let i = 0; i < 3; i++) {
  workArray.push(<WorkDetail index={i} />);
}

export const Work = () => {
  return (
    <div className="px-8 py-8 lg:m-auto lg:px-56 bg-[#fff] lg:py-10 dark:bg-black">
      <div className="w-[70px] m-auto mb-4 text-text-gray bg-[#e5e7eb] rounded-[12px] h-6 text-xs items-center flex justify-center dark:bg-blacktheme-bg02 dark:text-blacktheme-text">
        Work
      </div>
      <div className="flex justify-normal lg:w-[340px] lg:m-auto my-10 text-text-gray dark:text-blacktheme-text">
        Some of the noteworthy projects I have built:
      </div>
      <div>{workArray}</div>
    </div>
  );
};

export default Work;
