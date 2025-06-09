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
      keyframes: {
        meteor: {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: '1' },
          '70%': { opacity: '1' },
          '100%': { transform: 'rotate(215deg) translateX(-500px)', opacity: '0' },
        },
        animation: {
          'meteor-effect': 'meteor 5s linear infinite',
        },
      },
      // Add this outside extend for bgColor override globally
      backgroundColor: {
        black: '#000000',
      },
    },
    plugins: [],
  }

}
