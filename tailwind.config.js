/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        "1/1": "100%",
      },
      important: true,
      fontFamily:{
        'Nunito':"Nunito Into Light"
      }
    },
   
  },
  variants: {},
  plugins: [require("tailwind-scrollbar-hide")],
};
