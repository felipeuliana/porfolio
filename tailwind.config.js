/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
<<<<<<< Updated upstream
=======
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      primary: '#c3545f',
      secondary: '#f19e47',
      neutral: '#9eaba3',
      dark: {
        background: '#3e3e4a',
        text: '#f6f7f6'
      },
      light: {
        background: '#f6f7f6',
        text: '#3e3e4a'
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
>>>>>>> Stashed changes
  },
  plugins: [],
}
