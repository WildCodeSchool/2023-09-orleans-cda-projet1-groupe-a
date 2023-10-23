import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem';
import { useEffect, useRef } from 'react';

const items = [
  { text: 'HOME', path: '/' },
  { text: 'GALLERY', path: '/gallery' },
  { text: 'ARTIST', path: '/artist' },
];

const circleEffect = {
  open: {
    y: 1,
    opacity: 1,
    display: 'block',
    transition: {
      y: { stiffness: 1000, velocity: -100 },
      staggerChildren: 0.2,
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
    transitionEnd: {
      display: 'none',
    },
  },
};

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
    clipPath: 'circle(24px at 39.5px 95px)',
    opacity: 0,
    transition: {
      opacity: { delay: 1 / 3 },
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const SideBar = ({ isOpen, setIsOpen, buttonRef }) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      const path = e.composedPath();
      if (
        !path.includes(sidebarRef.current) &&
        !path.includes(buttonRef.current)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [buttonRef, setIsOpen]);

  return (
    <motion.div
      className="from-slate-500-opacity-30 via-slate-600-opacity-80 absolute left-0 top-0 z-40 h-screen w-80 bg-gradient-to-r"
      animate={isOpen ? 'open' : 'closed'}
      variants={sidebar}
      initial={'closed'}
      ref={sidebarRef}
    >
      <motion.ul
        className={`absolute top-44 pl-6`}
        initial={'closed'}
        animate={isOpen ? 'open' : 'closed'}
        variants={circleEffect}
      >
        {items.map((item, index) => (
          <Link to={item.path} key={index} onClick={() => setIsOpen(false)}>
            <MenuItem text={item.text} variants={circleEffect} />
          </Link>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default SideBar;
