/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        // padding: '15rem',
      },
    },
    screens: {
      sm: "576px",
      md: "960px",
      lg: "1240px",
    },
  },
  plugins: [],
};
