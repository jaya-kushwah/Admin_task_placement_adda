import React from 'react';
import { Search, Bell, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext'; 
import { PNG } from "../../utils/Images";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme(); 

  return (
    <nav className="w-full bg-white dark:bg-[#0D0D0D] border-b border-gray-200 dark:border-gray-800 py-3 px-6 flex items-center justify-between sticky top-0 z-50 transition-colors duration-300">
      
      <div className="flex-1 flex items-center justify-end gap-6">
        <div className="relative w-full max-w-md hidden sm:block">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" size={18} />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-50 dark:bg-black border border-gray-200 dark:border-gray-800 rounded-full py-2 pl-12 pr-4 text-gray-900 dark:text-white text-sm outline-none focus:border-orange-500 transition-all"
          />
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-[#1A1A1A] text-orange-500 dark:text-primary transition-all hover:scale-110 border border-gray-200 dark:border-gray-800"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button className="p-2 bg-gray-100 dark:bg-[#1A1A1A] rounded-full border border-gray-200 dark:border-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors relative">
            <Bell size={20} className="text-gray-600 dark:text-gray-300" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-black"></span>
          </button>

          <div className="flex items-center gap-3 pl-4 border-gray-200 dark:border-gray-800">
            <div className="relative">
              <img
                src={PNG.student}
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-orange-600 object-cover shadow-sm"
              />
            </div>
            <div className="text-right hidden md:block">
              <p className="text-sm font-bold text-gray-900 dark:text-white leading-tight">Abhay Thakur</p>
              <p className="text-[11px] text-gray-500 font-semibold tracking-wide uppercase">UI UX Designer</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;