import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-geist-mono)', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [
  require("@tailwindcss/forms"),
  require("@tailwindcss/typography"),
],

};

export default config;
