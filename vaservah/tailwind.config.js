/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      phone: "480px",
      // => @media (min-width: 480px) { ... }

      tablet: "760px",
      // => @media (min-width: 760px) { ... }

      phablet: "950px",
      // => @media (min-width: 900px) { ... }

      desktop: "1000px",
      // => @media (min-width: 1000px) { ... }
    },
  },
  plugins: [],
};
