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
  const location = useLocation(); // Current path check karne ke liye

  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/" },
    { name: "Students", icon: <Users size={20} />, path: "/student" },
    { name: "Academics", icon: <GraduationCap size={20} />, path: "/academics" },
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
            // LOGIC: Check karein ki kya path match kar raha hai ya start ho raha hai
            // Special cases handle kiye hain jaise Notification ke liye create_notify
            const isNotificationActive = item.name === "Notification" &&
              (location.pathname === "/notifications" || location.pathname === "/create_notify");

            const isStudentActive = item.name === "Students" &&
              (location.pathname === "/student" || location.pathname === "/addStudent");

            const isAcademicActive = item.name === "Academics" &&
              (location.pathname === "/academics" || location.pathname === "/course" || location.pathname === "/subject" || location.pathname === "/add_course" || location.pathname === "/add_subject");

            const isJobActive = item.name === "Job Alerts" &&
              (location.pathname === "/Jobs" || location.pathname === "/addJob");

            const isActive = location.pathname === item.path || isNotificationActive || isStudentActive || isAcademicActive || isJobActive;

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