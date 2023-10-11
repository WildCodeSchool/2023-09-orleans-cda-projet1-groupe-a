import { Link } from 'react-router-dom';
import { Menu, Search } from 'lucide-react';
import Logo from './icon/Logo';

export default function NavBar() {
  return (
    <nav className="via-slate-800-opacity-80 to-slate-500-opacity-30 flex h-44 items-center justify-between bg-gradient-to-b from-dark px-8 py-12 opacity-95 ">
      {/*  menu burger */}
      <div className="w-1/3 text-light">
        <Menu className="cursor-pointer transition-all duration-500 ease-in-out hover:scale-125" />
      </div>
      <div className="group  relative flex cursor-pointer justify-center">
        {/*  logo */}
        <Link to={'/'}>
          <Logo />
        </Link>
      </div>
      {/*  input */}
      <div className="group relative flex w-1/3 justify-end">
        <input
          type="text"
          className=" h-10 w-10 rounded-full p-4 opacity-0 shadow outline-none transition-all duration-500 ease-in-out  group-hover:w-28  group-hover:opacity-100  group-hover:sm:w-52"
        />
        <button
          type="submit"
          className="absolute flex h-full w-10 items-center justify-center"
        >
          <Search className="text-light" />
        </button>
      </div>
    </nav>
  );
}
