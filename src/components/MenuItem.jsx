import React from 'react';
import { motion } from 'framer-motion';

const MenuItem = ({ text, variants }) => {
  return (
    <>
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="mb-10 mt-4 flex cursor-pointer items-center"
      >
        <span className="text-lg text-light">{text}</span>
      </motion.li>
    </>
  );
};

export default MenuItem;
