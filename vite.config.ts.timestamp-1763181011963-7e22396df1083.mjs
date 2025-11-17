// vite.config.ts
import { defineConfig } from "file:///C:/Users/PC/Documents/Samalync/samalync-portfolio/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/PC/Documents/Samalync/samalync-portfolio/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
import { componentTagger } from "file:///C:/Users/PC/Documents/Samalync/samalync-portfolio/node_modules/lovable-tagger/dist/index.js";
var __vite_injected_original_dirname = "C:\\Users\\PC\\Documents\\Samalync\\samalync-portfolio";
var vite_config_default = defineConfig(({ mode }) => ({
  // Use root base on Vercel/Netlify, else use repo subpath for GitHub Pages
  base: process.env.NODE_ENV === "development" ? "/" : process.env.VERCEL || process.env.NETLIFY ? "/" : "/samalync-portfolio/",
  server: {
    host: "::",
    port: 8080
  },
  plugins: [
    react(),
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxQQ1xcXFxEb2N1bWVudHNcXFxcU2FtYWx5bmNcXFxcc2FtYWx5bmMtcG9ydGZvbGlvXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxQQ1xcXFxEb2N1bWVudHNcXFxcU2FtYWx5bmNcXFxcc2FtYWx5bmMtcG9ydGZvbGlvXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9QQy9Eb2N1bWVudHMvU2FtYWx5bmMvc2FtYWx5bmMtcG9ydGZvbGlvL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IHsgY29tcG9uZW50VGFnZ2VyIH0gZnJvbSBcImxvdmFibGUtdGFnZ2VyXCI7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiAoe1xyXG4gIC8vIFVzZSByb290IGJhc2Ugb24gVmVyY2VsL05ldGxpZnksIGVsc2UgdXNlIHJlcG8gc3VicGF0aCBmb3IgR2l0SHViIFBhZ2VzXHJcbiAgYmFzZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgPyBcIi9cIiA6IChwcm9jZXNzLmVudi5WRVJDRUwgfHwgcHJvY2Vzcy5lbnYuTkVUTElGWSA/IFwiL1wiIDogXCIvc2FtYWx5bmMtcG9ydGZvbGlvL1wiKSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIGhvc3Q6IFwiOjpcIixcclxuICAgIHBvcnQ6IDgwODAsXHJcbiAgfSxcclxuICBwbHVnaW5zOiBbXHJcbiAgICByZWFjdCgpLFxyXG4gICAgbW9kZSA9PT0gJ2RldmVsb3BtZW50JyAmJlxyXG4gICAgY29tcG9uZW50VGFnZ2VyKCksXHJcbiAgXS5maWx0ZXIoQm9vbGVhbiksXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpVixTQUFTLG9CQUFvQjtBQUM5VyxPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsdUJBQXVCO0FBSGhDLElBQU0sbUNBQW1DO0FBTXpDLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxPQUFPO0FBQUE7QUFBQSxFQUV6QyxNQUFNLFFBQVEsSUFBSSxhQUFhLGdCQUFnQixNQUFPLFFBQVEsSUFBSSxVQUFVLFFBQVEsSUFBSSxVQUFVLE1BQU07QUFBQSxFQUN4RyxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sU0FBUyxpQkFDVCxnQkFBZ0I7QUFBQSxFQUNsQixFQUFFLE9BQU8sT0FBTztBQUFBLEVBQ2hCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUN0QztBQUFBLEVBQ0Y7QUFDRixFQUFFOyIsCiAgIm5hbWVzIjogW10KfQo=
