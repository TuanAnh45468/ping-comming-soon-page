/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    colors: {
      blue: "hsl(223, 87%, 63%)",
      "pale-blue": "hsl(223, 100%, 88%)",
      "light-red": "hsl(354, 100%, 66%)",
      gray: "hsl(0, 0%, 59%)",
      "dark-blue": "hsl(209, 33%, 12%)",
    },
    screens: {
      mobile: "375px",
      laptop: "1440px",
    },
    extend: {
      fontFamily: {
        "libre-franklin": ["Libre Franklin", "sans-serif"],
      },
      fontWeight: {
        light: 300,
        "semi-bold": 600,
        bold: 700,
      },
    },
  },
  plugins: [],
};
