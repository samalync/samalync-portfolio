import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { SITE_URL } from "./src/config/site";
import { cohortPaths } from "./src/data/academy";

// Emits dist/sitemap.xml from the route list and cohort data.
const sitemap = (): Plugin => ({
  name: "samalync-sitemap",
  apply: "build",
  generateBundle() {
    const paths = ["/", "/team", "/academy", ...cohortPaths()];
    const urls = paths.map((p) => `  <url><loc>${SITE_URL}${p}</loc></url>`).join("\n");

    this.emitFile({
      type: "asset",
      fileName: "sitemap.xml",
      source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Use root base on Vercel/Netlify, else use repo subpath for GitHub Pages
  base: process.env.NODE_ENV === 'development' ? "/" : (process.env.VERCEL || process.env.NETLIFY ? "/" : "/samalync-portfolio/"),
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    sitemap(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
