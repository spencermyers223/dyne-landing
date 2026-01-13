import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', '-apple-system', 'sans-serif'],
      },
      colors: {
        wine: {
          DEFAULT: '#722F37',
          dark: '#8B3A44',
        },
        cream: {
          light: '#FAF7F2',
          DEFAULT: '#F5F0E8',
          dark: '#EDE6DC',
        },
      },
    },
  },
  plugins: [],
};

export default config;
