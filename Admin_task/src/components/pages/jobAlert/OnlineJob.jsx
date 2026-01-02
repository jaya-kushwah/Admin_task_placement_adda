import React, { useState } from 'react';
import { Search, Plus, Eye, Trash2, Edit2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PNG } from "../../../utils/Images";
import DeleteModal from "../../reusable/DeleteModel"

const OnlineJob = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);

    const [jobs, setJobs] = useState([
        { id: "01", title: "Full Stack Developer", company: "Infosys", location: "Indore", salary: "₹3–5 LPA", date: "12 Mar 2025", status: true, logo: PNG.infosys },
        { id: "02", title: "Full Stack Developer", company: "TCS", location: "Remote", salary: "Not Disclosed", date: "12 Mar 2025", status: false, logo: PNG.tcs },
        { id: "03", title: "Full Stack Developer", company: "StartupX", location: "Remote", salary: "₹15k/month", date: "12 Mar 2025", status: true, logo: "https://api.dicebear.com/7.x/initials/svg?seed=SX" },
        { id: "04", title: "Full Stack Developer", company: "Infosys", location: "Remote", salary: "₹3–5 LPA", date: "12 Mar 2025", status: true, logo: PNG.infosys  },
        { id: "05", title: "Full Stack Developer", company: "TCS", location: "Indore", salary: "Not Disclosed", date: "12 Mar 2025", status: true, logo: PNG.tcs },
        { id: "06", title: "Full Stack Developer", company: "StartupX", location: "Indore", salary: "₹15k/month", date: "12 Mar 2025", status: false, logo: "https://api.dicebear.com/7.x/initials/svg?seed=SX" },
    ]);

    const handleToggleStatus = (id) => {
        setJobs(prevJobs =>
            prevJobs.map(job =>
                job.id === id ? { ...job, status: !job.status } : job
            )
        );
    };

    // 2. Delete button click handler
    const handleDeleteClick = (job) => {
        setSelectedJob(job);
        setIsModalOpen(true);
    };

    // 3. Confirm delete function
    const handleConfirmDelete = () => {
        setJobs(prevJobs => prevJobs.filter(job => job.id !== selectedJob.id));
        setIsModalOpen(false);
        setSelectedJob(null);
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
                <h2 className="text-xl md:text-2xl font-bold dark:text-white tracking-tight">
                    Online Jobs List
                </h2>

                <div className="flex flex-wrap items-center gap-3">
                    <div className="relative group flex-1 md:flex-none">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 dark:text-gray-500 group-focus-within:text-orange-500 transition-colors" size={16} />
                        <input
                            type="text"
                            placeholder="Search"
                            className="dark:bg-[#121212] border border-gray-800 text-gray-300 rounded-full py-1.5 pl-10 pr-4 outline-none focus:border-gray-600 w-full sm:w-48 text-sm placeholder:text-gray-600"
                        />
                    </div>

                    <Link to={'/addJob'}>
                        <button className="flex items-center gap-2 bg-[#f97316] hover:bg-orange-600 text-white px-5 py-2 rounded-lg font-bold transition-all text-sm shadow-lg shadow-orange-500/20 active:scale-95">
                            <Plus size={18} />
                            <span className="whitespace-nowrap">Add Job</span>
                        </button>
                    </Link>
                </div>
            </div>

            {/* Table Section */}
            <div className="rounded-2xl border border-gray-800/50 bg-[#111]/30 shadow-2xl overflow-hidden">
                <div className="overflow-x-auto custom-scrollbar">
                    <table className="w-full text-left border-collapse min-w-[900px]">
                        <thead>
                            <tr className="bg-[#1f1a18] text-gray-300 text-[13px] font-medium border-b border-gray-800 whitespace-nowrap">
                                <th className="px-6 py-4">No.</th>
                                <th className="px-6 py-4">Job Title</th>
                                <th className="px-6 py-4">Company</th>
                                <th className="px-6 py-4">Location</th>
                                <th className="px-6 py-4">Salary</th>
                                <th className="px-6 py-4">Posted On</th>
                                <th className="px-6 py-4 text-center">Status</th>
                                <th className="px-6 py-4 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/[0.03]">
                            {jobs.map((job) => (
                                <tr key={job.id} className="hover:bg-white/[0.01] transition-colors group whitespace-nowrap">
                                    <td className="px-6 py-4 text-sm font-mono text-gray-500">{job.id}</td>
                                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">{job.title}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <img src={job.logo} className="w-7 h-7 rounded bg-white p-0.5 object-contain" alt="logo" />
                                            <span className="text-sm text-gray-200">{job.company}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-400">{job.location}</td>
                                    <td className="px-6 py-4 text-sm text-gray-300">{job.salary}</td>
                                    <td className="px-6 py-4 text-sm text-gray-400">{job.date}</td>
                                    
                                    <td className="px-6 py-4">
                                        <div 
                                            onClick={() => handleToggleStatus(job.id)}
                                            className={`w-10 h-5 mx-auto rounded-full p-1 cursor-pointer transition-all duration-300 flex items-center ${
                                                job.status ? 'bg-orange-600' : 'bg-gray-700'
                                            }`}
                                        >
                                            <div className={`w-3 h-3 bg-white rounded-full transition-transform duration-300 ${
                                                job.status ? 'translate-x-5' : 'translate-x-0'
                                            }`} />
                                        </div>
                                    </td>

                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2 justify-center">
                                            <button className="p-2 rounded-lg bg-white/5 text-gray-500 hover:text-white hover:bg-white/10 transition-all border border-gray-800/50">
                                                <Eye size={16} />
                                            </button>
                                            <button className="p-2 rounded-lg bg-white/5 text-gray-500 hover:text-white hover:bg-white/10 transition-all border border-gray-800/50">
                                                <Edit2 size={14} />
                                            </button>
                                            {/* 4. Trash button with click handler */}
                                            <button 
                                                onClick={() => handleDeleteClick(job)}
                                                className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-all border border-red-500/20"
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
                title={selectedJob ? `${selectedJob.title} at ${selectedJob.company}` : "this job posting"}
            />

            <style>{`
                .custom-scrollbar::-webkit-scrollbar { height: 6px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: #0d0d0d; border-radius: 10px; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #333; border-radius: 10px; }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #f97316; }
            `}</style>
        </motion.div>
    );
};

export default OnlineJob;