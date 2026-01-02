import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const AddStudent = () => {
  const navigate = useNavigate();
  
  // State management for form inputs
  const [formData, setFormData] = useState();

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      
      {/* --- Clickable Breadcrumbs --- */}
      <div className="flex items-center gap-2 text-sm mb-6">
        <Link 
          to="/student" 
          className="text-white hover:text-white transition-colors cursor-pointer"
        >
          Students
        </Link>
        <span className="text-white text-lg">»</span>
        <span className="text-white font-medium">Add Student</span>
      </div>

      <h1 className="text-2xl font-bold text-white mb-5">Add Student</h1>

      <form className="space-y-4">
        {/* Row 1: Name & Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs text-gray-400 font-medium">Full Name</label>
            <input 
              name="fullName"
              placeholder='Enter yuor fullname'
              type="text" 
              onChange={handleChange}
              className="w-full bg-[#111] border border-gray-800 rounded-lg p-3 text-sm text-gray-200 outline-none hover:border-orange-500 transition-all shadow-inner"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs text-gray-400 font-medium">Mobile Number</label>
            <input 
              name="mobileNumber"
              placeholder='Enter your mobile number'
              type="text" 
              onChange={handleChange}
              className="w-full bg-[#111] border border-gray-800 rounded-lg p-3 text-sm text-gray-200 outline-none hover:border-orange-500 transition-all"
            />
          </div>
        </div>

        {/* Row 2: Email & WhatsApp */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs text-gray-400 font-medium">Email Address</label>
            <input 
              name="email"
              placeholder='enter your email'
              type="email" 
              onChange={handleChange}
              className="w-full bg-[#111] border border-gray-800 rounded-lg p-3 text-sm text-gray-200 outline-none hover:border-orange-500 transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs text-gray-400 font-medium">WhatsApp Number</label>
            <input 
              name="whatsappNumber"
              placeholder='Enter your whatsapp number'
              type="text" 
              onChange={handleChange}
              className="w-full bg-[#111] border border-gray-800 rounded-lg p-3 text-sm text-gray-200 outline-none hover:border-orange-500 transition-all"
            />
          </div>
        </div>

        {/* Row 3: Qualification & Course Dropdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs text-gray-400 font-medium">Qualification</label>
            <input 
              name="qualification"
              placeholder='Enter your quilification'
              type="text" 
              onChange={handleChange}
              className="w-full bg-[#111] border border-gray-800 rounded-lg p-3 text-sm text-gray-200 outline-none hover:border-orange-500 transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs text-gray-400 font-medium">Select Course</label>
            <div className="relative">
              <select 
                name="course"
                onChange={handleChange}
                className="w-full bg-[#111] border border-gray-800 rounded-lg p-3 text-sm text-gray-200 outline-none appearance-none hover:border-orange-500 transition-all cursor-pointer"
              >
                <option value="Full Stack Developer">Full Stack Developer</option>
                <option value="Data Science">Data Science</option>
                <option value="UI/UX Design">UI/UX Design</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={18} />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button 
            type="button"
            onClick={() => console.log("Saving Student Data:", formData)}
            className="bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-all active:scale-95 shadow-lg shadow-orange-600/20"
          >
            Save Details
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;