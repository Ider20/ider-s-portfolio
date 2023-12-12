import React from "react";
const symbol = `<II/>`;

export const Navigation = () => {
  return (
    <nav
      className={`flex w-100 m-auto justify-between bg-[#fff]  h-24 px-56 items-center rounded-t-lg dark:bg-blacktheme-bg01`}
    >
      <div className="text-3xl font-normal">{symbol}</div>
      <div className="flex gap-32 items-center">
        <div>
          <ul className="flex gap-10 ">
            <li className="hover:scale-110 cursor-pointer ease-in duration-100 dark:text-blackthemetext">
              About
            </li>
            <li className="hover:scale-110 cursor-pointer ease-in duration-100">
              Work
            </li>
            <li className="hover:scale-110 cursor-pointer ease-in duration-100">
              Testimonials
            </li>
            <li className="hover:scale-110 cursor-pointer ease-in duration-100">
              Contact
            </li>
          </ul>
        </div>
        <div className="flex gap-10">
          <img
            src="/Home/Desktop/theme_change.svg"
            className="hover:scale-110 cursor-pointer ease-in duration-100"
            id="test"
          />
          <img
            src="/Home/Desktop/download.svg"
            className="hover:scale-105 cursor-pointer ease-in duration-100"
          />
        </div>
        <div className="hidden">ljasdflkjh</div>
      </div>
    </nav>
  );
};

export default Navigation;
