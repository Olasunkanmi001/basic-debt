import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      className="h-screen flex flex-col justify-center items-center text-center bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        We Design & Build <br /> Digital Experiences
      </motion.h1>
      <motion.p
        className="text-lg md:text-2xl max-w-xl"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Crafting stunning websites and digital products for brands and
        businesses of all sizes.
      </motion.p>
    </motion.section>
  );
};

export default Hero;
