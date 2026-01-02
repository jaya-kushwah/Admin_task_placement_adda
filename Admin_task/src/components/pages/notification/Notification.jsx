import React, { useState } from 'react'; // 1. useState import kiya
import { Search, ChevronDown, Plus, Eye, Edit2, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import DeleteModal from "../../reusable/DeleteModel"

const Notification = () => {
  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNotify, setSelectedNotify] = useState(null);

  // 3. Notifications ko state mein dala taaki deletion UI par dikhe
  const [notifications, setNotifications] = useState([
    { id: 1, title: "Java Quiz Reminder", category: "Job Alert", channel: "In-App + Email", schedule: "Send Now", issuedOn: "12 Aug 2025", reported: "Sent" },
    { id: 2, title: "Frontend Developer Job Alert", category: "New Material", channel: "In-App", schedule: "Send Now", issuedOn: "12 Mar 2025", reported: "Scheduled" },
    { id: 3, title: "New Study Material Uploaded", category: "Test Reminder", channel: "In-App", schedule: "Send Now", issuedOn: "12 Mar 2025", reported: "Sent" },
    { id: 4, title: "Full Stack Developer", category: "New Material", channel: "In-App", schedule: "Send Now", issuedOn: "12 Mar 2025", reported: "Scheduled" },
    { id: 5, title: "Full Stack Developer", category: "Test Reminder", channel: "In-App", schedule: "Send Now", issuedOn: "12 Mar 2025", reported: "Active" },
  ]);

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Sent': return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'Scheduled': return 'bg-orange-500/10 text-orange-600 border-orange-500/20';
      case 'Active': return 'bg-green-500/10 text-green-500 border-green-500/20';
      default: return 'bg-gray-500/10 text-gray-500';
    }
  };

  // 4. Delete handlers
  const handleDeleteClick = (item) => {
    setSelectedNotify(item);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    setNotifications(prev => prev.filter(n => n.id !== selectedNotify.id));
    setIsModalOpen(false);
    setSelectedNotify(null);
  };

  return (
    <div className="w-full text-white animate-in fade-in duration-700">
      <div className="flex items-center gap-2 text-sm mb-4">
        <span className="text-white">Notification</span>
        <span className="text-white text-lg">»</span>
        <span className="text-white font-medium">Online Jobs</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 rounded-2xl ">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight whitespace-nowrap">
          Notification List
        </h2>

        <div className="flex flex-row items-center gap-2 md:gap-3 flex-wrap md:flex-nowrap">
          <div className="relative group min-w-[150px] md:w-60">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-orange-500 transition-colors" size={16} />
            <input
              type="text"
              placeholder="Search..."
              className="bg-[#0D0D0D] border border-gray-800 text-gray-300 rounded-full py-2 pl-10 pr-4 outline-none focus:border-gray-600 w-full text-sm transition-all"
            />
          </div>

          <div className="relative">
            <select className="appearance-none bg-[#0D0D0D] border border-gray-800 text-gray-300 rounded-full py-2 pl-4 pr-10 outline-none focus:border-gray-600 text-xs font-medium cursor-pointer transition-all">
              <option>All Courses</option>
              <option>Inactive</option>
              <option>Scheduled</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={14} />
          </div>

          <div className="relative">
            <select className="appearance-none bg-[#0D0D0D] border border-gray-800 text-gray-300 rounded-full py-2 pl-4 pr-10 outline-none focus:border-gray-600 text-xs font-medium cursor-pointer transition-all">
              <option>Active</option>
              <option>Inactive</option>
              <option>Scheduled</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={14} />
          </div>

          <Link to="/create_notify">
            <button className="flex items-center gap-1 bg-[#f97316] hover:bg-orange-600 text-white px-3 py-1.5 rounded-lg font-medium shadow-lg shadow-orange-500/10 active:scale-95 transition-all truncate">
              <Plus size={18} />
              Create Notification
            </button>
          </Link>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-800/50 bg-[#111]/30 shadow-2xl overflow-hidden">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#1f1a18] text-gray-300 text-[13px] font-medium border-b border-gray-800">
                <th className="px-6 py-5">Title</th>
                <th className="px-6 py-5">Category</th>
                <th className="px-6 py-5">Channel</th>
                <th className="px-6 py-5">Issued On</th>
                <th className="px-6 py-5">Schedule</th>
                <th className="px-6 py-5 text-center">Reported</th>
                <th className="px-6 py-5 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/40">
              {notifications.map((item) => (
                <tr key={item.id} className="hover:bg-white/[0.03] transition-colors group text-sm">
                  <td className="px-6 py-4 text-gray-200 font-medium whitespace-nowrap">{item.title}</td>
                  <td className="px-6 py-4 text-gray-400 whitespace-nowrap">{item.category}</td>
                  <td className="px-6 py-4 text-gray-400 whitespace-nowrap">{item.channel}</td>
                  <td className="px-6 py-4 text-gray-500 font-light whitespace-nowrap">{item.issuedOn}</td>
                  <td className="px-6 py-4 text-gray-500 font-light whitespace-nowrap">{item.schedule}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black tracking-wider border uppercase ${getStatusStyle(item.reported)}`}>
                      {item.reported}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center gap-2 justify-center">
                      <button className="p-2.5 rounded-xl bg-white/5 text-gray-500 hover:text-white hover:bg-white/10 border border-transparent hover:border-gray-700 transition-all">
                        <Eye size={16} />
                      </button>
                      <button className="p-2 rounded-xl bg-white/5 border border-gray-800 text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                        <Edit2 size={16} />
                      </button>
                      {/* 5. Trash button logic update */}
                      <button 
                        onClick={() => handleDeleteClick(item)}
                        className="p-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 transition-all"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 6. Delete Modal integration */}
      <DeleteModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onConfirm={handleConfirmDelete} 
        title={selectedNotify ? `notification "${selectedNotify.title}"` : "this notification"}
      />

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { height: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #0d0d0d; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #333; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #f97316; }
      `}</style>
    </div>
  );
};

export default Notification;