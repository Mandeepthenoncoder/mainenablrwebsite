import React from "react";
import { motion } from "framer-motion";
import { typography } from "@/styles/typography";
import { Target, Server, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }
  }
};

const features = [
  {
    icon: Target,
    title: "Enhance productivity with precision",
    items: [
      {
        subtitle: "Define what success looks like",
        description: "We align with your business goals; whether it's accelerating speed, ensuring quality or driving improvement."
      },
      {
        subtitle: "Turn metrics into momentum",
        description: "Leverage frameworks like DORA and SPACE to track performance and make informed decisions."
      },
      {
        subtitle: "See measurable outcomes",
        description: "Reduce development time with talent augmentation and automation."
      }
    ]
  },
  {
    icon: Server,
    title: "Streamline IT and business operations",
    items: [
      {
        subtitle: "Robust IT infrastructure for your GCC",
        description: "From rack-stack networks to end-user computing, we design and manage modern infrastructure that ensures seamless collaboration and high availability across your global operations."
      },
      {
        subtitle: "Integrated enterprise support functions",
        description: "Whether it's HR operations, finance, or procurement, we enable smooth, centralized back-office processes to support your GCC's scale and efficiency."
      },
      {
        subtitle: "Automation built-in",
        description: "We integrate tools like GitHub, Jira, and OpsLevel to automate reporting, workflows, and data capture—reducing manual effort and boosting operational speed."
      }
    ]
  },
  {
    icon: Users,
    title: "Maximize your talent impact",
    items: [
      {
        subtitle: "Agile, on-demand team building",
        description: "Quickly ramp up high-performing teams through staff augmentation models that match talent to your GCC's evolving business priorities."
      },
      {
        subtitle: "Talent magnetism through employer branding",
        description: "We help you craft and localize your employer brand to stand out, attract niche talent, and retain top performers—especially in Tier 2 and Tier 3 cities."
      },
      {
        subtitle: "Performance culture, built to last",
        description: "Through structured feedback loops and continuous performance reviews, we foster engagement, alignment, and sustained team excellence across your GCC."
      }
    ]
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-[#F8FAFC] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block mb-3 px-4 py-1.5 bg-enablr-navy/10 rounded-full text-sm font-medium tracking-wider text-enablr-navy"
          >
            WHY CHOOSE US
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`${typography.h2} text-enablr-navy mb-6`}
          >
            Why choose Enablr
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`${typography.body.lg} font-medium text-enablr-navy mb-4`}
          >
            Designed for leaders who need speed, trust-worthy partnership, and results
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`${typography.body.base} text-gray-600`}
          >
            Your growth partner in building smarter, faster, future-ready GCCs
          </motion.p>
        </motion.div>
        
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto mb-20 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100/50 text-center"
          >
          <p className={`${typography.body.lg} text-gray-600 font-light leading-relaxed`}>
            At Enablr, we partner with enterprises to build GCCs that deliver measurable business outcomes. Our approach goes beyond cost and efficiency. We enable capability centers that evolve with your strategy and integrate seamlessly with your enterprise. With a foundation of execution expertise and leadership experience, we help you move fast; whether you're scaling into new markets, building specialized teams, or transforming operations through technology.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-10"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-100/50"
            >
              <div className="p-8 border-b border-gray-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white opacity-50"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-enablr-navy/10 to-enablr-purple/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <feature.icon className="text-enablr-navy w-8 h-8" />
              </div>
              
                  <h3 className={`${typography.h3} text-enablr-navy mb-0 group-hover:text-enablr-purple transition-colors duration-300`}>
                {feature.title}
              </h3>
                </div>
              </div>
              
              <div className="p-8 bg-white">
                <div className="space-y-8">
                {feature.items.map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="w-5 h-5 text-enablr-purple" />
                      </div>
                      <div>
                        <h4 className={`${typography.h4} text-enablr-navy mb-2 group-hover:text-enablr-purple transition-colors duration-300`}>
                      {item.subtitle}
                    </h4>
                        <p className={`${typography.body.sm} text-gray-600 font-light`}>
                      {item.description}
                    </p>
                      </div>
                  </div>
                ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <Button 
            asChild
            size="lg"
            className="bg-enablr-navy text-white hover:bg-enablr-purple transition-colors duration-300 shadow-lg hover:shadow-xl rounded-full px-8"
          >
            <Link to="/contact" className="flex items-center gap-2">
              Talk to our experts today
              <span className="bg-white/20 p-1 rounded-full">
                <Target className="w-4 h-4" />
              </span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
