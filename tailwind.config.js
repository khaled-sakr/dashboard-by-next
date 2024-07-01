/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      smd: "900px",
      // => @media (min-width: 900px) { ... }
      xs: "550px",
      // => @media (min-width: 500px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1210px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1340px",
      // => @media (min-width: 1536px) { ... }
      "3xl": "1480px",
      // => @media (min-width: 1580px) { ... }
      "4xl": "1580px",
      // => @media (min-width: 1580px) { ... }
    },
    extend: {
      colors: {
        vanilla: {
          50: "##ccb69b",
          100: "#b8a48c",
          200: "#a3927c",
          300: "#8f7f6d",
          400: "#7a6d5d",
          500: "#665b4e",
          600: "#52493e",
          700: "#3d372f",
          800: "#29241f",
          900: "#14120f",
        },
      },
      gridTemplateColumns: {
        // Simple 13 column grid
        13: "repeat(13, minmax(0, 1fr))",
      },
    },
    plugins: [],
  },
  plugins: [],
};
