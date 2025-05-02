# PowerShell script to download Supabase images
$outputDir = "$PSScriptRoot\..\public\images\supabase-images"

# Ensure output directory exists
if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir -Force
}

# List of image URLs to download
$imageUrls = @(
    "https://kivxafsjmoplihqpotqj.supabase.co/storage/v1/object/public/site-images//hero-slide-1.png",
    "https://kivxafsjmoplihqpotqj.supabase.co/storage/v1/object/public/site-images//hero-slide-2.png",
    "https://kivxafsjmoplihqpotqj.supabase.co/storage/v1/object/public/site-images//hero-slide-3.png",
    "https://kivxafsjmoplihqpotqj.supabase.co/storage/v1/object/public/site-images//Updated%20Logo.svg",
    "https://kivxafsjmoplihqpotqj.supabase.co/storage/v1/object/public/site-images//TE%20hero%20img.jpg",
    "https://kivxafsjmoplihqpotqj.supabase.co/storage/v1/object/public/site-images//Acc.svg",
    "https://kivxafsjmoplihqpotqj.supabase.co/storage/v1/object/public/site-images//partner%20of%20choice.svg",
    "https://kivxafsjmoplihqpotqj.supabase.co/storage/v1/object/public/site-images//momentum.svg",
    "https://kivxafsjmoplihqpotqj.supabase.co/storage/v1/object/public/site-images//Waves.svg"
)

# Create a mapping to store original URLs and local paths
$mapping = @()

# Function to clean filename
function Clean-FileName {
    param([string]$fileName)
    
    # Remove URL-encoded characters
    $fileName = [System.Web.HttpUtility]::UrlDecode($fileName)
    
    # Replace spaces and special characters
    $fileName = $fileName -replace '\s+', '-' -replace '[^a-zA-Z0-9.-]', ''
    
    return $fileName
}

# Add System.Web assembly for URL decoding
Add-Type -AssemblyName System.Web

# Download each image
foreach ($url in $imageUrls) {
    try {
        # Extract filename from URL
        $uri = New-Object System.Uri($url)
        $pathSegments = $uri.LocalPath -split '/'
        $fileName = $pathSegments[-1]
        
        # Clean the filename
        $cleanFileName = Clean-FileName -fileName $fileName
        
        # Output file path
        $outputFile = Join-Path -Path $outputDir -ChildPath $cleanFileName
        
        Write-Host "Downloading $url to $outputFile"
        
        # Download the file
        Invoke-WebRequest -Uri $url -OutFile $outputFile
        
        # Add to mapping
        $mapping += @{
            "originalUrl" = $url
            "localPath" = "/images/supabase-images/$cleanFileName"
        }
        
        Write-Host "Downloaded: $cleanFileName" -ForegroundColor Green
    }
    catch {
        Write-Host "Error downloading $url`: $_" -ForegroundColor Red
    }
}

# Save mapping to JSON file
$mappingJson = ConvertTo-Json -InputObject $mapping
$mappingFile = Join-Path -Path $outputDir -ChildPath "image-mapping.json"
$mappingJson | Out-File -FilePath $mappingFile -Encoding utf8

Write-Host "`nDownloaded $($mapping.Count) of $($imageUrls.Count) images"
Write-Host "Image mapping saved to $mappingFile" 