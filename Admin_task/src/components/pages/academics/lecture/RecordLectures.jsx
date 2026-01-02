import React, { useState } from 'react';
import { Search, Plus, ChevronDown, Eye, Edit2, Trash2 } from 'lucide-react';
import { PNG } from "../../../../utils/Images"
import DeleteModal from '../../../reusable/DeleteModel'; // 1. Modal Import karein

const RecordLecture = () => {
  // Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLecture, setSelectedLecture] = useState(null);

  const [lectures, setLectures] = useState([
    { id: 1, title: "Introduction to HTML", course: "Full Stack Development", subject: "HTML & CSS", day: "Day 1", duration: "45 min", status: true, uploadedOn: "12 Mar 2025", thumbnail: PNG.girl },
    { id: 2, title: "CSS Selectors", course: "Full Stack Development", subject: "HTML & CSS", day: "Day 2", duration: "50 min", status: false, uploadedOn: "13 Mar 2025", thumbnail: PNG.girl },
    { id: 3, title: "Flexbox Layout", course: "Full Stack Development", subject: "HTML & CSS", day: "Day 3", duration: "60 min", status: true, uploadedOn: "14 Mar 2025", thumbnail: PNG.girl },
    { id: 4, title: "JS Basics", course: "Full Stack Development", subject: "JavaScript", day: "Day 4", duration: "40 min", status: true, uploadedOn: "15 Mar 2025", thumbnail: PNG.girl },
    { id: 5, title: "Array Methods", course: "Full Stack Development", subject: "JavaScript", day: "Day 5", duration: "55 min", status: false, uploadedOn: "16 Mar 2025", thumbnail: PNG.girl },
    { id: 6, title: "React Components", course: "Full Stack Development", subject: "React JS", day: "Day 6", duration: "70 min", status: true, uploadedOn: "17 Mar 2025", thumbnail: PNG.girl },
  ]);

  const handleToggleStatus = (id) => {
    setLectures(prevLectures =>
      prevLectures.map(lecture =>
        lecture.id === id ? { ...lecture, status: !lecture.status } : lecture
      )
    );
  };

  // 2. Delete Icon Click Function
  const handleDeleteClick = (lecture) => {
    setSelectedLecture(lecture);
    setIsModalOpen(true);
  };

  // 3. Modal Confirm Function
  const handleConfirmDelete = () => {
    setLectures(prev => prev.filter(item => item.id !== selectedLecture.id));
    setIsModalOpen(false);
    setSelectedLecture(null);
  };

  return (
    <div className="w-full animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold text-white tracking-tight">Recorded Lectures</h2>

        <div className="flex flex-wrap items-center gap-2">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-orange-500 transition-colors" size={16} />
            <input
              type="text"
              placeholder="Search"
              className="bg-[#111] border border-gray-800 text-gray-300 rounded-full py-1.5 pl-10 pr-4 outline-none focus:border-gray-600 w-full sm:w-40 text-sm"
            />
          </div>

          {["Course", "Subject", "All"].map((filter) => (
            <button key={filter} className="flex items-center gap-2 bg-[#111] border border-gray-800 px-4 py-1.5 rounded-full text-xs font-medium text-gray-300 hover:border-gray-600 transition-all">
              {filter} <ChevronDown size={14} className="text-gray-500" />
            </button>
          ))}

          <button className="flex items-center gap-1 bg-[#f97316] hover:bg-orange-600 text-white px-3 py-1.5 rounded-lg font-medium shadow-lg shadow-orange-500/10 active:scale-95 transition-all">
            <Plus size={16} />
            Add New Lectures
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-800/50 bg-[#111]/30 shadow-2xl overflow-hidden">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#1f1a18] text-gray-300 text-[13px] font-medium border-b border-gray-800">
                <th className="px-6 py-4">Thumbnail</th>
                <th className="px-6 py-4">Lecture Title</th>
                <th className="px-6 py-4">Course</th>
                <th className="px-6 py-4">Subject</th>
                <th className="px-4 py-4 text-center">Day</th>
                <th className="px-4 py-4">Duration</th>
                <th className="px-4 py-4">Status</th>
                <th className="px-6 py-4 whitespace-nowrap">Uploaded On</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/40">
              {lectures.map((item) => (
                <tr key={item.id} className="hover:bg-white/[0.02] transition-colors group text-[13px] whitespace-nowrap">
                  <td className="px-6 py-4">
                    <div className="w-16 h-10 rounded-lg overflow-hidden border border-gray-800 flex-shrink-0">
                      <img src={item.thumbnail} alt="thumb" className="w-full h-full object-cover" />
                    </div>
                  </td>

                  <td className="px-6 py-4 text-gray-200 font-medium">{item.title}</td>
                  <td className="px-6 py-4 text-gray-400">{item.course}</td>
                  <td className="px-6 py-4 text-gray-400">{item.subject}</td>
                  <td className="px-4 py-4 text-center text-gray-300 ">{item.day}</td>
                  <td className="px-4 py-4 text-gray-300 ">{item.duration}</td>

                  <td className="px-4 py-4">
                    <div 
                      onClick={() => handleToggleStatus(item.id)}
                      className={`w-9 h-5 rounded-full p-1 cursor-pointer transition-all duration-300 flex items-center ${
                        item.status ? 'bg-orange-500' : 'bg-gray-700'
                      }`}
                    >
                      <div className={`w-3 h-3 bg-white rounded-full transition-transform duration-300 ${
                        item.status ? 'translate-x-4' : 'translate-x-0'
                      }`} />
                    </div>
                  </td>

                  <td className="px-6 py-4 text-gray-500 ">{item.uploadedOn}</td>

                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 rounded-lg bg-white/5 text-gray-500 hover:text-white transition-all hover:bg-orange-500/10">
                        <Eye size={14} />
                      </button>
                      <button className="p-2 rounded-lg bg-white/5 text-gray-500 hover:text-white transition-all hover:bg-orange-500/10">
                        <Edit2 size={14} />
                      </button>
                      {/* 4. Trash Button Trigger */}
                      <button 
                        onClick={() => handleDeleteClick(item)}
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

      {/* 5. Delete Modal Call */}
      <DeleteModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onConfirm={handleConfirmDelete} 
        title={selectedLecture ? `"${selectedLecture.title}"` : "this lecture"}
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

export default RecordLecture;