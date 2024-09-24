import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './utils/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        textPrimary: '#D9D9D9',
        backgroundPrimary: '#212121',
        backgroundSecondary: '#1A1A1A',
        brandAccent: '#007BFF',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          lg: '1024px',
        },
      },
    },
  },
  plugins: [],
};
export default config;
