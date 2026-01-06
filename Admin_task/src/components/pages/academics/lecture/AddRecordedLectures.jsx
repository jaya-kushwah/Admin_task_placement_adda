import React from 'react';
import { Upload, ChevronDown } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const AddRecorededLectures = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full text-gray-300 font-sans min-h-screen pb-10">

      <h1 className="text-xl font-bold text-white mb-8">Add Study Material</h1>

      <div className="max-w-6xl space-y-8">
        
        {/* 2. Upload Sections Grid */}
        <div className="flex flex-wrap gap-6">
          {/* Upload Thumbnail */}
          <div className="w-64 h-40 border-2 border-dashed border-gray-800 rounded-xl flex flex-col items-center justify-center gap-2 bg-[#0D0D0D] hover:border-orange-500 transition-colors cursor-pointer group">
            <div className="bg-[#2A2A2A] p-2 rounded-lg text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
              <Upload size={20} />
            </div>
            <p className="text-sm font-medium">Upload Thumbnail</p>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest">Supported formats: JPG, PNG</p>
          </div>

          {/* Upload Lecture Video */}
          <div className="w-64 h-40 border-2 border-dashed border-gray-800 rounded-xl flex flex-col items-center justify-center gap-2 bg-[#0D0D0D] hover:border-orange-500 transition-colors cursor-pointer group">
            <div className="bg-[#2A2A2A] p-2 rounded-lg text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
              <Upload size={20} />
            </div>
            <p className="text-sm font-medium">Upload Lecture Video</p>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest">Supported Formats: MP4, MOV, MKV</p>
          </div>
        </div>

        {/* 3. Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          
          {/* Title Input */}
          <div className="space-y-2">
            <label className="text-[13px] font-medium text-gray-400">Title</label>
            <input
              type="text"
              placeholder="Java Programming"
              className="w-full bg-[#0D0D0D] border-gray-800 border hover:border-orange-600 rounded-lg p-3 text-sm text-white outline-none focus:ring-1 focus:ring-orange-600 transition-all"
            />
          </div>

          {/* Course Name Select */}
          <div className="space-y-2">
            <label className="text-[13px] font-medium text-gray-400">Course Name</label>
            <div className="relative">
              <select className="w-full bg-[#0D0D0D] border border-gray-800 hover:border-orange-500 rounded-lg p-3 text-sm text-white outline-none appearance-none cursor-pointer hover:border-gray-600">
                <option>Full Stack Development</option>
                <option>Data Science</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={18} />
            </div>
          </div>

          {/* Subject Select */}
          <div className="space-y-2">
            <label className="text-[13px] font-medium text-gray-400">Subject Select</label>
            <div className="relative">
              <select className="w-full bg-[#0D0D0D] border border-gray-800 rounded-lg p-3 hover:border-orange-500 text-sm text-white outline-none appearance-none cursor-pointer hover:border-gray-600">
                <option>Core Java</option>
                <option>Advanced Java</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={18} />
            </div>
          </div>

          {/* Day / Session Number */}
          <div className="space-y-2">
            <label className="text-[13px] font-medium text-gray-400">Day / Session Number</label>
            <input
              type="text"
              placeholder="Day 1"
              className="w-full bg-[#0D0D0D] border border-gray-800 rounded-lg p-3 text-sm hover:border-orange-500 text-white outline-none hover:border-gray-600"
            />
          </div>

          {/* Lecture Description (Full Width) */}
          <div className="md:col-span-2 space-y-2">
            <label className="text-[13px] font-medium text-gray-400">Lecture Description</label>
            <textarea
              placeholder="Description"
              rows={6}
              className="w-full bg-[#0D0D0D] border border-gray-800 rounded-lg p-4 text-sm hover:border-orange-500 text-white outline-none hover:border-gray-600 focus:border-gray-500 resize-none transition-all"
            />
          </div>
        </div>

        {/* 4. Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => navigate(-1)}
            className="px-8 py-2.5 bg-[#1A1A1A] text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-all border border-white/5"
          >
            Cancel
          </button>
          <button
            className="px-8 py-2.5 bg-[#F37021] text-white rounded-lg text-sm font-bold hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/20"
          >
            Publish Lecture
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddRecorededLectures;