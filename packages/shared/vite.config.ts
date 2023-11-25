import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
    },
  },
  build: {
    lib: {
      entry: "./src/main.ts",
      name: "Shared",
      fileName: "shared",
      formats: ["es", "cjs", "umd"],
    },
    rollupOptions: {
      output: {
        exports: "named",
      },
    },
  },
});
