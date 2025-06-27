/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#A85F27',
          background: '#FFFAF8',
        },
        primary: {
          DEFAULT: '#FD996F',
          background: '#EDE7E0',
        },
        secondary: {
          DEFAULT: '#70CCD8',
          background: '#E0F7F9',
          active: '#70ccd880',
        },
      },
      fontSize: {
        'heading-1': [
          '32px',
          {
            lineHeight: '40px',
            fontWeight: '600',
          },
        ],
        'heading-2': [
          '28px',
          {
            lineHeight: '36px',
            fontWeight: '600',
          },
        ],
        'heading-3': [
          '24px',
          {
            lineHeight: '32px',
            fontWeight: '600',
          },
        ],
        'heading-4': [
          '18px',
          {
            lineHeight: '24px',
            fontWeight: '600',
          },
        ],
        'button-1': [
          '20px',
          {
            lineHeight: '26px',
            fontWeight: '600',
          },
        ],
        'button-2': [
          '18px',
          {
            lineHeight: '24px',
            fontWeight: '600',
          },
        ],
        'button-3': [
          '14px',
          {
            lineHeight: '16px',
            fontWeight: '600',
          },
        ],
        'body-1': [
          '18px',
          {
            lineHeight: '24px',
            fontWeight: '400',
          },
        ],
        'body-2': [
          '16px',
          {
            lineHeight: '22px',
            fontWeight: '400',
          },
        ],
      },
    },
  },
  plugins: [],
} 