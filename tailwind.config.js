/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    },
    fontFamily: {
      sans: ['var(--font-fira-sans)', ...defaultTheme.fontFamily.sans],
      serif: ['var(--font-merriweather)', ...defaultTheme.fontFamily.serif],
      mono: ['var(--font-fira-mono)', ...defaultTheme.fontFamily.mono]
    },
    fontSize: {
      '2sm': ['0.875rem', '1.5rem'],
      sm: ['0.75rem', '0.75rem'],
      base: ['1rem', '2rem'],
      xl: ['1.25rem', '2rem'],
      '2xl': ['1.5rem', '2rem'],
      '3xl': ['2.5rem', '3rem'],
      '4xl': ['3.5rem', '4rem'],
      '5xl': ['4.5rem', '5rem'],
    }
  },
  plugins: [],
}
