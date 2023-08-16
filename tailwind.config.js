/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "500px",
        md: "750px",
        lg: "1000px",
        xl: "1300px",
      },
      colors: {
        tp: "#00000019",
        navbg: "#4d4d4d",
        input: "#91897A",
      },
    },
  },
  plugins: [],
};
