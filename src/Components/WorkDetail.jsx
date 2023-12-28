import React from "react";
import { IconShareBtn } from "../Components/Icons/IconShareBtn";

const workDescription = [
  {
    title: "Fiskil",
    descr:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    platform: [
      "React",
      "Next.js",
      "Typescript",
      "Nest,js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
  },
];
export const WorkDetail = (props) => {
  // console.log("index", props.index);
  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  return (
    <div
      className={`lg:flex mt-5 ${
        props.index == 1 && "flex-row-reverse"
      } rounded-xl shadow-exp-shad hover:shadow-hover-shad ease-in-out duration-300 dark:bg-[#1f2937]`}
    >
      <div className="lg:w-1/2 p-5 bg-[#f9fafb] rounded-xl dark:bg-blacktheme-bg02">
        <img src="/Home/Desktop/work.png" alt="" className="w-100" />
      </div>
      <div className="lg:w-[50%] p-5">
        {workDescription.map((work, index) => {
          return (
            <div key={index}>
              <div className="text-[#111827] text-xl font-bold mb-4 dark:text-blacktheme-bigtext">
                {work.title}
              </div>
              <div className="text-text-gray mb-8 dark:text-blacktheme-text">
                {work.descr}
              </div>
              <div className="flex w-[78%] lg:flex gap-2 flex-wrap lg:gap-4 mb-8">
                {work.platform.map((plat, index) => (
                  <div
                    key={index}
                    className="bg-[#e5e7eb] text-xs text-text-gray px-4 py-1 rounded-xl cursor-pointer hover:shadow-hover-shad ease-in-out duration-300 hover:scale-110 dark:bg-blacktheme-bg02 dark:text-blacktheme-text"
                  >
                    {plat}
                  </div>
                ))}
              </div>
              <div className="cursor-pointer w-[30px] p-1 rounded-lg hover:shadow-hover-shad ease-in-out duration-300">
                <IconShareBtn />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkDetail;
