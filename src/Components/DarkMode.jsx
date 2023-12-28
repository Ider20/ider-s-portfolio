import React, { createElement, useState } from "react";
import { IconDarkMode } from "./Icons/IconDarkMode";

export const DarkMode = ({ dark, setDark }) => {
  // const [dark, setDark] = useState(false);

  //   function darkMode() {
  //  const darkMode =
  //   }
  const darkMode = () => {
    setDark(!dark);
  };
  return (
    <div className="">
      <button onClick={darkMode}>
        <span>
          <img
            src="/Home/Desktop/theme_change.svg"
            alt=""
            className="hidden lg:flex lg:hover:scale-110 lg:cursor-pointer lg:ease-in lg:duration-100 dark:hidden "
          />
        </span>
        <span className="hidden dark:flex items-center justify-center">
          <IconDarkMode />
        </span>
      </button>
    </div>
  );
};

export default DarkMode;
