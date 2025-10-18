/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#e8ecf6',
          100: '#cdd6ea',
          200: '#a0b2d6',
          300: '#6b87be',
          400: '#4266a9',
          500: '#274b8e',
          600: '#1d3c74',
          700: '#182f5a',
          800: '#122342',
          900: '#0b1730',
          950: '#081224',
        },
        beige: {
          50: '#fbfaf7',
          100: '#f6f1e6',
          200: '#efe4cd',
          300: '#e2cfab',
          400: '#cdb07f',
          500: '#b28d59',
          600: '#946d42',
          700: '#785536',
          800: '#5f432e',
          900: '#4f382a',
          950: '#2a1d16',
        },
        mint: {
          50: '#f1fbf7',
          100: '#dff6ec',
          200: '#bfeedd',
          300: '#8ee0c6',
          400: '#58cdab',
          500: '#33b592',
          600: '#239477',
          700: '#1f7862',
          800: '#1e5f50',
          900: '#1c4e42',
          950: '#0a2e26',
        },
        sky: {
          50: '#f0f8ff',
          100: '#dff1fe',
          200: '#bfe4fd',
          300: '#96d2fb',
          400: '#6bb9f6',
          500: '#489eee',
          600: '#337fdd',
          700: '#2b66b9',
          800: '#295593',
          900: '#264a78',
          950: '#182c49',
        },
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        card: '0 10px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 300ms ease-in-out',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
