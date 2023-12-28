import React from "react";
import { IconUpWork } from "./Icons/IconUpWork";

const experienceData = [
  {
    icon: <IconUpWork />,
    exp: "Sr. Frontend Developer",
    ability: [
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut pretium arcu et massa semper, id fringilla leo semper.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    date: "Nov 2021 - Present",
  },
  {
    icon: <IconUpWork />,
    exp: "Team Lead.",
    ability: [
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    date: "Jul 2017 - Oct 2021",
  },
  {
    icon: <IconUpWork />,
    exp: "Full Stack Developer",
    ability: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. asdasdLorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    date: "Dec 2015 - May 2017",
  },
];
export const ExperienceDetail = () => {
  return (
    <>
      <div>
        {experienceData.map((exper, index) => {
          //   console.log(exper, "exper", index, "index");
          return (
            <div
              key={index}
              className="mb-4 lg:flex lg:justify-between lg:mb-4 lg:mt-6 bg-[#fff] p-8 rounded-lg shadow-exp-shad hover:scale-[1.03] ease-in-out duration-300 cursor-pointer dark:bg-[#1F2937]"
            >
              <div>
                <div className="mb-4 lg:w-1/6 ">{exper.icon}</div>
              </div>
              <div className="flex flex-col-reverse lg:w-3/4 lg:flex lg:justify-between lg:flex-row">
                <div className="w-[80%]">
                  <h1 className="mb-4 text-base text-title-black lg:text-xl font-semibold lg:mb-4 lg:mx-[-25px] dark:text-blacktheme-bigtext">
                    {exper.exp}
                  </h1>
                  <ul className="ml-5">
                    {exper.ability.map((aby, index) => (
                      <li
                        key={index}
                        className="text-text-gray list-disc text-sm dark:text-blacktheme-text"
                      >
                        {aby}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mb-4 text-text-gray text-xs lg:w-[30%] lg:flex lg:justify-end dark:text-blacktheme-text">
                  {exper.date}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
