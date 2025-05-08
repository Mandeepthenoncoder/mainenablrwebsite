# Sitemap Builder Script for Enablr

# Define the base URL of your website
$baseUrl = "https://www.enablr.ai"

# Define the XML header and opening tags
$xmlHeader = @"
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
"@

# Define the XML footer
$xmlFooter = "</urlset>"

# Define the URLs to include in the sitemap
$urls = @(
    # Home Page
    @{
        loc = "$baseUrl/"
        lastmod = (Get-Date).ToString("yyyy-MM-dd")
        changefreq = "weekly"
        priority = "1.0"
    },
    
    # Solutions Pages
    @{
        loc = "$baseUrl/solutions"
        lastmod = (Get-Date).ToString("yyyy-MM-dd")
        changefreq = "monthly"
        priority = "0.9"
    },
    @{
        loc = "$baseUrl/solutions/gcc-as-service"
        lastmod = (Get-Date).ToString("yyyy-MM-dd")
        changefreq = "monthly"
        priority = "0.8"
    },
    @{
        loc = "$baseUrl/solutions/technology-enablement"
        lastmod = (Get-Date).ToString("yyyy-MM-dd")
        changefreq = "monthly"
        priority = "0.8"
    },
    @{
        loc = "$baseUrl/solutions/workspace-solutions"
        lastmod = (Get-Date).ToString("yyyy-MM-dd")
        changefreq = "monthly"
        priority = "0.8"
    },
    @{
        loc = "$baseUrl/solutions/talent-hr-solutions"
        lastmod = (Get-Date).ToString("yyyy-MM-dd")
        changefreq = "monthly"
        priority = "0.8"
    },
    @{
        loc = "$baseUrl/solutions/business-operations"
        lastmod = (Get-Date).ToString("yyyy-MM-dd")
        changefreq = "monthly"
        priority = "0.8"
    },
    @{
        loc = "$baseUrl/solutions/staff-augmentation"
        lastmod = (Get-Date).ToString("yyyy-MM-dd")
        changefreq = "monthly"
        priority = "0.8"
    },
    
    # Engagement Model Pages
    @{
        loc = "$baseUrl/engagement"
        lastmod = (Get-Date).ToString("yyyy-MM-dd")
        changefreq = "monthly"
        priority = "0.9"
    },
    @{
        loc = "$baseUrl/engagement/bot"
        lastmod = (Get-Date).ToString("yyyy-MM-dd")
        changefreq = "monthly"
        priority = "0.8"
    },
    @{
        loc = "$baseUrl/engagement/comprehensive-management"
        lastmod = (Get-Date).ToString("yyyy-MM-dd")
        changefreq = "monthly"
        priority = "0.8"
    },
    @{
        loc = "$baseUrl/engagement/modular-services"
        lastmod = (Get-Date).ToString("yyyy-MM-dd")
        changefreq = "monthly"
        priority = "0.8"
    },
    @{
        loc = "$baseUrl/engagement/dedicated-team"
        lastmod = (Get-Date).ToString("yyyy-MM-dd")
        changefreq = "monthly"
        priority = "0.8"
    },
    
    # About Pages
    @{
        loc = "$baseUrl/about"
        lastmod = (Get-Date).ToString("yyyy-MM-dd")
        changefreq = "monthly"
        priority = "0.9"
    },
    @{
        loc = "$baseUrl/about/leadership"
        lastmod = (Get-Date).ToString("yyyy-MM-dd")
        changefreq = "monthly"
        priority = "0.8"
    },
    
    # Blog Pages
    @{
        loc = "$baseUrl/blog"
        lastmod = (Get-Date).ToString("yyyy-MM-dd")
        changefreq = "weekly"
        priority = "0.9"
    },
    
    # Other Main Pages
    @{
        loc = "$baseUrl/careers"
        lastmod = (Get-Date).ToString("yyyy-MM-dd")
        changefreq = "weekly"
        priority = "0.9"
    },
    @{
        loc = "$baseUrl/contact"
        lastmod = (Get-Date).ToString("yyyy-MM-dd")
        changefreq = "monthly"
        priority = "0.9"
    },
    
    # Legal Pages
    @{
        loc = "$baseUrl/cookies-policy"
        lastmod = (Get-Date).ToString("yyyy-MM-dd")
        changefreq = "yearly"
        priority = "0.5"
    },
    @{
        loc = "$baseUrl/privacy-policy"
        lastmod = (Get-Date).ToString("yyyy-MM-dd")
        changefreq = "yearly"
        priority = "0.5"
    },
    @{
        loc = "$baseUrl/cookie-policy"
        lastmod = (Get-Date).ToString("yyyy-MM-dd")
        changefreq = "yearly"
        priority = "0.5"
    },
    @{
        loc = "$baseUrl/thank-you"
        lastmod = (Get-Date).ToString("yyyy-MM-dd")
        changefreq = "yearly"
        priority = "0.3"
    }
)

# Build the sitemap XML content
$xmlContent = $xmlHeader

foreach ($url in $urls) {
    $xmlContent += @"
  <url>
    <loc>$($url.loc)</loc>
    <lastmod>$($url.lastmod)</lastmod>
    <changefreq>$($url.changefreq)</changefreq>
    <priority>$($url.priority)</priority>
  </url>
"@
}

$xmlContent += $xmlFooter

# Save the sitemap to public/sitemap.xml
$currentPath = "C:\Users\saira\Desktop\mainenablrwebsite\frontend\enablr-home-bliss"
$sitemapPath = Join-Path -Path $currentPath -ChildPath "public\sitemap.xml"
Set-Content -Path $sitemapPath -Value $xmlContent

Write-Host "Sitemap created successfully at: $sitemapPath"
