# Blog Reset Instructions

## How to Clean Up and Reseed Blog Data

1. Go to your blog page at: http://localhost:8082/blog

2. Click the "Show Debug" button in the bottom right corner

3. In the debug panel, click "Delete All Posts" to clear the database

4. Then click "Seed Blog Posts" to add fresh content with the updated images

5. Refresh your browser to see the changes (Ctrl+F5 or Cmd+Shift+R for a hard refresh)

## Troubleshooting

If you still see steak/food images on your blog:

1. Clear your browser cache 
2. Try a different browser
3. Make sure you've deleted all posts before reseeding
4. Check the browser developer console (F12) for any image loading errors

## Image Path Reference

The blog now uses local images stored in the `/public/images/blog/` directory:

- GCC service-related images: gcc1.jpg, gcc2.jpg, gcc3.jpg
- Technology-related images: technology.jpg
- Talent-related images: talent.jpg 
- Workspace-related images: workspace.jpg
- Newsletter image: newsletter.jpg

All images have cache-busting parameters (?v=1) to ensure browsers load the latest versions. 