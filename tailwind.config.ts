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
        textPrimary: '#d9d9d9',
        backgroundPrimary: '#212121',
        backgroundSecondary: '#1a1a1a',
        brandAccent: '#007bff',
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
