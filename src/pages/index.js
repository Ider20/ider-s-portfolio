import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const symbol = `<II/>`;

export default function Home() {
  return (
    <>
      {/* header nav scene*/}
      <header class="w-full">
        <nav class="flex w-9/12 m-auto justify-between mt-16 h-24 px-20 items-center rounded-lg">
          <div class="text-3xl font-bold">{symbol}</div>
          <div class="flex gap-32 items-center">
            <div>
              <ul class="flex gap-10">
                <li class="hover:scale-110 cursor-pointer ease-in duration-100">
                  About
                </li>
                <li class="hover:scale-110 cursor-pointer ease-in duration-100">
                  Work
                </li>
                <li class="hover:scale-110 cursor-pointer ease-in duration-100">
                  Testimonials
                </li>
                <li class="hover:scale-110 cursor-pointer ease-in duration-100">
                  Contact
                </li>
              </ul>
            </div>
            <div class="flex gap-10">
              <img
                src="/Home/Desktop/theme_change.svg"
                class="hover:scale-110 cursor-pointer ease-in duration-100"
              />
              <img
                src="/Home/Desktop/download.svg"
                class="hover:scale-105 cursor-pointer ease-in duration-100"
              />
            </div>
          </div>
        </nav>
        {/* header info scene */}
        <div class="flex w-3/4 m-auto px-20 py-6 gap-10 rounded-lg">
          <div class="w-3/4">
            <div>
              <h1 class="text-4xl font-bold mb-5">Hi, I'm Ider</h1>
              <img />
              <p class="mb-5 text-xs">
                I am a full stack developer bla bla bla bla bla bla bla bla bla{" "}
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                bla bla blabla bla bla bla bla bla bla bla bla bla bla bla bla
                bla bla bla blabla bla bla bla bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla bla bla{" "}
              </p>
              <ul>
                <li class="flex gap-x-1 text-xs mb-2">
                  <img src="/Home/Desktop/location.svg" />
                  Ulaanbaatar, Mongolia
                </li>
                <li class="flex ml-2 gap-x-3 text-xs mb-8">
                  <img src="/Home/Desktop/dot.svg" />
                  Available for new project
                </li>
              </ul>
            </div>
            <div class="flex w-5 gap-x-3 ml-1">
              <img src="/Home/Desktop/github.svg" />
              <img src="/Home/Desktop/twitter.svg" />
              <img src="/Home/Desktop/figma.svg" />
            </div>
          </div>
          <div class="w-1/4 flex items-center bg-[#fff] shadow-3xl border-solid border-2 border-black-100 p-3">
            <img src="/next.svg" className="profile-photo" />
          </div>
        </div>
      </header>
    </>
  );
}
