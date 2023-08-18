/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark": "#061826",
        "main": {
          50: "hsl(200, 95%, 95%)",
          100: "hsl(200, 95%, 90%)",
          200: "hsl(200, 95%, 80%)",
          300: "hsl(200, 95%, 70%)",
          400: "hsl(200, 95%, 60%)",
          500: "hsl(200, 95%, 50%)",
          600: "hsl(200, 95%, 40%)",
          700: "hsl(200, 95%, 30%)",
          800: "hsl(200, 95%, 20%)",
          900: "hsl(200, 95%, 10%)",
        },
        "accent": {
          50: "hsl(168, 62%, 95%)",
          100: "hsl(168, 62%, 90%)",
          200: "hsl(168, 62%, 80%)",
          300: "hsl(168, 62%, 70%)",
          400: "hsl(168, 62%, 60%)",
          500: "hsl(168, 62%, 50%)",
          600: "hsl(168, 62%, 40%)",
          700: "hsl(168, 62%, 30%)",
          800: "hsl(168, 62%, 20%)",
          900: "hsl(168, 62%, 10%)",
        }
      }
    },
  },
  plugins: [],
}

