import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-100 py-8 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <p className="text-sm text-gray-600">© 2024 Basic/Agency. code by Olasunkanmi Olanrewaju A. All Rights Reserved.</p>
    </motion.footer>
  );
};

export default Footer;
