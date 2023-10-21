import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as sass from "sass";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      sass: sass,
    },
  },
  server: {
    port: 5000,
    host: "0.0.0.0",
  },
});
