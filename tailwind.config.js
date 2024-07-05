/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#14B8A6",
        "primary-content": "#ff49db",
        "secondary-100": "#94a3b8",
        "secondary-200": "#64748B",
      },
    },
  },
  plugins: [],
};
