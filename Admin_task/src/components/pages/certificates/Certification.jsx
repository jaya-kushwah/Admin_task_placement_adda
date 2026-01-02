import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import CertificateTable from './CertificateTable';
import CertificateReq from './CertificateReq';
import CertificateTemplate from './CertificateTemplate';
import { Link } from 'react-router-dom';

const Certificates = () => {
  // Tab State
  const [activeTab, setActiveTab] = useState("Certificate");

  const tabs = [
    "Certificate", "Certificate Request", "Certificate Template"
  ];

  const renderComponent = () => {
    switch (activeTab) {
      case "Certificate":
        return <CertificateTable></CertificateTable>;
      case "Certificate Request":
        return <CertificateReq> </CertificateReq>;
      case "Certificate Template":
        return <CertificateTemplate></CertificateTemplate>;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-gray-800 rounded-3xl bg-[#0d0d0d]">
            <p className="text-gray-500 font-medium text-center px-4">
              Content for {activeTab} is under development.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="w-full pb-10">

      <div className="flex items-center gap-2 text-sm mb-4">
        <span className="text-white">Certificates</span>
        <span className="text-white text-lg">»</span>
        <span className="text-white font-medium">{activeTab}</span>
      </div>

      <div className="w-full overflow-x-auto no-scrollbar mb-8">
        <div className="flex items-center bg-[#1A1A1A] p-1 rounded-xl border border-white/5 w-max md:w-fit shadow-2xl">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${activeTab === tab
                ? 'bg-[#4A4A4A] text-white shadow-inner'
                : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 rounded-2xl ">

        <h2 className="text-xl md:text-2xl font-bold tracking-tight whitespace-nowrap">
          {activeTab} List
        </h2>
        <div className="flex flex-row items-center gap-2 md:gap-3 flex-wrap md:flex-nowrap">
          <div className="relative group hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-orange-500 transition-colors" size={16} />
            <input
              type="text"
              placeholder="Search"
              className="bg-[#111] border border-gray-800 text-gray-300 rounded-full py-1.5 pl-10 pr-4 outline-none focus:border-gray-600 w-40 text-sm"
            />
          </div>
          <div className="flex flex-row items-center">
            {["All Courses", "Active", "Date"].map((filter) => (
              <button key={filter} className="flex items-center bg-[#0D0D0D] border border-gray-800 px-4 py-2 rounded-full text-[11px] text-gray-400 hover:border-gray-600 transition-all whitespace-nowrap me-2">
                {filter} <ChevronDown size={14} />
              </button>
            ))}
          </div>
        </div>
      </div>


      <div className="mt-6 animate-in fade-in duration-500">
        {renderComponent()}
      </div>
    </div>
    // </div>
  );
};

export default Certificates;