/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        lightBg: "#FDF8EE",
        shopifyGreen: "#008060",
        shopifyDarkgreen: "#004C3F",
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    themes: [
      {
        mytheme: {
          primary: "#008060",
          "primary-focus": "#004C3F",
          "primary-content": "#ffff",
          secondary: "#004C3F",

          accent: "#1FB2A6",

          neutral: "#191D24",

          "base-100": "#FFFF",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
};
