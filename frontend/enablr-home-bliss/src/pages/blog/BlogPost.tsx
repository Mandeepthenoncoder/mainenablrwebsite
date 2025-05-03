import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowUp, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { BlogPost } from "@/types/blog";
import { typography } from "@/styles/typography";

// Same static data as in Blog.tsx
const staticPosts: BlogPost[] = [
  {
    id: "1",
    title: "The 'Scalability' advantage: Why GCCs matter",
    slug: "scalability-advantage-why-gccs-matter",
    excerpt: "Building your GCC is like drawing a blueprint for your house, ensuring every element from the ground up embeds strength and scalability to stay future proof.",
    content: `<p>Building your GCC is like drawing a blueprint for your house, ensuring every element from the ground up embeds strength and scalability to stay future proof. A well-designed GCC is not limited to choosing a workspace and staffing it with people. It's about building real strength, flexibility, and room to grow, aligning with your larger business vision. Just like a house that's built to last, your GCC is built to support you today and adapt with time as your business evolves.</p>

<p>At the core of this process is what we call the 'scalability' advantage. Global businesses on the growth path, whether starting out or established need to innovate, and keep up with world dynamics. For them GCCs offer more than just operational support. They create a solid foundation to scale the right way by building strong teams, embracing the right technology, and ensuring that innovation never stops. Hence, creating a smarter and much more sustainable ecosystem to keep growing.</p>

<h2 class="mt-10 mb-6"><strong>What's the India Edge?</strong></h2>

<p>The 'India' story speaks volumes today in the overall GCC scheme of things. In its report 'Future of GCCs in India - a vision 2030', <a href="https://www.ey.com/en_in/newsroom/2023/06/india-gcc-market-size-to-reach-us-dollor-110b-by-2030" target="_blank" rel="noopener noreferrer">EY</a> has estimated, "The domestic GCC market size will potentially reach US$110b by the year 2030 (from the current US$45b), led by software exports, which remain a key component of India's service exports. It is predicted that by 2030, India will have 2400 GCCs and that number can potentially increase to 2550 as India emerges as the world's technology and services hub. The total number of new GCC set-ups every year can jump up to 115 (from the current 70)".</p>

<p>India is increasingly becoming 'the partner of choice', where global companies intend to build and scale their capability centers. Saving costs is no more the only factor of consideration. It brings to the table a deep, diverse talent pool with strong tech skills and a mindset for innovation.</p>

<p>The work culture and business scenario here is mature, built-for-momentum, and ready to scale up and support everything from R&D to digital transformation. It's easier to get started, easier to grow, and easier to stay ahead with scalable models built for future-proofing your business.</p>

<h2 class="mt-10 mb-6"><strong>Scalable talent, no compromise</strong></h2>

<p>One of the most significant advantages GCCs bring to the table is access to high-quality talent at scale. Whether it's engineering, data science, design, finance, or legal, GCCs enable organizations to tap into deep and diverse talent pools, especially in innovation-rich regions like India. But it's not just about numbers. It's about building agile teams that can grow in step with business needs, without compromising on capability, culture, or quality.</p>

<p>As per a recent <a href="https://community.nasscom.in/index.php/communities/global-capability-centers/business-case-outlines-strategic-advantages-establishing" target="_blank" rel="noopener noreferrer">NASSCOM</a> report, "India produces 2.5 million STEM graduates annually, ensuring a steady pipeline of skilled professionals in IT, engineering, and AI." In addition, "India's time zone (GMT+5:30) enables seamless collaboration with European and U.S. teams, while its cultural compatibility and innovation ecosystem foster global productivity."</p>

<p>This ultimately sets the stage for a capability centre that can keep expanding with the global aspirations your business.</p>`,
    cover_image: "/Blog Images/From support functions to strategic hubs The evolution of GCCs.jpg?v=1",
    author: "Mandeep Singh",
    category: "GCCs as-a-service",
    published_at: "2024-06-01T00:00:00Z",
    read_time: 5
  },
  {
    id: "2",
    title: "How to build a high-performance GCC: Best practices for talent, technology, and strategy",
    slug: "high-performance-gcc-best-practices",
    excerpt: "A comprehensive guide to establishing and optimizing Global Capability Centers for maximum business impact.",
    content: `<p>Simon Sinek, an American author and inspirational speaker, shares in his book 'Start with Why', how some brands and leaders think differently. They begin with 'why' instead of jumping straight to 'how'.</p>

<p>When it comes to setting up a Global Capability Centre (GCC) and driving a high-impact mandate, starting with a clear purpose is what truly sets the direction. Keeping that purpose in focus helps answer most of your questions, while the how, when, and where naturally fall into place.</p>

<p>Setting up a GCC is certainly a major organizational milestone. When you talk about a high-performing GCC, you need more than just a nice office space and a bunch of people seated on chairs. To realize the true business value, you need a clear objective, and a combination of skilled personnel and technology outlook, supported by strategic planning, which is possible only with experience and market intelligence.</p>

<p>Most critically, quality is key, at every step!</p>

<p>For creating a sustainable success story with this model, you need to answer some questions.</p>

<h2 class="mt-10 mb-6"><strong>What's your talent approach?</strong></h2>

<p>The effectiveness of your GCC depends entirely on the capabilities of its team members and what they will eventually bring to the table in terms of skills and cultural nuances. Hence, the obvious step in your talent strategy is to determine exactly which types of skills and abilities you need. Whether you plan to target either core operations or focus on innovation and research and development. The approach mode is crucial.</p>

<p>After understanding your talent requirements seek candidates with more than just resume qualifications. Think about potential, mindset, and cultural fit. Work together with regional talent specialists to differentiate yourself within competitive markets. Talented candidates deserve reasons to remain with your organization. Provide meaningful work with clear career progression goals, while offering opportunities to showcase commitment and competence.</p>

<h2 class="mt-10 mb-6"><strong>What are your core values that will bring global teams together?</strong></h2>

<p>The most thought through plans will fail when they lack supportive organizational culture. Your GCC needs to become an integral element of your organization. Your GCC must operate as if it is an inherent part of your organization.</p>

<p>Hence, you must foster clear communication between your organization's global and local teams. Celebrate shared wins. Build trust through transparency and collaboration. An inclusive organizational culture can substantially improve performance and people would love to stick around.</p>

<h2 class="mt-10 mb-6"><strong>What is binding your tech focus together?</strong></h2>

<p>Technology is an enabler in every sense. You must set-up tools and infrastructure that runs smoothly and delivers at speed with scalability.</p>

<p>Our suggestion is to bring in the elements of flexibility, agility, and adaptability into play. Technology wise, your GCC needs to evolve to smoothly embed automation, analytics and AI whenever and wherever it needs. In this process you can even bring in a partner who can deliver and manage technology implementation for you, so that your teams don't get overwhelmed.</p>

<h2 class="mt-10 mb-6"><strong>India, the GCC capital of the world</strong></h2>

<p>JLL, a global commercial real estate and investment management company, has shared in its report that the number of Global Capability Centres (GCCs) in India will exceed 2,500, up from the current count of 1,950. These GCCs, established by leading multinational corporations, are expected to occupy over 300 million square feet of space in the next 3 to 4 years. This growth will be driven by new entrants as well as expansion by existing players.</p>

<p>What began with captive centres and BPOs has matured into the establishment of Centres of Excellence (CoEs). Today, India has further evolved into a hub for transformation and innovation. India gives your GCC the best of both worlds; access to top talent and cost efficiency.</p>

<p>You can tap into an extensive, but exclusive pool of skilled professionals in tech, engineering, and analytics, all without compromising on quality or exploiting your budgets. It's also a thriving innovation hub. With a vibrant startup scene, strong IT services, and tech centres of excellence, you have everything you need to keep your GCC on the cutting edge.</p>

<p>Hence, as your business evolves, your GCC can experience the same growth trajectory. You can build future-ready teams that not only support your current goals, but also help drive long-term strategic growth.</p>

<p>Operations wise, India offers the best of digital infrastructure to help you work smarter. Automation, agile delivery, and cloud adoption are aspects that get embedded within your GCC's blueprint. When all this comes together, it works marvellously to boost efficiency and performance.</p>

<p>The JLL guidebook mentions a crucial point with regards to talent retention and stability, "When it comes to the high demand for talent, India has the solution. But this solution comes with a high attrition rate. You need an inclusive work culture that recruits and retains the best."</p>

<p>Ultimately, the core objective is to work around your goals and let you focus on the big global picture for your business.</p>

<h2 class="mt-10 mb-6"><strong>It's a combination of factors, but strategic outlook matters</strong></h2>

<p>At the end of the day, building a high-performance GCC is about more than just execution. It's about being clear on the purpose and making sure everyone is aligned on what you're really trying to achieve.</p>

<p>Whether you're aiming to reduce costs, grow into new markets, or spark innovation, having a clear strategy helps you through every decision-making process. Right from the teams you build, to how you measure success. When everyone's on the same page, your GCC becomes more than a support function. It becomes a unified entity with your core.</p>

<p>With Enablr as your 'partner of choice', you can depend solely on us for your end-to-end talent and HR solutions and technology enablement strategy. Know more about our wide range of solutions to reach faster to the market without compromising on quality.</p>`,
    cover_image: "/Blog Images/How to build a high-performance GCC Best practices for talent, technology, and strategy.jpg?v=1",
    author: "Rahul Sharma",
    category: "Technology Enablement Solutions",
    published_at: "2024-05-20T00:00:00Z",
    read_time: 8
  },
  {
    id: "3",
    title: "AI-powered transformation: How GCCs are driving business innovation",
    slug: "ai-powered-transformation-gcc-innovation",
    excerpt: "Exploring how Global Capability Centers are leveraging artificial intelligence to reimagine business processes and create competitive advantages.",
    content: `<h2 class="mt-10 mb-6"><strong>Is it only about cost effectiveness?</strong></h2>

<p>The time to raise this question in the context of Global Capability Centres (GCCs), has long passed.</p>

<p>Today, GCCs have come a long way. What started out as a way for companies to cut costs and streamline operations, has changed in the current context. Today, they're quickly becoming hubs of innovation. With AI and automation in the mix, businesses are now using their GCCs to unlock real, meaningful transformation.</p>

<p>Sindhu Gangadharan, Chairperson, <a href="https://community.nasscom.in/index.php/communities/global-capability-centers/business-case-outlines-strategic-advantages-establishing" target="_blank" rel="noopener noreferrer">NASSCOM</a>, mentions, "As global businesses strive for reinvention, India's GCCs are at the forefront, not just implementing AI solutions but developing them. They are now the R&D powerhouses, co-creating next-generation AI products, platforms, and offerings that will shape the future of industries worldwide."</p>

<p>This shift isn't just about adopting new tech or getting an edge over trending automation tools. It's about understanding the bigger picture: how GCCs bring together the right mix of technology, talent, and infrastructure. There's a change in how businesses think, how they operate, and how they grow. And right now, GCCs are playing a central role in making that happen.</p>

<h2 class="mt-10 mb-6"><strong>Evolving into innovation hub</strong></h2>

<p>For a long time, GCCs were seen mostly as support engines, focused on cost savings and efficiency. But that's changing quickly. Today, they're becoming a much more strategic role, helping businesses grow and innovate.</p>

<p>For instance, AI is being implemented global entities to power supply chains across diverse locations. According to McKinsey, "Early adopters of AI-enabled supply chain management have achieved a 15% reduction in logistics costs, a 35% decrease in inventory levels, a 65% increase in service levels."</p>

<p>It's being implemented across retail, healthcare, and industries where a global footprint with capability centres needs to be managed and brought up to speed.</p>

<h2 class="mt-10 mb-6"><strong>Where is AI making a real cut?</strong></h2>

<p>Today, AI-first or AI-led is not something that is loosely used to drive attention. When you look at real-world examples, it's clear that GCCs are using AI in ways that are genuinely changing how businesses work every day. Here are a few on-ground areas where it's making an impact:</p>

<h3 class="mt-8 mb-4"><strong>Raising the bar for customer support</strong></h3>

<p>As stated by <a href="https://www.pwc.com/" target="_blank" rel="noopener noreferrer">PwC</a>, "A customer-centric approach utilizing data analytics can only be adopted by cultivating an innovation mindset. That is key when exploring new channels to strengthen outreach and address distinct customer needs and expectations at scale." Like, for instance, Chatbots are becoming increasingly popular in the FinTech world, enabling organizations to track and improvise and address queries on these tools in real time and ensure alignment with the larger business objectives.</p>

<h2 class="mt-10 mb-6"><strong>Reimagining hiring, the smart way</strong></h2>

<p>GCCs are using AI to speed up hiring. From scanning resumes to scheduling interviews and even predicting who might leave the company, these tools are helping teams make faster, more informed decisions. The underlying purpose is to bring efficiency, pull down the costs, and ensure quality outcomes for the business.</p>

<h2 class="mt-10 mb-6"><strong>Mitigating risk and ensuring compliance</strong></h2>

<p>For companies working in highly regulated spaces, AI is helping scan through tons of documents, flag anything that looks off, and make sure everything stays compliant. It's like having a smart assistant keeping watch in the background, instead of manual tick boxes.</p>

<h2 class="mt-10 mb-6"><strong>Level up in product innovation</strong></h2>

<p>Some tech-savvy GCCs are using AI to experiment with new features, tailored customer experiences, and roll out products faster. It's helping them stay ahead of the curve and respond quickly to what users actually want. Experimenting with the data received through analytics and implementing it for actual innovation is a key strength of AI that cannot be overlooked.</p>

<h2 class="mt-10 mb-6"><strong>Why GCCs are built for an AI-first future?</strong></h2>

<p>GCCs are in a great position to lead the AI-first shift. They're closely connected to the business, have technical capabilities, and work with teams who really understand how things work on the ground. That makes them well equipped to build solutions that actually solve real problems, not just tick boxes.</p>

<p>And as they are involved in day-to-day operations, they are not experimenting with AI in isolation. They're applying it in real-time, in real situations to resolve issues and find solutions. It's about knowing how decisions are made, how work gets done, and then implementing changes across the board.</p>

<p>Turning AI into impact is probably one of the biggest mandates that GCCs have today. Forrester states, "In our view, four major forces will shape the trajectory of the services industry this year. GenAI will lead the charge, but it won't stand alone. Providers will need to help clients consolidate and scale their core tech stack, forge the right ecosystem partnerships and alliances to enable that transformation, and navigate a new, nonlinear relationship between talent and premium — a shift that challenges long-held operating assumptions."</p>

<p>Looking to set up or scale your GCC in India? Let Enablr handle the heavy lifting. From market access and compliance to talent and tech, we've got you covered every step of the way. Reach out today to launch, operate, and grow your business with speed, certainty, and local expertise.</p>`,
    cover_image: "/Blog Images/AI-powered transformation How GCCs are driving business innovation.jpg?v=1",
    author: "Priya Patel",
    category: "Technology Enablement Solutions",
    published_at: "2024-05-10T00:00:00Z",
    read_time: 6
  },
  {
    id: "4",
    title: "Optimizing workspace design in GCCs: Balancing innovation, collaboration, and well-being",
    slug: "optimizing-workspace-design-gccs",
    excerpt: "How thoughtful workspace design can enhance productivity, foster creativity, and improve employee satisfaction in Global Capability Centers.",
    content: `<p>What's your general perception when anyone asks about a work environment?</p>

<p>It's definitely not laying out rows of desks, chairs, and hanging multiple whiteboards. Right? It's about people, interactions, shared perspectives, and creating a diverse and safe space that encourages innovation and growth. Reinforcing the point, workspace designs are one of the key aspects that GCCs focus on apart from talent and technology.</p>

<p>Today, GCC model of growth is not adapted just to save on costs. They are becoming spaces where innovation happens, strategies come to life, and great talent wants to stick around.</p>

<p>The way a workspace is designed actually matters, more than we think. It doesn't just shape how people get their work done, but it also impacts how they connect with others, and how freely ideas can flow.</p>

<h2 class="mt-10 mb-6"><strong>Collaboration is 'more than' just booking a meeting room</strong></h2>

<p>At the core of every thriving GCC are people who come together, work, share, and collaborate. But it doesn't happen spontaneously just because they gather in the same space. The environment needs to be made more open, accessible, safe, and inclusive.</p>

<p>Open spaces for collaboration, quiet corners for deep thinking, and casual breakout spots where ideas can just flow. Today's GCCs are moving away from conventional models like rows of fixed desks, but leaning towards spaces that shift with the way teams actually work. When people can choose how and where they work best, the magic tends to follow.</p>

<p>Factors such as network connectivity, IT infrastructure set-up undoubtedly have a critical role to play, but so does culture and employer branding. The GCC premises need to resonate the tone of the parent organization and speak the same language.</p>

<h2 class="mt-10 mb-6"><strong>Designing for innovation? It is all about 'flexibility'</strong></h2>

<p>Let's be honest, there is no single magic formula for great ideas. Sometimes it's a quick chat by the coffee machine, or it's heads-down focus, or some other times it's a team huddled around a whiteboard for hours. That's why workspaces need to be just as flexible as the people in them.</p>

<p>For instance, if your organization encourages creativity and spontaneity, your floors must display whiteboards that invite quick sketches, or shared spaces that spark those instant chats. Your break rooms, coffee machine spots, or lounges, need to speak the same word that your GCC's entire culture is set up around.</p>

<p>Sometimes, especially in today's post-COVID world of work, we are seeing a lot of GCCs emphasize on including outdoor spaces, gardens, or terrace areas where for a more free-flow and healthy work environment.</p>

<p>Workplace designs of the future are more about purpose and agility. We don't really design the space, we craft experiences.</p>

<h2 class="mt-10 mb-6"><strong>Well-being is not a checkbox, it's a cornerstone</strong></h2>

<p>It's a proven and tested fact. When employees feel cared for, they in turn care for the work they do. For your GCC, if you want to have sustainable growth and improve the overall productivity, ensuring that your teams find better work-life blend is crucial in today's evolving work scenarios.</p>

<p>This is more than offering standing desks or ergonomic chairs. It's about a space that truly focuses on the physical, emotional, and mental health of the people who work there. Whether it's better lighting, more green elements, dedicated areas for quiet reflection, or simply better air quality... all these factors contribute to creating a more supportive and nurturing environment. Simple changes can lead to transformational results in the overall performance of a team.</p>

<h2 class="mt-10 mb-6"><strong>GCC workspace design trends that forward-thinking leaders follow</strong></h2>

<p>When you design a workspace for your GCC, you're not just creating a place for people to sit. You're setting the stage for dynamic interactions, a positive culture, and business outcomes. Here's a peep into what leading organizations today are focusing on.</p>

<p>Flexibility: This remains a top trend. Whether it's floor plans that can be easily reconfigured, or furniture designs that change as needs do, being adaptable is key. It also ensures that your GCC can evolve as the organization does.</p>

<p>Technology Integration: There is a continuous emphasis on digital capabilities and smart workplaces. Beyond faster Wi-Fi, this means implementing solutions that create a frictionless work experience. When tech just works without people having to think about it, productivity soars.</p>

<p>Sustainable Designs: As global businesses become more conscious of their environmental impact, GCCs are leading the way in sustainable workplace designs. Green building certifications and eco-friendly materials are now integrated as standard elements, instead of special features.</p>

<p>Cultural Intersections: The workplace should reflect a blend of global ethos and local sensibilities. This doesn't just resonate with employees but also adds a unique identity to the GCC, building deeper connection with the brand and its regional context.</p>

<p>Strategic Placement: GCCs today understand the importance of choosing the right city or region. It's not an afterthought, but a deliberate choice that considers accessibility, local talent ecosystem, and quality of life for employees.</p>

<p>In a nutshell, the right workspace design for your GCC can be a game-changer, affecting everything from how well teams collaborate, to the very value they create. It's high time to challenge the conventional concept of office spaces and focus on what truly works for your unique organizational needs.</p>`,
    cover_image: "/images/blog/workspace.jpg?v=1",
    author: "Anil Kumar",
    category: "Workspace Solutions",
    published_at: "2024-04-30T00:00:00Z",
    read_time: 7
  }
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API loading
    setIsLoading(true);
    
    // Find the post with matching slug
    setTimeout(() => {
      const foundPost = staticPosts.find(p => p.slug === slug) || null;
      setPost(foundPost);
      setIsLoading(false);
    }, 500);
  }, [slug]);
  
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{isLoading ? "Loading..." : `${post?.title || 'Blog Post Not Found'} - Enablr`}</title>
        <meta 
          name="description" 
          content={post?.excerpt || "Blog post by Enablr"} 
        />
      </Helmet>
      
      <Navbar />
      <main className="pt-16">
        {isLoading ? (
          <div className="container mx-auto px-4 py-12 max-w-4xl">
            <div className="animate-pulse">
              <div className="h-12 w-3/4 mx-auto mb-4 bg-gray-200 rounded"></div>
              <div className="h-6 w-1/2 mx-auto mb-8 bg-gray-200 rounded"></div>
              <div className="h-64 w-full mb-8 bg-gray-200 rounded"></div>
              <div className="space-y-4">
                <div className="h-6 w-full bg-gray-200 rounded"></div>
                <div className="h-6 w-full bg-gray-200 rounded"></div>
                <div className="h-6 w-3/4 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        ) : post ? (
          <>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-enablr-navy to-enablr-navy/80 text-white py-16 relative overflow-hidden">
              {/* Grid Pattern Background */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-enablr-navy opacity-70"></div>
                <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSIxMjAwIiB2aWV3Qm94PSIwIDAgMTIwMCAxMjAwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIG9wYWNpdHk9IjAuMyIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQxMl8xMTApIj48cGF0aCBkPSJNMTYwMCAwSDBWMTIwMEgxNjAwVjBaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMTIwMCAwSDBWMTIwMEgxMjAwVjBaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNODAwIDEyMDBMODAwIDAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik00MDAgMTIwMEw0MDAgMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTAgODAwTDEyMDAgODAwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMCA0MDBMMTI2MCA0MDAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAwXzQxMl8xMTAiPjxyZWN0IHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjEyMDAiIGZpbGw9IndoaXRlIi8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+')] bg-no-repeat bg-cover opacity-10"></div>
                <div className="absolute -left-16 -bottom-16 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>
                <div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
              </div>
            
              <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <Button 
                  asChild
                  variant="ghost" 
                  size="sm"
                  className="mb-6 text-white hover:bg-white/10 group"
                >
                  <Link to="/blog" className="flex items-center">
                    <ArrowLeft className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
                    Back to Blog
                  </Link>
                </Button>
              
                <div className="text-center mb-6">
                  <span className="bg-white/10 text-white px-4 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                <h1 className={`${typography.h1} text-center mb-6`}>{post.title}</h1>
                <div className="flex justify-center items-center space-x-6 text-sm">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{new Date(post.published_at).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{post.read_time} min read</span>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Main Content */}
            <section className="py-12 relative">
              <div className="container mx-auto px-4 max-w-4xl">
                {/* Cover Image */}
                {post.cover_image && (
                  <div className="mb-12 rounded-lg overflow-hidden shadow-lg relative -mt-20 z-20">
                    <img 
                      src={post.cover_image} 
                      alt={post.title} 
                      className="w-full h-auto"
                    />
                  </div>
                )}
                
                {/* Content */}
                <div className="leading-relaxed text-gray-800">
                  <article 
                    className="prose prose-lg max-w-none 
                    prose-headings:text-enablr-navy 
                    prose-headings:font-semibold 
                    prose-a:text-enablr-navy
                    prose-a:font-medium 
                    prose-a:no-underline 
                    prose-a:hover:underline 
                    prose-strong:text-enablr-navy 
                    prose-li:marker:text-enablr-navy/70 
                    prose-p:mb-8 
                    prose-p:text-gray-700 
                    prose-p:leading-loose
                    prose-h2:mt-16 
                    prose-h2:mb-8 
                    prose-h2:text-2xl 
                    prose-h3:mt-12 
                    prose-h3:mb-6 
                    prose-h3:text-xl
                    [&_p+p]:mt-8"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                </div>
                
                {/* Recent Posts Section */}
                <div className="mt-24 pt-10 border-t border-gray-200">
                  <h3 className={`${typography.h3} text-enablr-navy mb-6`}>Recent Posts</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {staticPosts.filter(p => p.slug !== post.slug).slice(0, 3).map((recentPost) => (
                      <div key={recentPost.id} className="group h-full">
                        <Link to={`/blog/${recentPost.slug}`} className="block h-full">
                          <div className="rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow duration-300 h-full bg-white border border-gray-100 flex flex-col group-hover:border-enablr-navy">
                            {/* Top accent line with gradient hover */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-enablr-navy opacity-70 group-hover:bg-gradient-to-r group-hover:from-blue-800 group-hover:to-red-600 transition-colors duration-300"></div>
                            
                            <div className="h-44 overflow-hidden relative">
                              <img 
                                src={recentPost.cover_image} 
                                alt={recentPost.title}
                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="p-5 md:p-6 flex-grow flex flex-col">
                              <div className="mb-3">
                                <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-800">
                                  {recentPost.category}
                                </span>
                              </div>
                              <h4 className={`text-base font-semibold line-clamp-4 text-enablr-navy group-hover:text-enablr-navy transition-colors duration-200 mb-3`}>
                                {recentPost.title}
                              </h4>
                              <p className={`${typography.body.sm} text-gray-600 mt-auto line-clamp-2`}>
                                {recentPost.excerpt}
                              </p>
                            </div>
                            
                            {/* Decorative corner gradient */}
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-red-50 rounded-tl-[80px] -mr-16 -mb-16 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* CTA Section */}
                <div className="mt-16 rounded-xl overflow-hidden bg-enablr-navy shadow-xl relative">
                  {/* Background pattern */}
                  <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSIxMjAwIiB2aWV3Qm94PSIwIDAgMTIwMCAxMjAwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIG9wYWNpdHk9IjAuMyIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQxMl8xMTApIj48cGF0aCBkPSJNMTYwMCAwSDBWMTIwMEgxNjAwVjBaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMTIwMCAwSDBWMTIwMEgxMjAwVjBaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNODAwIDEyMDBMODAwIDAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik00MDAgMTIwMEw0MDAgMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTAgODAwTDEyMDAgODAwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMCA0MDBMMTI2MCA0MDAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAwXzQxMl8xMTAiPjxyZWN0IHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjEyMDAiIGZpbGw9IndoaXRlIi8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+')] bg-no-repeat bg-cover opacity-10"></div>
                  
                  {/* Gradient blobs for corners */}
                  <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-blue-200 to-blue-100 rounded-full -ml-32 -mt-32 opacity-30 blur-3xl"></div>
                  <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-l from-blue-100 to-blue-200 rounded-full -mr-32 -mb-32 opacity-30 blur-3xl"></div>
                  
                  <div className="p-8 md:p-10 relative z-10 text-center">
                    <h3 className={`${typography.h3} text-white mb-4`}>Ready to build your scalable GCC?</h3>
                    <p className={`${typography.body.base} text-gray-100 mb-6 max-w-2xl mx-auto`}>
                      Connect with our experts to discuss how we can help you establish and scale a high-performing Global Capability Center tailored to your business needs.
                    </p>
                    <Button 
                      asChild
                      size="lg"
                      className="bg-enablr-navy text-white hover:bg-white hover:text-enablr-navy hover:border hover:border-enablr-navy shadow-sm hover:shadow-md group transition-all duration-300 rounded-md"
                    >
                      <Link to="/contact" className="flex items-center gap-2">
                        Get in Touch
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : (
          <div className="container mx-auto px-4 py-20 text-center">
            <h1 className={`${typography.h1} text-enablr-navy mb-4`}>Blog Post Not Found</h1>
            <p className={`${typography.body.lg} text-gray-600 mb-8`}>The blog post you're looking for doesn't exist or has been moved.</p>
            <Button 
              asChild 
              className="bg-enablr-navy hover:bg-enablr-navy/90 shadow-sm hover:shadow-md group transition-all duration-300 rounded-md"
            >
              <Link to="/blog" className="flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
                Back to Blog
              </Link>
            </Button>
          </div>
        )}
      </main>
      
      {/* Scroll to top button */}
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-8 right-8 rounded-full shadow-lg hover:shadow-xl bg-white hover:bg-enablr-navy/5 transition-all duration-300"
        onClick={scrollToTop}
      >
        <ArrowUp className="w-5 h-5" />
      </Button>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
