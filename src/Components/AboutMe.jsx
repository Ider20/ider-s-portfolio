import React from "react";

export const AboutMe = ({ dark }) => {
  return (
    <div className="w-full bg-[#f9fafb] dark:bg-blacktheme-bg01 dark:ease-in-out duration-300">
      <div className="py-[64px] px-4 lg:w-[1216px] lg:py-[96px] lg:m-auto lg:px-[80px] ">
        <div className="flex justify-center mb-12 bg-[#e5e7eb] w-24 m-auto rounded-[12px] text-xs h-6 items-center dark:bg-blacktheme-bg02 dark:text-blacktheme-text dark:ease-in-out duration-300">
          About me
        </div>
        <div className="lg:flex lg:justify-between lg:ml-[30px]">
          <div className="m-auto w-[280px] mb-12 lg:mb-0 lg:m-0 lg:w-[400px] shadow-mob-shad lg:h-[480px] lg:shadow-about-3xl dark:shadow-blacktheme-bg02">
            {!dark ? (
              <img src="/Home/Desktop/about_me.png" />
            ) : (
              <img src="/Home/Desktop/about_me_dark.png" />
            )}
          </div>
          <div className="lg:w-[503px] lg:text-sm lg:text-justify">
            <p className="text-2xl font-bold  text-[#111827] lg:mb-6 lg:text-[30px] lg:font-bold dark:text-blacktheme-bigtext dark:ease-in-out duration-300">
              Curious about me? Here you have it:
            </p>
            <p className="mb-4 text-[#4B5563] text-base font-normal dark:text-blacktheme-text dark:ease-in-out duration-300">
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </p>
            <p className="mb-4 text-[#4B5563] text-base font-normal dark:text-blacktheme-text dark:ease-in-out duration-300">
              I began my journey as a web developer in 2015, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I'm building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
            </p>
            <p className="mb-4  text-[#4B5563] text-base font-normal dark:text-blacktheme-text dark:ease-in-out duration-300">
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </p>
            <p className="mb-4 text-[#4B5563] text-base font-normal dark:text-blacktheme-text dark:ease-in-out duration-300">
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or
              you can follow me on GitHub.
            </p>
            <p className="mb-4 text-[#4B5563] text-base lg:mb-2 font-normal dark:text-blacktheme-text dark:ease-in-out duration-300">
              Finally, some quick bits about me.
            </p>
            <div className="mb-4 flex lg:gap-6 lg:font-normal dark:text-blacktheme-text dark:ease-in-out duration-300">
              <ul className="list-disc text-[#4B5563] px-5 lg:list-disc lg:list-inside">
                <li className="mb-[10px] dark:text-blacktheme-text text-base">
                  B.E. in Computer Engineering
                </li>
                <li className="dark:text-blacktheme-text text-base">
                  Full time freelancer
                </li>
              </ul>
              <ul className="list-disc text-[#4B5563] lg:list-disc lg:list-inside ">
                <li className="mb-[10px] dark:text-blacktheme-text text-base">
                  Avid learner
                </li>
                <li className="dark:text-blacktheme-text text-base">
                  Aspiring indie hacker
                </li>
              </ul>
            </div>
            <p className=" lg:mb-2 text-[#4B5563] text-base dark:text-blacktheme-text dark:ease-in-out duration-300">
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
