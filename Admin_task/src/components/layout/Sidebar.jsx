import React from 'react';
import {
  LayoutDashboard, Users, GraduationCap,
  MessageSquare, Briefcase, BadgeCheck, Bell, X
} from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import { SVG } from "../../utils/Images";
import { useTheme } from '../context/ThemeContext';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { theme } = useTheme();
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/" },
    { name: "Students", icon: <Users size={20} />, path: "/student" },
    { name: "Academics", icon: <GraduationCap size={20} />, path: "/academics/course" },
    { name: "Engagement", icon: <MessageSquare size={20} />, path: "/engagement" },
    { name: "Job Alerts", icon: <Briefcase size={20} />, path: "/jobs" },
    { name: "Certificates", icon: <BadgeCheck size={20} />, path: "/certificates" },
    { name: "Notification", icon: <Bell size={20} />, path: "/notifications" },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-[55] lg:hidden backdrop-blur-sm transition-opacity"
          onClick={toggleSidebar}
        />
      )}

      <aside className={`
        fixed left-0 top-0 h-screen flex flex-col p-5 z-[60] transition-all duration-300
        w-64 bg-white dark:bg-[#0D0D0D] border-r border-gray-200 dark:border-gray-800 
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}>

        <div className="mb-10 px-2 flex items-center justify-between">
          <img src={SVG.logo} alt="Logo" className="h-10" />
          <button onClick={toggleSidebar} className="lg:hidden text-gray-500 dark:text-gray-400">
            <X size={24} />
          </button>
        </div>

        <nav className="space-y-2 flex-1">
          {menuItems.map((item, index) => {
            
            const isDashboard = item.path === "/";
            
            // 2. Logic: Kya current URL is item ke path se start ho raha hai?
            // startsWith use karne se /academics/add_course automatically Academics ko active rakhega.
            let isActive = isDashboard 
              ? location.pathname === "/" 
              : location.pathname.startsWith(item.path);

            // 3. Special cases: Agar aapka URL structure nested nahi hai (jaise /addStudent vs /student)
            if (item.name === "Notification" && location.pathname.startsWith("/create_notify")) isActive = true;
            if (item.name === "Students" && location.pathname.startsWith("/addStudent")) isActive = true;
            if (item.name === "Job Alerts" && location.pathname.startsWith("/addJob")) isActive = true;
            
            // Academics ke liye special check (Just in case routes nested na ho)
            if (item.name === "Academics" && (
              location.pathname.startsWith("/academics") || 
              location.pathname.startsWith("/course") || 
              location.pathname.startsWith("/subject") ||
              location.pathname.startsWith("/add_") // covers add_course, add_subject, etc.
            )) {
              isActive = true;
            }

            return (
              <NavLink
                key={index}
                to={item.path}
                onClick={() => { if (window.innerWidth < 1024) toggleSidebar(); }}
                className={`
                  group flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer transition-all duration-300
                  ${isActive
                    ? "bg-orange-600/10 text-orange-500 border-l-4 border-orange-500 font-bold shadow-sm dark:shadow-[0_0_15px_rgba(234,88,12,0.1)]"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-orange-600 dark:hover:text-white"
                  }
                `}
              >
                <span className={isActive ? "text-orange-500" : "group-hover:text-orange-600 dark:group-hover:text-white"}>
                  {item.icon}
                </span>
                <span className="text-[15px] tracking-tight">{item.name}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
          <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest font-bold">Version 2.0.1</p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;