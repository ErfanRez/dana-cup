/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1fb6ff",
        "primary-content": "#ff49db",
        secondary: "#1fb6ff",
        "secondary-content": "#ff49db",
      },
    },
  },
  plugins: [],
};
