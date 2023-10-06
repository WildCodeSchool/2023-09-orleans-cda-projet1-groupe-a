import { Link } from 'react-router-dom';
import { Menu, Search } from 'lucide-react';
import Logo from './icon/Logo';

export default function NavBar() {
  return (
    <nav className="bg-gradient-to-b from-[--dark] via-slate-800 to-slate-500 flex items-center px-8 py-12 justify-between h-44 ">
      {/*  menu burger */}
      <div className="text-[--light] w-1/3">
        <Menu className="cursor-pointer hover:scale-125 transition-all duration-500 ease-in-out" />
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
          <Search className="text-[--light]" />
        </button>
      </div>
    </nav>
  );
}
