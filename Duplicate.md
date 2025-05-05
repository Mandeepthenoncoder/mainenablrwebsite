# Potential Unused File Analysis

**Disclaimer:** This analysis is based on automated text searches (`grep`) and file listings. It is **not definitive** and does **not guarantee** that the listed files are truly unused. Files might be referenced indirectly, dynamically, or through build configurations not detected by simple searches. **Always manually verify before deleting any file.**

## Methodology

1.  Key directories (`public`, `src/components`, `src/lib`, `src/styles`, `src/pages`) were listed.
2.  Basic `grep` searches were performed for import statements and JSX tag usage for a few selected components within the `src/**/*.{tsx,jsx}` files.
3.  Files with zero or very few apparent references were flagged for review.

## Strong Candidates for Review

The following files showed **zero direct references** in the limited search performed and warrant manual investigation:

*   `frontend/enablr-home-bliss/src/components/StaticInsights.tsx`
    *   **Reason:** No `import StaticInsights` statements or `<StaticInsights ...>` JSX tags were found in the search across `.tsx`/`.jsx` files.
*   `frontend/enablr-home-bliss/src/components/LazyImage.tsx`
    *   **Reason:** No `import LazyImage` statements or `<LazyImage ...>` JSX tags were found outside its own definition file. It might have been superseded by `Image.tsx`.

## Other Observations & Considerations

*   **Public Assets (`public/`)**:
    *   Contains numerous images (`.jpg`, `.png`, `.webp`, `.svg`) and videos (`.mp4`).
    *   Large video files (`Carousel_Video*.mp4`) are significant in size. Confirm usage in `HeroSection.tsx` and consider optimization.
    *   Duplicate-sounding names (e.g., `worksapce (1).png` / `worksapce (1).webp`) might indicate originals vs. optimized versions. Verify which are needed.
    *   Files like `logo-ph-1.png` (1 byte) seem suspicious and could be placeholders or errors.
    *   Many `.webp` versions exist alongside `.png`/`.jpg`. Ensure fallbacks are necessary for target browsers.
*   **Component Structure (`src/components/`)**: The deep directory structure increases complexity for tracking usage manually.
*   **Limitations**: This analysis did not check:
    *   CSS file references (`url(...)`).
    *   Dynamic imports or references constructed from strings.
    *   Usage within configuration files or build scripts.
    *   Re-exported components.

## Recommendations for Manual Verification

1.  **Review Candidates:**
    *   Examine `StaticInsights.tsx` and `LazyImage.tsx`.
    *   Check version control history (`git log -- <file_path>`) for context on their creation/modification.
    *   Perform more specific searches if needed.
2.  **Audit `public/` Assets:**
    *   Manually check components (esp. `HeroSection`, `Image`) and CSS (`index.css`, etc.) for references to images/videos.
    *   Consider image/video optimization tools.
    *   Delete assets confirmed to be unlinked.
3.  **Use Browser DevTools:**
    *   Open your site, navigate through *all* pages.
    *   Use the `Network` tab to see which assets are requested. Assets *not* requested might be unused (but beware of preloading/dynamic loading).
4.  **Consider Advanced Tools (Optional):**
    *   Linters like `eslint-plugin-import` can sometimes detect unused exports.
    *   Dependency analysis tools like `depcheck` might help identify unused npm packages (though not necessarily unused local files).

**Conclusion:** Use this list as a starting point. **Delete files only after thorough manual verification** to avoid breaking your website. 











------------------------------------------------------------------   Light House Report      ---------------------------------------------------------


I've reviewed the Lighthouse performance report for your website (mainenablrwebsite.vercel.app). Let me explain what it means and what actions you need to take to improve your site's performance.

## Summary of Your Lighthouse Results

Your website scored:
- Performance: 63 (Needs Improvement)
- Accessibility: 98 (Good)
- Best Practices: 100 (Excellent)
- SEO: 83 (Needs Some Improvement)

## Key Issues to Address

### 1. Performance Issues (Most Critical)

The biggest problem is your Largest Contentful Paint (LCP) of 11 seconds, which is significantly higher than the recommended 2.5 seconds. This is likely caused by:

- **Large image files**: Your site has multiple large images (12MB, 5MB, etc.) that need optimization
- **Video loading**: A video element is your LCP element and takes 10.5 seconds to render
- **Render-blocking resources**: CSS and font files are blocking initial rendering

### 2. SEO Issues

- Non-descriptive link text: You have 3 links with generic "Read More" text
- Missing robots.txt: Lighthouse couldn't find a valid robots.txt file

## Recommended Actions (Priority Order)

1. **Optimize images** (high impact)
   - Convert large JPG/PNG images to WebP format (potential savings of 14,630 KiB)
   - Resize images to appropriate dimensions (potential savings of 22,142 KiB)
   - Add explicit width and height attributes to prevent layout shifts

2. **Address video loading issues**
   - Optimize your video files or consider using a video delivery service
   - Add width/height attributes and consider using a thumbnail/poster image
   - Add captions for accessibility

