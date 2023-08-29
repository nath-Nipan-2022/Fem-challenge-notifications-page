/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "plus-jakarta-sans": "'Plus Jakarta Sans', sans-serif",
      },
      colors: {
        "primary-blue": "hsl(var(--primary-blue))",
        "primary-red": "hsl(var(--primary-red))",
        "Very-light-grayish-blue": "hsl(var(--Very-light-grayish-blue))",
        "Light-grayish-blue-1": "hsl(var(--Light-grayish-blue-1))",
        "Light-grayish-blue-2": "hsl(var(--Light-grayish-blue-2))",
        "Grayish-blue": "hsl(var(--Grayish-blue))",
        "Dark-grayish-blue": "hsl(var(--Dark-grayish-blue))",
        "Very-dark-blue": "hsl(var(--Very-dark-blue))",
      },
    },
  },
  plugins: [],
};
