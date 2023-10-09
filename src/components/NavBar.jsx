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

  const [navVisible, setNavisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setNavisible(true);
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
        <nav className="bg-gradient-to-b from-dark opacity-95 via-slate-800-opacity-80 to-slate-500-opacity-30 flex items-center px-7 py-12 justify-between  absolute z-10  w-full">
          {/*  menu burger */}
          <div className="w-1/3 ">
            <motion.nav
              initial={false}
              animate={isOpen ? 'open' : 'closed'}
              custom="100%"
            >
              <motion.div className={`${effect}`} variants={sidebar} />

              <SideBar />
              <MenuToggle toggle={() => toggleOpen()} />
            </motion.nav>
          </div>
          <div className="cursor-pointer  flex justify-center group relative">
            {/*  logo */}
            <Link to={'/'}>
              <Logo />
            </Link>
          </div>
          {/*  input */}
          <div className="relative w-1/3 flex justify-end group">
            <input
              type="text"
              className=" w-10 h-10 opacity-0 shadow p-4 rounded-full outline-none transition-all duration-500 ease-in-out  group-hover:w-28  group-hover:sm:w-52  group-hover:opacity-100"
            />
            <button
              type="submit"
              className="w-10 absolute h-full flex justify-center items-center"
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
