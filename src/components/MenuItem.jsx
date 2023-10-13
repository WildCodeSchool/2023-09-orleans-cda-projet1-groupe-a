import React from 'react';
import PropTypes from 'prop-types';
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

MenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  variants: PropTypes.shape({
    open: PropTypes.shape({
      y: PropTypes.number.isRequired,
      opacity: PropTypes.number.isRequired,
      display: PropTypes.string.isRequired,
      transition: PropTypes.shape({
        y: PropTypes.shape({
          stiffness: PropTypes.number.isRequired,
          velocity: PropTypes.number.isRequired,
        }).isRequired,
        staggerChildren: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
    closed: PropTypes.shape({
      y: PropTypes.number.isRequired,
      opacity: PropTypes.number.isRequired,
      transition: PropTypes.shape({
        y: PropTypes.shape({
          stiffness: PropTypes.number.isRequired,
        }).isRequired,
        transitionEnd: PropTypes.shape({
          display: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default MenuItem;
