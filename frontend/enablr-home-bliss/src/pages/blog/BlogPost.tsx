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
    title: "From support functions to strategic hubs: The evolution of GCCs",
    slug: "support-functions-to-strategic-hubs",
    excerpt: "Witness the transformation journey of GCCs from basic support centers to crucial strategic business hubs.",
    content: `<p><strong>Where did all this begin?</strong></p>
<p>The journey for Global Capability Centres (GCC) across the global business spectrum began in a much quieter way. Let's put this into context; a centre operating out of a bustling city in India, managing spreadsheets, workflows, data sheets, HR processes and back-end call. Managing business-behind-the-scenes, ensuring compliance and global guidelines. The underlying objective was clear; efficiency with cost-effectiveness.</p>
<p>So, this was the story in the early 2000s; cut-to-today, the context reverses. In the current scenario, GCCs have evolved into strategic centres, moreover, innovation hubs.</p>
<p>In its report 'India GCC Landscape Report - The 5 Year Journey', NASSCOM shares some key highlights. The report shares how over 50% of all GCCs today have moved beyond support functions to become true portfolio and transformation hubs. Moreover, with 40% CAGR increase in global roles and women leadership roles in the last 5 years.</p>
<p>Almost 90% of GCCs now operate as multi-disciplinary hubs. Not just support, they are now blending technology, operations, and product engineering under one roof, creating real impact across the board.</p>
<p>And when it comes to pace, Engineering, Research and Development (ER&D) GCCs are leading the charge. They are growing 1.3 times faster than an average GCC, a clear sign that India is becoming a global destination for high-value, innovation-led work.</p>
<p><strong>What made this big shift happen?</strong></p>
<p>Referring back to the NASSCOM report, "India remains well-positioned for future growth through prioritization on skills development, cybersecurity, and progressive policy frameworks. The country's emphasis on high-end engineering roles and strategic partnerships also enables it to meet the evolving needs of global companies, fostering sustainable practices and driving innovation."</p>
<p>India's pace towards becoming an innovation hub can be attributed to strategic partnerships with global entities across segments. This has led to adoption of emerging and trending technologies leading to continuous improvement and inclusion of best practices.</p>
<p>What businesses need today is building sustainable, high-impact, and innovation driven approach. With top-tier strategic partnerships and years of expertise, India is today looking at the big picture for the GCC industry.</p>

<p><strong>Talent makes all the difference</strong></p>
<p>NASSCOM in its report has stated, "GCCs in India are increasingly focused on building AI capabilities and driving the AI transformation for their internal enterprise. A talent pool of over 120,000 AI / ML professionals and over 185 dedicated AI/ML COEs is helping build specific use cases and the more mature GCCs are further developing expertise in full-stack development."</p>
<p>Hence proven; a comprehensive talent strategy, combined with market intelligence and latest skills, sets a win-win strategy for GCCs.</p>
<p>GCCs set their foot in global talent hubs; cities that are not just rich in technical skills, but filled with people who are eager to learn, are solution-driven, and ready to take ownership. That combination of depth and drive changes the game.</p>
<p>And that change in thought sparks a new kind of talent strategy that focuses on building capability, training for the next tech move, encouraging leadership, and unlocking potential. The approach to workforce management also changes.</p>
<p>Today, businesses are looking at GCCs to lead initiatives, launch pilots, and drive innovation across functions. They are even co-creating with global teams and influencing decisions at the highest levels. In many cases, talent practices developed within the GCC became models for the wider organization.</p>

<p><strong>What comes NXT, is still in progress</strong></p>
<p>Steve Hall, President, ISG EMEA, and Chief AI Officer and Alex Bakker, Distinguished Analyst in their article 'What's Next for GCCs: Operating Model Challenges and GenAI Opportunities', share an interesting perspective, "While the motivation to adopt a GCC tends to focus on labor-rate savings, organizations view opportunities for AI on a more indirect basis. The idea that a GCC can provide both near-term financial relief and AI to ensure long-term efficiency, innovation and growth makes a particularly compelling strategy."</p>
<p>Robust talent strategy, infrastructure growth, and swift technology adoption with agility sets the game right for GCCs today.</p>
<p>At Enablr, we build more than GCCs, we build the high-impact teams that power them and stay future-ready. What's your next move on your GCC transformation agenda? Speak to our experts and get started today.</p>`,
    cover_image: "/Insights/Blog-1.webp",
    author: "Enablr Team",
    category: "GCCs as-a-service",
    published_at: "2025-05-25T00:00:00Z",
    read_time: 7
  },
  {
    id: "2",
    title: "The 'Scalability' advantage: Why GCCs matter",
    slug: "scalability-advantage-why-gccs-matter",
    excerpt: "Building your GCC is like drawing a blueprint for your house, ensuring every element from the ground up embeds strength and scalability to stay future proof.",
    content: `<p>Building your GCC is like drawing a blueprint for your house, ensuring every element from the ground up embeds strength and scalability to stay future proof. A well-designed GCC is not limited top choosing a workspace and staffing it with people. Just about filling the roles and choosing a workspace. It's about building real strength, flexibility, and room to grow, aligning with your larger business vision. Just like a house that's built to last, your GCC is built to support you today and adapt with time as your business evolves.</p>
<p>At the core of this process is what we call the 'scalability' advantage. Global businesses on the growth path, whether starting out or established need to innovate, and keep up with world dynamics. For them GCCs offer more than just operational support. They create a solid foundation to scale the right way by building strong teams, embracing the right technology, and ensuring that innovation never stops. Hence, creating a smarter and much more sustainable ecosystem to keep growing.</p>
<p><strong>What's the India Edge?</strong></p>
<p>The 'India' story speaks volumes today in the overall GCC scheme of things. In its report 'Future of GCCs in India - a vision 2030', EY has estimated, "The domestic GCC market size will potentially reach US$110b by the year 2030 (from the current US$45b), led by software exports, which remain a key component of India's service exports. It is predicted that by 2030, India will have 2400 GCCs and that number can potentially increase to 2550 as India emerges as the world's technology and services hub. The total number of new GCC set-ups every year can jump up to 115 (from the current 70)".</p>
<p>India is increasingly becoming 'the partner of choice', where global companies intend to build and scale their capability centers. Saving costs is no more the only factor of consideration. It brings to the table a deep, diverse talent pool with strong tech skills and a mindset for innovation.</p>
<p>The work culture and business scenario here is mature, built-for-momentum, and ready to scale up and support everything from R&D to digital transformation. It's easier to get started, easier to grow, and easier to stay ahead with scalable models built for future-proofing your business.</p>
<p><strong>Scalable talent, no compromise</strong></p>
<p>One of the most significant advantages GCCs bring to the table is access to high-quality talent at scale. Whether it's engineering, data science, design, finance, or legal, GCCs enable organizations to tap into deep and diverse talent pools, especially in innovation-rich regions like India. But it's not just about numbers. It's about building agile teams that can grow in step with business needs, without compromising on capability, culture, or quality.</p>
<p>As per a recent NASSCOM report, "India produces 2.5 million STEM graduates annually, ensuring a steady pipeline of skilled professionals in IT, engineering, and AI." In addition, "India's time zone (GMT+5:30) enables seamless collaboration with European and U.S. teams, while its cultural compatibility and innovation ecosystem foster global productivity."</p>
<p>This ultimately sets the stage for a capability centre that can keep expanding with the global aspirations your business.</p>
<p><strong>Scaling smarter, by owning more</strong></p>
<p>GCCs really start to shine when teams move from just following instructions to actually owning what they build and deliver. It's not just about doing the work; it's about owning the outcome.</p>
<p>When teams feel that sense of responsibility, they naturally start to think bigger, solve smarter, and drive real improvements. That kind of ownership creates a ripple effect. It sets the stage for processes to be refined, repeated, and scaled across teams and regions.</p>
<p>In short, when your GCC owns the work, it grows with you and gets stronger over time.</p>
<p><strong>Tech that scales, innovation that paces with you</strong></p>
<p>Rolling out digital transformation across the globe can be tough, but that's exactly where GCCs come in. They give you a solid base to move faster with cloud, automation, AI, and real-time data.</p>
<p>The best part is how they work. GCCs stay closely connected to your core business while moving ahead as per your business's outlook, adapting the pace with ease. That enables you to experiment with new ideas, see what works, and bring those wins to the rest of the organization.</p>
<p>So, innovation doesn't just sit in one place. It spreads and keeps things moving forward.</p>
<p><strong>Why it matters now</strong></p>
<p>Businesses today are dealing with constant change, rising expectations, and a need to move faster than ever. Scaling smart isn't just a nice-to-have anymore. It's a must.</p>
<p>That's where GCCs come in. They give companies the flexibility to adapt quickly, the talent to innovate with confidence, and the structure to keep delivering no matter the market or challenge.</p>
<p>GCCs have grown beyond being just support centers. They've become strategic hubs that help businesses stay ahead. When built and used right, they become your growth engine for today and a safety net for whatever comes next.</p>
<p>For businesses, today, being efficient isn't enough anymore. You need to be resilient, adaptable, and ready to grow with purpose.</p>
<p>Setting up a GCC starts with getting clarity on your goals and choosing the right location that you're your business. Next, most prominently is to choose a fitting partner that can bring your vision to life. From building the right team to setting up the tools and ways of working, it's all about creating a symphony that fits your business. The real magic happens when your GCC feels like a true part of your team.</p>
<p>At Enablr, we work with you to build a GCC that truly makes a difference. With the right mix of talent, tech, and innovation, we help businesses move faster, stay flexible, and keep ahead of the game in a world that's always changing.</p>`,
    cover_image: "/Insights/Blog-2.webp",
    author: "Mandeep Singh",
    category: "GCCs as-a-service",
    published_at: "2025-05-10T00:00:00Z",
    read_time: 5
  },
  {
    id: "3",
    title: "Building the workforce of tomorrow: The role of GCCs in tech talent development",
    slug: "workforce-tomorrow-gccs-tech-talent-development",
    excerpt: "How Global Capability Centers are becoming crucial talent incubators for developing future-ready technical skills.",
    content: `<p>As India emerges as the world capital for Global Capability Centres (GCCs), there is a larger scope that has evolved over time. It is now well established that global organizations are no longer viewing GCCs as basic support units for routine tasks. Instead, global organizations are looking at GCCs to grow into hubs of transformation and innovation.</p>
<p>But is it only about adopting new technologies? Not really. It's all about bring both the right tech and right talent together to make innovation happen. That means upskilling and reskilling teams so they can keep pace and grow.</p>
<p><strong>How are GCCs future-proofing tech and talent?</strong></p>
<p>Taking references from the 2024 NASSCOM report, "76% of GCCs have already initiated GenAI upskilling programs. This includes: Prompt engineering workshops, AI-augmented product design training, ethical AI and governance modules. So, rather than replacing jobs, GenAI is reshaping skill demands." Adding on, "GCCs are investing in nano-certifications, internal AI labs, and partnerships with edtech platforms to enable continuous learning. Companies like J.P. Morgan, Walmart, and Shell are rolling out GenAI bootcamps to prepare talent for hybrid roles - part domain expert, part AI collaborator."</p>
<p>Ultimately, when we talk about the future of work, it is obvious that technology plays a huge role. But technology by itself is not the whole story. It is people who are skilled, curious and ready to innovate, making transformation happen. This is where GCCs are stepping up in a big way, building both the tech and talent for tomorrow.</p>
<p>Continuous learning and improvement are the key to everything that organizations want to achieve through their GCCs. It becomes critical for GCCs to put serious effort into building deep expertise across up and emerging tech areas such as AI, machine learning, cloud computing, cybersecurity, and data analytics. It is not just upskilling; it is about creating a culture where there is constant learning to stay up to speed, as standing still is not an option.</p>
<p><strong>Does on-the-job innovation and learning for GCCs make sense?</strong></p>
<p>According to EY's GCC pulse survey 2024, "GenAI is gaining traction among GCCs, with many starting adoption in the customer interaction function due to its ease of implementation and potential to boose efficiency." It adds, "Many GCCs are already deploying use cases to enhance efficiency, with 78% upskilling internal teams and 49% collaborating with external vendors to accelerate the transformation."</p>
<p>Statistics such as these validate how GCCs are at the forefront of initiatives that are inducing innovation and experimentation to find that competitive edge. This implies a regulated and constant learning and training workflow for the workforce.</p>
<p>And learning is no longer limited to classrooms or online modules. It is hands-on and rooted in real-world challenges. That is why many GCCs are setting up innovation labs, hosting hackathons, creating digital sandboxes, and encouraging rapid prototyping.</p>
<p>Picture a team working on a smarter checkout experience for an e-commerce platform. Instead of waiting for approvals, they go straight in, build a ready-to-experiment prototype, test it, learn from it, and improvise on the go. This kind of learning happens by doing, not by waiting, which is helping teams stay agile and future-proof for any contingencies.</p>
<p><strong>How are GCCs building teams with real-world confidence?</strong></p>
<p>GCCs understand that staying ahead in today's world means building teams that are curious, adaptable, and always ready for one-the-job learning. Hence, they are creating cultures where people feel safe to experiment, learn from missteps, and keep moving forward.</p>
<p>Let's consider this. A GCC working with a global fintech company, partners with a local university to co-design a course on responsible AI. Students get to work on actual use cases from the company's product pipeline. Some of those students later join the GCC, already equipped with relevant skills and fresh thinking.</p>
<p>Doesn't this sound like a win-win for both?</p>
<p>At the same time, the GCC runs regular hackathons and rapid prototyping sprints internally. They implement sprints to explore a solution, work on prototyping, and eventually launch it at speed. Well, considering all the necessary compliances and security aspects needed.</p>
<p>By connecting learning with real challenges and bringing in external partnerships, GCCs are helping build talent that is not just future-ready, but shaped up for the next.</p>
<p>As per NASSCOM, India remains the global leader in GCCs, hosting over 1,800 centres that contributed $64.6 billion in revenue in 2024, with projections to surpass $100 billion by 2030. Approximately 364,000 new jobs are anticipated by 2025.</p>
<p>The growth path for GCCs in India is set!</p>
<p>At Enablr, we see GCCs as powerful engines for building future-ready talent. By blending hands-on learning, an environment of curiosity, and strong partnerships, we are shaping up teams that are not just skilled but adaptable and aspirational.</p>
<p>Schedule a consultation with our leaders and experts to get your GCC roadmap up and running with the right tech, talent, and infrastructure.</p>`,
    cover_image: "/Insights/Blog-3.webp",
    author: "Enablr Team",
    category: "Talent & HR Solutions",
    published_at: "2025-04-25T00:00:00Z",
    read_time: 6
  },
  {
    id: "4",
    title: "How to build a high-performance GCC: Best practices for talent, technology, and strategy",
    slug: "high-performance-gcc-best-practices",
    excerpt: "A comprehensive guide to establishing and optimizing Global Capability Centers for maximum business impact.",
   content: `<p>Simon Sinek, an American author and inspirational speaker, shares in his book 'Start with Why', how some brands and leaders think differently. They begin with 'why' instead of jumping straight to 'how'.</p>
<p>When it comes to setting up a Global Capability Centre (GCC) and driving a high-impact mandate, starting with a clear purpose is what truly sets the direction. Keeping that purpose in focus helps answer most of your questions, while the how, when, and where naturally fall into place.</p>
<p>Setting up a GCC is certainly a major organizational milestone. When you talk about a high-performing GCC, you need more than just a nice office space and a bunch of people seated on chairs. To realize the true business value, you need a clear objective, and a combination of skilled personnel and technology outlook, supported by strategic planning, which is possible only with experience and market intelligence.</p>
<p>Most critically, quality is key, at every step!</p>
<p>For creating a sustainable success story with this model, you need to answer some questions.</p>
<p><strong>What's your talent approach?</strong></p>
<p>The effectiveness of your GCC depends entirely on the capabilities of its team members and what they will eventually bring to the table in terms of skills and cultural nuances. Hence, the obvious step in your talent strategy is to determine exactly which types of skills and abilities you need. Whether you plan to target either core operations or focus on innovation and research and development. The approach mode is crucial.</p>
<p>After understanding your talent requirements seek candidates with more than just resume qualifications. Think about potential, mindset, and cultural fit. Work together with regional talent specialists to differentiate yourself within competitive markets. Talented candidates deserve reasons to remain with your organization. Provide meaningful work with clear career progression goals, while offering opportunities to showcase commitment and competence.</p>
<p><strong>What are your core values that will bring global teams together?</strong></p>
<p>The most thought through plans will fail when they lack supportive organizational culture. Your GCC needs to become an integral element of your organization. Your GCC must operate as if it is an inherent part of your organization.</p>
<p>Hence, you must foster clear communication between your organization's global and local teams. Celebrate shared wins. Build trust through transparency and collaboration. An inclusive organizational culture can substantially improve performance and people would love to stick around.</p>
<p><strong>What is binding your tech focus together?</strong></p>
<p>Technology is an enabler in every sense. You must set-up tools and infrastructure that runs smoothly and delivers at speed with scalability.</p>
<p>Our suggestion is to bring in the elements of flexibility, agility, and adaptability into play. Technology wise, your GCC needs to evolve to smoothly embed automation, analytics and AI whenever and wherever it needs. In this process you can even bring in a partner who can deliver and manage technology implementation for you, so that your teams don't get overwhelmed.</p>
<p><strong>India, the GCC capital of the world</strong></p>
<p>JLL, a global commercial real estate and investment management company, has shared in its report that the number of Global Capability Centres (GCCs) in India will exceed 2,500, up from the current count of 1,950. These GCCs, established by leading multinational corporations, are expected to occupy over 300 million square feet of space in the next 3 to 4 years. This growth will be driven by new entrants as well as expansion by existing players.</p>
<p>What began with captive centres and BPOs has matured into the establishment of Centres of Excellence (CoEs). Today, India has further evolved into a hub for transformation and innovation. India gives your GCC the best of both worlds; access to top talent and cost efficiency.</p>
<p>You can tap into an extensive, but exclusive pool of skilled professionals in tech, engineering, and analytics, all without compromising on quality or exploiting your budgets. It's also a thriving innovation hub. With a vibrant startup scene, strong IT services, and tech centres of excellence, you have everything you need to keep your GCC on the cutting edge.</p>
<p>Hence, as your business evolves, your GCC can experience the same growth trajectory. You can build future-ready teams that not only support your current goals, but also help drive long-term strategic growth.</p>
<p>Operations wise, India offers the best of digital infrastructure to help you work smarter. Automation, agile delivery, and cloud adoption are aspects that get embedded within your GCC's blueprint. When all this comes together, it works marvellously to boost efficiency and performance.</p>
<p>The JLL guidebook mentions a crucial point with regards to talent retention and stability, "When it comes to the high demand for talent, India has the solution. But this solution comes with a high attrition rate. You need an inclusive work culture that recruits and retains the best."</p>
<p>Ultimately, the core objective is to work around your goals and let you focus on the big global picture for your business.</p>
<p><strong>It's a combination of factors, but strategic outlook matters</strong></p>
<p>At the end of the day, building a high-performance GCC is about more than just execution. It's about being clear on the purpose and making sure everyone is aligned on what you're really trying to achieve.</p>
<p>Whether you're aiming to reduce costs, grow into new markets, or spark innovation, having a clear strategy helps you through every decision-making process. Right from the teams you build, to how you measure success. When everyone's on the same page, your GCC becomes more than a support function. It becomes a unified entity with your core.</p>
<p>With Enablr as your 'partner of choice', you can depend solely on us for your end-to-end talent and HR solutions and technology enablement strategy. Know more about our wide range of solutions to reach faster to the market without compromising on quality.</p>`,
    cover_image: "/Insights/Blog-4.webp?v=1",
    author: "Rahul Sharma",
    category: "Talent & HR Solutions",
    published_at: "2025-04-15T00:00:00Z",
    read_time: 8
  },
  {
    id: "5",
    title: "AI-powered transformation: How GCCs are driving business innovation",
    slug: "ai-powered-transformation-gcc-innovation",
    excerpt: "Exploring how Global Capability Centers are leveraging artificial intelligence to reimagine business processes and create competitive advantages.",
    content: `<p><strong>Is it only about cost effectiveness?</strong></p>
<p>The time to raise this question in the context of Global Capability Centres (GCCs), has long passed.</p>
<p>Today, GCCs have come a long way. What started out as a way for companies to cut costs and streamline operations, has changed in the current context. Today, they're quickly becoming hubs of innovation. With AI and automation in the mix, businesses are now using their GCCs to unlock real, meaningful transformation.</p>
<p>Sindhu Gangadharan, Chairperson, NASSCOM, mentions, "As global businesses strive for reinvention, India's GCCs are at the forefront, not just implementing AI solutions but developing them. They are now the R&D powerhouses, co-creating next-generation AI products, platforms, and solutions that will shape the future of industries worldwide."</p>
<p>This shift isn't just about adopting new tech or gaining an edge over trending automation tools. It's about understanding the bigger picture; how GCCs bring together the right mix of technology, talent, and infrastructure. There's a change in how businesses think, how they operate, and how they grow. And right now, GCCs are playing a central role in making that happen.</p>
<p><strong>Evolving into innovation hub</strong></p>
<p>For a long time, GCCs were seen mostly as support engines, focused on cost savings and efficiency. But that's changing quickly. Today, they're stepping into a much more strategic role, helping businesses grow and innovate.</p>
<p>For instance, AI is being implemented global entities to power supply chains across diverse locations. According to McKinsey, "Early adopters of AI-enabled supply chain management have achieved a 15% reduction in logistics costs, a 35% decrease in inventory levels, a 65% increase in service levels."</p>
<p>It's being implemented across retail, healthcare, and industries where a global footprint with capability centres needs to be managed and brought up to speed.</p>
<p><strong>Where is AI making a real cut?</strong></p>
<p>Today, AI-first or AI-led is not something that is loosely used to drive attention. When you look at real-world examples, it's clear that GCCs are using AI in ways that are genuinely changing how businesses work every day. Here are a few on-ground areas where it's making an impact:</p>
<p><strong>Raising the bar for customer support</strong></p>
<p>As stated by PWC, "A customer-centric approach utilising data analytics can only be adopted by cultivating an innovation mindset. That is key when exploring new channels to strengthen outreach and address distinct customer needs and expectations at scale." Like, for instance, Chatbots are becoming increasingly popular in the FinTech world, enabling organizations to track and improvise service. GCCs take on these ideas in real time and ensure alignment with the larger business objectives.</p>
<p><strong>Reimagining hiring, the smart way</strong></p>
<p>GCCs are using AI to speed up hiring. From scanning resumes to scheduling interviews and even predicting who might leave the company, these tools are helping teams make faster, more informed decisions. The underlying purpose is to bring efficiency, pull down the costs, and ensure quality outcomes for the business.</p>
<p><strong>Mitigating risk and ensuring compliance</strong></p>
<p>For companies working in highly regulated spaces, AI is helping scan through tons of documents, flag anything that looks off, and make sure everything stays compliant. It's like having a smart assistant keeping watch in the background for you to tick the right boxes.</p>
<p><strong>Level up in product innovation</strong></p>
<p>Some tech-savvy GCCs are using AI to experiment with new features, tailored customer experiences, and roll out products faster. It's helping them stay ahead of the curve and respond quickly to what users actually want. Experimenting with the data received through analytics and implementing it for actual innovation is a key strength of AI that cannot be overlooked.</p>
<p><strong>Why GCCs are built for an AI-first future?</strong></p>
<p>GCCs are in a great position to lead the AI-first shift. They're closely connected to the business, have access to the right data, and are staffed with teams who really understand how things work on the ground. That makes them well equipped to build solutions that actually solve real problems, not just tick boxes.</p>
<p>And as they are involved in day-to-day operations, they are not experimenting with AI in isolation. They're applying it in real-time, in real situations to resolve issues and find solutions. It's about improving how decisions are made, how work gets done, and how value is delivered across the board.</p>
<p>Turning AI into impact is probably one of the biggest mandates that GCCs have today. Forrester states, "In our view, four major forces will shape the trajectory of the services industry this year. GenAI will lead the charge, but it won't stand alone. Providers will need to help clients consolidate and scale their core tech stack, forge the right ecosystem partnerships and alliances to enable that transformation, and navigate a new, nonlinear relationship between talent and revenue - a shift that challenges long-held operating assumptions."</p>
<p>Looking to set up or scale your GCC in India? Let Enablr handle the heavy lifting. From market access and compliance to talent and tech, we've got you covered every step of the way. Reach out today to launch, operate, and grow your business with speed, certainty, and local expertise.</p>`,
    cover_image: "/Insights/Blog-5.webp?v=1",
    author: "Priya Patel",
    category: "Technology Enablement Solutions",
    published_at: "2025-04-05T00:00:00Z",
    read_time: 6
  },
  {
    id: "6",
    title: "GCCs are redefining digital transformation. Know more.",
    slug: "gccs-redefining-digital-transformation",
    excerpt: "Explore how GCCs are at the forefront of digital transformation initiatives for global enterprises.",
    content: `<p>Industries, service sectors, diverse institutions, or any kind of enterprise across the world cannot escape the reality of digital transformation. Whether it is revamping workflows, automating business operations, or enabling specific functions, adopting digital technologies has become the norm.</p>
<p>Naturally, these benefits and applications also get reflected within the Global Capability Centre (GCC) ecosystem, or is it the other way round? Today, GCCs are no longer considered as back-end machines churning our basic workflow, they are rapidly become innovation hubs that deliver the 'digital-first' solution.</p>
<p>Imagine this. A leading global bank finds itself at a crossroads. Customer experience is diving down, competitors are gaining mileage, and traditional transformation efforts just aren't good enough. They could easily look outside for solutions, but instead, they turn inwards to their own GCC.</p>
<p>What happens next? The GCC brings together a cross-functional team, prototypes a digital-first customer journey, rolls it out across multiple markets, and delivers results beyond expectations.</p>
<p>Sounds like a rare success story? Not anymore. Stories like these are quickly becoming the new normal.</p>
<p>GCCs are leveraging the power of digital transformation to enable innovations and creating future-ready systems for business growth. In many ways they are helping organizations rethink how they operate, innovate, and deliver value. How is this happening?</p>
<p><strong>Data, that matters</strong></p>
<p>At the core of every digital strategy is data. Data has become a real game-changer, helping teams make smarter decisions and turn ideas into actions. Research and development is no longer just about physical prototypes and lab experiments. Today, it's a combination of technology, data, and engineering expertise, all coming together to bring ideas to life more quickly and creatively.</p>
<p>Data and analytics are transforming the way digital transformation is being adopted within GCCs as well.</p>
<p>GCCs are leveraging data and analytics to drive innovation and product development, improve operational efficiency, enhance collaboration and communication across global teams, personalize customer experiences, and ultimately support digital transformation initiatives.</p>
<p><strong>Getting agile and active</strong></p>
<p>Let's consider a GCC set-up for a multinational retailer. They were facing slow, paperwork-heavy processes, but with AI-driven tools and cloud platforms, they were able to instantly test and implement solutions. For instance, by using predictive analytics for delivery routes, they could reduce delivery time and costs almost overnight. This agility was able to given them a competitive edge in a global market.</p>
<p>The way things move within organizations is rapidly changing, thanks to the new and emerging digital tech. We are no longer bogged down by slow, cumbersome processes. Instead, we're operating with the agility of a start-up; trying new ideas, testing them out quickly, and learning what works and what doesn't. GCCs are taking up this kind of flexibility, moving faster, taking real advantage in a global business scenario where every second counts.</p>
<p><strong>Reskilling talent and collaborating globally</strong></p>
<p>GCCs are keeping pace with technology by investing in building digital, analytical, and leadership skills. This way the teams feel confident while navigating the digital world instead of feeling overwhelmed by it.</p>
<p>They are also bringing teams, markets, and time zones closer together. By using digital tools, shared platforms, and cloud-based workspaces, GCCs are empowering the collaboration process. Consequently, innovation and execution are happening in real time, across centres.</p>
<p><strong>Execution to innovation, digital transformation is a 'must-have'</strong></p>
<p>The report, 'India's GCC Leap: Capturing Global Mid-Market Momentum', shares, "In the last two years, 45 new mid-sized GCCs have set shop in India, accounting for 35 percent of new GCCs and 30 percent of new units during this period. While smaller in scale, operating at 40 percent of the size of larger GCCs, these captives are more likely to act as transformation hubs."</p>
<p>It further adds, "India is currently home to about 47 percent of the global product management talent employed by mid-sized GCCs, and over 25 percent of their DeepTech workforce. Nearly 60 percent of the end-to-end product and platform ownership within enterprise portfolios, especially in the engineering R&D segment, is from India."</p>
<p>All factors considered, GCCs are no longer just for execution, they are evolving into innovation hubs where actual research and development happens. Global organizations are looking up to GCCs for more and more experimentation and innovation, enabling them to meet their larger business objectives.</p>
<p>At Enablr, our teams and leadership bring proven experience to accelerate your business growth and build future-ready centres that fit your purpose. We are excited to work with your ideas and build high-impact GCCs for your business needs.</p>`,
    cover_image: "/Insights/Blog-6.webp",
    author: "Enablr Team",
    category: "Technology Enablement Solutions",
    published_at: "2025-03-30T00:00:00Z",
    read_time: 5
  },
  {
    id: "7",
    title: "How GCCs can become a 'powerhouse' of innovation with smarter workspace solutions",
    slug: "gcc-powerhouse-innovation",
    excerpt: "Unleashing the innovation potential of Global Capability Centers through the right strategies and enablers.",
  content: `<p>Given the global business landscape and emerging industry trends, the market space and demand for Global Capability Centres (GCCs) is clearly on the rise. What stands out even more is their evolution into innovation hubs. But can an innovation hub truly thrive in a traditional workspace, or does it need something more specific and flexible?</p>
<p>Definitely, it does.</p>
<p>Smarter workspaces can completely change the way teams think and operate. When the environment supports collaboration, sparks creativity, and helps people move fast, innovation starts to feel organic, with more collaborative efforts.</p>
<p>But what does a smarter workspace actually look like? And how does it induce collaboration and innovation each day?</p>
<p><strong>Implementing agile collaboration tools for seamless integration</strong></p>
<p>Let's consider this scenario. In a GCC set up there will be teams operating from different locations; hence, in-person collaboration is not possible. But with implementation of agile collaboration tools or virtual dashboards the scene can change. It can help trigger ideas and seamless implementation at speed.</p>
<p>Every day, product teams in India, marketers in the US, and customer support in Europe join the same virtual space. They share ideas, brainstorm, build on each other's thoughts, and make decisions together in real time. Eventually, geography will no longer matter and slow down the process. The flow of ideas and quick collaboration keeps everyone moving in the same direction.</p>
<p>This kind of digital workspace enables teams to work closely and get things done.</p>
<p><strong>Speeding data into action by reshaping insights into innovation</strong></p>
<p>Now imagine a GCC for a global manufacturing company, where teams work with live dashboards. These dashboards/virtual whiteboards display what really matters; from product performance to customer feedback to changing market trends.</p>
<p>Now, if the data shows a sudden rise in demand for a specific product feature; instead of waiting around for reports or approvals, the product team will act right away. The data will enable them to adjust the design, bring the right people together, and move quickly to launch. Hence, the decision-making is faster and is done with more clarity.</p>
<p>In a collaborative set up like this, data is not just something that teams would just track. It becomes part of how they think, solve problems, and come up with new ideas. It helps them stay sharp, adapt quickly, and keep improving.</p>
<p><strong>Literally, making 'room' for innovation</strong></p>
<p>Remember the office space that was recreated in the movie 'Intern'? It was redesigned in a specific way to ease more flexible and horizonal communication process?</p>
<p>That's how GCCs are recreating spaces and evolving with time to suit the needs of the brand and align with the core values. For instance, instead of working in the same rigid desk setup each day, the space is reimagined and revamped to flex as per the team's requirements.</p>
<p>Maybe some people might need quiet zones to focus, while others work best in open spaces where they can bounce ideas off each other.</p>
<p>This is where smarter workspace choices start to shine, like, height-adjustable desks for comfort, lighting that shifts through the day to keep energy levels up, and meeting rooms that show real-time availability on your phone.</p>
<p>Optimizing digital whiteboards to quickly capture ideas and switch spots around the office, depending on the nature of work, are some and many ways to break-through and transform.</p>
<p>In a setup like this, collaboration becomes the focus, irrespective of geographies. It helps people think better, move faster, and come up with new ideas more naturally.</p>
<p><strong>Set up to scale with reimagined spaces</strong></p>
<p>As per IBEF's estimate, "US-based corporations account for the majority of the operational GCC footprint in India's top six cities, followed by European enterprises (35%). The overall number of new GCC establishments each year could reach 115 by 2030. Collaboration with start-ups can operate as a springboard for new GCC establishments and expansion. This collaboration can assist GCCs expedite their innovation journey in India."</p>
<p>The 'next' move for the GCC space is cracking up in a big way. So are opportunities springing up for both Tier 1 and tier 2 cities in India to build spaces that are more inclusive and welcoming.</p>
<p>At Enablr, we work with you to design and manage smarter workspaces that bring your capability centre to life. Whether it is creating collaborative environments, integrating the right tech, or building for long-term sustainability, we make sure your teams have what they need to thrive.</p>
<p>Are you ready to make your next move towards GCC set up and transformation with us? Let's connect and make it happen.</p>`,
    cover_image: "/Insights/Blog-7.webp?v=1",
    author: "Sneha Rao",
    category: "Workspace Solutions",
    published_at: "2025-03-01T00:00:00Z",
    read_time: 5
  },
  {
    id: "8",
    title: "Optimizing workspace design in GCCs: Balancing innovation, collaboration, and well-being",
    slug: "optimizing-workspace-design-gccs",
    excerpt: "How thoughtful workspace design can enhance productivity, foster creativity, and improve employee satisfaction in Global Capability Centers.",
    content: `<p>What's your general perception when anyone asks about a work environment?</p>
<p>It's definitely not laying out rows of desks, chairs, and hanging multiple whiteboards. Right? It's about people, interactions, shared perspectives, and creating a diverse and safe space that encourages innovation and growth. Reinforcing the point, workspace designs are one of the key aspects that GCCs focus on apart from talent and technology.</p>
<p>Today, GCC model of growth is not adapted just to save on costs. They are becoming spaces where innovation happens, strategies come to life, and great talent wants to stick around.</p>
<p>The way a workspace is designed actually matters, more than we think. It doesn't just shape how people get their work done, it affects how they feel, how they connect with others, and how freely ideas can flow.</p>
<p><strong>Collaboration is 'more than' just booking a meeting room</strong></p>
<p>At the core of every thriving GCC are people who come together, work, share, and ambitiously innovate. But it doesn't happen spontaneously just because they gather in the same space. The environment needs to be made more open, accessible, safe, and inclusive.</p>
<p>Open spaces for collaboration, quiet corners for deep thinking, and casual breakout spots where ideas can just flow. Today's GCCs are moving away from conventional models like rows of fixed desks, but leaning towards spaces that shift with the way teams actually work. When people can choose how and where they work best, the magic tends to follow.</p>
<p>Factors such as network connectivity, IT infrastructure set-up undoubtedly have a critical role to play, but so does culture and employer branding. The GCC premises need to resonate the tone of the parent organization and speak the same language.</p>
<p><strong>Designing for innovation? It is all about 'flexibility'</strong></p>
<p>Let's be honest, there is no single magic formula for great ideas. Sometimes it's a quick chat by the coffee machine, or it's heads-down focus, or some other times it's a team huddled around a whiteboard for hours. That's why workspaces need to be just as flexible as the people in them.</p>
<p>For instance, if your organization encourages creativity and spontaneity, your floors must display whiteboards that invite quick sketches, or shared spaces that spark those instant chats. Your break rooms, coffee machine spots, or lounges, need to speak the same word what your brand speaks.</p>
<p><strong>Making 'Employer Branding' intentional</strong></p>
<p>Your GCC workspace should reflect your employer brand in a way that feels authentic and intentional. While you do so, it's important to bring in the local nuances into play; like diverse teams working together, visuals that celebrate team milestones, or sustainability efforts that surpass geographies. It's these thoughtful touches that turn a workplace into a culture-first experience.</p>
<p>Today, an increasing number of companies are starting to care about factors like mental health and well-being. Things like inclusive spaces, quiet wellness rooms, comfy seating options, and even just giving people a chance to take a breather all go a long way in showing your team that they truly matter.</p>
<p><strong>Workspaces that go beyond just IT infrastructure and network connectivity</strong></p>
<p>Every industry number and market analysis shows that the demand for GCCs is on the rise, which means, there is growing demand for workspace solutions.</p>
<p>While commenting on the growing space demand for GCCs in India, Sumit Lakhani, Deputy CEO at Awfis, had mentioned, "The demand for office space from GCCs is expected to grow significantly, with projections indicating a rise from 19.69 million square feet in 2023 to 26 million square feet by 2027, as per the Knight Frank India - 3AI report. In the initial stages, GCCs often require smaller spaces of around 50 seats, however, their demand increases rapidly to 250 seats within a year as they scale operations."</p>
<p>Having a robust IT infrastructure with the needed connectivity and tech back up is a must, but building a welcoming culture that derives values from your core messaging is equally key. Hence, working with a trusted partner who can deliver both is crucial for your GCC.</p>
<p>At Enablr, we help you reimagine workspaces where your teams can connect with your core brand values. From designing what fits you to integrating the right tech, we make sure your capability centre is ready to take on your next move.</p>`,
    cover_image: "/Insights/Blog-8.webp",
    author: "Anil Kumar",
    category: "Workspace Solutions",
    published_at: "2025-03-15T00:00:00Z",
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
                
                <div className="absolute -left-16 -bottom-16 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>
                <div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
              </div>
            
              <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <Button 
                  asChild
                  variant="ghost" 
                  size="sm"
                  className="mb-6 text-white hover:text-white hover:bg-white/10 group"
                >
                  <Link to="/blog" className="flex items-center">
                    <ArrowLeft className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
                    Back to Insights
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
