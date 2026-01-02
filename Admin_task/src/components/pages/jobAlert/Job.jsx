import React, { useState } from 'react';
import OnlineJobsTable from './OnlineJob';
import DraftJob from './DraftJob';

const Job = () => {
    const [activeTab, setActiveTab] = useState('online');

    return (
        <div className="w-full text-gray-300 font-sans bg-[#050505] min-h-screen">


            <div className="flex items-center gap-2 text-sm mb-4">
                <span className="text-white">Job Alerts</span>
                <span className="text-white text-lg">»</span>
                <span className="text-white font-medium capitalize">
                    {activeTab === 'online' ? 'Online Jobs' : 'Draft Jobs'}
                </span>
            </div>

            {/* 2. Tabs Navigation */}
            <div className="flex gap-2 mb-8 bg-[#111] w-fit p-0.5 rounded-xl border border-white/5">
                <button
                    onClick={() => setActiveTab('online')}
                    className={`px-4 py-2 rounded-lg text-[13px] transition-all ${activeTab === 'online' ? "bg-[#2A2A2A] text-white shadow-sm" : "text-gray-500 hover:text-white"
                        }`}
                >
                    Online Jobs
                </button>
                <button
                    onClick={() => setActiveTab('draft')}
                    className={`px-4 py-2 rounded-lg text-[13px] transition-all ${activeTab === 'draft' ? "bg-[#2A2A2A] text-white shadow-sm" : "text-gray-500 hover:text-white"
                        }`}
                >
                    Draft Jobs
                </button>
            </div>

            {activeTab === 'online' ? (
                <OnlineJobsTable />
            ) : (
               <DraftJob></DraftJob>
            )}
        </div>
    );
};

export default Job;