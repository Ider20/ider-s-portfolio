import React from "react";

export const AboutMe = () => {
  return (
    <div className="py-10 lg:m-auto lg:px-56 lg:py-10 bg-[#f9fafb] dark:bg-blacktheme-bg01">
      <div className="flex justify-center mb-10 bg-[#e5e7eb] w-24 m-auto rounded-[12px] text-xs h-6 items-center dark:bg-blacktheme-bg02 dark:text-blacktheme-text">
        About me
      </div>
      <div className="px-8 lg:flex lg:justify-around ">
        <div className="mb-24 shadow-mob-shad lg:h-[480px] lg:shadow-about-3xl dark:shadow-blacktheme-bg02">
          <img src="/Home/Desktop/about_me.png" />
        </div>
        <div className="lg:w-2/4 lg:text-sm lg:text-justify">
          <p className="text-2xl font-bold my-5 lg:mb-2 lg:text-2xl lg:font-bold dark:text-blacktheme-bigtext">
            Curious about me? Here you have it:
          </p>
          <p className="mb-2 font-normal dark:text-blacktheme-text">
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p className="mb-2 font-normal dark:text-blacktheme-text">
            I began my journey as a web developer in 2015, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
          </p>
          <p className="mb-2 font-normal dark:text-blacktheme-text">
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </p>
          <p className="mb-2 font-normal dark:text-blacktheme-text">
            When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
          </p>
          <p className="mb-5 lg:mb-2 font-normal dark:text-blacktheme-text">
            Finally, some quick bits about me.
          </p>
          <div className="mb-5 flex lg:gap-24  lg:font-normal dark:text-blacktheme-text">
            <ul className="list-disc px-5 lg:list-disc lg:list-inside">
              <li className="mb-2">B.E. in Computer Engineering</li>
              <li>Full time freelancer</li>
            </ul>
            <ul className="list-disc lg:list-disc lg:list-inside ">
              <li className="mb-2">Avid learner</li>
              <li>Aspiring indie hacker</li>
            </ul>
          </div>
          <p className="mb-20 lg:mb-2 dark:text-blacktheme-text">
            One last thing, I'm available for freelance work, so feel free to
            reach out and say hello! I promise I don't bite 😉
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
