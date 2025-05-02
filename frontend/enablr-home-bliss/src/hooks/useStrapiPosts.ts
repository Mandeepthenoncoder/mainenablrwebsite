import { useQuery } from '@tanstack/react-query';
import { useArticles, useArticle, useCategories, useTags } from './useStrapi';
import { convertStrapiArticlesToBlogPosts, convertStrapiArticleToBlogPost } from '@/utils/strapiUtils';
import type { BlogPost } from '@/types/blog';

/**
 * Hook to fetch blog posts from Strapi
 * This is a drop-in replacement for useBlogPosts
 */
export const useStrapiPosts = (filters?: Record<string, any>) => {
  const { data: strapiArticles, isLoading, error } = useArticles(filters);

  return {
    data: strapiArticles ? convertStrapiArticlesToBlogPosts(strapiArticles) : [],
    isLoading,
    error
  };
};

/**
 * Hook to fetch a single blog post by slug from Strapi
 */
export const useStrapiPost = (slug: string) => {
  const { data: strapiArticle, isLoading, error } = useArticle(slug);

  return {
    data: strapiArticle ? convertStrapiArticleToBlogPost(strapiArticle) : null,
    isLoading,
    error
  };
};

/**
 * Hook to fetch blog categories from Strapi
 */
export const useStrapiCategories = () => {
  const { data: strapiCategories, isLoading, error } = useCategories();

  return {
    data: strapiCategories ? strapiCategories.map(cat => ({
      id: cat.id.toString(),
      name: cat.attributes.name,
      slug: cat.attributes.slug
    })) : [],
    isLoading,
    error
  };
};

/**
 * Hook to fetch blog tags from Strapi
 */
export const useStrapiTags = () => {
  const { data: strapiTags, isLoading, error } = useTags();

  return {
    data: strapiTags ? strapiTags.map(tag => ({
      id: tag.id.toString(),
      name: tag.attributes.name,
      slug: tag.attributes.slug
    })) : [],
    isLoading,
    error
  };
}; 