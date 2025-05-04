import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import compression from "vite-plugin-compression";
import { visualizer } from "rollup-plugin-visualizer";
import viteImagemin from "vite-plugin-imagemin";
import preload from "vite-plugin-preload";

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
    // Add optimization plugins for production builds only
    mode === 'production' && compression({
      algorithm: 'gzip',
      ext: '.gz',
      // Set threshold to only compress files above certain size to save build memory
      threshold: 10240, // 10KB
    }),
    // Use only one compression format in production to reduce memory usage
    mode !== 'production' && compression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 10240, // 10KB
    }),
    // Only use imagemin in development 
    mode !== 'production' && viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 80,
      },
      pngquant: {
        quality: [0.7, 0.8],
        speed: 4,
      },
      webp: {
        quality: 75,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
            active: false,
          },
        ],
      },
    }),
    // Keep preload plugin as it's important for performance
    mode === 'production' && preload(),
    // Only use visualizer when ANALYZE_BUNDLE env var is set
    process.env.ANALYZE_BUNDLE === 'true' && visualizer({
      open: true,
      filename: 'stats.html',
      gzipSize: true,
      brotliSize: true,
    }),
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
    // Add target for Vercel environment
    target: 'es2019', // More compatible target
    // Reduce memory usage during build
    sourcemap: false, // Disable source maps in production
    // Ensure Brotli compression is disabled in production build to save memory
    brotliSize: false,
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
    // sourcemap: mode === 'development', // Already set above
    // Minimize for production
    minify: mode === 'production' ? 'esbuild' : false,
    // Generate output with file size profiling
    reportCompressedSize: false, // Disable to save memory
    // Use modern browser targets for better optimization
    // target: 'es2020', // Already set above
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
