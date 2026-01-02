import React, { useState } from 'react';
import { Search, ChevronDown, Plus, Trash2, Edit2 } from 'lucide-react';
import DeleteModal from '../../../reusable/DeleteModel';

const ClassNotes = () => {
  // Modal ke liye states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  const [notes, setNotes] = useState([
    { id: 1, title: "Introduction to HTML", fileType: "PNG", subject: "HTML & CSS", downloads: "120 / 85", status: true, date: "12 Mar 2025", typeColor: "text-green-500 bg-green-500/10 border-green-500/20" },
    { id: 2, title: "HTML Basics Notes", fileType: "PDF", subject: "HTML & CSS", downloads: "120 / 85", status: false, date: "12 Mar 2025", typeColor: "text-red-500 bg-red-500/10 border-red-500/20" },
    { id: 3, title: "CSS Flexbox Guide", fileType: "PNG", subject: "HTML & CSS", downloads: "120 / 85", status: true, date: "12 Mar 2025", typeColor: "text-green-500 bg-green-500/10 border-green-500/20" },
    { id: 4, title: "JS Selectors", fileType: "JPG", subject: "JavaScript", downloads: "120 / 85", status: true, date: "12 Mar 2025", typeColor: "text-blue-500 bg-blue-500/10 border-blue-500/20" },
    { id: 5, title: "React Lifecycle", fileType: "PDF", subject: "React JS", downloads: "120 / 85", status: true, date: "12 Mar 2025", typeColor: "text-red-500 bg-red-500/10 border-red-500/20" },
  ]);

  const handleToggleStatus = (id) => {
    setNotes(prevNotes =>
      prevNotes.map(note =>
        note.id === id ? { ...note, status: !note.status } : note
      )
    );
  };

  // 2. Delete button click handler
  const handleDeleteClick = (note) => {
    setSelectedNote(note);
    setIsModalOpen(true);
  };

  // 3. Confirm delete function
  const handleConfirmDelete = () => {
    setNotes(prev => prev.filter(item => item.id !== selectedNote.id));
    setIsModalOpen(false);
    setSelectedNote(null);
  };

  return (
    <div className="w-full overflow-hidden text-white animate-in fade-in duration-500">

      {/* --- Header Section --- */}
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-8">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight whitespace-nowrap">
          Class Notes Management
        </h2>

        <div className="flex flex-row items-center gap-2 md:gap-3 flex-wrap sm:flex-nowrap w-full xl:w-auto">
          <div className="relative group flex-grow sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-orange-500 transition-colors" size={18} />
            <input
              type="text"
              placeholder="Search"
              className="bg-[#0D0D0D] border border-gray-800 text-gray-300 rounded-full py-2 pl-10 pr-4 outline-none focus:border-orange-500/30 w-full text-sm transition-all"
            />
          </div>

          <div className="flex items-center gap-2">
            {["Course", "Subject"].map((filter) => (
              <button key={filter} className="flex items-center gap-2 bg-[#0D0D0D] border border-gray-800 px-4 py-2 rounded-full text-xs font-medium text-gray-400 hover:border-gray-600 transition-all">
                {filter} <ChevronDown size={14} />
              </button>
            ))}
          </div>

          <button className="flex items-center gap-1 bg-[#f97316] hover:bg-orange-600 text-white px-3 py-1.5 rounded-lg font-medium shadow-lg shadow-orange-500/10 active:scale-95 transition-all">
            <Plus size={18} />
            <span className="truncate">Upload Notes</span>
          </button>
        </div>
      </div>

      <div className="w-full rounded-2xl border border-gray-800/50 bg-[#111]/30 shadow-2xl overflow-hidden">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-[#1f1a18] text-gray-300 text-[13px] font-medium border-b border-gray-800">
                <th className="px-6 py-5 whitespace-nowrap">Title</th>
                <th className="px-6 py-5 whitespace-nowrap">File Type</th>
                <th className="px-6 py-5 whitespace-nowrap">Subject</th>
                <th className="px-6 py-5 whitespace-nowrap">Views / Downloads</th>
                <th className="px-6 py-5 whitespace-nowrap">Status</th>
                <th className="px-6 py-5 whitespace-nowrap">Uploaded On</th>
                <th className="px-6 py-5 text-center whitespace-nowrap">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/40">
              {notes.map((note) => (
                <tr key={note.id} className="hover:bg-white/[0.03] transition-colors group text-sm">
                  <td className="px-6 py-4 text-gray-200 font-medium whitespace-nowrap">
                    {note.title}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold border whitespace-nowrap ${note.typeColor}`}>
                      {note.fileType}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-400 whitespace-nowrap">{note.subject}</td>
                  <td className="px-6 py-4 text-gray-400 text-xs whitespace-nowrap">{note.downloads}</td>

                  {/* 4. Status Toggle Switch Functional */}
                  <td className="px-6 py-4">
                    <div
                      onClick={() => handleToggleStatus(note.id)}
                      className={`w-10 h-5 rounded-full p-1 cursor-pointer transition-all duration-300 flex items-center ${note.status ? 'bg-[#f97316]' : 'bg-[#2a2a2a]'
                        }`}
                    >
                      <div className={`w-3.5 h-3.5 bg-white rounded-full transition-transform duration-300 shadow-sm ${note.status ? 'translate-x-[1.125rem]' : 'translate-x-0'
                        }`} />
                    </div>
                  </td>

                  <td className="px-6 py-4 text-gray-500 font-light whitespace-nowrap">{note.date}</td>

                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 rounded-lg bg-white/5 text-gray-500 hover:text-white transition-all hover:bg-orange-500/10">
                        <Edit2 size={14} />
                      </button>
                         <button 
                        onClick={() => handleDeleteClick(note)}
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

      {/* 5. Delete Modal Component Call */}
      <DeleteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmDelete}
        title={selectedNote ? selectedNote.title : "these notes"}
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

export default ClassNotes;