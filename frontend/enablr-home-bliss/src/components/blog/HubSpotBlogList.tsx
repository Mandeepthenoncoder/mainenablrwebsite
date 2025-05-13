import React, { useEffect, useState } from 'react';
import { fetchBlogPosts } from '@/services/hubspot';

interface BlogPost {
  id: string;
  name: string;
  publishedAt?: string;
  summary?: string;
  featuredImage?: { url: string };
}

const HubSpotBlogList: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchBlogPosts(10, 0);
        setPosts(data);
      } catch (err: any) {
        setError('Failed to load blog posts.');
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-enablr-navy">Latest Insights</h2>
        {loading && <div className="text-center py-8">Loading...</div>}
        {error && <div className="text-center text-red-500 py-8">{error}</div>}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-gray-50 rounded-xl shadow p-6 flex flex-col h-full">
              <h3 className="text-lg font-semibold text-enablr-navy mb-2">{post.name}</h3>
              {post.publishedAt && (
                <div className="text-xs text-gray-500 mb-2">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </div>
              )}
              {post.summary && (
                <p className="text-gray-700 mb-4 line-clamp-3">{post.summary}</p>
              )}
              {/* Add a link or button to view full post if needed */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HubSpotBlogList; 