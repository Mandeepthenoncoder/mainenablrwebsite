import { useBlogPosts } from './useBlogPosts';
import { useBlogPost } from './useBlogPost';
import { useStrapiPosts, useStrapiCategories, useStrapiTags } from './useStrapiPosts';
import { useStrapiPost } from './useStrapiPost';

// Define a constant for the data source
// Change this to 'supabase' to use Supabase, or 'strapi' to use Strapi
const DATA_SOURCE = 'strapi';

/**
 * Unified hook for fetching blog posts regardless of data source
 */
export const usePosts = (filters?: any) => {
  // Use Strapi as the data source
  if (DATA_SOURCE === 'strapi') {
    return useStrapiPosts(filters);
  }
  // Use Supabase as the data source
  return useBlogPosts();
};

/**
 * Unified hook for fetching a single blog post by slug
 */
export const usePost = (slug: string) => {
  // Use Strapi as the data source
  if (DATA_SOURCE === 'strapi') {
    return useStrapiPost(slug);
  }
  // Use Supabase as the data source
  return useBlogPost(slug);
};

/**
 * Unified hook for fetching blog categories
 */
export const useCategories = () => {
  // Use Strapi as the data source
  if (DATA_SOURCE === 'strapi') {
    return useStrapiCategories();
  }
  // Use Supabase as fallback (if implemented)
  return {
    data: [],
    isLoading: false,
    error: null
  };
};

/**
 * Unified hook for fetching blog tags
 */
export const useTags = () => {
  // Use Strapi as the data source
  if (DATA_SOURCE === 'strapi') {
    return useStrapiTags();
  }
  // Use Supabase as fallback (if implemented)
  return {
    data: [],
    isLoading: false,
    error: null
  };
}; 