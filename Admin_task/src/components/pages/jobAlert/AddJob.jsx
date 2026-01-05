import React, { useState } from 'react';
import { Upload, ChevronDown } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const AddJob = () => {
    const navigate = useNavigate();
    const location = useLocation(); // URL track karne ke liye
    const [notDisclosed, setNotDisclosed] = useState(true);

    // 1. Logic: Check karna ki user Online se aaya hai ya Draft se
    // Hum check kar rahe hain ki kya URL mein 'draft' word hai
    const isDraft = location.pathname.toLowerCase().includes('draft');
    
    // Breadcrumb aur Navigation ke liye values set karein
    const parentLabel = isDraft ? "Draft Jobs" : "Online Jobs";
    const parentRoute = "/jobs"; // Aapka main jobs page jahan tabs hain

    return (
        <div className="w-full text-gray-300 font-sans min-h-screen">

            {/* 1. Dynamic Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm mb-4">
                <Link to="/jobs" className="text-gray-400 hover:text-white transition-colors">
                    Job Alerts
                </Link>
                <span className="text-gray-600 text-xs">»</span>
                
                {/* User jis section se aaya hai uska label aur link */}
                <Link 
                    to={parentRoute} 
                    className="text-gray-400 hover:text-white transition-colors capitalize"
                >
                    {parentLabel}
                </Link>
                
                <span className="text-gray-600 text-xs">»</span>
                <span className="text-white font-medium">Add New Job</span>
            </div>

            <h1 className="text-xl font-bold text-white mb-8">Add New Job</h1>

            <div className="max-w-4xl space-y-8">

                {/* 2. Upload Section */}
                <div className="w-52 h-36 border-2 border-dashed border-gray-800 rounded-xl flex flex-col items-center justify-center gap-2 bg-[#0D0D0D] hover:border-orange-500 transition-colors cursor-pointer group">
                     <button className="flex items-center gap-2 bg-[#222] border border-orange-500/30 text-[#F37021] px-4 py-1.5 rounded-full text-xs font-medium mb-4 group-hover:bg-[#F37021] group-hover:text-white transition-all">
                                  Upload File <Upload size={14} />
                                </button>
                    <p className="text-sm font-medium">Upload Company Logo</p>
                    <p className="text-[10px] text-[#7a7b7d] tracking-widest">Supported formats: JPG, PNG</p>
                </div>

                {/* 3. Form Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div className="space-y-2">
                        <label className="text-[13px] font-medium text-[#d1d3d4]">Company Name</label>
                        <input
                            type="text"
                            placeholder="Enter company name"
                            className="w-full bg-[#0D0D0D] border border-gray-800 focus:border-orange-600 rounded-lg p-3 text-sm text-white outline-none transition-all"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[13px] font-medium text-[#d1d3d4]">Job Title</label>
                        <div 
                        className="relative"
                        >
                            <select className="w-full bg-[#0D0D0D] border border-gray-800 rounded-lg p-3 text-sm text-white outline-none appearance-none cursor-pointer hover:border-gray-600">
                                <option>Select Job Title</option>
                                <option>UI/UX Designer</option>
                                <option>Frontend Developer</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={18} />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[13px] font-medium text-[#d1d3d4]">Location</label>
                        <input
                            type="text"
                            placeholder="e.g. Indore, Remote"
                            className="w-full bg-[#0D0D0D] border border-gray-800 rounded-lg p-3 text-sm text-white outline-none hover:border-gray-600"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[13px] font-medium text-[#d1d3d4]">Job Type</label>
                        <div className="relative">
                            <select className="w-full bg-[#0D0D0D] border border-gray-800 rounded-lg p-3 text-sm text-white outline-none appearance-none cursor-pointer hover:border-gray-600">
                                <option>Select Job Type</option>
                                <option>Part-time</option>
                                <option>Contract</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={18} />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[13px] font-medium text-[#d1d3d4]">Experience Level</label>
                        <div className="relative">
                            <select className="w-full bg-[#0D0D0D] border border-gray-800 rounded-lg p-3 text-sm text-white outline-none appearance-none cursor-pointer hover:border-gray-600">
                                <option>Fresher</option>
                                <option>1-3 Years</option>
                                <option>5+ Years</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={18} />
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <label className="text-[13px] font-medium text-[#d1d3d4]">Salary Range</label>
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
                            disabled={notDisclosed}
                            placeholder={notDisclosed ? "Not Disclosed" : "e.g. 5 LPA - 8 LPA"}
                            className="w-full bg-[#0D0D0D] border border-gray-800 rounded-lg p-3 text-sm text-white outline-none hover:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                        <label className="text-[13px] font-medium text-[#d1d3d4]">Job Apply Link</label>
                        <input
                            type="text"
                            placeholder="https://company.com/careers/job-id"
                            className="w-full bg-[#0D0D0D] border border-gray-800 rounded-lg p-3 text-sm text-white outline-none hover:border-gray-600"
                        />
                    </div>
                </div>

                {/* 4. Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                    <button
                        type="button"
                        onClick={() => navigate(parentRoute)} // Wapas usi tab wale page par
                        className="px-8 py-2.5 bg-[#1A1A1A] text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-all border border-white/5"
                    >
                        Cancel
                    </button>
                    
                    {/* Draft button sirf tab dikhayein agar user draft flow se na ho ya logic ke according */}
                    <button
                        type="button"
                        className="px-8 py-2.5 bg-[#1A1A1A] text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-all border border-white/5"
                    >
                        Save as Draft
                    </button>

                    <button
                        type="submit"
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