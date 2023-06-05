/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        ["1"]: "1px",
      },
      colors: {
        ["l-blue"]: "#0A97CA",
      },
    },
  },
  plugins: [],
};
