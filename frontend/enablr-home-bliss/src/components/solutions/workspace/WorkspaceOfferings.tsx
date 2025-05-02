
import React from "react";
import { motion } from "framer-motion";
import { typography } from "@/styles/typography";
import { Building, Laptop, Layout, Users } from "lucide-react";

const offerings = [
  {
    title: "Managed offices",
    description: "Your GCC just doesn't need a physical space, it needs a setup, full length services, and smooth day-to-day operations, so that you can build on your larger business goals. We work with you to create a work environment where you can just walk in, plug in, and get started.",
    icon: <Building className="w-6 h-6" />
  },
  {
    title: "Flexible workspaces",
    description: "Your needs could be temporary, short-term, or long-term, we get it. We can set-up a space for a project, a growing team, for any time period that you need. In this way, we enable you to stay flexible and adaptable, aligning with your overarching business goals.",
    icon: <Layout className="w-6 h-6" />
  },
  {
    title: "Customized office spaces",
    description: "Your business deserves a space that aligns with your core value propositions and the global brand recall. We work with you to design and set up your office to match your vibe, workflow, and goals.",
    icon: <Laptop className="w-6 h-6" />
  },
  {
    title: "Co-working space",
    description: "Whether your team is fully remote, working from the office, or just need a temporary space, we make it easy for them to stay connected. We have a range of shared spaces, individual desks, or a mix that works for you the way you need.",
    icon: <Users className="w-6 h-6" />
  }
];

const WorkspaceOfferings = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <h2 className={`${typography.h2} text-enablr-navy mb-6`}>Our Workspace Offerings</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-enablr-purple mb-4">{offering.icon}</div>
              <h3 className={`${typography.h4} text-enablr-navy mb-4`}>{offering.title}</h3>
              <p className={`${typography.body.base} text-gray-600`}>{offering.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkspaceOfferings;
