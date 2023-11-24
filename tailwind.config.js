/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Poppins": ['Poppins', 'sans-serif']
      }
    },
    keyframes: {
      ping: {
        "0%": { transform: "translateY(0)", background: "#ccc"},
        "50%": { transform: "translateY(-8px)", background: "#25D366"},
        "100%": { transform: "translateY(0)", background: "#ccc"}
      }
    },
    animation: {
      ping: "ping 1.5s linear infinite"
    }
  },
  plugins: [],
}