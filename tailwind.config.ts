import type { Config } from 'tailwindcss'
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { serif: ['"Playfair Display"', 'Georgia', 'serif'] },
      colors: { gold: { DEFAULT: '#c9a84c', light: '#e8c97a' } },
    },
  },
  plugins: [],
} satisfies Config