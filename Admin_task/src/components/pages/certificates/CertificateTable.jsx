import React, { useState } from 'react';
import { Search, ChevronDown, Eye, Filter } from 'lucide-react';
import { PNG } from "../../../utils/Images";

const CertificateTable = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const certificateData = [
    { id: 1, name: "Rahul Sharma", course: "Full Stack Developer", date: "12 Aug 2025", status: "Active" },
    { id: 2, name: "Rahul Sharma", course: "Full Stack Developer", date: "12 Mar 2025", status: "Revoked" },
    { id: 3, name: "Rahul Sharma", course: "Full Stack Developer", date: "12 Mar 2025", status: "Active" },
    { id: 4, name: "Rahul Sharma", course: "Full Stack Developer", date: "12 Mar 2025", status: "Revoked" },
    { id: 5, name: "Rahul Sharma", course: "Full Stack Developer", date: "12 Mar 2025", status: "Active" },
    { id: 6, name: "Rahul Sharma", course: "Full Stack Developer", date: "12 Mar 2025", status: "Revoked" },
  ];

  return (
    <div >
      <div className="rounded-xl border border-white/5 bg-[#0D0D0D] overflow-hidden">
        <div className="overflow-x-auto overflow-y-hidden">
          <table className="w-full text-left border-collapse min-w-full">
            <thead>
              <tr className="bg-[#1f1a18] text-gray-300 text-[13px] font-medium border-b border-gray-800">
                <th className="px-4 md:px-6 py-4">Student</th>
                <th className="hidden lg:table-cell px-6 py-4">Course</th>
                <th className="hidden md:table-cell px-6 py-4">Issued On</th>
                <th className="px-4 md:px-6 py-4">Status</th>
                <th className="px-4 md:px-6 py-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.03]">
              {certificateData.map((row) => (
                <tr key={row.id} className="hover:bg-white/[0.01] transition-colors">
                  {/* Student Name */}
                  <td className="px-4 md:px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full flex-shrink-0 overflow-hidden border border-white/10 bg-gray-800">
                        <img
                          src={PNG.student}
                          alt="avatar"
                          className="w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-200 truncate max-w-[100px] md:max-w-none">{row.name}</span>
                        {/* Mobile par course dikhane ke liye niche small text */}
                        <span className="lg:hidden text-[10px] text-gray-500">{row.course}</span>
                      </div>
                    </div>
                  </td>

                  {/* Desktop Only Columns */}
                  <td className="hidden lg:table-cell px-6 py-4 text-[13px] text-gray-400">{row.course}</td>
                  <td className="hidden md:table-cell px-6 py-4 text-[13px] text-gray-400">{row.date}</td>

                  {/* Status */}
                  <td className="px-4 md:px-6 py-4">
                    <span className={`px-2 md:px-4 py-1 rounded-full text-[9px] md:text-[10px] font-bold uppercase border ${row.status === 'Active'
                      ? 'text-green-500 bg-green-500/10 border-green-500/20'
                      : 'text-red-400 bg-red-400/10 border-red-400/20'
                      }`}>
                      {row.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-4 md:px-6 py-4">
                    <div className="flex items-center justify-center gap-3 md:gap-4">
                      <button className="text-gray-500 hover:text-white shrink-0">
                        <Eye size={16} />
                      </button>
                      <button className={`text-[10px] md:text-[12px] font-bold underline whitespace-nowrap ${row.status === 'Active' ? 'text-red-500' : 'text-orange-500'
                        }`}>
                        {row.status === 'Active' ? 'Revoke' : 'Reissue'}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CertificateTable 