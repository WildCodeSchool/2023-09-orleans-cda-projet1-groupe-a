import { Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import { motion, useCycle } from 'framer-motion';
import Logo from './icon/Logo';
import MenuToggle from './MenuToggle';
import Loader from '../components/Loader';
import SideBar from './Sidebar';

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
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function NavBar() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [navVisible, setNavVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setNavVisible(true);
    }, 1000 * 5);
    return () => clearTimeout(timeoutId);
  }, []);

  const effect = isOpen
    ? 'absolute w-80 h-screen top-1 left-0 bg-gradient-to-r from-slate-500-opacity-30 via-slate-600-opacity-80 -z-50'
    : 'absolute w-80 top-11 left-0 -z-50';

  return (
    <>
      <Loader />
      {navVisible && (
        <nav className="via-slate-800-opacity-80 to-slate-500-opacity-30 absolute z-10 flex w-full items-center justify-between bg-gradient-to-b from-dark  px-7 py-12  opacity-95">
          {/*  menu burger */}
          <motion.div
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            custom="100%"
            className="w-1/3"
          >
            <motion.div className={effect} variants={sidebar} />
            <SideBar />
            <MenuToggle toggle={() => toggleOpen()} />
          </motion.div>
          <div className="group relative flex cursor-pointer justify-center">
            {/*  logo */}
            <Link to={'/'}>
              <Logo />
            </Link>
          </div>
          {/*  input */}
          <div className="group relative flex w-1/3 justify-end">
            <input
              type="text"
              className="h-10 w-10 rounded-full p-4 opacity-0 shadow outline-none transition-all duration-500 ease-in-out group-hover:w-28 group-hover:opacity-100 group-hover:sm:w-52"
            />
            <button
              type="submit"
              className="absolute flex h-full w-10 items-center justify-center"
            >
              <Search className="text-light" />
            </button>
          </div>
        </nav>
      )}
      <Outlet />
    </>
  );
}
