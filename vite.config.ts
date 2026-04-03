import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: "/",
  server: {
    host: "::",
    port: 8080,
    allowedHosts: ["portfolio-zss7.onrender.com"],
    hmr: {
      overlay: false,
    },
    proxy: {
      "/api": {
        target: "https://portfolio-zss7.onrender.com/",
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react/jsx-dev-runtime",
      "react/jsx-runtime",
      "sonner",
    ],
  },
  ssr: {
    noExternal: ["react", "react-dom", "sonner"],
  },
});

