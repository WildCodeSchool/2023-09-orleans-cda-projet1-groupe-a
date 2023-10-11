import { Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import Logo from './icon/Logo';
import MenuToggle from './MenuToggle';
import Loader from '../components/Loader';
import SideBar from './Sidebar';

export default function NavBar() {
  /*   const [navVisible, setNavVisible] = useState(false); */

  /*   useEffect(() => {
    const timeoutId = setTimeout(() => {
      setNavVisible(true);
    }, 1000 * 5);
    return () => clearTimeout(timeoutId);
  }, []); */

  return (
    <>
      {/* <Loader /> */}
      {/*  {navVisible && ( */}
      <nav className="via-slate-800-opacity-80 to-slate-500-opacity-30 absolute z-10 flex w-full items-center justify-between bg-gradient-to-b from-dark  px-7 py-12  opacity-95">
        {/*  menu burger */}

        <MenuToggle />
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
        <SideBar />
      </nav>
      {/*  )} */}
      <Outlet />
    </>
  );
}
