import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import Logo from './icon/Logo';
import MenuToggle from './MenuToggle';
import SideBar from './Sidebar';
import SearchInput from './SearchInput';
import { motion, useMotionValueEvent } from 'framer-motion';

export default function NavBar({ scrollYProgress }) {
  const [isOpen, setIsOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(false);
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const previous = scrollYProgress.getPrevious();
    if (latest > previous && latest > 0.028) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const buttonRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setNavVisible(true);
    }, 1000 * 5);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {navVisible && (
        <motion.nav
          variants={{ visible: { y: 0 }, hidden: { y: '-100%' } }}
          animate={hidden ? 'hidden' : 'visible'}
          transition={{ duration: 0.55, ease: 'easeInOut' }}
          className="via-slate-800-opacity-80 to-slate-500-opacity-30 absolute z-10 flex w-full items-center justify-between bg-gradient-to-b from-dark px-7 py-4 pb-12 opacity-95"
        >
          {/*  menu burger */}
          <div className="w-1/3">
            <MenuToggle
              isOpen={isOpen}
              toggleSidebar={toggleSidebar}
              buttonRef={buttonRef}
            />
          </div>
          <div className="group relative flex cursor-pointer justify-center">
            {/*  logo */}
            <Link to={'/'}>
              <Logo />
            </Link>
          </div>
          <div className="flex w-1/3 justify-end">
            <SearchInput />
          </div>
          <SideBar
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            buttonRef={buttonRef}
          />
        </motion.nav>
      )}
    </>
  );
}
