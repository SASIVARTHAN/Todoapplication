/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    "./index.html",             // For the main HTML file
    "./src/**/*.{js,jsx,ts,tsx}" // For all JS/TS files in the `src` folder
  ],
  theme: {
    extend: {},                  // For extending the default theme
  },
  plugins: [],                   // Add plugins here if needed
}
