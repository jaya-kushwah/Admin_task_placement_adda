import React, { useState } from 'react';
import { Upload, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const AddCourse = () => {
  const navigate = useNavigate();
  const [courseStatus, setCourseStatus] = useState(true);

  return (
    <div className="w-full space-y-8 pb-10 px-2 transition-colors duration-300">
      <div className="flex items-center gap-2 text-sm text-white mb-4">
        <span>Academics</span>
        <span className="text-white text-sm">»</span>
        <Link
          to="/academics"
          className="text-white transition-colors cursor-pointer">
          Courses
        </Link>
        <span className="text-white text-sm">»</span>
        <span className="text-white font-medium">Add Course</span>
      </div>

      <h1 className="text-2xl font-bold mb-8">Add Course</h1>

      <div className="max-w-4xl space-y-8">
        <div className="w-64">
          <div className="border-2 border-dashed border-gray-800 rounded-2xl p-8 flex flex-col items-center justify-center bg-[#111] hover:border-orange-500/50 transition-colors cursor-pointer group">
            <button className="flex items-center gap-2 bg-[#222] border border-orange-500/30 text-[#F37021] px-4 py-1.5 rounded-full text-xs font-semibold mb-4 group-hover:bg-[#F37021] group-hover:text-white transition-all">
              Upload File <Upload size={14} />
            </button>
            <p className="text-sm font-bold text-gray-300 mb-1">Upload Course Logo</p>
            <p className="text-[10px] text-gray-500">Supported formats: JPG, PNG</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-400">Course Name</label>
            <input
              type="text"
              placeholder="Full Stack Development"
              className="bg-transparent border border-gray-800 rounded-xl px-4 py-3 outline-none hover:border-orange-500 transition-all text-gray-200"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-400">Course Description</label>
            <input
              type="text"
              placeholder="Brief overview of the course"
              className="bg-transparent border border-gray-800 rounded-xl px-4 py-3 outline-none hover:border-orange-500 transition-all text-gray-200"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-400">Duration</label>
            <input
              type="text"
              placeholder="6 Months"
              className="bg-transparent border border-gray-800 rounded-xl px-4 py-3 outline-none hover:border-orange-500 transition-all text-gray-200"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-sm font-medium text-gray-400">Status</label>
            <div
              onClick={() => setCourseStatus(!courseStatus)}
              className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-all flex items-center ${courseStatus ? 'bg-[#F37021]' : 'bg-gray-800'}`}
            >
              <div className={`w-4 h-4 bg-white rounded-full transition-transform duration-300 shadow-md ${courseStatus ? 'translate-x-6' : 'translate-x-0'}`} />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 pt-4">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 rounded-xl bg-[#222] text-gray-300 border border-gray-600 font-medium transition-all"
          >
            Cancel
          </button>
          <button className="px-4 py-2 rounded-lg bg-[#F37021] text-white font-medium shadow-lg shadow-orange-500/20 transition-all active:scale-95">
            Save Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;