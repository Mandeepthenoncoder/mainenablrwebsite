
import { useQuery } from '@tanstack/react-query';
import strapiClient from '@/services/strapi';

// Type definitions for Strapi response
interface StrapiResponse<T> {
  data: Array<{
    id: number;
    attributes: T;
  }>;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// Article type
export interface Article {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  publishedAt: string;
  updatedAt: string;
  coverImage: {
    data: {
      attributes: {
        url: string;
        alternativeText: string;
      }
    }
  };
  category: {
    data: {
      attributes: {
        name: string;
        slug: string;
      }
    }
  };
  author: {
    data: {
      attributes: {
        name: string;
        avatar: {
          data: {
            attributes: {
              url: string;
            }
          }
        }
      }
    }
  };
  readTime: number;
}

// Get all articles with optional filters
export const useArticles = (filters: Record<string, any> = {}) => {
  return useQuery({
    queryKey: ['articles', filters],
    queryFn: async () => {
      try {
        // Construct populate parameter to include related data
        const populateParam = {
          coverImage: true,
          category: true,
          author: {
            populate: ['avatar']
          }
        };

        // Construct query parameters
        const queryParams = {
          ...filters,
          populate: populateParam,
          sort: ['publishedAt:desc']
        };

        // Make the API call
        const response = await strapiClient.find('articles', {
          populate: queryParams.populate,
          filters: filters,
          sort: queryParams.sort,
        });

        return response.data;
      } catch (error) {
        console.error('Error fetching articles:', error);
        throw error;
      }
    },
  });
};

// Get a single article by slug
export const useArticle = (slug: string) => {
  return useQuery({
    queryKey: ['article', slug],
    queryFn: async () => {
      try {
        // Construct populate parameter to include related data
        const populateParam = {
          coverImage: true,
          category: true,
          author: {
            populate: ['avatar']
          },
          tags: true
        };

        const response = await strapiClient.find('articles', {
          filters: { slug: { $eq: slug } },
          populate: populateParam,
        });

        return response.data[0];
      } catch (error) {
        console.error('Error fetching article:', error);
        throw error;
      }
    },
    enabled: !!slug,
  });
};

// Get all categories
export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      try {
        const response = await strapiClient.find('categories', {});
        return response.data;
      } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
      }
    },
  });
};

// Get all tags
export const useTags = () => {
  return useQuery({
    queryKey: ['tags'],
    queryFn: async () => {
      try {
        const response = await strapiClient.find('tags', {});
        return response.data;
      } catch (error) {
        console.error('Error fetching tags:', error);
        throw error;
      }
    },
  });
}; 