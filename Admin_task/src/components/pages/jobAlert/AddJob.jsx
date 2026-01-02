import React, { useState } from 'react';
import { Upload, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AddJob = () => {
    const navigate = useNavigate();
    const [notDisclosed, setNotDisclosed] = useState(true);

    return (
        <div className="w-full text-gray-300 font-sans min-h-screen">

            {/* 1. Breadcrumbs - Image Matching Hierarchy */}
            <div className="flex items-center gap-2 text-sm mb-4">
                <span className="text-white">Job Alerts</span>
                <span className="text-white text-lg">»</span>
                <span className="cursor-pointer hover:text-white" onClick={() => navigate('/Jobs')}>Draft Jobs</span>
                <span className="text-white">»</span>
                <span className="text-white font-medium">Add New Job</span>
            </div>

            <h1 className="text-xl font-bold text-white mb-8">Add New Job</h1>

            <div className="max-w-4xl space-y-8">

                {/* 2. Upload Section - Image 543ba6 Matching */}
                <div className="w-52 h-36 border-2 border-dashed border-gray-800 rounded-xl flex flex-col items-center justify-center gap-2 bg-[#0D0D0D] hover:border-orange-500 transition-colors cursor-pointer group">
                    <div className="bg-[#2A2A2A] p-2 rounded-lg text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                        <Upload size={20} />
                    </div>
                    <p className="text-sm font-medium">Upload Company Logo</p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest">Supported formats: JPG, PNG</p>
                </div>

                {/* 3. Form Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">

                    {/* Company Name - Active state with Orange border */}
                    <div className="space-y-2">
                        <label className="text-[13px] font-medium text-gray-400">Company Name</label>
                        <input
                            type="text"
                            defaultValue="Abhi"
                            className="w-full bg-[#0D0D0D] border border-orange-600 rounded-lg p-3 text-sm text-white outline-none"
                        />
                    </div>

                    {/* Job Title Select */}
                    <div className="space-y-2">
                        <label className="text-[13px] font-medium text-gray-400">Job Title</label>
                        <div className="relative">
                            <select className="w-full bg-[#0D0D0D] border border-gray-800 rounded-lg p-3 text-sm text-white outline-none appearance-none cursor-pointer hover:border-gray-600">
                                <option>Full Stack Developer</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={18} />
                        </div>
                    </div>

                    {/* Location */}
                    <div className="space-y-2">
                        <label className="text-[13px] font-medium text-gray-400">Location</label>
                        <input
                            type="text"
                            placeholder="Indore"
                            className="w-full bg-[#0D0D0D] border border-gray-800 rounded-lg p-3 text-sm text-white outline-none hover:border-gray-600"
                        />
                    </div>

                    {/* Job Type Select */}
                    <div className="space-y-2">
                        <label className="text-[13px] font-medium text-gray-400">Job Type</label>
                        <div className="relative">
                            <select className="w-full bg-[#0D0D0D] border border-gray-800 rounded-lg p-3 text-sm text-white outline-none appearance-none cursor-pointer hover:border-gray-600">
                                <option>Full-time</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={18} />
                        </div>
                    </div>

                    {/* Experience Level Select */}
                    <div className="space-y-2">
                        <label className="text-[13px] font-medium text-gray-400">Experience Level</label>
                        <div className="relative">
                            <select className="w-full bg-[#0D0D0D] border border-gray-800 rounded-lg p-3 text-sm text-white outline-none appearance-none cursor-pointer hover:border-gray-600">
                                <option>Fresher</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={18} />
                        </div>
                    </div>

                    {/* Salary Range with Toggle (Image Matching) */}
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <label className="text-[13px] font-medium text-gray-400">Salary Range</label>
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] text-gray-500">Not Disclosed</span>
                                <div
                                    onClick={() => setNotDisclosed(!notDisclosed)}
                                    className={`w-8 h-4 rounded-full relative cursor-pointer transition-all ${notDisclosed ? 'bg-orange-600' : 'bg-gray-700'}`}
                                >
                                    <div className={`absolute top-0.5 w-3 h-3 bg-white rounded-full transition-all ${notDisclosed ? 'right-0.5' : 'left-0.5'}`} />
                                </div>
                            </div>
                        </div>
                        <input
                            type="text"
                            placeholder="Full-time"
                            className="w-full bg-[#0D0D0D] border border-gray-800 rounded-lg p-3 text-sm text-white outline-none hover:border-gray-600"
                        />
                    </div>


                    <div className="space-y-2">
                        <label className="text-[13px] font-medium text-gray-400">Job Apply Link</label>
                        <input
                            type="text"
                            placeholder="google.com/search?q=wes+evaluation+logo"
                            className="w-full bg-[#0D0D0D] border border-gray-800 rounded-lg p-3 text-sm text-white outline-none hover:border-gray-600"
                        />
                    </div>
                </div>

                {/* 4. Action Buttons */}
                <div className="flex gap-4 ">
                    <button
                        onClick={() => navigate(-1)}
                        className="px-8 py-2.5 bg-[#1A1A1A] text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-all border border-white/5"
                    >
                        Cancel
                    </button>
                    <button
                        className="px-8 py-2.5 bg-[#1A1A1A] text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-all border border-white/5"
                    >
                        Save as Draft
                    </button>
                    <button
                        className="px-8 py-2.5 bg-[#F37021] text-white rounded-lg text-sm font-bold hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/20"
                    >
                        Publish Job
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddJob;