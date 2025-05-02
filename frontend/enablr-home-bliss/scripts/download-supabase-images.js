const fs = require('fs');
const path = require('path');
const https = require('https');
const url = require('url');

// List of Supabase image URLs to download
const imageUrls = [
  "https://kivxafsjmoplihqpotqj.supabase.co/storage/v1/object/public/site-images//hero-slide-1.png",
  "https://kivxafsjmoplihqpotqj.supabase.co/storage/v1/object/public/site-images//hero-slide-2.png",
  "https://kivxafsjmoplihqpotqj.supabase.co/storage/v1/object/public/site-images//hero-slide-3.png",
  "https://kivxafsjmoplihqpotqj.supabase.co/storage/v1/object/public/site-images//Updated%20Logo.svg",
  "https://kivxafsjmoplihqpotqj.supabase.co/storage/v1/object/public/site-images//TE%20hero%20img.jpg",
  "https://kivxafsjmoplihqpotqj.supabase.co/storage/v1/object/public/site-images//Acc.svg",
  "https://kivxafsjmoplihqpotqj.supabase.co/storage/v1/object/public/site-images//partner%20of%20choice.svg",
  "https://kivxafsjmoplihqpotqj.supabase.co/storage/v1/object/public/site-images//momentum.svg",
  "https://kivxafsjmoplihqpotqj.supabase.co/storage/v1/object/public/site-images//Waves.svg"
];

// Output directory for downloaded images
const outputDir = path.join(__dirname, '../public/images/supabase-images');

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Function to download an image
const downloadImage = (imageUrl) => {
  return new Promise((resolve, reject) => {
    // Parse the URL to get the pathname
    const parsedUrl = url.parse(imageUrl);
    
    // Extract the filename from the path
    const pathSegments = parsedUrl.pathname.split('/');
    let filename = pathSegments[pathSegments.length - 1];
    
    // Decode URL-encoded characters
    filename = decodeURIComponent(filename);
    
    // Remove any leading slashes
    if (filename.startsWith('/')) {
      filename = filename.substring(1);
    }
    
    // Create a clean filename (replace spaces and special characters)
    const cleanFilename = filename.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9.-]/g, '');
    
    // Full path where the image will be saved
    const filePath = path.join(outputDir, cleanFilename);
    
    console.log(`Downloading ${imageUrl} to ${filePath}`);
    
    // Create a write stream to save the file
    const fileStream = fs.createWriteStream(filePath);
    
    // Make a GET request to download the image
    https.get(imageUrl, (response) => {
      // Check if the response is successful
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download image, status code: ${response.statusCode}`));
        return;
      }
      
      // Pipe the response data to the file
      response.pipe(fileStream);
      
      // Handle file stream events
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded: ${cleanFilename}`);
        resolve({
          originalUrl: imageUrl,
          localPath: `/images/supabase-images/${cleanFilename}`
        });
      });
      
      fileStream.on('error', (err) => {
        fs.unlink(filePath, () => {}); // Delete the file if there's an error
        reject(err);
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {}); // Delete the file if there's an error
      reject(err);
    });
  });
};

// Download all images
const downloadAllImages = async () => {
  const results = [];
  
  for (const imageUrl of imageUrls) {
    try {
      const result = await downloadImage(imageUrl);
      results.push(result);
    } catch (error) {
      console.error(`Error downloading ${imageUrl}:`, error.message);
    }
  }
  
  // Save a mapping file for reference
  const mappingPath = path.join(outputDir, 'image-mapping.json');
  fs.writeFileSync(mappingPath, JSON.stringify(results, null, 2));
  
  console.log(`\nDownloaded ${results.length} of ${imageUrls.length} images`);
  console.log(`Image mapping saved to ${mappingPath}`);
};

// Run the download
downloadAllImages().catch(console.error); 