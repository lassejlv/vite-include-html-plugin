import { defineConfig } from "vite";
import includePlugin from "vite-include-html-plugin";

export default defineConfig({
  server: {
    port: 3000,
  },
  build: {
    outDir: "build",
  },
  plugins: [includePlugin()],
});
