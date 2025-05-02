
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

interface BlogCategoriesProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const BlogCategories = ({ categories, activeCategory, setActiveCategory }: BlogCategoriesProps) => {
  return (
    <ScrollArea className="w-full">
      <Tabs 
        value={activeCategory} 
        onValueChange={setActiveCategory} 
        className="w-full mb-8"
      >
        <TabsList className="flex w-full overflow-x-auto space-x-1 p-1">
          {categories.map(category => (
            <TabsTrigger 
              key={category} 
              value={category}
              className="px-4 py-2 whitespace-nowrap capitalize"
            >
              {category === "all" ? "All Posts" : category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </ScrollArea>
  );
};

export default BlogCategories;
