import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem';

const items = [
  { text: 'HOME', path: '/' },
  { text: 'GALLERY', path: '/gallery' },
  { text: 'ARTISTS', path: '/all-artists' },
];

const variants = {
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

const SideBar = ({ isOpen, toggleSidebar }) => {
  return (
    <motion.ul
      className={`absolute top-44`}
      initial={'closed'}
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
    >
      {items.map((item, index) => (
        <Link to={item.path} key={index} onClick={toggleSidebar}>
          <MenuItem text={item.text} variants={variants} />
        </Link>
      ))}
    </motion.ul>
  );
};

export default SideBar;
