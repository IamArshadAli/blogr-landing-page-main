/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Overpass: ["Overpass", "sans-serif"],
        Ubuntu: ["Ubuntu", "sans-serif"],
      },
      colors: {
        // Primary
        LightRedP: "hsl(356, 100%, 66%)", // CTA text
        VeryLightRedP: "hsl(355, 100%, 74%)", // CTA Hover Background
        VeryDarkBlue: "hsl(208, 49%, 24%)", // Headings
        // Neutral
        White: "hsl(0, 0%, 100%)", // text
        GrayishBlue: "hsl(240, 2%, 79%)", // footer text
        VeryDarkGrayishBlue: "hsl(207, 13%, 34%)", // body copy
        VeryDarkBlackBlue: "hsl(240, 10%, 16%)", // footer background
        // Gradient
        // Intro/CTA
        VeryLightRed: "hsl(13, 100%, 72%)",
        LightRed: "hsl(353, 100%, 62%)",
        // body
        VeryDarkGrayBlue: "hsl(237, 17%, 21%)",
        VeryDarkDesaturatedBlue: "hsl(237, 23%, 32%)",
      },
      backgroundImage: {
        IntroCTA:
          "linear-gradient(to right, hsl(13, 100%, 72%), hsl(353, 100%, 62%))",
        primaryGradient:
          "linear-gradient(to bottom, hsl(237, 17%, 21%), hsl(237, 23%, 32%))",
      },
    },
  },
  plugins: [],
};
