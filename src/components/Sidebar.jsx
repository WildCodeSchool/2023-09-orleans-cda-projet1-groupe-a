import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MenuItem from './Item';

const Items = [
  { id: '0', text: 'Home', path: '/' },
  { id: '1', text: 'Gallery', path: '/gallery' },
  { id: '2', text: 'Artist' },
];

const SideBar = () => (
  <motion.ul className="absolute top-44">
    {Items.map((item) => (
      <Link to={item.path}>
        <MenuItem key={item.id} text={item.text} />
      </Link>
    ))}
  </motion.ul>
);

export default SideBar;
