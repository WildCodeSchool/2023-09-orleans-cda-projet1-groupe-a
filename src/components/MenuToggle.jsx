import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 100%)"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ isOpen, setIsOpen }) => {
  const toggleSidebar = async () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const sidebarRef = useRef(null);

  useEffect(() => {
    // Fonction pour fermer la sidebar lorsque l'utilisateur clique en dehors
    const handleOutsideClick = (e) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };

    // Ajoute un écouteur d'événements lorsque le composant est monté
    document.addEventListener('mousedown', handleOutsideClick);

    // Retire l'écouteur d'événements lorsque le composant est démonté
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, setIsOpen]);
  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: 'circle(24px at 39.5px 112px)',
      opacity: 0,
      transition: {
        opacity: { delay: 1 / 3 },
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.div
      initial={'closed'}
      animate={isOpen ? 'open' : 'closed'}
      custom="100%"
      className="w-1/3"
      ref={sidebarRef}
    >
      <motion.div
        className="from-slate-500-opacity-30 via-slate-600-opacity-80 absolute left-0 top-0 -z-50 h-screen w-80 bg-gradient-to-r"
        animate={isOpen ? 'open' : 'closed'}
        variants={sidebar}
        initial={'closed'}
      />
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
  );
};

export default MenuToggle;
