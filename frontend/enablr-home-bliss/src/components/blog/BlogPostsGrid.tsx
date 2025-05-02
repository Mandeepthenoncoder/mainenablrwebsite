
import React from "react";
import type { BlogPost } from "@/types/blog";
import BlogPostCard from "./BlogPostCard";

interface BlogPostsGridProps {
  posts: BlogPost[];
  featuredPost?: boolean;
}

export const BlogPostsGrid = ({ posts, featuredPost = true }: BlogPostsGridProps) => {
  // If no posts available
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium text-gray-600">No posts found</h3>
        <p className="mt-2 text-gray-500">Try changing your search criteria</p>
      </div>
    );
  }
  
  // If we want a featured post and have more than one post
  if (featuredPost && posts.length > 1) {
    const featured = posts[0];
    const restOfPosts = posts.slice(1);
    
    return (
      <div className="space-y-12">
        {/* Featured post in full width */}
        <div className="w-full">
          <BlogPostCard post={featured} featured={true} />
        </div>
        
        {/* Grid for the rest of posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restOfPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    );
  }
  
  // Just show all posts in a grid
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <BlogPostCard key={post.id} post={post} />
      ))}
    </div>
  );
};
