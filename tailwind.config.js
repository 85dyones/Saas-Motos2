/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'rgb(var(--color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--color-primary-600) / <alpha-value>)',
          700: 'rgb(var(--color-primary-700) / <alpha-value>)',
          800: 'rgb(var(--color-primary-800) / <alpha-value>)',
          900: 'rgb(var(--color-primary-900) / <alpha-value>)',
          DEFAULT: 'var(--cor-primaria)',
        },
        secondary: {
          DEFAULT: 'var(--cor-secundaria)',
        },
        success: {
          DEFAULT: 'var(--cor-sucesso)',
        },
        warning: {
          DEFAULT: 'var(--cor-aviso)',
        },
        danger: {
          DEFAULT: 'var(--cor-erro)',
        },
        background: {
          DEFAULT: 'var(--cor-fundo)',
          secondary: 'var(--cor-fundo-secundario)',
        },
        foreground: {
          DEFAULT: 'var(--cor-texto)',
        },
        border: {
          DEFAULT: 'var(--cor-bordas)',
        }
      }
    },
  },
  plugins: [],
};
