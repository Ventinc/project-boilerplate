import { Config as TailwindConfig } from "tailwindcss";
import sharedConfig from "@p/tailwind-config";

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
    "../../packages/ui/src/*.{js,jsx,ts,tsx}",
  ],
  presets: [sharedConfig],
} satisfies TailwindConfig;
