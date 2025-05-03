import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, Clock } from "lucide-react";
import type { BlogPost } from "@/types/blog";
import { Link } from "react-router-dom";
import { typography } from "@/styles/typography";

interface InsightCardProps {
  post: BlogPost;
  index: number;
}

const InsightCard = ({ post, index }: InsightCardProps) => {
  // Map of default images based on category
  const getCategoryImage = (category: string) => {
    const categoryImages = {
      'Trends': 'https://images.unsplash.com/photo-1518770660439-4636190af475',
      'Sustainability': 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
      'Insights': 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
      'GCCs as-a-service': 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976',
      'Technology Enablement Solutions': 'https://images.unsplash.com/photo-1677442135136-760c813a149e',
      'Talent & HR Solutions': 'https://images.unsplash.com/photo-1552581234-26160f608093',
      'Workspace Solutions': 'https://images.unsplash.com/photo-1497215842964-222b430dc094'
    };
    return categoryImages[category as keyof typeof categoryImages] || post.cover_image;
  };

  return (
    <Link to={`/blog/${post.slug}`} className="block h-full">
      <Card className="group h-full bg-white border border-gray-100 hover:border-transparent transition-all duration-300 hover:shadow-lg overflow-hidden rounded-xl">
        <div className="w-full h-48 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-60 z-10"></div>
          <img 
            src={getCategoryImage(post.category)} 
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4 z-20">
            <span className="inline-block px-3 py-1 bg-white/90 text-enablr-navy text-xs font-medium rounded-full">
              {post.category}
            </span>
          </div>
        </div>
        
        <CardContent className="p-5 flex flex-col">
          <h3 className={`${typography.h4} group-hover:text-enablr-navy transition-colors line-clamp-2 mb-3`}>
            {post.title}
          </h3>
          
          <p className="text-gray-600 text-sm line-clamp-2 mb-4">
            {post.excerpt || "Explore the latest insights and trends in Global Capability Centers."}
          </p>
          
          <div className="flex items-center justify-between text-xs text-gray-500 mt-auto pt-3 border-t border-gray-100">
            <div className="flex items-center gap-1.5">
              <CalendarDays className="w-3.5 h-3.5" />
              <span>{new Date(post.published_at).toLocaleDateString('en-US', {day: '2-digit', month: 'short', year: 'numeric'})}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.read_time} min read</span>
            </div>
          </div>
          
          <div className="mt-4 pt-2 flex items-center text-enablr-navy text-sm font-medium">
            <span>Read More</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default InsightCard;
