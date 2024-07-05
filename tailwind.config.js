/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#14B8A6",
        "primary-content": "#ff49db",
        "secondary-color": "#94a3b8",
        "secondary-color-100" : "#f1f5f9",
        "secondary-content": "#ff49db",
      },
    },
  },
  plugins: [],
};