3. **Eliminate render-blocking resources**
   - Inline critical CSS and defer non-critical CSS
   - Optimize Google Fonts loading (potential savings of 100 ms)

4. **Reduce JavaScript execution time**
   - Minimize main-thread work (currently 4.0s)
   - Consider code-splitting and lazy-loading non-critical JavaScript

5. **Fix SEO issues**
   - Use descriptive link text instead of generic "Read More"
   - Create a valid robots.txt file

6. **Address minor accessibility issues**
   - Fix heading structure (maintain proper heading levels)

You have excellent scores for Best Practices (100) and Accessibility (98), so focus your efforts primarily on performance optimization, especially with your images and videos which are creating the most significant performance bottlenecks.


# Comprehensive Guide to Improve Your Website Performance

Based on your Lighthouse report, I'll provide a detailed, step-by-step guide to improve your website performance. This guide addresses each issue with practical solutions.

## 1. Image Optimization (Highest Priority)

Your site has several oversized images (12MB+) causing significant loading delays.

### Step 1: Compress and Convert Images
```
1. Install a tool like ImageMagick, Squoosh, or use online services like TinyPNG
2. Convert all JPG/PNG images to WebP format:
   - For each image: convert input.jpg -quality 80 output.webp
   - Aim for 75-85% quality (balance between size and visual quality)
3. Target file sizes:
   - Large hero images: <200KB
   - Medium images: <100KB
   - Thumbnails: <30KB
```

### Step 2: Properly Size Images
```
1. Identify display dimensions for each image on your site
2. Resize images to match their display size (plus a small buffer):
   - Example: If displayed at 800px width, resize to 1000px or 1200px max
   - Command: convert input.jpg -resize 1200x output.jpg
3. Create multiple sizes for responsive design:
   - Large (desktop): ~1200-1600px width
   - Medium (tablet): ~800px width
   - Small (mobile): ~400px width
```

### Step 3: Add Proper Image Attributes
```html
<!-- Add width and height attributes to ALL images -->
<img src="image.webp" width="800" height="600" alt="Descriptive text" loading="lazy">

<!-- For responsive images, use srcset -->
<img srcset="small.webp 400w, medium.webp 800w, large.webp 1600w"
     sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1600px"
     src="medium.webp" 
     width="800" height="600" 
     alt="Descriptive text">
```

## 2. Video Optimization

Your LCP element is a video taking 11 seconds to render.

### Step 1: Optimize Video Files
```
1. Compress videos using tools like Handbrake or FFmpeg:
   - Reduce resolution to match display size
   - Use H.264/H.265 codec for better compression
   - Command: ffmpeg -i input.mp4 -vcodec h264 -acodec aac -crf 23 output.mp4
   
2. Aim for file sizes under 1-2MB for short videos
```

### Step 2: Implement Proper Video Loading
```html
<!-- Add poster image to display immediately -->
<video 
  class="absolute inset-0 h-full w-full object-cover"
  poster="video-thumbnail.webp" 
  width="1280" 
  height="720"
  preload="metadata">
  <source src="video.mp4" type="video/mp4">
  <track kind="captions" src="captions.vtt" label="English">
</video>
```

### Step 3: Consider Lazy-Loading or Delayed Loading for Videos
```javascript
// JavaScript to load video only after page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const videoElement = document.querySelector('video');
    videoElement.src = 'video.mp4';
    // or if using source tags
    // videoElement.querySelector('source').src = 'video.mp4';
    // videoElement.load();
  }, 1000); // 1 second delay
});
```

## 3. Eliminate Render-Blocking Resources

### Step 1: Optimize CSS Loading
```html
<!-- Inline critical CSS in the head -->
<head>
  <style>
    /* Critical CSS needed for above-the-fold content */
    /* Example: header, hero section, navigation styles */
    .header { ... }
    .hero { ... }
  </style>
  
  <!-- Defer non-critical CSS -->
  <link rel="preload" href="/css/index.BI2DceYv.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="/css/index.BI2DceYv.css"></noscript>
</head>
```

### Step 2: Optimize Font Loading
```html
<!-- Preload critical fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Use font-display: swap to ensure text is visible while fonts load -->
<style>
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/inter.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
</style>

<!-- Add font-display to Google Fonts URL -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap&font-display=swap" rel="stylesheet">
```

## 4. JavaScript Optimization

### Step 1: Reduce JavaScript Execution Time
```
1. Analyze your JavaScript with Chrome DevTools:
   - Open DevTools > Performance tab > Record
   - Look for long tasks (red blocks)
   
2. Split vendor.js into smaller chunks:
   - Configure code-splitting in your bundler (Webpack, Rollup, etc.)
   - Example Webpack config:
```

```javascript
// webpack.config.js
module.exports = {
  // ...
  optimization: {
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: 6,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `vendor.${packageName.replace('@', '')}`;
          },
        },
      },
    },
  },
};
```

