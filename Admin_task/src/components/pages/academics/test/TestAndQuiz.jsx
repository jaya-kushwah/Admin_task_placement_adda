import React, { useState } from 'react'; // 1. useState add kiya
import { Search, ChevronDown, Plus, Pencil, Trash2, Eye, Edit2 } from 'lucide-react';
import DeleteModal from '../../../reusable/DeleteModel'

const TestAndQuiz = () => {
  // Modal ke liye states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTest, setSelectedTest] = useState(null);

  // 3. Data ko state mein dala (taaki delete hone par UI update ho)
  const [tableData, setTableData] = useState([
    { id: 1, name: "Introduction to HTML", subject: "HTML & CSS", questions: "45", duration: "60 min", date: "12 Mar 2025", status: "Active", statusColor: "text-blue-500 bg-blue-500/10" },
    { id: 2, name: "HTML Basics Quiz", subject: "HTML & CSS", questions: "45", duration: "60 min", date: "12 Mar 2025", status: "Upcoming", statusColor: "text-orange-500 bg-orange-500/10" },
    { id: 3, name: "CSS Flexbox Test", subject: "HTML & CSS", questions: "45", duration: "60 min", date: "12 Mar 2025", status: "Complete", statusColor: "text-green-500 bg-green-500/10" },
    { id: 4, name: "JavaScript Fundamentals", subject: "JavaScript", questions: "30", duration: "45 min", date: "14 Mar 2025", status: "Upcoming", statusColor: "text-orange-500 bg-orange-500/10" },
    { id: 5, name: "React Hooks Quiz", subject: "React JS", questions: "20", duration: "30 min", date: "15 Mar 2025", status: "Complete", statusColor: "text-green-500 bg-green-500/10" },
  ]);

  // 4. Delete button click handler
  const handleDeleteClick = (test) => {
    setSelectedTest(test);
    setIsModalOpen(true);
  };

  // 5. Confirm delete function
  const handleConfirmDelete = () => {
    setTableData(prev => prev.filter(item => item.id !== selectedTest.id));
    setIsModalOpen(false);
    setSelectedTest(null);
  };

  return (
    <div className="text-white">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
        <h1 className="text-2xl font-bold tracking-tight">Tests & Quizzes</h1>

        <div className="flex flex-wrap items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent border border-gray-800 rounded-full py-1.5 pl-10 pr-4 text-sm focus:outline-none focus:border-orange-500 transition-all w-48"
            />
          </div>

          {["Course", "Subject", "Active"].map((filter) => (
            <button key={filter} className="flex items-center gap-2 bg-transparent border border-gray-800 px-4 py-1.5 rounded-full text-xs text-gray-400 hover:border-gray-600">
              {filter} <ChevronDown size={14} />
            </button>
          ))}

          <button className="flex items-center gap-1 bg-[#f97316] hover:bg-orange-600 text-white px-3 py-1.5 rounded-lg font-medium shadow-lg shadow-orange-500/10 active:scale-95 transition-all">
            <Plus size={18} />
            <span>Create Test</span>
          </button>
        </div>
      </div>

      <div className="rounded-xl overflow-hidden border border-gray-800/50 bg-[#111]">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-[#1f1a18] text-gray-300 text-[13px] font-medium border-b border-gray-800 truncate">
                <th className="px-6 py-4">Test Name</th>
                <th className="px-6 py-4">Subject</th>
                <th className="px-6 py-4">Total Questions</th>
                <th className="px-6 py-4">Duration</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/50">
              {tableData.map((row) => (
                <tr key={row.id} className="hover:bg-white/[0.02] transition-colors group truncate">
                  <td className="px-6 py-5 text-[14px] text-gray-300">{row.name}</td>
                  <td className="px-6 py-5 text-[13px] text-gray-400">{row.subject}</td>
                  <td className="px-6 py-5 text-[13px] text-gray-400 ">{row.questions}</td>
                  <td className="px-6 py-5 text-[13px] text-gray-400">{row.duration}</td>
                  <td className="px-6 py-5 text-[13px] text-gray-400">{row.date}</td>

                  <td className="px-6 py-5">
                    <span className={`px-4 py-1 rounded-full text-[11px] font-bold ${row.statusColor}`}>
                      {row.status}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      {row.status === "Complete" ? (
                        <button className="p-2 rounded-lg bg-white/5 text-gray-500 hover:text-white transition-all hover:bg-orange-500/10">
                          <Eye size={14} />
                        </button>
                      ) : (
                        <button className="p-2 rounded-lg bg-white/5 text-gray-500 hover:text-white transition-all hover:bg-orange-500/10">
                          <Edit2 size={14} />
                        </button>
                      )}
                      {/* 6. Trash Button Trigger */}
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
      </div>

      {/* 7. Delete Modal Component Call */}
      <DeleteModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onConfirm={handleConfirmDelete} 
        title={selectedTest ? selectedTest.name : "this test"}
      />
    </div>
  );
};

export default TestAndQuiz;