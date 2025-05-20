import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  ogImage: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, canonicalUrl, ogImage }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <link rel="canonical" href={canonicalUrl} />
    {/* Open Graph tags */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={canonicalUrl} />
    <meta property="og:image" content={ogImage} />
    {/* Twitter Card tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={ogImage} />
  </Helmet>
);

export default SEO; 