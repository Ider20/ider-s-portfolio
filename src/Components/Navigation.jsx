import React, { useEffect, useState } from "react";
import { IconDarkMode } from "./Icons/IconDarkMode";
import { IconMenu } from "./Icons/IconMenu";
import { DarkMode } from "../Components/DarkMode";
import { IconMenuDark } from "./Icons/IconMenuDark";
import jsPDF from "jspdf";
// import { IconDarkMode } from "./Icons/IconDarkMode";
// import MenuItem from "@material-ui/core/MenuItem";

const symbol = `<II/>`;
export const Navigation = ({ dark, setDark }) => {
  // const toggleTheme = () => {
  //   const hmtlElement = document.getElementById("html");
  //   hmtlElement.classList.add("dark");
  // };
  const generatePDF = () => {
    const pdf = new jsPDF();
    pdf.text("Hello, Here is my resume in PDF file!", 60, 50);
    pdf.save("ider_resume.pdf");
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="w-full flex justify-between bg-[#fff] h-[68px] items-center dark:bg-[#030712] ease-in-out duration-300">
        <div className="w-[375px] p-4 lg:w-[1440px] lg:px-[80px] m-auto flex justify-between">
          <div className="text-3xl font-bold dark:text-blacktheme-bigtext lg:text-3xl lg:font-bold lg:dark:text-blacktheme-bigtext dark:ease-in-out duration-300 ">
            {symbol}
          </div>
          <div className="flex items-center">
            <div>
              <ul className="hidden lg:flex lg:gap-6 mr-6 text-[#4B5563] duration-300 border-e pr-6 dark:border-[#1F2937] dark:ease-in-out dark:duration-300">
                <li className="hover:scale-110 cursor-pointer ease-in duration-100 dark:text-blacktheme-text">
                  About
                </li>
                <li className="hover:scale-110 cursor-pointer ease-in duration-100 dark:text-blacktheme-text">
                  Work
                </li>
                <li className="hover:scale-110 cursor-pointer ease-in duration-100 dark:text-blacktheme-text">
                  Testimonials
                </li>
                <li
                  className={`hover:scale-110 cursor-pointer ease-in duration-100 dark:text-blacktheme-text`}
                >
                  Contact
                </li>
              </ul>
            </div>
            <div className="flex mr-8">
              <DarkMode setDark={setDark} dark={dark} />
            </div>

            <button
              className="hidden lg:flex lg:bg-title-black text-white py-2 px-4 rounded-[12px] hover:scale-105 ease-in-out duration-300 cursor-pointer dark:bg-blacktheme-bigtext dark:text-blacktheme-bg01 active:scale-95"
              onClick={generatePDF}
            >
              Download CV
            </button>
          </div>
          <div className=" flex flex-col items-center lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                dark ? (
                  <i class="fa-solid fa-xmark" style={{ color: "#ffffff" }}></i>
                ) : (
                  <i class="fa-solid fa-xmark"></i>
                )
              ) : dark ? (
                <IconMenuDark />
              ) : (
                <IconMenu />
              )}
            </button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="absolute p-4 mt-[65px] border-t dark:border-[#1F2937] bg-white flex flex-col gap-6 w-[375px] dark:bg-[#030712] dark:text-blacktheme-text dark:ease-in-out duration-300">
          <div className="font-medium text-[#4B5563] flex flex-col gap-3 border-b dark:border-[#1F2937] py-5 dark:text-blacktheme-text">
            <p>About</p>
            <p>Work</p>
            <p>Testimonials</p>
            <p>Contact</p>
          </div>
          <div /*onClick={() => setIsOpen(!isOpen)}*/>
            <p
              className="flex text-[#4B5563] items-center justify-between cursor-pointer mb-1 dark:text-blacktheme-text"
              onClick={() => setDark(!dark)}
            >
              Switch Theme{" "}
              <button>
                {dark ? (
                  <IconDarkMode />
                ) : (
                  <img src="/Home/Desktop/theme_change.svg" alt="" />
                )}
              </button>
            </p>
          </div>
          <div onClick={() => setIsOpen(!isOpen)}>
            <button
              className="flex items-center w-full h-[36px] bg-title-black text-white justify-center m-auto rounded-[12px] mb-6  dark:bg-blacktheme-bigtext dark:text-blacktheme-bg01 dark:ease-in-out duration-300 active:scale-95"
              onClick={generatePDF}
            >
              Download CV
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
