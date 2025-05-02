import type { Article } from '@/hooks/useStrapi';
import type { BlogPost } from '@/types/blog';

/**
 * Converts a Strapi article object to the application's BlogPost format
 */
export const convertStrapiArticleToBlogPost = (
  strapiArticle: any
): BlogPost => {
  if (!strapiArticle) return null;
  
  const { id, attributes } = strapiArticle;
  
  return {
    id: id.toString(),
    title: attributes.title,
    slug: attributes.slug,
    excerpt: attributes.excerpt || null,
    content: attributes.content,
    cover_image: attributes.coverImage?.data?.attributes?.url || null,
    category: attributes.category?.data?.attributes?.name || 'Uncategorized',
    author: attributes.author?.data?.attributes?.name || 'Anonymous',
    read_time: attributes.readTime || 3,
    published_at: attributes.publishedAt
  };
};

/**
 * Converts an array of Strapi articles to an array of BlogPost objects
 */
export const convertStrapiArticlesToBlogPosts = (
  strapiArticles: any[]
): BlogPost[] => {
  if (!strapiArticles || !Array.isArray(strapiArticles)) return [];
  
  return strapiArticles.map(convertStrapiArticleToBlogPost).filter(Boolean);
};

/**
 * Gets the absolute URL for a Strapi media item
 */
export const getStrapiMediaUrl = (url: string): string => {
  if (!url) return '';
  
  // If the URL starts with a slash and doesn't have the base URL, add it
  if (url.startsWith('/') && !url.startsWith('http')) {
    return `http://localhost:1337${url}`;
  }
  
  return url;
}; 