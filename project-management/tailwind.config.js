/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fafafa",
        black: "#0f0b0a",
        lightGray: "#e5e3e2",
        gray: "#3b342d",
      },
    },
  },
  plugins: [],
};
