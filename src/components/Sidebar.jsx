import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem';

const items = [
  { text: 'Home', path: '/' },
  { text: 'Gallery', path: '/gallery' },
  { text: 'Artist' },
];

const SideBar = () => (
  <motion.ul className="absolute top-44">
    {items.map((item, index) => (
      <Link to={item.path} key={index}>
        <MenuItem text={item.text} />
      </Link>
    ))}
  </motion.ul>
);

export default SideBar;
