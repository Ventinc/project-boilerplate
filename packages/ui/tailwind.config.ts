import { Config } from 'tailwindcss';
import sharedConfig from '@p/tailwind-config';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [sharedConfig],
} satisfies Config;
