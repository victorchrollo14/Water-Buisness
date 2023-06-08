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
        ["l-blue-tr"]: "rgba(10, 151, 202, 0.5)",
        ["light-black"]: "#333333",
        ["light-green"]: "rgba(117, 251, 130, 0.5)",
        ["lightest-blue"]: "#E9F9FF",
        ["tblue"]: "#00D1FF",
      },
      fontFamily: {
        monospace: [
          "SF Mono",
          "Fira Code",
          "Fira Mono",
          "Roboto Mono",
          "monospace",
        ],
        sansF: [
          "Calibre",
          "Inter",
          "San Francisco",
          "SF Pro Text",
          "-apple-system",
          "system-ui",
          "sans-serif",
        ],
      },
      height: {
        ["60vh"]: "60vh",
      },
      width: {
        ["30vw"]: "30vw",
        ["50vw"]: "50vw",
        ["35vw"]: "35vw",
        ["40vw"]: "40vw",
      },
      borderWidth: {
        ["1"]: "1px",
      },
      dropShadow: {
        clan: "-2px 2px 7px rgba(0,0,0,0.46)",
        prod: "10px 10px 5px 5px rgba(0,0,0,0.26)",
      },
      padding: {
        ["10vw"]: "10vw",
      },
      fontSize: {
        clampHead: "clamp(.8rem, 2vw, 1.25rem)",
      },
    },
  },
  plugins: [],
};
