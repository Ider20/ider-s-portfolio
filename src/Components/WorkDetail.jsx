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
export const WorkDetail = () => {
  return (
    <div className="flex mt-5 rounded-xl shadow-exp-shad hover:shadow-hover-shad ease-in-out duration-300">
      <div className="w-[50%] p-5 bg-[#f9fafb] rounded-xl">
        <img src="/Home/Desktop/work.png" alt="" />
      </div>
      <div className="w-[50%] p-5">
        {workDescription.map((work, index) => {
          return (
            <div key={index}>
              <div className="text-[#111827] text-xl font-bold mb-4">
                {work.title}
              </div>
              <div className="text-text-gray mb-8">{work.descr}</div>
              <div className="flex flex-wrap gap-4 mb-8">
                {work.platform.map((plat, index) => (
                  <div
                    key={index}
                    className="bg-[#e5e7eb] text-xs text-text-gray px-2 py-1 rounded-xl cursor-pointer hover:shadow-hover-shad ease-in-out duration-300 hover:scale-110"
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
