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
      <nav className="flex justify-between px-8 lg:flex m-auto lg:justify-between bg-[#fff] h-24 lg:px-56 items-center dark:bg-blacktheme-bg01 ease-in-out duration-300">
        <div className="text-3xl font-bold dark:text-blacktheme-bigtext lg:text-3xl lg:font-bold lg:dark:text-blacktheme-bigtext dark:ease-in-out duration-300 ">
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
              <li
                className={`hover:scale-110 cursor-pointer ease-in duration-100 dark:text-blacktheme-text`}
              >
                Contact
              </li>
            </ul>
          </div>
          <div className="flex gap-10">
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
      </nav>
      {isOpen && (
        <div className="absolute mr-10 p-4 bg-white flex flex-col gap-6 w-[375px] dark:bg-[#1f2937] dark:text-blacktheme-text dark:ease-in-out duration-300">
          <div className="font-semibold flex flex-col gap-3">
            <p>About</p>
            <p>Work</p>
            <p>Testimonials</p>
            <p>Contact</p>
          </div>
          <hr />
          <div onClick={() => setIsOpen(!isOpen)}>
            <p
              className="flex items-center justify-between cursor-pointer mb-1"
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
              className="bg-title-black text-white flex justify-center py-2 px-4 rounded-[12px] mb-6  dark:bg-blacktheme-bigtext dark:text-blacktheme-bg01 dark:ease-in-out duration-300 active:scale-95"
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
