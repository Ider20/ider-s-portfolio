import React from "react";
import { WorkDetail } from "./WorkDetail";
let workArray = [];
for (let i = 0; i < 3; i++) {
  workArray.push(<WorkDetail index={i} />);
}

export const Work = () => {
  return (
    <div className="w-full py-[64px] lg:m-auto lg:py-[96px] bg-[#fff] dark:bg-black">
      <div className="px-4 lg:w-[1440px] m-auto lg:px-[80px]">
        <div className="w-[70px] m-auto mb-4 text-text-gray bg-[#e5e7eb] rounded-[12px] h-6 text-xs items-center flex justify-center dark:bg-blacktheme-bg02 dark:text-blacktheme-text">
          Work
        </div>
        <div className="text-center lg:w-[340px] lg:m-auto my-10 text-text-gray dark:text-blacktheme-text">
          Some of the noteworthy projects I have built:
        </div>
        <div>{workArray}</div>
      </div>
    </div>
  );
};

export default Work;
