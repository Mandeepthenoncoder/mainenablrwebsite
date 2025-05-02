
import React from "react";
import { Button } from "@/components/ui/button";
import { useSeedBlogPosts } from "@/hooks/useSeedBlogPosts";
import { useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

interface SeedButtonProps {
  onSuccess: () => void;
}

const SeedButton = ({ onSuccess }: SeedButtonProps) => {
  const { mutate: seedBlogPosts, isPending } = useSeedBlogPosts();
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const handleSeed = () => {
    if (confirm("This will replace all existing blog posts with sample data. Are you sure?")) {
      seedBlogPosts(undefined, {
        onSuccess: () => {
          // Force refresh of the blog posts
          console.log("Invalidating blog-posts query cache");
          queryClient.invalidateQueries({ queryKey: ['blog-posts'] });
          
          // Show success toast
          toast({
            title: "Success!",
            description: "Sample blog posts have been seeded successfully.",
          });
          
          // Call the onSuccess callback
          onSuccess();
        },
        onError: (error) => {
          console.error("Seeding error:", error);
          toast({
            title: "Error",
            description: "Failed to seed blog posts. Please try again.",
            variant: "destructive",
          });
        }
      });
    }
  };

  return (
    <Button 
      variant="outline" 
      onClick={handleSeed} 
      disabled={isPending}
    >
      {isPending ? "Seeding..." : "Seed Sample Posts"}
    </Button>
  );
};

export default SeedButton;
