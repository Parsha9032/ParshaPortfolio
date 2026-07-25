/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,jsx}', './src/components/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      // ---- Design tokens -------------------------------------------------
      // Centralized here so colors/spacing/typography stay consistent and
      // are easy to re-theme from a single place.
      colors: {
        ink: {
          950: '#0b0d10',
          900: '#12151a',
          800: '#1b1f26',
          700: '#272c35',
          600: '#3a4150',
          400: '#8892a0',
          200: '#cbd2db',
          100: '#e7eaee',
          50: '#f7f8fa',
        },
        brand: {
          50: '#eef4ff',
          100: '#dbe7ff',
          200: '#b8ceff',
          300: '#8caeff',
          400: '#5f8bff',
          500: '#3d68f5',
          600: '#2c4fd6',
          700: '#233eab',
          800: '#1f3487',
          900: '#1c2e6b',
        },
        accent: {
          400: '#ffb454',
          500: '#ff9d2e',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        display: ['Lexend', 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display-lg': [
          'clamp(2.5rem, 5vw + 1rem, 4.5rem)',
          { lineHeight: '1.05', letterSpacing: '-0.02em' },
        ],
        'display-md': [
          'clamp(2rem, 3vw + 1rem, 3rem)',
          { lineHeight: '1.1', letterSpacing: '-0.02em' },
        ],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
      },
      maxWidth: {
        content: '72rem',
        prose: '65ch',
      },
      boxShadow: {
        card: '0 1px 2px rgba(16, 20, 26, 0.04), 0 8px 24px -12px rgba(16, 20, 26, 0.18)',
        'card-hover': '0 4px 8px rgba(16, 20, 26, 0.06), 0 16px 32px -12px rgba(16, 20, 26, 0.24)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.5s ease-out both',
        fadeIn: 'fadeIn 0.4s ease-out both',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
