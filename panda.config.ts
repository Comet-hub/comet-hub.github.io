import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          paletteYellow: { value: "#FFC700" },
          paletteOrange: { value: "#FF3600" },
          paletteViolet: { value: "#BD00FF" },
          paletteBlue: { value: "#00B2FF" },
          gray10: { value: "hsl(0, 0%, 10%)" },
          gray20: { value: "hsl(0, 0%, 20%)" },
          gray30: { value: "hsl(0, 0%, 30%)" },
          gray40: { value: "hsl(0, 0%, 40%)" },
          gray50: { value: "hsl(0, 0%, 50%)" },
          gray60: { value: "hsl(0, 0%, 60%)" },
          gray70: { value: "hsl(0, 0%, 70%)" },
          gray80: { value: "hsl(0, 0%, 80%)" },
          gray90: { value: "hsl(0, 0%, 90%)" },
        },
        gradients: {
          "yellow-orange": {
            value: "linear-gradient(135deg, #FFC700, #FF3600)",
          },
          "orange-violet": {
            value: "linear-gradient(135deg, #FF3600, #BD00FF)",
          },
          "violet-blue": {
            value: "linear-gradient(135deg, #BD00FF, #00B2FF)",
          },
          complete: {
            value:
              "linear-gradient(135deg, #FFC700, #FF3600, #BD00FF, #00B2FF)",
          },
        },
      },
      keyframes: {
        fadein: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeout: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        finger: {
          "0%": {
            strokeDashoffset: "50px",
            opacity: "1",
          },
          "75%": {
            strokeDashoffset: "0",
            opacity: "1",
          },
          "100%": {
            strokeDashoffset: "0",
            opacity: "0",
          },
        },
        wheel: {
          "0%": {
            strokeDashoffset: "20px",
            opacity: "1",
          },
          "75%": {
            strokeDashoffset: "0",
            opacity: "1",
          },
          "100%": {
            strokeDashoffset: "0",
            opacity: "0",
          },
        },
        flip: {
          "0%": {
            transform: "rotateY(0deg)",
          },
          "50%": {
            transform: "rotateY(0deg)",
          },
          "100%": {
            transform: "rotateY(180deg)",
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
