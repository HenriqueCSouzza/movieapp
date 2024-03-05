import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    coverage: {
      provider: "istanbul",
      reporter: ["text", "json", "html", "html-spa"],
      include: ["__tests__/**", "src/**"],
      exclude: ["coverage/**", "node_modules/**", ".next/**"],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
