import React, { createElement, useState } from "react";
import { IconDarkMode } from "./Icons/IconDarkMode";

export const DarkMode = ({ setDark, dark }) => {
  //   const [dark, setDark] = useState(false);

  //   function darkMode() {
  //  const darkMode =
  console.log(dark);
  //   }
  return (
    <div className="">
      <button onClick={() => setDark(true)}>
        <img
          src="/Home/Desktop/theme_change.svg"
          alt=""
          className="hidden lg:flex lg:hover:scale-110 lg:cursor-pointer lg:ease-in lg:duration-100 dark:hidden"
        />
        <div className="hidden dark:flex items-center">
          <IconDarkMode />
        </div>
      </button>
    </div>
  );
};

export default DarkMode;
