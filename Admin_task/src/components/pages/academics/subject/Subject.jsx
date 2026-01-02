import React, { useState } from 'react';
import { Search, Plus, ChevronDown, Edit2, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import {PNG} from '../../../../utils/Images'
import DeleteModel from '../../../reusable/DeleteModel';

const Subject = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedSubject, setSelectedSubject] = useState(null);
  const [subject, setSubject] = useState([
    { id: 1, title: "HTML & CSS", count: "12", date: "10 Jan 2025", status: true },
    { id: 2, title: "JavaScript Basics", count: "12", date: "10 Jan 2025", status: false },
    { id: 3, title: "Statistics", count: "15", date: "10 Jan 2025", status: true },
    { id: 4, title: "HTML & CSS", count: "12", date: "10 Jan 2025", status: false },
    { id: 5, title: "Statistics", count: "15", date: "10 Jan 2025", status: true },
    { id: 6, title: "HTML & CSS", count: "12", date: "10 Jan 2025", status: true },
  ]);

    const handleToggleStatus = (id) => {
    setSubject(prevSubject =>
      prevSubject.map(sub =>
        sub.id === id ? { ...sub, status: !sub.status } : sub
      )
    );
  };

  const handleDeleteClick = (subject) => {
    setSelectedSubject(subject);
    setIsModalOpen(true);
  };

  // 4. Confirm Delete Logic
  const handleConfirmDelete = () => {
    // courses state ko filter karein
    setSubject(prev => prev.filter(item => item.id !== selectedSubject.id));
    setIsModalOpen(false);
    setSelectedSubject(null);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-white">Subjects</h2>

        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
            <input
              type="text"
              placeholder="Search"
              className="bg-[#121212] border border-gray-800 text-gray-300 rounded-full py-1.5 pl-10 pr-4 outline-none focus:border-gray-600 w-full sm:w-48 text-sm"
            />
          </div>

          <button className="flex items-center gap-2 bg-[#121212] border border-gray-800 px-4 py-1.5 rounded-lg text-sm font-medium text-gray-300">
            Active <ChevronDown size={14} className="text-gray-500" />
          </button>

          <Link to="/add_subject">
            <button className="flex items-center gap-1 bg-[#f97316] hover:bg-orange-600 text-white px-3 py-1.5 rounded-lg font-medium shadow-lg shadow-orange-500/10 active:scale-95 transition-all">
              <Plus size={18} />
              Add Subjects
            </button>
          </Link>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {subject.map((sub) => (
          <div key={sub.id} className="bg-[#111] border border-[#555555] rounded-2xl p-5 relative group hover:border-[#555555] transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                    <img src={PNG.java} className="w-15 h-15 opacity-80" alt="icon" />
                <h3 className="text-lg font-bold text-gray-100 truncate">{sub.title}</h3>
              </div>
              
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:text-white transition-all"><Edit2 size={14} /></button>
              <button
                  onClick={() => handleDeleteClick(sub)}
                  className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-all"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between mt-6">
              <div className="flex gap-10">
                <div>
                  <p className="text-[12px] text-gray-400 font-medium truncate mb-1 ">Linked Content</p>
                  <p className="text-sm font-bold text-gray-200 truncate">{sub.count}</p>
                </div>
                <div>
                  <p className="text-[12px] text-gray-400 font-medium truncate mb-1 ">Created On</p>
                  <p className="text-sm font-bold text-gray-200 truncate">{sub.date}</p>
                </div>
              </div>

                  <div
                onClick={() => handleToggleStatus(sub.id)}
                className={`w-10 h-5 md:w-11 md:h-6 rounded-full p-1 cursor-pointer transition-all flex items-center shrink-0 ${
                  sub.status ? 'bg-orange-500' : 'bg-gray-300 dark:bg-gray-800'
                }`}
              >
                <div className={`w-3 h-3 md:w-4 md:h-4 bg-white rounded-full transition-transform duration-300 shadow-sm ${
                  sub.status ? 'translate-x-5' : 'translate-x-0'
                }`} />
              </div>
            </div>
          </div>
        ))}
      </div>
            <DeleteModel 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onConfirm={handleConfirmDelete}
        title={selectedSubject ? selectedSubject.title : "this course"} 
      />
    </div>
  );
};

export default Subject;
















