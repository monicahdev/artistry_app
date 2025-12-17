/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        bg: "#E8C7B7",
        surface: "#FBF9F6",
        ink: "#1B1B1B",
        muted: "#9A9A9A",
        accent: "#CBB26A",
        primary: "#1B1B1B",
        onPrimary: "#FBF9F6",
      },
       fontFamily: {
        body: ['Montserrat', 'ui-sans-serif', 'system-ui'],
        display: ['"Playfair Display"', 'ui-serif', 'Georgia'],
      },
    }
  },
  plugins: [],
};