import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(0, 0%, 100%)",
        foreground: "hsl(222, 47%, 11%)",
        muted: "hsl(210, 40%, 96%)",
        primary: "#2563eb",
      }
    },
  },
  plugins: [],
} satisfies Config;
