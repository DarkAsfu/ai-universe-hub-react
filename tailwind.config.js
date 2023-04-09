/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#a2ef81",

          "secondary": "#42d132",

          "accent": "#8fb9e0",

          "neutral": "#191320",

          "base-100": "#F7F5FA",

          "info": "#9ABBF4",

          "success": "#17875C",

          "warning": "#9F8609",

          "error": "#E5666D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

