import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimize chunk size
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor chunks for better caching
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: [
            '@radix-ui/react-accordion',
            '@radix-ui/react-alert-dialog',
            '@radix-ui/react-aspect-ratio',
            '@radix-ui/react-avatar',
            '@radix-ui/react-checkbox',
            '@radix-ui/react-collapsible',
          ],
          animation: ['framer-motion'],
          form: ['react-hook-form', 'zod'],
        },
        // Use hashed filenames for better caching
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: (assetInfo) => {
          // Group assets by file type
          const fileExt = assetInfo.name?.split('.').pop()?.toLowerCase();
          if (fileExt) {
            if (['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp'].includes(fileExt)) {
              return 'assets/images/[name].[hash].[ext]';
            } else if (['woff', 'woff2', 'ttf', 'eot'].includes(fileExt)) {
              return 'assets/fonts/[name].[hash].[ext]';
            } else if (['css'].includes(fileExt)) {
              return 'assets/css/[name].[hash].[ext]';
            }
          }
          return 'assets/[name].[hash].[ext]';
        }
      }
    },
    // Enable source maps in development only
    sourcemap: mode === 'development',
    // Minimize for production
    minify: mode === 'production' ? 'esbuild' : false,
    // Generate output with file size profiling
    reportCompressedSize: true,
    // Use modern browser targets for better optimization
    target: 'es2020',
  },
  // Optimize asset handling
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.webp', '**/*.svg'],
  // Configure Vite's built-in asset optimization
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
    ],
    exclude: ['lovable-tagger'],
  },
}));
