/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0A192F',
        slate: '#8892B0',
        lightSlate: '#A8B2D1',
        lightestSlate: '#CCD6F6',
        accent: '#64FFDA',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 18px 60px rgba(2, 12, 27, 0.65)',
      },
      backgroundImage: {
        glow:
          'radial-gradient(circle at top, rgba(100,255,218,0.12), transparent 35%), radial-gradient(circle at bottom right, rgba(136,146,176,0.14), transparent 30%)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
