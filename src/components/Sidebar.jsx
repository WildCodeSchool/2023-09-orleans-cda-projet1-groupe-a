import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem';

const items = [
  { text: 'Home', path: '/' },
  { text: 'Gallery', path: '/gallery' },
  { text: 'Artist' },
];

const variants = {
  open: {
    y: 0,
    opacity: 1,
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
  },
};
const SideBar = ({ isOpen }) => (
  <motion.ul
    className={`absolute top-44 `}
    initial={'closed'}
    animate={isOpen ? 'open' : 'closed'}
    variants={variants}
  >
    {items.map((item, index) => (
      <Link to={item.path} key={index}>
        <MenuItem text={item.text} variants={variants} />
      </Link>
    ))}
  </motion.ul>
);

export default SideBar;
