import { motion, useCycle, AnimatePresence, useAnimation } from 'framer-motion';
import { useState } from 'react';

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 100%)"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = () => {
  const animation = useAnimation();
  const [isOpen, toggleOpen] = useState(false);

  const toggleSidebar = async () => {
    if (isOpen) {
      await animation.start('closed');
      toggleOpen(false);
    } else {
      toggleOpen(true);
      await animation.start('open');
    }
  };

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: 'circle(30px at 40px 100px)',
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const effect = isOpen
    ? 'absolute w-80 h-screen top-1 left-0 bg-gradient-to-r from-slate-500-opacity-30 via-slate-600-opacity-80 -z-50'
    : 'absolute -z-50';

  return (
    <AnimatePresence>
      <motion.div
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom="100%"
        className="w-1/3"
      >
        <motion.div className={effect} variants={sidebar} animate={animation} />
        <button
          onClick={toggleSidebar}
          className="transition duration-200 hover:scale-110"
        >
          <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
              variants={{
                closed: { d: 'M 2 2.5 L 20 2.5' },
                open: { d: 'M 3 16.5 L 17 2.5' },
              }}
            />
            <Path
              d="M 2 9.423 L 20 9.423"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.1 }}
            />
            <Path
              variants={{
                closed: { d: 'M 2 16.346 L 20 16.346' },
                open: { d: 'M 3 2.5 L 17 16.346' },
              }}
            />
          </svg>
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default MenuToggle;
