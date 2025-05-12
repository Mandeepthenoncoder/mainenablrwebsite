import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { typography } from "@/styles/typography";
import PageCTA from "./PageCTA";
const GlobalTeam = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <PageCTA
            title="Build your global team with confidence"
            buttonText="Get started"
            buttonLink="/contact"
          />
  );
};

export default GlobalTeam;
