import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { BlogPost } from "@/types/blog";
import { getImagePath, getResponsiveSrcSet } from "@/utils/imageUtils";

interface BlogPostCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogPostCard = ({ post, featured = false }: BlogPostCardProps) => {
  const formattedDate = new Date(post.published_at).toLocaleDateString('en-US', { 
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
  
  // Map of default images based on category
  const getCategoryImage = (category: string) => {
    const categoryImages = {
      'Trends': '/images/blog/trends.jpg?v=1',
      'Sustainability': '/images/blog/sustainability.jpg?v=1',
      'Insights': '/images/blog/insights.jpg?v=1',
      'GCCs as-a-service': '/images/blog/gcc1.jpg?v=1',
      'Technology Enablement Solutions': '/images/blog/technology.jpg?v=1',
      'Talent & HR Solutions': '/images/blog/talent.jpg?v=1',
      'Workspace Solutions': '/images/blog/workspace.jpg?v=1'
    };
    // Use post.cover_image if available, otherwise use category image or default
    return post.cover_image || categoryImages[category as keyof typeof categoryImages] || '/images/blog/default.jpg?v=1';
  };
  
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className={`h-full overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col ${
        featured ? 'border-0 shadow-md' : 'border bg-white'
      }`}>
        <div className="relative overflow-hidden">
          <div className="aspect-[16/9]">
            {(() => {
              const imagePath = getCategoryImage(post.category);
              return (
                <img 
                  src={getImagePath(imagePath, true, true)} 
                  srcSet={getResponsiveSrcSet(imagePath)}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              );
            })()}
          </div>
          
          <div className="absolute top-0 left-0 m-4">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-enablr-navy bg-opacity-90 text-white rounded-full">
              {post.category}
            </span>
            </div>
          </div>
          
        <CardContent className={`p-6 ${featured ? 'pb-3' : 'pb-4'}`}>
          <h3 className={`${featured ? 'text-xl md:text-2xl' : 'text-lg'} font-semibold mb-3 group-hover:text-enablr-navy transition-colors line-clamp-2`}>
            {post.title}
          </h3>
          {(featured || post.excerpt) && (
            <p className={`text-gray-600 mb-4 line-clamp-2 ${featured ? 'text-base' : 'text-sm'}`}>
              {post.excerpt}
            </p>
          )}
        </CardContent>
        
        <CardFooter className={`px-6 pb-6 pt-0 flex ${featured ? 'justify-between' : 'flex-col gap-3'}`}>
          <div className={`flex items-center gap-2 text-sm text-gray-500 ${!featured && 'justify-between w-full'}`}>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.read_time} min read</span>
            </div>
          </div>
          <span className="flex items-center gap-1 text-enablr-navy font-medium text-sm group mt-3 hover:underline">
            Read more
          </span>
        </CardFooter>
        </Card>
    </motion.div>
  );
};

export default BlogPostCard;
