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
      className={`via-slate-800-opacity-80 to-slate-500-opacity-30 flex h-screen w-64 transform flex-col bg-gradient-to-r from-dark pl-8 opacity-95 shadow-2xl transition-all ${
        isSidebarVisible ? 'translate-x-0' : '-translate-x-full duration-500'
      }`}
    >
      <div className="relative ">
        <div class="absolute right-3 top-3">
          <button onClick={toggleSidebar} className="text-light">
            <X />
          </button>
        </div>
      </div>

      <div className="flex flex-col pt-28 text-light">
        <NavLink to="#" className="p-3 text-lg hover:opacity-75">
          HOME
        </NavLink>
        <NavLink to="#" className="p-3 text-lg hover:opacity-75">
          ARTISTS
        </NavLink>
        <NavLink to="#" className="p-3 text-lg hover:opacity-75">
          GALLERY
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
