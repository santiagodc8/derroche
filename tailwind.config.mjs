/** @type {import('tailwindcss').Config} */
const v = (name) => `rgb(var(--c-${name}) / <alpha-value>)`;

export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Theme-aware page chrome (values swap per light/dark in global.css)
        ink: {
          DEFAULT: v('ink-950'),
          950: v('ink-950'),
          900: v('ink-900'),
          800: v('ink-800'),
          700: v('ink-700'),
        },
        cream: {
          DEFAULT: v('cream'),
          warm: v('cream-warm'),
          muted: v('cream-muted'),
        },
        // Fixed brand accents (identical in both themes)
        bordeaux: {
          DEFAULT: v('bordeaux'),
          deep: v('bordeaux-deep'),
        },
        crimson: {
          DEFAULT: v('crimson'),
          bright: v('crimson-bright'),
          soft: v('crimson-soft'),
        },
        gold: {
          DEFAULT: v('gold'),
          deep: v('gold-deep'),
          pale: v('gold-pale'),
        },
        // Fixed warm-white for text/icons sitting on accent surfaces
        ivory: v('ivory'),
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
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
