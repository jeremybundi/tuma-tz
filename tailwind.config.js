// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme'); // Import default theme for fallbacks

module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'bg-blue-500/20',
    'bg-rose-400/20',
    'bg-green-400/20',
    'bg-sky-400/20',
    'bg-orange-400/20',
    'bg-violet-400/20',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Make 'DM Sans' the default sans-serif font
        sans: ['var(--font-dm-sans)', ...defaultTheme.fontFamily.sans], // Changed here
        // Make 'Geist Mono' the default monospace font
        mono: ['var(--font-geist-mono)', ...defaultTheme.fontFamily.mono],
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
 plugins: [
    require('@tailwindcss/typography'), // Add this line
  ],};