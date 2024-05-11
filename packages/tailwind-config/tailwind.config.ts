import { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        base: colors.neutral,
        accent: colors.cyan,
      },
    },
  },
  plugins: [],
} satisfies Config;
