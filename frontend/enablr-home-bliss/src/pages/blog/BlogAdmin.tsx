
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { useToast } from "@/hooks/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Edit, Plus, Trash2 } from "lucide-react";
import BlogPostForm from "@/components/blog/BlogPostForm";
import SeedButton from "@/components/blog/SeedButton";
import { supabase } from "@/integrations/supabase/client";
import { BlogPost } from "@/types/blog";
import { useQueryClient } from "@tanstack/react-query";

const BlogAdmin = () => {
  const { data: posts, isLoading, refetch } = useBlogPosts();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  
  // Function to handle data refresh
  const handleDataRefresh = () => {
    console.log("Refreshing blog post data...");
    queryClient.invalidateQueries({ queryKey: ['blog-posts'] });
    refetch();
  };
  
  // Function to handle post deletion
  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this post?")) {
      try {
        const { error } = await supabase
          .from('blog_posts')
          .delete()
          .eq('id', id);
        
        if (error) throw error;
        
        toast({
          title: "Post deleted",
          description: "The blog post has been deleted successfully.",
        });
        
        handleDataRefresh();
      } catch (error) {
        console.error("Error deleting post:", error);
        toast({
          title: "Error",
          description: "Failed to delete the blog post.",
          variant: "default",
        });
      }
    }
  };
  
  // Handle submit from form
  const handleFormSubmit = async () => {
    setIsAddDialogOpen(false);
    setEditingPost(null);
    handleDataRefresh();
  };
  
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Blog Admin - Enablr</title>
        <meta name="description" content="Admin panel for blog management" />
      </Helmet>
      
      <Navbar />
      <main className="pt-16 container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Blog Management</h1>
          
          <div className="flex gap-4">
            <SeedButton onSuccess={handleDataRefresh} />
            
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-enablr-purple hover:bg-enablr-purple/90">
                  <Plus className="mr-2 h-4 w-4" /> Add New Post
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Add New Blog Post</DialogTitle>
                </DialogHeader>
                <BlogPostForm onSubmit={handleFormSubmit} />
              </DialogContent>
            </Dialog>
          </div>
        </div>
        
        {isLoading ? (
          <div className="text-center py-12">
            <p>Loading blog posts...</p>
          </div>
        ) : (
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Published</TableHead>
                  <TableHead>Read Time</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {posts && posts.length > 0 ? (
                  posts.map((post) => (
                    <TableRow key={post.id}>
                      <TableCell className="font-medium">{post.title}</TableCell>
                      <TableCell>{post.category}</TableCell>
                      <TableCell>{new Date(post.published_at).toLocaleDateString()}</TableCell>
                      <TableCell>{post.read_time} min</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => setEditingPost(post)}
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                              <DialogHeader>
                                <DialogTitle>Edit Blog Post</DialogTitle>
                              </DialogHeader>
                              <BlogPostForm post={post} onSubmit={handleFormSubmit} />
                            </DialogContent>
                          </Dialog>
                          
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleDelete(post.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-8">
                      No blog posts found. Click "Add New Post" to create one or use the "Seed Sample Posts" button.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogAdmin;
