import React from "react";

export const AboutMe = () => {
  return (
    <div className="w-3/4 m-auto  px-20 py-10 bg-[#f9fafb]">
      <div className="flex justify-center mb-10 bg-[#e5e7eb] w-24 m-auto rounded-[12px] text-xs h-6 items-center">
        About me
      </div>
      <div className="flex justify-around ">
        <div className="h-[480px] shadow-about-3xl">
          <img src="/Home/Desktop/about_me.png" />
        </div>
        <div className="w-2/4 text-sm text-justify">
          <p className="mb-2 text-2xl font-bold">
            Curious about me? Here you have it:
          </p>
          <p className="mb-2 font-normal">
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p className="mb-2 font-normal">
            I began my journey as a web developer in 2015, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
          </p>
          <p className="mb-2 font-normal">
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </p>
          <p className="mb-2 font-normal">
            When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
          </p>
          <p className="mb-2 font-normal">Finally, some quick bits about me.</p>
          <div className="mb-2 flex gap-24  font-normal">
            <ul className="list-disc list-inside">
              <li>B.E. in Computer Engineering</li>
              <li>Full time freelancer</li>
            </ul>
            <ul className="list-disc list-inside font-normal">
              <li>Avid learner</li>
              <li>Aspiring indie hacker</li>
            </ul>
          </div>
          <p className="mb-2 ">
            One last thing, I'm available for freelance work, so feel free to
            reach out and say hello! I promise I don't bite 😉
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
