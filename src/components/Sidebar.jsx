import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MenuItem from './Item';

const items = [
  { id: '0', text: 'Home', path: '/' },
  { id: '1', text: 'Gallery', path: '/gallery' },
  { id: '2', text: 'Artist' },
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
