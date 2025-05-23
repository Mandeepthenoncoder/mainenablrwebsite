# Make script executable on Linux systems

# Vercel Deployment Instructions

## Fixing the SIGKILL Error on Vercel

If you're experiencing a SIGKILL error when deploying to Vercel, it's most likely due to memory limitations during the build process. Follow these steps to resolve the issue:

### 1. Use the Vercel-specific build command

This project includes a `vercel-build` script in package.json that allocates more memory to Node.js:

```json
"vercel-build": "node --max-old-space-size=3072 ./node_modules/vite/bin/vite.js build"
```

### 2. Configure Vercel to use this build command

In your Vercel project settings, set the build command to:

```
npm run vercel-build
```

### 3. Set environment variables in Vercel

Add these environment variables in your Vercel project settings:

```
NODE_OPTIONS=--max-old-space-size=3072
```

### 4. Alternative: Use the build.sh script

This repository includes a `build.sh` script that configures memory settings. To use it:

1. Make the script executable (if deploying from a Linux/macOS environment):
   ```bash
   chmod +x build.sh
   ```

2. Set the Vercel build command to:
   ```
   ./build.sh
   ```

### 5. Update Vercel configuration

The repository includes a `vercel.json` file that allocates more memory to the build process. Make sure this file is included in your deployment.

## Optimizations Made

The following optimizations have been made to reduce memory usage during build:

1. Disabled image optimization during production builds
2. Disabled source maps in production
3. Disabled brotli size calculations during build
4. Only using gzip compression for production
5. Disabled bundle analyzer in production
6. Used a more compatible ES target (es2019)

These changes are designed to minimize memory usage while preserving the key performance benefits of our optimization plugins.
