

import { useQuery } from '@tanstack/react-query';
import { useArticle } from './useStrapi';
import { convertStrapiArticleToBlogPost } from '@/utils/strapiUtils';
import type { BlogPost } from '@/types/blog';

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