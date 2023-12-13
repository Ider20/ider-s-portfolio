import React, { useEffect } from "react";
import { IconDarkMode } from "./Icons/IconDarkMode";
import { IconMenu } from "./Icons/IconMenu";
const symbol = `<II/>`;

export const Navigation = () => {
  // const toggleTheme = () => {
  //   const hmtlElement = document.getElementById("html");
  //   hmtlElement.classList.add("dark");
  // };
  return (
    <nav className="flex justify-around px-8 lg:flex m-auto lg:justify-between bg-[#fff] h-24 lg:px-56 items-center dark:bg-blacktheme-bg01">
      <div className="text-3xl font-bold lg:text-3xl lg:font-bold lg:dark:text-blacktheme-bigtext">
        {symbol}
      </div>
      <div className="flex gap-32 items-center">
        <div>
          <ul className="hidden lg:flex lg:gap-10">
            <li className="hover:scale-110 cursor-pointer ease-in duration-100 dark:text-blacktheme-text">
              About
            </li>
            <li className="hover:scale-110 cursor-pointer ease-in duration-100 dark:text-blacktheme-text">
              Work
            </li>
            <li className="hover:scale-110 cursor-pointer ease-in duration-100 dark:text-blacktheme-text">
              Testimonials
            </li>
            <li className="hover:scale-110 cursor-pointer ease-in duration-100 dark:text-blacktheme-text">
              Contact
            </li>
          </ul>
        </div>
        <div className="flex gap-10">
          <img
            src="/Home/Desktop/theme_change.svg"
            className="hidden lg:flex lg:hover:scale-110 lg:cursor-pointer lg:ease-in lg:duration-100 dark:hidden"
            // onClick={darkTheme()}
            id="test"
            // onClick={toggleTheme()}
          />
          <div className="hidden dark:flex items-center">
            <IconDarkMode />
          </div>
          <div className="hidden lg:flex lg:bg-title-black text-white py-2 px-4 rounded-[12px] hover:scale-105 ease-in-out duration-300 cursor-pointer dark:bg-blacktheme-bigtext dark:text-blacktheme-bg01">
            Download CV
          </div>
        </div>
        <div className="flex lg:hidden">
          <IconMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
