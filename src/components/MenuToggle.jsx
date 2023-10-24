import { motion } from 'framer-motion';

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 100%)"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ isOpen, toggleSidebar, buttonRef }) => {
  return (
    <>
      <motion.div
        initial={'closed'}
        animate={isOpen ? 'open' : 'closed'}
        className="absolute z-50"
        ref={buttonRef}
      >
        <button
          onClick={toggleSidebar}
          className="transition duration-200 hover:scale-110"
        >
          <svg width="24" height="24" viewBox="0 0 22 19">
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
    </>
  );
};

export default MenuToggle;
