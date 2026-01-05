import React, { useState } from 'react';
import { ChevronDown, Link as LinkIcon } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const AddStudyMaterial = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: 'HTML Basics Study Material',
    course: 'Full Stack Development',
    content: ''
  });

  return (
    <div className="w-full text-gray-300 font-sans min-h-screen pb-10">

      <h1 className="text-xl font-bold text-white mb-4">Add Study Material</h1>

      {/* 2. Main Content Grid - Split Layout (Image_9d7337 matching) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        
        {/* Left Side: Form Inputs */}
        <div className="space-y-6">
          {/* Title Select */}
          <div className="space-y-2">
            <label className="text-[13px] font-medium text-[#d1d3d4]">Title</label>
            <div className="relative">
              <select 
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="w-full bg-[#0D0D0D] border border-gray-800 rounded-lg p-3 text-sm text-white outline-none appearance-none cursor-pointer hover:border-gray-600 focus:border-orange-500 transition-all"
              >
                <option>Select Title</option>
                <option>React Advanced Patterns</option>
                <option>Node.js API Design</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={18} />
            </div>
          </div>

          {/* Subject/Course Select */}
          <div className="space-y-2">
            <label className="text-[13px] font-medium text-[#d1d3d4]">Subject Select</label>
            <div className="relative">
              <select 
                value={formData.course}
                onChange={(e) => setFormData({...formData, course: e.target.value})}
                className="w-full bg-[#0D0D0D] border border-gray-800 rounded-lg p-3 text-sm text-white outline-none appearance-none cursor-pointer hover:border-gray-600 focus:border-orange-500 transition-all"
              >
                <option>Select Subject</option>
                <option>Full Stack Development</option>
                <option>UI/UX Design</option>
                <option>Data Science</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={18} />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              onClick={() => navigate(-1)}
              className="px-8 py-2.5 bg-[#1A1A1A] text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-all border border-white/5"
            >
              Cancel
            </button>
            <button
              className="px-10 py-2.5 bg-[#F37021] text-white rounded-lg text-sm font-bold hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/20"
            >
              Save
            </button>
          </div>
        </div>

        {/* Right Side: Content Area / Preview Area (Image_9d7337 matching) */}
        <div className="bg-[#0D0D0D] border border-gray-800 rounded-xl p-6">
          <div className="flex justify-between items-center mb-6 border-b border-gray-800 pb-4">
             <h2 className="text-gray-400 text-sm font-medium">Write Study Material Content Here</h2>
             <LinkIcon size={16} className="text-gray-500" />
          </div>
          
          <div className="prose prose-invert max-w-none text-gray-400 text-sm leading-relaxed space-y-6">
            <h3 className="text-white text-lg font-semibold">Object-Oriented Programming Concepts</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>All HTML elements can have attributes.</li>
              <li>Attributes provide additional information about elements.</li>
              <li>Attributes are always specified in the start tag.</li>
            </ul>

            <h3 className="text-white text-md font-semibold mt-4">The href Attribute</h3>
            <p>The &lt;a&gt; tag defines a hyperlink. The href attribute specifies the URL of the page the link goes to.</p>

            <h3 className="text-white text-md font-semibold mt-4">The src Attribute</h3>
            <p>Absolute URL - Links to an external image that is hosted on another website. Example: src="https://www.w3schools.com/images/img_girl.jpg".</p>
            
            <p className="text-orange-400/80 italic text-[12px]">
              Notes: External images might be under copyright. If you do not get permission to use it, you may be in violation of copyright laws.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AddStudyMaterial;