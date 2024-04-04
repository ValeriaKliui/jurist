import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@assets": resolve(__dirname, "./src/assets"),
      "@components": resolve(__dirname, "./src/components"),
      "@constants": resolve(__dirname, "./src/constants"),
      "@providers": resolve(__dirname, "./src/providers"),
    },
  },
  plugins: [svgr(), react()],
});
