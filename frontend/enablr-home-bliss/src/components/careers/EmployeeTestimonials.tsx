import React, { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { typography } from "@/styles/typography";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";
import type { CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  image: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "Joining Enablr has been transformative for my career. I've been able to work with enterprise clients while developing cutting-edge solutions. The collaborative culture and growth opportunities are unmatched.",
    name: "Arunima Patel",
    role: "Senior Program Manager",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
  },
  {
    quote: "What sets Enablr apart is how they invest in their people. From technical mentorship to leadership development programs, they genuinely care about your growth trajectory. I've grown more in the last year than in my previous roles combined.",
    name: "Rahul Mehta",
    role: "Cloud Solutions Architect",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2048&q=80"
  },
  {
    quote: "The best thing about Enablr is the balance between autonomy and support. You're encouraged to take ownership and drive initiatives, but there's always a strong support system when you need guidance or help.",
    name: "Priya Sharma",
    role: "UX Design Lead",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80"
  }
];

const EmployeeTestimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  
  const plugin = React.useMemo(() => Autoplay({
    delay: 5000,
    stopOnInteraction: true
  }), []);
  
  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);
  
  useEffect(() => {
    if (!api) return;
    api.on("select", onSelect);
    onSelect();
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <section className="py-24 bg-enablr-navy text-white relative overflow-hidden">
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
        backgroundSize: '20px 20px'
      }}></div>
      
      {/* Gradient accent */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-red-500"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className={cn(typography.h2, "text-white mb-4")}>
            Voices of Enablr
          </h2>
          <p className={cn(typography.body.lg, "text-white/80")}>
            Hear directly from our team about what it's like to work at Enablr
          </p>
        </motion.div>
        
        <Carousel
          setApi={setApi}
          className="w-full"
          plugins={[plugin]}
          opts={{ loop: true }}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/1">
                <div className="p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: current === index ? 1 : 0, y: current === index ? 0 : 20 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row gap-8 items-center mx-auto max-w-4xl"
                  >
                    <div className="relative w-full md:w-1/3 h-80 md:h-auto overflow-hidden rounded-xl">
                      <div className="absolute inset-0 bg-gradient-to-t from-enablr-navy/60 to-transparent mix-blend-overlay"></div>
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="w-full md:w-2/3">
                      <div className="mb-6">
                        <Quote className="w-12 h-12 text-white/30" />
                      </div>
                      <blockquote className={cn(typography.body.lg, "mb-6 italic text-white")}>
                        "{testimonial.quote}"
                      </blockquote>
                      <div>
                        <p className="font-semibold text-lg text-white">{testimonial.name}</p>
                        <p className="text-white/70">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex justify-center gap-2 mt-8">
            <CarouselPrevious className="relative inset-0 translate-y-0 static mx-2 bg-transparent text-white border-white hover:bg-white hover:text-enablr-navy" />
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => api?.scrollTo(i)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-colors duration-300",
                    current === i ? "bg-white" : "bg-white/30"
                  )}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <CarouselNext className="relative inset-0 translate-y-0 static mx-2 bg-transparent text-white border-white hover:bg-white hover:text-enablr-navy" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default EmployeeTestimonials; 