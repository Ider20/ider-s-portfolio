/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "text-gray": "#4B5563",
        "title-black": "#111827",
        "blacktheme-bg01": "#111827",
        "blacktheme-bg02": "#374151",
        "blacktheme-text": "#D1D5DB",
        "blacktheme-bigtext": "#F9FAFB",
      },
      boxShadow: {
        "3xl": "30px 30px 1px rgba(0, 0, 0, .20)",
        "about-3xl": "-30px 30px 1px rgba(0, 0, 0, .20)",
        "exp-shad": "0 1px 3px rgba(0, 0, 0, .20)",
        "hover-shad": "1px 1px 5px rgba(0,0,0,.50)",
        "mob-shad": "-10px 15px 1px 0 #E5E7EB, 10px 15px 1px 0 #E5E7EB;",
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
