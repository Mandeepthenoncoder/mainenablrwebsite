# Enablr Website

## Project Overview
This is the codebase for the Enablr website, a corporate site focused on GCC (Global Capability Center) services, staff augmentation, and technology enablement solutions.

## Project Structure
- `src/`: Source code containing React components, pages, and utilities
  - `components/`: UI components organized by feature
  - `pages/`: Page components mapped to routes
  - `styles/`: Global styles and typography definitions
  - `services/`: API and data services
- `public/`: Static assets including images and SVG files
- `strapi-blog-backend/`: Headless CMS for the blog section

## Technology Stack
- **Frontend**: React, TypeScript, Vite
- **UI**: Tailwind CSS, shadcn/ui, Framer Motion
- **CMS**: Strapi (for blog content)
- **API**: Supabase
- **Deployment**: Automated via Lovable

## Getting Started

### Development Setup
1. Clone the repository
```sh
git clone <YOUR_GIT_URL>
```

2. Navigate to the project directory
```sh
cd enablr-home-bliss
```

3. Install dependencies
```sh
npm install
```

4. Start the development server
```sh
npm run dev
```

5. Open http://localhost:8080 in your browser

### Strapi Backend Setup
For blog functionality, you'll need to set up the Strapi backend:
```sh
cd strapi-blog-backend
npm install
npm run develop
```

See `strapi-setup-guide.md` for detailed instructions.

## Performance Optimization Recommendations

### Image Optimization
1. **Convert large JPG/PNG files to WebP format**
   - Many public images are over 1MB in size
   - WebP provides better compression at same quality
   - Use tools like `squoosh` or `sharp` to convert

2. **Implement responsive images**
   - Use `srcset` attribute or dynamic imports
   - Create multiple sizes (small, medium, large)
   - Properly size images to match their display dimensions

3. **Lazy load below-the-fold images**
   - Use the built-in `loading="lazy"` attribute
   - Consider using Intersection Observer for more control

### Code Splitting
1. **Implement route-based code splitting**
   - Use React Router's lazy loading capabilities
   - Split large components that aren't needed immediately

2. **Optimize third-party dependencies**
   - Audit and remove unused dependencies
   - Consider using lighter alternatives for large libraries

### Build Optimizations
1. **Enable Vite's build optimizations**
   - Configure chunk size optimization
   - Set up proper cache policies

2. **Implement preloading for critical resources**
   - Use `<link rel="preload">` for critical CSS/fonts
   - Consider adding resource hints for important third-party resources

3. **Enable compression**
   - Configure server to use gzip/brotli compression
   - Set appropriate caching headers

## Implemented Image Optimization Strategy

The website now includes significant image optimizations:

### WebP Conversion and Responsive Variants
- All large images are automatically converted to WebP format using Sharp
- Each image is generated in multiple sizes (640px, 1280px, 1920px widths)
- Images are stored in `/optimized` folders alongside originals

### Advanced Image Components
- `<Image>` component with built-in WebP support, responsive loading, and proper sizing
- `<LazyImage>` component using Intersection Observer for deferred loading
- Automatic selection of appropriate image size based on viewport

### Preloading Critical Images
- Hero carousel images and other above-the-fold images are preloaded
- Implements both HTML `<link rel="preload">` and JavaScript preloading fallback
- Prioritizes first slide images to improve initial load performance

### How to Use Optimized Images
1. **Run the optimization script when adding new images:**
   ```sh
   node scripts/optimize-images.mjs
   ```

2. **Use the Image component instead of standard img tags:**
   ```jsx
   import Image from '@/components/Image';
   
   <Image 
     src="/images/your-image.jpg" 
     alt="Description"
     priority={isAboveTheFold}
     objectPosition="center 25%"
   />
   ```

3. **For below-the-fold images, use LazyImage:**
   ```jsx
   import LazyImage from '@/components/LazyImage';
   
   <LazyImage 
     src="/images/your-image.jpg" 
     alt="Description"
   />
   ```

## Deployment
The project can be deployed through Lovable by going to Project > Share > Publish.

## Custom Domain Setup
To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.
Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## Contributing
Please follow the existing code style and component patterns when making changes.
