import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { X } from 'lucide-react';

const Sidebar = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div
      id="sidebar"
      className={`flex flex-col w-64 bg-gradient-to-r from-slate-900 to-stone-400 bg-opacity-25 h-screen pl-8 shadow-2xl transition-all transform ${
        isSidebarVisible ? 'translate-x-0' : '-translate-x-full duration-500'
      }`}
    >
      <div className="relative ">
        <div class="absolute right-3 top-3">
          <button onClick={toggleSidebar} className="text-white">
            <X />
          </button>
        </div>
      </div>

      <div className="flex flex-col pt-28">
        <NavLink to="#" className="p-3 text-white text-lg hover:opacity-75">
          HOME
        </NavLink>
        <NavLink to="#" className="p-3 text-white text-lg hover:opacity-75">
          ARTISTS
        </NavLink>
        <NavLink to="#" className="p-3 text-white text-lg hover:opacity-75">
          GALLERY
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
