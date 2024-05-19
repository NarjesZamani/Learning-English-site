/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "DanaReg": "Dana Regular",
        "DanaMed": "Dana Medium",
        "DanaBold":"Dana Bold",
      },
    },
  },
  plugins: [],
}

