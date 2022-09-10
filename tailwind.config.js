/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gtwalsheim: ["GTWalsheimPro", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Desktop base 16px
        "d-h1": "48.83px",
        "d-h2": "39.06px",
        "d-h3": "31.25px",
        "d-h4": "25.00px",
        "d-body-intro": "20.00px",
        "d-body": "16.00px",
        "d-caption": "12.80px",
        "d-small": "10.24px",

        // Tablet base 12px
        "t-h1": "36.62px",
        "t-h2": "29.30px",
        "t-h3": "23.44px",
        "t-h4": "18.75px",
        "t-body-intro": "18.75px",
        "t-body": "15.00px",
        "t-caption": "12.00px",
        "t-small": "9.60px",

        // Mobile base 10px
        "m-h1": "30.52px",
        "m-h2": "24.41px",
        "m-h3": "19.53px",
        "m-h4": "19.53px",
        "m-body-intro": "15.63px	",
        "m-body": "12.50px",
        "m-caption": "10.00px",
        "m-small": "8.00px",
      },
      screens: {
        tab: "744px",
        lap: "1024px",
        desk: "1280px",
        "desk-lg": "1440px",
      },
    },
  },
  plugins: [],
};
