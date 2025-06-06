module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9",
        secondary: "#1e293b",
        accent: "#38bdf8",
        'black-full': '#000000',
      },
    },
    // Add this outside extend for bgColor override globally
    backgroundColor: {
      black: '#000000',
    },
  },
  plugins: [],
}
