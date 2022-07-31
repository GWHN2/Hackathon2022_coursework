/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  screens: {
    sm: "640px",
    // => @media (min-width: 640px) { ... }

    md: "768px",
    // => @media (min-width: 768px) { ... }

    lg: "1024px",
    // => @media (min-width: 1024px) { ... }

    xl: "1280px",
    // => @media (min-width: 1280px) { ... }

    "2xl": "1536px",
    // => @media (min-width: 1536px) { ... }
  },
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#e7e2f2",
          200: "#cfc4e6",
          300: "#b8a7d9",
          400: "#a089cd",
          500: "#886cc0",
          600: "#6d569a",
          700: "#524173",
          800: "#362b4d",
          900: "#1b1626",
        },
        secondary: {
          100: "#ffedf7",
          200: "#ffdcef",
          300: "#ffcae7",
          400: "#ffb9df",
          500: "#ffa7d7",
          600: "#cc86ac",
          700: "#996481",
          800: "#664356",
          900: "#33212b",
        },
        primary_hover: "#6c4bae",
        primary_light: "#a590cf",
        primary_dark: "#402c67",
      },
    },
  },
  container: {
    center: true,
  },
  plugins: [],
  variants: ["responsive"],
};
