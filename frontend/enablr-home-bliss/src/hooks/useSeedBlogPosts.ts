import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const useSeedBlogPosts = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const samplePosts = [
        {
          title: "Why GCCs are the future of scalable business operations?",
          slug: "gccs-future-scalable-business-operations",
          excerpt: "Explore how Global Capability Centers are redefining scalable business operations for enterprises worldwide.",
          content: "<p>In today's rapidly evolving business landscape, Global Capability Centers (GCCs) have emerged as strategic hubs that drive innovation, efficiency, and scalability...</p>",
          category: "GCCs as-a-service",
          author: "Enablr Team",
          read_time: 5,
          cover_image: "/images/blog/gcc1.jpg?v=1",
          published_at: new Date().toISOString()
        },
        {
          title: "From support functions to strategic hubs: The evolution of GCCs",
          slug: "support-functions-to-strategic-hubs",
          excerpt: "Witness the transformation journey of GCCs from basic support centers to crucial strategic business hubs.",
          content: "<p>Global Capability Centers have undergone a significant transformation over the past decade...</p>",
          category: "GCCs as-a-service",
          author: "Enablr Team",
          read_time: 7,
          cover_image: "/images/blog/gcc2.jpg?v=1",
          published_at: new Date().toISOString()
        },
        {
          title: "AI-powered transformation: How GCCs are driving business innovation",
          slug: "ai-powered-transformation-gccs",
          excerpt: "Discover how AI technologies are powering the next wave of innovation in Global Capability Centers.",
          content: "<p>Artificial Intelligence is revolutionizing how Global Capability Centers operate and deliver value...</p>",
          category: "Technology Enablement Solutions",
          author: "Enablr Team",
          read_time: 5,
          cover_image: "https://images.unsplash.com/photo-1677442135136-760c813a149e",
          published_at: new Date().toISOString()
        },
        {
          title: "AI and Automation: The driving force behind GCCs",
          slug: "ai-automation-driving-force-gccs",
          excerpt: "Learn how AI and automation technologies are becoming the core drivers of modern GCCs.",
          content: "<p>AI and automation technologies are increasingly becoming the backbone of modern Global Capability Centers...</p>",
          category: "Technology Enablement Solutions",
          author: "Enablr Team",
          read_time: 6,
          cover_image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
          published_at: new Date().toISOString()
        },
        {
          title: "GCCs are redefining digital transformation. Know more.",
          slug: "gccs-redefining-digital-transformation",
          excerpt: "Explore how GCCs are at the forefront of digital transformation initiatives for global enterprises.",
          content: "<p>Global Capability Centers are increasingly becoming the nerve centers for digital transformation initiatives...</p>",
          category: "Technology Enablement Solutions",
          author: "Enablr Team",
          read_time: 5,
          cover_image: "https://images.unsplash.com/photo-1581092921461-39b9d08ed889",
          published_at: new Date().toISOString()
        },
        {
          title: "How to build a high-performance GCC: Best practices for talent, technology, and strategy",
          slug: "build-high-performance-gcc-best-practices",
          excerpt: "A comprehensive guide to building high-performing Global Capability Centers through the right talent, technology, and strategic alignment.",
          content: "<p>Building a high-performance Global Capability Center requires careful attention to three key elements...</p>",
          category: "Talent & HR Solutions",
          author: "Enablr Team",
          read_time: 6,
          cover_image: "https://images.unsplash.com/photo-1552581234-26160f608093",
          published_at: new Date().toISOString()
        },
        {
          title: "The role of upskilling and reskilling in GCCs: preparing talent for the future",
          slug: "upskilling-reskilling-gccs-talent-future",
          excerpt: "Why continuous learning and skill development are crucial for GCCs to stay ahead in the rapidly changing business environment.",
          content: "<p>As technology and business requirements evolve at an unprecedented pace...</p>",
          category: "Talent & HR Solutions",
          author: "Enablr Team",
          read_time: 7,
          cover_image: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890",
          published_at: new Date().toISOString()
        },
        {
          title: "Building the workforce of tomorrow: The role of GCCs in tech talent development",
          slug: "workforce-tomorrow-gccs-tech-talent-development",
          excerpt: "How Global Capability Centers are becoming crucial talent incubators for developing future-ready technical skills.",
          content: "<p>Global Capability Centers are playing an increasingly important role in developing technical talent...</p>",
          category: "Talent & HR Solutions",
          author: "Enablr Team",
          read_time: 6,
          cover_image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
          published_at: new Date().toISOString()
        },
        {
          title: "Optimizing workspace design in GCCs: Balancing innovation, collaboration, and well-being",
          slug: "optimizing-workspace-design-gccs",
          excerpt: "How thoughtful workspace design can enhance productivity, collaboration, and employee well-being in Global Capability Centers.",
          content: "<p>Workspace design plays a critical role in the success of Global Capability Centers...</p>",
          category: "Workspace Solutions",
          author: "Enablr Team",
          read_time: 6,
          cover_image: "https://images.unsplash.com/photo-1497215842964-222b430dc094",
          published_at: new Date().toISOString()
        },
        {
          title: "Hybrid work models in GCCs: Finding the right balance",
          slug: "hybrid-work-models-gccs-right-balance",
          excerpt: "Strategies for implementing effective hybrid working arrangements in Global Capability Centers.",
          content: "<p>The COVID-19 pandemic has accelerated the adoption of hybrid work models in Global Capability Centers...</p>",
          category: "Workspace Solutions",
          author: "Enablr Team",
          read_time: 6,
          cover_image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
          published_at: new Date().toISOString()
        },
        {
          title: "How GCC can be a powerhouse of innovation",
          slug: "gcc-powerhouse-innovation",
          excerpt: "Unleashing the innovation potential of Global Capability Centers through the right strategies and enablers.",
          content: "<p>Global Capability Centers have the potential to be powerful engines of innovation...</p>",
          category: "Workspace Solutions",
          author: "Enablr Team",
          read_time: 5,
          cover_image: "https://images.unsplash.com/photo-1547658719-da2b51169166",
          published_at: new Date().toISOString()
        },
        {
          title: "Sustainable GCC Operations Guide",
          slug: "sustainable-gcc-operations-guide",
          excerpt: "A comprehensive guide to implementing sustainable practices in your Global Capability Center operations.",
          content: "<p>Sustainability has become a critical focus for Global Capability Centers as organizations seek to minimize their environmental impact...</p>",
          category: "Sustainability",
          author: "Enablr Team",
          read_time: 7,
          cover_image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
          published_at: new Date().toISOString()
        },
        {
          title: "Navigating India's Business Landscape",
          slug: "navigating-indias-business-landscape",
          excerpt: "Essential insights for companies looking to establish or expand their GCC operations in India.",
          content: "<p>India remains one of the top destinations for Global Capability Centers, offering a unique blend of talent, infrastructure, and business environment...</p>",
          category: "Insights",
          author: "Enablr Team",
          read_time: 6,
          cover_image: "https://images.unsplash.com/photo-1626195798484-76c42918f0e1",
          published_at: new Date().toISOString()
        },
        {
          title: "Build-operate-transfer (BOT) Model Explained",
          slug: "bot-model-explained",
          excerpt: "A detailed breakdown of the Build-Operate-Transfer model for establishing Global Capability Centers.",
          content: "<p>The Build-Operate-Transfer (BOT) model has emerged as a popular approach for organizations looking to establish Global Capability Centers...</p>",
          category: "Trends",
          author: "Enablr Team",
          read_time: 5,
          cover_image: "/images/blog/gcc3.jpg?v=1",
          published_at: new Date().toISOString()
        }
      ];

      try {
        console.log("Step 1: Testing database connection...");
        // Test connection first
        const { error: testError } = await supabase
          .from('blog_posts')
          .select('count', { count: 'exact', head: true });
          
        if (testError) {
          console.error("Connection test failed:", testError);
          throw new Error(`Connection test failed: ${testError.message}`);
        }
          
        console.log("Step 2: Connection successful, deleting existing posts...");
        
        // Check if table exists and has the correct structure
      try {
        // First clear existing posts with explicit error handling
        const { error: deleteError } = await supabase
          .from('blog_posts')
          .delete()
            .gt('id', '00000000-0000-0000-0000-000000000000');

        if (deleteError) {
          console.error("Error deleting existing posts:", deleteError);
            throw new Error(`Failed to delete existing posts: ${deleteError.message}`);
        }
        
        console.log("Successfully deleted existing posts, now inserting new ones");
        } catch (deleteErr) {
          console.error("Delete operation failed:", deleteErr);
          throw new Error(`Delete operation failed: ${deleteErr instanceof Error ? deleteErr.message : String(deleteErr)}`);
        }

        console.log("Step 3: Inserting sample posts...");
        // Insert individual posts one by one for better error handling
        const insertedPosts = [];
        
        // Generate timestamp suffix for unique slugs
        const timestamp = new Date().getTime();
        
        for (const post of samplePosts) {
          console.log(`Inserting post: ${post.title}`);
          try {
            // Add timestamp to slug to make it unique
            const uniquePost = {
              ...post,
              slug: `${post.slug}-${timestamp}`
            };
            
            const { data, error } = await supabase
          .from('blog_posts')
              .insert([uniquePost])
          .select();

            if (error) {
              console.error(`Error inserting post "${post.title}":`, error);
              throw new Error(`Failed to insert post "${post.title}": ${error.message}`);
            }
            
            if (data) {
              insertedPosts.push(data[0]);
            }
          } catch (insertErr) {
            console.error(`Insert operation failed for post "${post.title}":`, insertErr);
            throw new Error(`Insert operation failed for post "${post.title}": ${insertErr instanceof Error ? insertErr.message : String(insertErr)}`);
          }
        }
        
        console.log(`Successfully inserted ${insertedPosts.length} sample posts`);

        return { success: true, insertedCount: insertedPosts.length, posts: insertedPosts };
      } catch (error) {
        console.error("Error in seed operation:", error);
        throw error;
      }
    },
    onSuccess: (data) => {
      console.log("Seed operation successful:", data);
      // Invalidate the blog posts query to trigger a refetch
      queryClient.invalidateQueries({ queryKey: ['blog-posts'] });
      
      toast({
        title: "Success!",
        description: `${data.insertedCount} sample blog posts have been added successfully.`,
      });
    },
    onError: (error: any) => {
      console.error("Error seeding blog posts:", error);
      
      // Check if this is a row-level security policy error
      const errorMessage = error?.message || "Failed to seed blog posts. Please check the console for details.";
      const isRLSError = errorMessage.includes("row-level security policy");
      
      toast({
        title: "Error",
        description: isRLSError 
          ? "Row-Level Security policy is preventing blog post insertion. Please check Supabase dashboard to adjust RLS policies on the blog_posts table or contact your administrator."
          : errorMessage,
        variant: "destructive",
      });
    },
  });
};
