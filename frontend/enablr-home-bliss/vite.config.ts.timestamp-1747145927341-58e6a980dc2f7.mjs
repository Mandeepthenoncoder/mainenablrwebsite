// vite.config.ts
import { defineConfig } from "file:///C:/Users/saira/Desktop/mainenablrwebsite/frontend/enablr-home-bliss/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/saira/Desktop/mainenablrwebsite/frontend/enablr-home-bliss/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path from "path";
import { componentTagger } from "file:///C:/Users/saira/Desktop/mainenablrwebsite/frontend/enablr-home-bliss/node_modules/lovable-tagger/dist/index.js";
import compression from "file:///C:/Users/saira/Desktop/mainenablrwebsite/frontend/enablr-home-bliss/node_modules/vite-plugin-compression/dist/index.mjs";
import { visualizer } from "file:///C:/Users/saira/Desktop/mainenablrwebsite/frontend/enablr-home-bliss/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import viteImagemin from "file:///C:/Users/saira/Desktop/mainenablrwebsite/frontend/enablr-home-bliss/node_modules/vite-plugin-imagemin/dist/index.mjs";
import preload from "file:///C:/Users/saira/Desktop/mainenablrwebsite/frontend/enablr-home-bliss/node_modules/vite-plugin-preload/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\saira\\Desktop\\mainenablrwebsite\\frontend\\enablr-home-bliss";
var vite_config_default = defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    // Add optimization plugins for production builds only
    mode === "production" && compression({
      algorithm: "gzip",
      ext: ".gz",
      threshold: 10240,
      // 10KB
      deleteOriginFile: false
      // Keep original files for fallback or if CDN doesn't handle encoding
    }),
    mode === "production" && compression({
      algorithm: "brotliCompress",
      ext: ".br",
      threshold: 10240,
      // 10KB
      deleteOriginFile: false
      // Keep original files
    }),
    // Only use imagemin in development 
    mode !== "production" && viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false
      },
      optipng: {
        optimizationLevel: 7
      },
      mozjpeg: {
        quality: 80
      },
      pngquant: {
        quality: [0.7, 0.8],
        speed: 4
      },
      webp: {
        quality: 75
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox",
            active: false
          }
        ]
      }
    }),
    // Keep preload plugin as it's important for performance
    mode === "production" && preload(),
    // Only use visualizer when ANALYZE_BUNDLE env var is set
    process.env.ANALYZE_BUNDLE === "true" && visualizer({
      open: true,
      filename: "stats.html",
      gzipSize: true,
      brotliSize: true
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  build: {
    // Optimize chunk size
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1e3,
    // Add target for Vercel environment
    target: "es2019",
    // More compatible target
    // Reduce memory usage during build
    sourcemap: false,
    // Disable source maps in production
    // Ensure Brotli compression is disabled in production build to save memory
    brotliSize: false,
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor chunks for better caching
          vendor: ["react", "react-dom", "react-router-dom"],
          animation: ["framer-motion"],
          form: ["react-hook-form", "zod"]
        },
        // Use hashed filenames for better caching
        entryFileNames: "assets/[name].[hash].js",
        chunkFileNames: "assets/[name].[hash].js",
        assetFileNames: (assetInfo) => {
          const fileExt = assetInfo.name?.split(".").pop()?.toLowerCase();
          if (fileExt) {
            if (["png", "jpg", "jpeg", "gif", "svg", "webp"].includes(fileExt)) {
              return "assets/images/[name].[hash].[ext]";
            } else if (["woff", "woff2", "ttf", "eot"].includes(fileExt)) {
              return "assets/fonts/[name].[hash].[ext]";
            } else if (["css"].includes(fileExt)) {
              return "assets/css/[name].[hash].[ext]";
            }
          }
          return "assets/[name].[hash].[ext]";
        }
      }
    },
    // Enable source maps in development only
    // sourcemap: mode === 'development', // Already set above
    // Minimize for production
    minify: mode === "production" ? "esbuild" : false,
    // Generate output with file size profiling
    reportCompressedSize: false
    // Disable to save memory
    // Use modern browser targets for better optimization
    // target: 'es2020', // Already set above
  },
  // Optimize asset handling
  assetsInclude: ["**/*.jpg", "**/*.png", "**/*.webp", "**/*.svg"],
  // Configure Vite's built-in asset optimization
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "framer-motion"
    ],
    exclude: ["lovable-tagger"]
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxzYWlyYVxcXFxEZXNrdG9wXFxcXG1haW5lbmFibHJ3ZWJzaXRlXFxcXGZyb250ZW5kXFxcXGVuYWJsci1ob21lLWJsaXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxzYWlyYVxcXFxEZXNrdG9wXFxcXG1haW5lbmFibHJ3ZWJzaXRlXFxcXGZyb250ZW5kXFxcXGVuYWJsci1ob21lLWJsaXNzXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9zYWlyYS9EZXNrdG9wL21haW5lbmFibHJ3ZWJzaXRlL2Zyb250ZW5kL2VuYWJsci1ob21lLWJsaXNzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IHsgY29tcG9uZW50VGFnZ2VyIH0gZnJvbSBcImxvdmFibGUtdGFnZ2VyXCI7XHJcbmltcG9ydCBjb21wcmVzc2lvbiBmcm9tIFwidml0ZS1wbHVnaW4tY29tcHJlc3Npb25cIjtcclxuaW1wb3J0IHsgdmlzdWFsaXplciB9IGZyb20gXCJyb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXJcIjtcclxuaW1wb3J0IHZpdGVJbWFnZW1pbiBmcm9tIFwidml0ZS1wbHVnaW4taW1hZ2VtaW5cIjtcclxuaW1wb3J0IHByZWxvYWQgZnJvbSBcInZpdGUtcGx1Z2luLXByZWxvYWRcIjtcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+ICh7XHJcbiAgc2VydmVyOiB7XHJcbiAgICBob3N0OiBcIjo6XCIsXHJcbiAgICBwb3J0OiA4MDgwLFxyXG4gIH0sXHJcbiAgcGx1Z2luczogW1xyXG4gICAgcmVhY3QoKSxcclxuICAgIG1vZGUgPT09ICdkZXZlbG9wbWVudCcgJiZcclxuICAgIGNvbXBvbmVudFRhZ2dlcigpLFxyXG4gICAgLy8gQWRkIG9wdGltaXphdGlvbiBwbHVnaW5zIGZvciBwcm9kdWN0aW9uIGJ1aWxkcyBvbmx5XHJcbiAgICBtb2RlID09PSAncHJvZHVjdGlvbicgJiYgY29tcHJlc3Npb24oe1xyXG4gICAgICBhbGdvcml0aG06ICdnemlwJyxcclxuICAgICAgZXh0OiAnLmd6JyxcclxuICAgICAgdGhyZXNob2xkOiAxMDI0MCwgLy8gMTBLQlxyXG4gICAgICBkZWxldGVPcmlnaW5GaWxlOiBmYWxzZSAvLyBLZWVwIG9yaWdpbmFsIGZpbGVzIGZvciBmYWxsYmFjayBvciBpZiBDRE4gZG9lc24ndCBoYW5kbGUgZW5jb2RpbmdcclxuICAgIH0pLFxyXG4gICAgbW9kZSA9PT0gJ3Byb2R1Y3Rpb24nICYmIGNvbXByZXNzaW9uKHtcclxuICAgICAgYWxnb3JpdGhtOiAnYnJvdGxpQ29tcHJlc3MnLFxyXG4gICAgICBleHQ6ICcuYnInLFxyXG4gICAgICB0aHJlc2hvbGQ6IDEwMjQwLCAvLyAxMEtCXHJcbiAgICAgIGRlbGV0ZU9yaWdpbkZpbGU6IGZhbHNlIC8vIEtlZXAgb3JpZ2luYWwgZmlsZXNcclxuICAgIH0pLFxyXG4gICAgLy8gT25seSB1c2UgaW1hZ2VtaW4gaW4gZGV2ZWxvcG1lbnQgXHJcbiAgICBtb2RlICE9PSAncHJvZHVjdGlvbicgJiYgdml0ZUltYWdlbWluKHtcclxuICAgICAgZ2lmc2ljbGU6IHtcclxuICAgICAgICBvcHRpbWl6YXRpb25MZXZlbDogNyxcclxuICAgICAgICBpbnRlcmxhY2VkOiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgICAgb3B0aXBuZzoge1xyXG4gICAgICAgIG9wdGltaXphdGlvbkxldmVsOiA3LFxyXG4gICAgICB9LFxyXG4gICAgICBtb3pqcGVnOiB7XHJcbiAgICAgICAgcXVhbGl0eTogODAsXHJcbiAgICAgIH0sXHJcbiAgICAgIHBuZ3F1YW50OiB7XHJcbiAgICAgICAgcXVhbGl0eTogWzAuNywgMC44XSxcclxuICAgICAgICBzcGVlZDogNCxcclxuICAgICAgfSxcclxuICAgICAgd2VicDoge1xyXG4gICAgICAgIHF1YWxpdHk6IDc1LFxyXG4gICAgICB9LFxyXG4gICAgICBzdmdvOiB7XHJcbiAgICAgICAgcGx1Z2luczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAncmVtb3ZlVmlld0JveCcsXHJcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICAgIC8vIEtlZXAgcHJlbG9hZCBwbHVnaW4gYXMgaXQncyBpbXBvcnRhbnQgZm9yIHBlcmZvcm1hbmNlXHJcbiAgICBtb2RlID09PSAncHJvZHVjdGlvbicgJiYgcHJlbG9hZCgpLFxyXG4gICAgLy8gT25seSB1c2UgdmlzdWFsaXplciB3aGVuIEFOQUxZWkVfQlVORExFIGVudiB2YXIgaXMgc2V0XHJcbiAgICBwcm9jZXNzLmVudi5BTkFMWVpFX0JVTkRMRSA9PT0gJ3RydWUnICYmIHZpc3VhbGl6ZXIoe1xyXG4gICAgICBvcGVuOiB0cnVlLFxyXG4gICAgICBmaWxlbmFtZTogJ3N0YXRzLmh0bWwnLFxyXG4gICAgICBnemlwU2l6ZTogdHJ1ZSxcclxuICAgICAgYnJvdGxpU2l6ZTogdHJ1ZSxcclxuICAgIH0pLFxyXG4gIF0uZmlsdGVyKEJvb2xlYW4pLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJ1aWxkOiB7XHJcbiAgICAvLyBPcHRpbWl6ZSBjaHVuayBzaXplXHJcbiAgICBjc3NDb2RlU3BsaXQ6IHRydWUsXHJcbiAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDEwMDAsXHJcbiAgICAvLyBBZGQgdGFyZ2V0IGZvciBWZXJjZWwgZW52aXJvbm1lbnRcclxuICAgIHRhcmdldDogJ2VzMjAxOScsIC8vIE1vcmUgY29tcGF0aWJsZSB0YXJnZXRcclxuICAgIC8vIFJlZHVjZSBtZW1vcnkgdXNhZ2UgZHVyaW5nIGJ1aWxkXHJcbiAgICBzb3VyY2VtYXA6IGZhbHNlLCAvLyBEaXNhYmxlIHNvdXJjZSBtYXBzIGluIHByb2R1Y3Rpb25cclxuICAgIC8vIEVuc3VyZSBCcm90bGkgY29tcHJlc3Npb24gaXMgZGlzYWJsZWQgaW4gcHJvZHVjdGlvbiBidWlsZCB0byBzYXZlIG1lbW9yeVxyXG4gICAgYnJvdGxpU2l6ZTogZmFsc2UsXHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIG91dHB1dDoge1xyXG4gICAgICAgIG1hbnVhbENodW5rczoge1xyXG4gICAgICAgICAgLy8gU3BsaXQgdmVuZG9yIGNodW5rcyBmb3IgYmV0dGVyIGNhY2hpbmdcclxuICAgICAgICAgIHZlbmRvcjogWydyZWFjdCcsICdyZWFjdC1kb20nLCAncmVhY3Qtcm91dGVyLWRvbSddLFxyXG4gICAgICAgICAgYW5pbWF0aW9uOiBbJ2ZyYW1lci1tb3Rpb24nXSxcclxuICAgICAgICAgIGZvcm06IFsncmVhY3QtaG9vay1mb3JtJywgJ3pvZCddLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gVXNlIGhhc2hlZCBmaWxlbmFtZXMgZm9yIGJldHRlciBjYWNoaW5nXHJcbiAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdhc3NldHMvW25hbWVdLltoYXNoXS5qcycsXHJcbiAgICAgICAgY2h1bmtGaWxlTmFtZXM6ICdhc3NldHMvW25hbWVdLltoYXNoXS5qcycsXHJcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IChhc3NldEluZm8pID0+IHtcclxuICAgICAgICAgIC8vIEdyb3VwIGFzc2V0cyBieSBmaWxlIHR5cGVcclxuICAgICAgICAgIGNvbnN0IGZpbGVFeHQgPSBhc3NldEluZm8ubmFtZT8uc3BsaXQoJy4nKS5wb3AoKT8udG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgIGlmIChmaWxlRXh0KSB7XHJcbiAgICAgICAgICAgIGlmIChbJ3BuZycsICdqcGcnLCAnanBlZycsICdnaWYnLCAnc3ZnJywgJ3dlYnAnXS5pbmNsdWRlcyhmaWxlRXh0KSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiAnYXNzZXRzL2ltYWdlcy9bbmFtZV0uW2hhc2hdLltleHRdJztcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChbJ3dvZmYnLCAnd29mZjInLCAndHRmJywgJ2VvdCddLmluY2x1ZGVzKGZpbGVFeHQpKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuICdhc3NldHMvZm9udHMvW25hbWVdLltoYXNoXS5bZXh0XSc7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoWydjc3MnXS5pbmNsdWRlcyhmaWxlRXh0KSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiAnYXNzZXRzL2Nzcy9bbmFtZV0uW2hhc2hdLltleHRdJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuICdhc3NldHMvW25hbWVdLltoYXNoXS5bZXh0XSc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8gRW5hYmxlIHNvdXJjZSBtYXBzIGluIGRldmVsb3BtZW50IG9ubHlcclxuICAgIC8vIHNvdXJjZW1hcDogbW9kZSA9PT0gJ2RldmVsb3BtZW50JywgLy8gQWxyZWFkeSBzZXQgYWJvdmVcclxuICAgIC8vIE1pbmltaXplIGZvciBwcm9kdWN0aW9uXHJcbiAgICBtaW5pZnk6IG1vZGUgPT09ICdwcm9kdWN0aW9uJyA/ICdlc2J1aWxkJyA6IGZhbHNlLFxyXG4gICAgLy8gR2VuZXJhdGUgb3V0cHV0IHdpdGggZmlsZSBzaXplIHByb2ZpbGluZ1xyXG4gICAgcmVwb3J0Q29tcHJlc3NlZFNpemU6IGZhbHNlLCAvLyBEaXNhYmxlIHRvIHNhdmUgbWVtb3J5XHJcbiAgICAvLyBVc2UgbW9kZXJuIGJyb3dzZXIgdGFyZ2V0cyBmb3IgYmV0dGVyIG9wdGltaXphdGlvblxyXG4gICAgLy8gdGFyZ2V0OiAnZXMyMDIwJywgLy8gQWxyZWFkeSBzZXQgYWJvdmVcclxuICB9LFxyXG4gIC8vIE9wdGltaXplIGFzc2V0IGhhbmRsaW5nXHJcbiAgYXNzZXRzSW5jbHVkZTogWycqKi8qLmpwZycsICcqKi8qLnBuZycsICcqKi8qLndlYnAnLCAnKiovKi5zdmcnXSxcclxuICAvLyBDb25maWd1cmUgVml0ZSdzIGJ1aWx0LWluIGFzc2V0IG9wdGltaXphdGlvblxyXG4gIG9wdGltaXplRGVwczoge1xyXG4gICAgaW5jbHVkZTogW1xyXG4gICAgICAncmVhY3QnLFxyXG4gICAgICAncmVhY3QtZG9tJyxcclxuICAgICAgJ3JlYWN0LXJvdXRlci1kb20nLFxyXG4gICAgICAnZnJhbWVyLW1vdGlvbicsXHJcbiAgICBdLFxyXG4gICAgZXhjbHVkZTogWydsb3ZhYmxlLXRhZ2dlciddLFxyXG4gIH0sXHJcbn0pKTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5WSxTQUFTLG9CQUFvQjtBQUN0YSxPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsdUJBQXVCO0FBQ2hDLE9BQU8saUJBQWlCO0FBQ3hCLFNBQVMsa0JBQWtCO0FBQzNCLE9BQU8sa0JBQWtCO0FBQ3pCLE9BQU8sYUFBYTtBQVBwQixJQUFNLG1DQUFtQztBQVV6QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssT0FBTztBQUFBLEVBQ3pDLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixTQUFTLGlCQUNULGdCQUFnQjtBQUFBO0FBQUEsSUFFaEIsU0FBUyxnQkFBZ0IsWUFBWTtBQUFBLE1BQ25DLFdBQVc7QUFBQSxNQUNYLEtBQUs7QUFBQSxNQUNMLFdBQVc7QUFBQTtBQUFBLE1BQ1gsa0JBQWtCO0FBQUE7QUFBQSxJQUNwQixDQUFDO0FBQUEsSUFDRCxTQUFTLGdCQUFnQixZQUFZO0FBQUEsTUFDbkMsV0FBVztBQUFBLE1BQ1gsS0FBSztBQUFBLE1BQ0wsV0FBVztBQUFBO0FBQUEsTUFDWCxrQkFBa0I7QUFBQTtBQUFBLElBQ3BCLENBQUM7QUFBQTtBQUFBLElBRUQsU0FBUyxnQkFBZ0IsYUFBYTtBQUFBLE1BQ3BDLFVBQVU7QUFBQSxRQUNSLG1CQUFtQjtBQUFBLFFBQ25CLFlBQVk7QUFBQSxNQUNkO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUCxtQkFBbUI7QUFBQSxNQUNyQjtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1AsU0FBUztBQUFBLE1BQ1g7QUFBQSxNQUNBLFVBQVU7QUFBQSxRQUNSLFNBQVMsQ0FBQyxLQUFLLEdBQUc7QUFBQSxRQUNsQixPQUFPO0FBQUEsTUFDVDtBQUFBLE1BQ0EsTUFBTTtBQUFBLFFBQ0osU0FBUztBQUFBLE1BQ1g7QUFBQSxNQUNBLE1BQU07QUFBQSxRQUNKLFNBQVM7QUFBQSxVQUNQO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixRQUFRO0FBQUEsVUFDVjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUE7QUFBQSxJQUVELFNBQVMsZ0JBQWdCLFFBQVE7QUFBQTtBQUFBLElBRWpDLFFBQVEsSUFBSSxtQkFBbUIsVUFBVSxXQUFXO0FBQUEsTUFDbEQsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLE1BQ1YsWUFBWTtBQUFBLElBQ2QsQ0FBQztBQUFBLEVBQ0gsRUFBRSxPQUFPLE9BQU87QUFBQSxFQUNoQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUE7QUFBQSxJQUVMLGNBQWM7QUFBQSxJQUNkLHVCQUF1QjtBQUFBO0FBQUEsSUFFdkIsUUFBUTtBQUFBO0FBQUE7QUFBQSxJQUVSLFdBQVc7QUFBQTtBQUFBO0FBQUEsSUFFWCxZQUFZO0FBQUEsSUFDWixlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsUUFDTixjQUFjO0FBQUE7QUFBQSxVQUVaLFFBQVEsQ0FBQyxTQUFTLGFBQWEsa0JBQWtCO0FBQUEsVUFDakQsV0FBVyxDQUFDLGVBQWU7QUFBQSxVQUMzQixNQUFNLENBQUMsbUJBQW1CLEtBQUs7QUFBQSxRQUNqQztBQUFBO0FBQUEsUUFFQSxnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0IsQ0FBQyxjQUFjO0FBRTdCLGdCQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sR0FBRyxFQUFFLElBQUksR0FBRyxZQUFZO0FBQzlELGNBQUksU0FBUztBQUNYLGdCQUFJLENBQUMsT0FBTyxPQUFPLFFBQVEsT0FBTyxPQUFPLE1BQU0sRUFBRSxTQUFTLE9BQU8sR0FBRztBQUNsRSxxQkFBTztBQUFBLFlBQ1QsV0FBVyxDQUFDLFFBQVEsU0FBUyxPQUFPLEtBQUssRUFBRSxTQUFTLE9BQU8sR0FBRztBQUM1RCxxQkFBTztBQUFBLFlBQ1QsV0FBVyxDQUFDLEtBQUssRUFBRSxTQUFTLE9BQU8sR0FBRztBQUNwQyxxQkFBTztBQUFBLFlBQ1Q7QUFBQSxVQUNGO0FBQ0EsaUJBQU87QUFBQSxRQUNUO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUlBLFFBQVEsU0FBUyxlQUFlLFlBQVk7QUFBQTtBQUFBLElBRTVDLHNCQUFzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBR3hCO0FBQUE7QUFBQSxFQUVBLGVBQWUsQ0FBQyxZQUFZLFlBQVksYUFBYSxVQUFVO0FBQUE7QUFBQSxFQUUvRCxjQUFjO0FBQUEsSUFDWixTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVMsQ0FBQyxnQkFBZ0I7QUFBQSxFQUM1QjtBQUNGLEVBQUU7IiwKICAibmFtZXMiOiBbXQp9Cg==
