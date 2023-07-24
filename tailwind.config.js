/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          white: "#ffffff",
          black: "#1b1b1b",
        },
        accent: {
          lightblue: "#DBEAFE",
          blue: "#BFDBFE",
        },
        dark: {
          primary: "#12141a",
          secondary: "#1A1C23",
          border: "#343D48",
        },
      },
      fontSize: {
        heading: "16px",
        subHeading: "14px",
        paragraph: "12px",
        subParagraph: "10px",
      },
    },
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
  },
  plugins: [require("flowbite/plugin")],
};
