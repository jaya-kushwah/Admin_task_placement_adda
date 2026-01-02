import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Menu } from "lucide-react";

const MainLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div className="min-h-screen dark:bg-black">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            <div className="flex-1 lg:ml-64 flex flex-col">
                <div className="sticky top-0 z-50 bg-[#0D0D0D] flex items-center border-b border-gray-800">
                    <button
                        onClick={toggleSidebar}
                        className="lg:hidden p-4 text-white hover:bg-white/5 transition-colors"
                    >
                        <Menu size={24} />
                    </button>
                    <Navbar />
                </div>
                <main className="p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default MainLayout;