### Step 2: Implement Lazy Loading for Components and Scripts
```javascript
// React example
import React, { lazy, Suspense } from 'react';

// Lazy load components
const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}

// For vanilla JavaScript
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

// Load script only when needed
document.getElementById('button').addEventListener('click', async () => {
  await loadScript('/assets/heavy-script.js');
  // Use functionality from the loaded script
});
```

### Step 3: Fix Non-Composited Animations
```css
/* Make animations more efficient */
.animated-element {
  /* Use transform and opacity for animations (GPU accelerated) */
  transform: translateZ(0); /* Force GPU acceleration */
  will-change: transform, opacity; /* Hint to browser */
  
  /* Avoid animating layout properties like width, height, top, left */
  /* GOOD: */
  transform: translateX(100px);
  
  /* BAD (avoid): */
  left: 100px;
}
```

## 5. SEO Improvements

### Step 1: Fix Non-Descriptive Links
```html
<!-- Replace generic "Read More" with descriptive text -->

<!-- BEFORE -->
<a href="/blog/scalability-advantage-why-gccs-matter">Read More</a>

<!-- AFTER -->
<a href="/blog/scalability-advantage-why-gccs-matter">Learn About GCC Scalability Benefits</a>
```

### Step 2: Create a Valid robots.txt File
```
# Create a file named robots.txt in your root directory
User-agent: *
Allow: /

# Block search engines from crawling certain pages (if needed)
# Disallow: /admin/
# Disallow: /private/

# Sitemap location
Sitemap: https://mainenablrwebsite.vercel.app/sitemap.xml
```

### Step 3: Generate a Sitemap
```xml
<!-- Create sitemap.xml in your root directory -->
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://mainenablrwebsite.vercel.app/</loc>
    <lastmod>2025-05-05</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://mainenablrwebsite.vercel.app/blog/scalability-advantage-why-gccs-matter</loc>
    <lastmod>2025-05-05</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- Add more URLs -->
</urlset>
```

## 6. Fix Accessibility Issues

### Step 1: Fix Heading Structure
```html
<!-- Ensure proper heading hierarchy -->

<!-- GOOD structure -->
<h1>Main Page Title</h1>
  <h2>Section Title</h2>
    <h3>Subsection Title</h3>
    <h3>Another Subsection</h3>
  <h2>Another Section</h2>

<!-- AVOID: incorrect jumping from h2 to h4 -->
<h1>Main Page Title</h1>
  <h2>Section Title</h2>
    <h4>This should be h3 instead</h4>  <!-- WRONG -->
```

### Step 2: Add Captions to Videos
```html
<!-- Add captions for accessibility -->
<video>
  <source src="video.mp4" type="video/mp4">
  <track kind="captions" src="captions.vtt" label="English" default>
</video>
```

```
// captions.vtt file
WEBVTT

00:00:00.000 --> 00:00:04.000
Welcome to Enablr - Your Global Capability Center partner

00:00:04.500 --> 00:00:08.000
Realize your GCC Success with Speed and Scale
```

## 7. Implement Efficient Caching

### Step 1: Set Proper Cache Headers
```
# Nginx configuration
location ~* \.(jpg|jpeg|png|webp|svg|gif|js|css|woff|woff2)$ {
    expires 1y;
    add_header Cache-Control "public, max-age=31536000, immutable";
}

# Or in Vercel.json
{
  "headers": [
    {
      "source": "/(.*)\\.(?:jpg|jpeg|gif|png|svg|webp|js|css|woff|woff2)$",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### Step 2: Implement Content Security Policy (CSP)
```
# Add to your headers
Content-Security-Policy: default-src 'self'; script-src 'self' cdn.gpteng.co; style-src 'self' fonts.googleapis.com; font-src 'self' fonts.gstatic.com; img-src 'self' data:; connect-src 'self';

# Vercel.json example
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' cdn.gpteng.co; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com; img-src 'self' data:; connect-src 'self';"
        }
      ]
    }
  ]
}
```

## 8. Implement Performance Monitoring

### Set Up Real User Monitoring (RUM)
```javascript
// Add to your site's JavaScript
// Example using web-vitals library
import {getLCP, getFID, getCLS} from 'web-vitals';

function sendToAnalytics(metric) {
  // Send metrics to your analytics service
  console.log(metric.name, metric.value);
  
  // Or send to your own endpoint
  const body = JSON.stringify({name: metric.name, value: metric.value});
  navigator.sendBeacon('/analytics', body);
}

// Monitor Core Web Vitals
getLCP(sendToAnalytics);
getFID(sendToAnalytics);
getCLS(sendToAnalytics);
```

## Verification Process

After implementing these changes, verify improvements:

1. Run Lighthouse tests again (aim for scores above 90 in all categories)
2. Test on multiple devices and connection speeds
3. Verify Core Web Vitals in Google Search Console
4. Use WebPageTest.org for more detailed performance analysis
5. Test with real users on various devices

By systematically implementing these optimizations, your website should see dramatic performance improvements, particularly in the LCP metric which currently has the most room for improvement.