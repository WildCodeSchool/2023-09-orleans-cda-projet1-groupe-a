import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import Logo from './icon/Logo';
import MenuToggle from './MenuToggle';
import Loader from '../components/Loader';
import SideBar from './Sidebar';

export default function NavBar() {
  const [isInputOpen, setInputOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(false);

  const handleMouseEnter = () => {
    setInputOpen(true);
  };

  const handleMouseLeave = () => {
    setInputOpen(false);
  };

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
        <nav className="via-slate-800-opacity-80 to-slate-500-opacity-30 absolute z-10 flex w-full items-center justify-between bg-gradient-to-b from-dark px-7 py-12 opacity-95">
          {/*  menu burger */}
          <MenuToggle isOpen={isOpen} setIsOpen={setIsOpen} />
          <div className="group relative flex cursor-pointer justify-center">
            {/*  logo */}
            <Link to={'/'}>
              <Logo />
            </Link>
          </div>
          {/*  input */}
          <form
            type="texte"
            className="relative flex w-1/3 justify-end"
            onMouseLeave={handleMouseLeave}
          >
            <input
              type="text"
              className={`h-10 w-10 rounded-full p-4 shadow outline-none transition-all duration-500 ease-in-out
    ${isInputOpen ? 'w-28 sm:w-52' : 'opacity-0'}`}
            />
            <button
              type="submit"
              className="absolute flex h-full w-10 items-center justify-center"
            >
              <Search
                onMouseEnter={handleMouseEnter}
                className={isInputOpen ? 'text-dark' : 'text-light'}
              />
            </button>
          </form>
          <SideBar isOpen={isOpen} />
        </nav>
      )}
      <div className="max-h-screen overflow-auto">
        <Outlet />
      </div>
    </>
  );
}
