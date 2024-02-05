import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "button-shadow": "inset 0 0 50px rgba(0, 0, 0, .5)",
        "button-transition": ".5s",
      },
    },
  },
  plugins: [],
};
export default config;
