import React, { useState } from 'react'; // 1. useState import kiya
import { Search, ChevronDown, Eye, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { PNG } from "../../../utils/Images";
import DeleteModal from "../../reusable/DeleteModel"

const Discussion = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [discussions, setDiscussions] = useState([
    { id: 1, topic: "What is the difference between SQL and NoSQL?", author: "Rahul Sharma", date: "12 Mar 2025", replies: "91", reported: false, status: true, avatar: PNG.student },
    { id: 2, topic: "Best practices for React Context API?", author: "Priya Singh", date: "13 Mar 2025", replies: "45", reported: true, status: false, avatar: PNG.student },
    { id: 3, topic: "How to deploy a Node.js app on AWS?", author: "Abhay Dixit", date: "14 Mar 2025", replies: "12", reported: false, status: true, avatar: PNG.student },
    { id: 4, topic: "Tailwind CSS vs Bootstrap in 2025", author: "Sneha Patel", date: "15 Mar 2025", replies: "88", reported: false, status: true, avatar: PNG.student },
    { id: 5, topic: "Understanding Framer Motion Layout animations", author: "Vikram Rathore", date: "16 Mar 2025", replies: "23", reported: true, status: false, avatar: PNG.student },
    { id: 6, topic: "The future of AI in Web Development", author: "Nisha Verma", date: "17 Mar 2025", replies: "150", reported: false, status: true, avatar: PNG.student },
  ]);

  // 3. Status (Hide/Show) Toggle Function
  const handleToggleStatus = (id) => {
    setDiscussions(prev =>
      prev.map(item =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  };

    const handleDeleteClick = (student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  // 3. Confirm delete function
  const handleConfirmDelete = () => {
    setDiscussions(prev => prev.filter(item => item.id !== selectedStudent.id));
    setIsModalOpen(false);
    setSelectedStudent(null);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {/* Filters Area */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <h2 className="text-lg font-bold text-white me-16">Discussion Forum</h2>

        <div className="flex flex-wrap items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-orange-500 transition-colors" size={16} />
            <input
              type="text"
              placeholder="Search topics..."
              className="bg-[#111] border border-gray-800 rounded-full py-1.5 pl-10 pr-4 text-sm text-gray-300 outline-none w-48 focus:border-gray-600 transition-all"
            />
          </div>
          <button className="flex items-center gap-2 bg-[#111] border border-gray-800 px-4 py-1.5 rounded-full text-xs text-gray-400 hover:text-white transition-colors">All Subjects <ChevronDown size={14} /></button>
          <button className="flex items-center gap-2 bg-[#111] border border-gray-800 px-4 py-1.5 rounded-full text-xs text-gray-400 hover:text-white transition-colors">Not Reported <ChevronDown size={14} /></button>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-[#0D0D0D] rounded-xl border border-white/5 overflow-x-auto shadow-2xl custom-scrollbar">
        <table className="w-full text-left border-collapse min-w-[900px]">
          <thead>
            <tr className="bg-[#241b18] text-gray-300 text-[13px] font-medium border-b border-gray-800 whitespace-nowrap">
              <th className="px-6 py-4">Topic</th>
              <th className="px-6 py-4">Created By</th>
              <th className="px-6 py-4">Created Date</th>
              <th className="px-6 py-4">Replies</th>
              <th className="px-6 py-4">Reported</th>
              <th className="px-6 py-4 text-center">Hide</th>
              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.03] whitespace-nowrap">
            {discussions.map((row) => (
              <tr key={row.id} className="hover:bg-white/[0.01] transition-colors group">
                <td className="px-6 py-4 text-sm text-gray-300 max-w-[250px] truncate font-medium">
                  {row.topic}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <img src={row.avatar} className="w-7 h-7 rounded-full border border-white/10" alt="avatar" />
                    <span className="text-sm text-gray-200">{row.author}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-400">{row.date}</td>
                <td className="px-6 py-4 text-sm text-gray-200">{row.replies}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded text-[10px] font-bold ${row.reported ? 'bg-red-900/30 text-red-500 border border-red-500/20' : 'bg-green-900/30 text-green-500 border border-green-500/20'}`}>
                    {row.reported ? 'Yes' : 'No'}
                  </span>
                </td>

                {/* 4. Corrected Status Toggle (Hide/Show) */}
                <td className="px-6 py-4 text-center">
                  <div
                    onClick={() => handleToggleStatus(row.id)}
                    className={`w-10 h-5 mx-auto rounded-full p-1 cursor-pointer transition-all duration-300 flex items-center ${row.status ? 'bg-orange-600' : 'bg-gray-700'
                      }`}
                  >
                    <div className={`w-3 h-3 bg-white rounded-full transition-transform duration-300 ${row.status ? 'translate-x-5' : 'translate-x-0'
                      }`} />
                  </div>
                  <span className="text-[9px] text-gray-600 mt-1 block">
                  </span>
                </td>

                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-2">
                    <button className="p-2 rounded-lg bg-white/5 text-gray-500 hover:text-white transition-all hover:bg-orange-500/10">
                      <Eye size={14} />
                    </button>
                    <button
                      onClick={() => handleDeleteClick(row)}
                      className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-all"
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

      <DeleteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmDelete}
        title={selectedStudent ? `student "${selectedStudent.name}"` : "this student"}
      />

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { height: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #0d0d0d; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #333; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #f97316; }
      `}</style>
    </motion.div>
  );
};

export default Discussion;