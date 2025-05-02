
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { BlogPost } from "@/types/blog";

export const useBlogPosts = () => {
  return useQuery({
    queryKey: ['blog-posts'],
    queryFn: async (): Promise<BlogPost[]> => {
      console.log("Fetching blog posts from Supabase");
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('published_at', { ascending: false });

      if (error) {
        console.error("Error fetching blog posts:", error);
        throw error;
      }
      
      console.log("Fetched blog posts:", data);
      return data;
    },
    // Reduce stale time to refresh more frequently
    staleTime: 30 * 1000 // 30 seconds
  });
};
