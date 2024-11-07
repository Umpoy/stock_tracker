module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        card: "0px 0px 15px 0px rgb(0 0 0 / 20%)",
      },
      animation: {
        buzz: "buzz 0.5s ease",
      },
      keyframes: {
        buzz: {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-4px)" },
          "50%": { transform: "translateX(4px)" },
          "75%": { transform: "translateX(-4px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
