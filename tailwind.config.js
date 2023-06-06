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
        ["light-green"]: 'rgba(117, 251, 130, 0.5)',
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
      borderWidth: {
        ["1"]: "1px",
      },
      dropShadow: {
        clan: "-2px 2px 7px rgba(0,0,0,0.46)",
      },
    },
  },
  plugins: [],
};
