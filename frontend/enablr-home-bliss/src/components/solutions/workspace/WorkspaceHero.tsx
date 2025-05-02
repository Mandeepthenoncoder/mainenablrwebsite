
import React from "react";
import { motion } from "framer-motion";
import { typography } from "@/styles/typography";

const WorkspaceHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#4A154B] to-[#2D0A2E] min-h-[60vh] flex items-center">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className={`${typography.h1} text-white mb-6`}>
            Workspace Solutions
          </h1>
          <p className={`${typography.body.lg} text-white/90 mb-8`}>
            Enablr helps design, manage, and optimize workplace environments across your capability center so that your teams can work in a cohesive environment. From workspace design to tech integration and sustainability solutions, we help deliver future-ready workspaces that help drive productivity, well-being, and operational excellence.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkspaceHero;
