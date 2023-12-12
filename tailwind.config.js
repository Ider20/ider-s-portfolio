/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "text-gray": "#4B5563",
        "title-black": "#111827",
      },
      boxShadow: {
        "3xl": "10px 10px 1px rgba(0, 0, 0, .20)",
        "about-3xl": "-10px 10px 1px rgba(0, 0, 0, .20)",
        "exp-shad": "0 1px 3px rgba(0, 0, 0, .20)",
        "hover-shad": "1px 1px 5px rgba(0,0,0,.50)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
