import { Link, Outlet } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import Logo from './icon/Logo';
import MenuToggle from './MenuToggle';
import Loader from '../components/Loader';
import SideBar from './Sidebar';
import ScrollTopButton from './ScrollTopButton';
import SearchInput from './SearchInput';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setNavVisible(true);
    }, 1000 * 5);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <Loader />
      {navVisible && (
        <nav className="via-slate-800-opacity-80 to-slate-500-opacity-30 absolute z-10 flex w-full items-center justify-between bg-gradient-to-b from-dark px-7 py-4 pb-12 opacity-95">
          {/*  menu burger */}
          <div className="w-1/3">
            <MenuToggle isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
          <div className="group relative flex w-1/3 cursor-pointer justify-center">
            {/*  logo */}
            <Link to={'/'}>
              <Logo />
            </Link>
          </div>
          <div className="flex w-1/3 justify-end">
            <SearchInput />
          </div>
          <SideBar isOpen={isOpen} />
          {ref.current ? <ScrollTopButton relativeTo={ref.current} /> : null}
        </nav>
      )}
      <div ref={ref} className="max-h-screen overflow-auto">
        <Outlet />
      </div>
    </>
  );
}
