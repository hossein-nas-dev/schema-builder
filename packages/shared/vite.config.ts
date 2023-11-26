import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
    },
  },

  optimizeDeps: {
    disabled: false,
  },
  build: {
    commonjsOptions: {
      include: [],
    },
    lib: {
      entry: "./src/main.ts",
      name: "Shared",
      fileName: "shared",
      formats: ["cjs", "es"],
    },
  },
});
