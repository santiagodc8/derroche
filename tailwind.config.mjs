/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B0507',
          950: '#0B0507',
          900: '#140A0C',
          800: '#1C1014',
          700: '#2A171B',
        },
        bordeaux: {
          DEFAULT: '#3A0F14',
          deep: '#240509',
        },
        crimson: {
          DEFAULT: '#C8102E',
          bright: '#E11A2C',
          soft: '#A30D24',
        },
        cream: {
          DEFAULT: '#F5E9D7',
          warm: '#EFE0C9',
          muted: '#D9C7AC',
        },
        gold: {
          DEFAULT: '#C9A961',
          deep: '#A88848',
          pale: '#E1C98C',
        },
      },
      fontFamily: {
        display: ['Italiana', 'serif'],
        accent: ['"Cormorant Garamond"', 'serif'],
        body: ['Manrope', 'system-ui', 'sans-serif'],
        numeric: ['"DM Serif Display"', 'serif'],
      },
      letterSpacing: {
        widestest: '0.42em',
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        'fade-up': 'fadeUp 1s ease-out both',
        'fade-in': 'fadeIn 1.4s ease-out both',
        'subtle-zoom': 'subtleZoom 18s ease-out forwards',
        shimmer: 'shimmer 3.2s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        subtleZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
