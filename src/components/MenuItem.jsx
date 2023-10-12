import { motion } from 'framer-motion';

const MenuItem = ({ text, variants }) => {
  /*   const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    }
  } */
  return (
    <>
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="mb-5 mt-4 flex cursor-pointer items-center"
      >
        <span className="p-2 text-lg text-light">{text}</span>
      </motion.li>
    </>
  );
};

export default MenuItem;
