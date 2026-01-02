import React, { useState } from 'react';
import { Search, ChevronDown, Download, Eye, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { PNG } from "../../../utils/Images";
import DeleteModal from "../../reusable/DeleteModel"

const LeaderBoardTable = ({ leaderboardActive, setLeaderboardActive }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [studentRankings, setStudentRankings] = useState([
    { id: 1, rank: "01", name: "Rahul Sharma", course: "Full Stack Developer", score: "91", lastActive: "Today", status: true, avatar: PNG.student },
    { id: 2, rank: "02", name: "Priya Singh", course: "UI/UX Design", score: "85", lastActive: "Yesterday", status: false, avatar: PNG.student },
    { id: 3, rank: "03", name: "Abhay Dixit", course: "Full Stack Developer", score: "82", lastActive: "Today", status: true, avatar: PNG.student },
    { id: 4, rank: "04", name: "Sneha Patel", course: "Python Data Science", score: "78", lastActive: "2 hrs ago", status: true, avatar: PNG.student },
    { id: 5, rank: "05", name: "Vikram Rathore", course: "Digital Marketing", score: "75", lastActive: "Today", status: false, avatar: PNG.student },
    { id: 6, rank: "06", name: "Nisha Verma", course: "Full Stack Developer", score: "72", lastActive: "Yesterday", status: true, avatar: PNG.student },
  ]);

  // 2. Individual student status toggle function
  const toggleStudentStatus = (id) => {
    setStudentRankings(prev =>
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
    setStudentRankings(prev => prev.filter(item => item.id !== selectedStudent.id));
    setIsModalOpen(false);
    setSelectedStudent(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-lg font-bold text-white gap-4 mb-6">Student Weekly Rankings</h2>

      {/* Settings Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-[#111] p-6 rounded-2xl border border-white/5 min-h-[140px]">
          <h3 className="text-white font-medium mb-6">Leaderboard Status</h3>
          <div
            onClick={() => setLeaderboardActive(!leaderboardActive)}
            className={`w-12 h-6 rounded-full relative cursor-pointer transition-all duration-300 ${leaderboardActive ? 'bg-orange-600' : 'bg-gray-700'}`}
          >
            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 ${leaderboardActive ? 'right-1' : 'left-1'}`} />
          </div>
          <p className="text-[10px] mt-2 text-gray-500"></p>
        </div>

        <div className="bg-[#111] p-6 rounded-2xl border border-white/5">
          <h3 className="text-white font-medium mb-4">Time Frame</h3>
          <div className="relative inline-block w-full max-w-[120px]">
            <select className="w-full bg-[#1A1A1A] border border-gray-800 rounded-lg py-2 px-3 text-sm appearance-none outline-none text-white">
              <option>Weekly</option>
              <option>Monthly</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
          </div>
        </div>

        <div className="bg-[#111] p-6 rounded-2xl border border-white/5 space-y-4">
          <h3 className="text-white font-medium">Visibility</h3>
          <div className="flex items-center gap-3">
            <input type="checkbox" className="accent-orange-600 h-4 w-4" />
            <span className="text-sm text-white">Show to students</span>
          </div>
          <div className="flex items-center gap-3 ">
            <input type="checkbox" readOnly className="accent-orange-600 h-4 w-4" />
            <span className="text-sm text-white">Hide ranks after Top 50</span>
          </div>
        </div>
      </div>

      {/* Table Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <h2 className="text-lg font-bold text-white">Student Weekly Rankings</h2>
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-orange-500 transition-colors" size={16} />
            <input
              type="text"
              placeholder="Search"
              className="bg-[#111] border border-gray-800 text-gray-300 rounded-full py-1.5 pl-10 pr-4 outline-none focus:border-gray-600 w-full sm:w-40 text-sm"
            />
          </div>
          <button className="flex items-center gap-2 bg-[#111] border border-gray-800 px-4 py-1.5 rounded-full text-[10px] text-gray-400">All Batches <ChevronDown size={14} /></button>
          <button className="flex items-center gap-2 bg-[#111] border border-gray-800 px-4 py-1.5 rounded-full text-[10px] text-gray-400">All Courses <ChevronDown size={14} /></button>
          <button className="flex items-center gap-2 bg-orange-600 text-white px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-orange-700 transition-colors"><Download size={14} /> Export</button>
        </div>
      </div>

      {/* Table Content */}
      <div className={`bg-[#0D0D0D] rounded-xl border border-white/5 overflow-x-auto shadow-2xl transition-opacity duration-300 ${!leaderboardActive && 'opacity-50 pointer-events-none'}`}>
        <table className="w-full text-left border-collapse min-w-[900px]">
          <thead>
            <tr className="bg-[#241b18] text-gray-300 text-[13px] font-medium border-b border-gray-800 whitespace-nowrap">
              <th className="px-6 py-4">Rank</th>
              <th className="px-6 py-4">Student Name</th>
              <th className="px-6 py-4">Course</th>
              <th className="px-6 py-4">Score</th>
              <th className="px-6 py-4">Last Active</th>
              <th className="px-6 py-4 text-center">Status</th>
              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.03]">
            {studentRankings.map((row) => (
              <tr key={row.id} className="hover:bg-white/[0.01] transition-colors whitespace-nowrap">
                <td className="px-6 py-4 text-sm font-mono text-gray-500">{row.rank}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img src={row.avatar} className="w-8 h-8 rounded-full border border-orange-500/30" alt="" />
                    <span className="text-sm font-medium text-gray-200">{row.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-400">{row.course}</td>
                <td className="px-6 py-4 text-sm font-bold text-gray-200">{row.score}</td>
                <td className="px-6 py-4 text-sm text-gray-400">{row.lastActive}</td>
                
                {/* 3. Individual Status Toggle Fix */}
                <td className="px-6 py-4 text-center">
                  <div 
                    onClick={() => toggleStudentStatus(row.id)}
                    className={`w-10 h-5 mx-auto rounded-full relative cursor-pointer transition-all duration-300 ${row.status ? 'bg-orange-600' : 'bg-gray-700'}`}
                  >
                    <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all duration-300 ${row.status ? 'right-0.5' : 'left-0.5'}`} />
                  </div>
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
    </motion.div>
  );
};

export default LeaderBoardTable;