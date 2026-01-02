import React from 'react';
import { PNG } from "../../../utils/Images";

const CertificateReq = () => {
  const requests = Array(9).fill({
    name: "Rahul Sharma",
    course: "Full Stack Developer",
    completionDate: "12 Aug 2025",
    requestedOn: "12 Aug 2025",
    status: "Pending",
    avatar:PNG.student
  });

  return (
    <div className="w-full animate-in fade-in duration-500">
  
      <div className="rounded-2xl border border-gray-800/50 bg-[#111]/30 shadow-2xl overflow-hidden">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#1f1a18] text-gray-300 text-[13px] font-medium border-b border-gray-800">
                <th className="px-6 py-4 whitespace-nowrap">Student Name</th>
                <th className="px-6 py-4 whitespace-nowrap">Course</th>
                <th className="px-6 py-4 whitespace-nowrap">Completion Date</th>
                <th className="px-6 py-4 whitespace-nowrap">Requested On</th>
                <th className="px-6 py-4 whitespace-nowrap text-center">Status</th>
                <th className="px-6 py-4 whitespace-nowrap text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.03]">
              {requests.map((item, index) => (
                <tr key={index} className="hover:bg-white/[0.01] transition-colors group">
                  {/* Student Name with Image */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full overflow-hidden border border-orange-500/50 flex-shrink-0">
                        <img src={item.avatar} alt="user" className="w-full h-full object-cover" />
                      </div>
                      <span className="text-sm font-medium text-gray-200 whitespace-nowrap">{item.name}</span>
                    </div>
                  </td>

                  {/* Course */}
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-400 whitespace-nowrap">{item.course}</span>
                  </td>

                  {/* Completion Date */}
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-400 whitespace-nowrap">{item.completionDate}</span>
                  </td>

                  {/* Requested On */}
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-400 whitespace-nowrap">{item.requestedOn}</span>
                  </td>

                  {/* Status Badge */}
                  <td className="px-6 py-4 text-center">
                    <span className="px-4 py-1 rounded-full text-[10px] font-medium bg-orange-950/30 text-orange-500 border border-orange-500/20">
                      {item.status}
                    </span>
                  </td>

                  {/* Action Buttons */}
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="px-4 py-1.5 rounded-md border border-green-500/30 text-green-500 text-xs font-medium hover:bg-green-500 hover:text-white transition-all active:scale-95">
                        Approve
                      </button>
                      <button className="px-4 py-1.5 rounded-md border border-red-500/30 text-red-500 text-xs font-medium hover:bg-red-500 hover:text-white transition-all active:scale-95">
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
       <style>{`
        .custom-scrollbar::-webkit-scrollbar { height: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #0d0d0d; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #333; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #f97316; }
      `}</style>
    </div>
  );
};

export default CertificateReq;