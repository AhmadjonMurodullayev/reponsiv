/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          lg: "1210px",
        },
      },
      colors: {
        primary: "rgba(223, 124, 20, 1)",
      },
    },
  },
  plugins: [],
};
