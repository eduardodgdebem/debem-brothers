import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      'dark-blue': '#123758',
      'white': "#ffffff",
      'gray-light': '#d1d1d1',
      'gray-dark': '#1C1C1C',
    }
  },
  plugins: [],
} satisfies Config;
